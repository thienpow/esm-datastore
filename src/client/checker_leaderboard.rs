//use std::thread;

use std::{thread, time};
use std::time::{
    SystemTime, 
    UNIX_EPOCH
};
//use chrono::{NaiveDate, NaiveDateTime};

use tokio_postgres;
use bb8::{Pool};
use bb8_postgres::PostgresConnectionManager;
use esm_db::models::*;

mod config;


#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

    let config = config::get_configuration();
    
    let pg_mgr = PostgresConnectionManager::new_from_stringlike(config.db_conn_string, tokio_postgres::NoTls).unwrap();
    let pool: Pool<PostgresConnectionManager<tokio_postgres::NoTls>> = match Pool::builder().build(pg_mgr).await {
        Ok(pool) => pool,
        Err(e) => panic!("builder error: {:?}", e),
    };


    loop {
        
        let start = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_millis();


        //TODO: add a loop to current_game table and do closing, to find out the leaderboard and tickets award and set into prize_pool
        // check if end_timestamp < now, meaning already past, then do the closing.
       
        // SELECT * FROm current_game WHERE end_timestamp < now() AND is_closed=false;
        match prize::Prize::list_past_unclosed_current_games(&pool.clone()).await {
            Ok(current_games) => {
                //println!("games count=={}", games.len());
                let ranks = match rank::Rank::list_reverse(&pool.clone()).await  {
                    Ok(ranks) => ranks,
                    Err(error) => panic!("Error {}", error),
                };

                for cg in current_games {
                    let cg_id = cg.id;
                    let prize_id = cg.prize_id;
                    let game_id = cg.game_id;

                    //println!("game_id=={}", game_id);
                
                    //SELECT * FROM gplayer WHERE prize_id={game.prize_id} AND game_id={game.game_id} AND is_closed=false ORDER BY game_score DESC;
                    //from highest score
                    
                    match gplayer::GPlayer::list_unclosed_gplays(prize_id, game_id, &pool.clone()).await {
                        Ok(gplays) => {

                            //println!("gplays count=={}", gplays.len());
                            let rules = match game::Game::list_leader_rule(game_id, &pool.clone()).await  {
                                Ok(rules) => rules,
                                Err(error) => panic!("Error {}", error),
                            };            
                            
                            
                            let mut i = 1;
                            for gplay in gplays {

                                let gplay_id = gplay.id;
                                let user_id = gplay.user_id;


                                let user = match user::User::get(user_id, &pool.clone()).await {
                                    Ok(user) => user,
                                    Err(error) => panic!("Error: {}.", error),
                                };
  

                                for rule in &rules {

                                    if i>=rule.rank_from && i<=rule.rank_to {
                                        //within this rank, then update the user.exp with rule.exp by doing user.exp+rule.exp
                                        //check if got subscription, if got then use the daily_multiplier or 
                                        //use  one_time_multiplier if not 0, need to set to 0 after used on one_time_multiplier 
                                        let mut reward_tickets: f64 = rule.tickets as f64;
                                        let mut multiplier: f64 = 0.0;
                                        if user.one_time_multiplier > 0.0 {
                                            //TDOD: make sure if one_time_multiplier is used as 1 time or 1 day and if used as accumulative to daily_multiplier
                                            //multiplier = user.one_time_multiplier;
                                            //reset one_time_multiplier to 0 because used
                                            //user::User::reset_one_time_multiplier(user_id, &pool.clone()).await?;

                                        } 
                                        
                                        multiplier = multiplier + user.daily_multiplier + get_multiplier_from_rank(user.exp, &ranks);
                                        
                                        reward_tickets = reward_tickets + (multiplier * rule.tickets as f64);
                                        println!("reward_tickets=={}", reward_tickets);

                                        user::User::reward_exp(user_id, rule.exp, &pool.clone()).await?;
                                        //append to prize_pool with rule.tickets, win_from=3,
                                        
                                        prize::Prize::log_prize_pool(prize_id, user_id, game_id, 3, reward_tickets.ceil() as i32, &pool.clone()).await?;
                                    }

                                }

                                gplayer::GPlayer::close(gplay_id, &pool.clone()).await?;
                                
                                
                                
                                i = i + 1;
                            }
                        },
                        Err(error) => panic!("Error {}", error),
                    };
                    
                    prize::Prize::close_current_game(cg_id, &pool.clone()).await?;
                
                }

            },
            Err(error) => panic!("Error {}", error),
        };


        /* this maybe not here but need to expose an api for frontend to get this sum
        TODO: make sure prize_pool tickets calculated for the user
        SELECT (
            SELECT COALESCE(SUM(tickets), 0)
            FROM public.prize_pool WHERE prize_id=2 AND user_id=52 AND is_closed=false
        )  AS tickets_collected;

        */

        let stop = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_millis();

        let diff = stop - start;
        println!("Time Spent = {}ms", diff);

        let _ = match checker::Checker::update_checked(diff as i64, &pool.clone()).await {
            Ok(_) => (),
            Err(error) => panic!("== update_checked Error: {}.", error),
        };
        let time_wait = time::Duration::from_secs(config.checker_time_wait);
        thread::sleep(time_wait);
    }

}


fn get_multiplier_from_rank(exp: i32, ranks: &Vec<rank::Rank>) -> f64 {

    for rank in ranks {
        if exp >= rank.exp {
            return rank.multiplier;
        }
    }

    return 0.0;
}