//use std::thread;

use std::{fs, thread, time};
use std::time::{
    SystemTime, 
    UNIX_EPOCH
};
//use chrono::{NaiveDate, NaiveDateTime};

use bb8::{Pool};
use bb8_postgres::PostgresConnectionManager;
use esm_db::models::*;
use postgres_native_tls::MakeTlsConnector;
use native_tls::{Certificate, TlsConnector};

mod config;


#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

    let config = config::get_configuration();
    
    let cert = fs::read(config.db_cert_path)?;
    let cert = Certificate::from_pem(&cert)?;
    let connector = TlsConnector::builder().add_root_certificate(cert).build()?;
    let tls = MakeTlsConnector::new(connector);

    let pg_mgr = PostgresConnectionManager::new_from_stringlike(config.db_conn_string, tls).unwrap();
    let pool: Pool<PostgresConnectionManager<MakeTlsConnector>> = match Pool::builder().build(pg_mgr).await {
        Ok(pool) => pool,
        Err(e) => panic!("builder error: {:?}", e),
    };


    loop {
        
        let start = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_millis();


        //loop to current_game table and do closing, to find out the leaderboard and tickets award and set into prize_pool
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
                    let prize_type_id = cg.prize_type_id;

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
                                        
                                        let (rank_multiplier, rank_gem) = get_reward_from_rank(user.exp, &ranks);
                                        multiplier = multiplier + user.daily_multiplier + rank_multiplier;
                                        
                                        reward_tickets = reward_tickets + (multiplier * rule.tickets as f64);
                                        println!("reward_tickets=={}", reward_tickets);

                                        user::User::reward_gem(user_id, rank_gem, &pool.clone()).await?;
                                        user::User::reward_exp(user_id, rule.exp, &pool.clone()).await?;
                                        //TODO: notify user
                                        //append to prize_pool with rule.tickets, win_from=3,
                                        match notify_player("Your Tournament Result!", format!("Tournament for game_id: {} has just Ended!", game_id).as_str(), 
                                        cg_id.to_string().as_str(), prize_id.to_string().as_str(), prize_type_id.to_string().as_str(), game_id.to_string().as_str(), 
                                        rank_gem.to_string().as_str(), rule.exp.to_string().as_str(), reward_tickets.to_string().as_str(), user.msg_token.as_str()).await {
                                            Ok(_) => {},
                                            Err(e) => {
                                                checker::Checker::add_error(checker::ErrorLog {
                                                    module_id: 201,
                                                    detail: format!("{}", e),
                                                }, &pool).await?;
                                                println!("Error notify_player {}", e);
                                            }
                                        }

                                        
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
                    match notify_tour_ending("Tournament Ending", format!("Tournament for game_id: {} has just Ended!", game_id).as_str(), cg_id.to_string().as_str(), prize_id.to_string().as_str(), prize_type_id.to_string().as_str(), game_id.to_string().as_str()).await {
                        Ok(_) => {},
                        Err(e) => {
                            checker::Checker::add_error(checker::ErrorLog {
                                module_id: 202,
                                detail: format!("{}", e),
                            }, &pool).await?;
                            println!("Error notify_tour_ending {}", e);
                        }
                    }
                
                }

            },
            Err(error) => panic!("Error {}", error),
        };


        let stop = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_millis();

        let diff = stop - start;
        println!("checker_leaderboard Time Spent = {}ms", diff);

        let _ = match checker::Checker::update_leaderboard_checked(diff as i64, &pool.clone()).await {
            Ok(_) => (),
            Err(error) => panic!("== update_leaderboard_checked Error: {}.", error),
        };
        let time_wait = time::Duration::from_secs(config.checker_time_wait);
        thread::sleep(time_wait);
    }

}


fn get_reward_from_rank(exp: i32, ranks: &Vec<rank::Rank>) -> (f64, i32) {

    for rank in ranks {
        if exp >= rank.exp {
            return (rank.multiplier, rank.gem);
        }
    }

    return (0.0, 0);
}

async fn notify_tour_ending(title: &str, body: &str, cg_id: &str, prize_id: &str, prize_type_id: &str, game_id: &str) -> Result<bool, reqwest::Error> {
    let config = config::get_configuration();

    let timestamp = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs() as i64;
    
    let echo_json: serde_json::Value = reqwest::Client::new()
    .post("https://fcm.googleapis.com/fcm/send")
    .header("authorization", format!("key={}", config.fcm_key))
    .json(&serde_json::json!({
        "notification" : {
            "body" : body,
            "title": title
        },
        "data": {
            "cg_id": cg_id, 
            "prize_id": prize_id,
            "prize_type_id": prize_type_id,
            "game_id": game_id,
            "timestamp": format!("{}", timestamp).as_str()
        },
        "to": "/topics/tournament_ending"
    }))
    .send()
    .await?
    .json()
    .await?;
  
  
    println!("{:#?}", echo_json);
    
    Ok(true)
  
}

async fn notify_player(title: &str, body: &str, 
    cg_id: &str, 
    prize_id: &str, prize_type_id: &str, 
    game_id: &str, 
    reward_gem: &str, reward_exp: &str, tickets: &str, 
    token: &str) -> Result<bool, reqwest::Error> {
    let config = config::get_configuration();
    
    let timestamp = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs() as i64;
    
    let echo_json: serde_json::Value = reqwest::Client::new()
    .post("https://fcm.googleapis.com/fcm/send")
    .header("authorization", format!("key={}", config.fcm_key))
    .json(&serde_json::json!({
        "notification" : {
            "body" : body,
            "title": title
        },
        "data": {
            "cg_id": cg_id, 
            "prize_id": prize_id,
            "prize_type_id": prize_type_id,
            "game_id": game_id,
            "reward_gem": reward_gem,
            "reward_exp": reward_exp,
            "tickets": tickets,
            "timestamp": format!("{}", timestamp).as_str()
        },
        "to": token
    }))
    .send()
    .await?
    .json()
    .await?;
  
  
    println!("{:#?}", echo_json);
    
    Ok(true)
  
}
