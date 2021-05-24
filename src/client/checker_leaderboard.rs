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
    let pool_db: Pool<PostgresConnectionManager<tokio_postgres::NoTls>> = match Pool::builder().build(pg_mgr).await {
        Ok(pool) => pool,
        Err(e) => panic!("builder error: {:?}", e),
    };


    loop {
        
        let start = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_millis();


        //TODO: add a loop to current_game table and do closing, to find out the leaderboard and tickets award and set into prize_pool
        // check if end_timestamp < now, meaning already past, then do the closing.
       
        // SELECT * FROm current_game WHERE end_timestamp < now() AND is_closed=false;
        match prize::Prize::list_past_unclosed_current_games(&pool_db.clone()).await {
            Ok(games) => {

                for game in games {
                    let prize_id = game.prize_id;
                    let game_id = game.game_id;
                    //SELECT * FROM gplayer WHERE prize_id={game.prize_id} AND game_id={game.game_id} AND is_closed=false ORDER BY game_score DESC;
                    //from highest score
                    
                    match gplayer::GPlayer::list_unclosed_gplays(prize_id, game_id, &pool_db.clone()).await {
                        Ok(gplays) => {


                            let rules = match game::Game::list_leader_rule(game_id, &pool_db.clone()).await  {
                                Ok(rules) => rules,
                                Err(error) => panic!("Error {}", error),
                            };
                            
                            let mut i = 1;
                            for gplay in gplays {

                                let user_id = gplay.user_id;

                                for rule in &rules {

                                    if i>=rule.rank_from && i<=rule.rank_to {
                                        //within this rank, then update the user.exp with rule.exp by doing user.exp+rule.exp
                                        //user::User::update_exp(user_id, rule.exp, &pool_db.clone()).await?;

                                        //append to prize_pool with rule.tickets
                                    }

                                    

                                }
                                
                                
                                
                                i = i + 1;
                            }
                        },
                        Err(error) => panic!("Error {}", error),
                    };
                    
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

        let _ = match checker::Checker::update_checked(diff as i64, &pool_db.clone()).await {
            Ok(_) => (),
            Err(error) => panic!("== update_checked Error: {}.", error),
        };
        let time_wait = time::Duration::from_secs(config.checker_time_wait);
        thread::sleep(time_wait);
    }

}
