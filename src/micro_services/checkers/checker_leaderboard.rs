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
        
        // main_loop
        match main_loop(&pool).await {
            Ok(_) => {
                println!("");
                ()
            },
            Err(error) => {
                println!("{}", error);
                ()
            }
        }

        let time_wait = time::Duration::from_secs(config.checker_lb_time_wait);
        thread::sleep(time_wait);
    }

}


async fn main_loop(pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<(), Box<dyn std::error::Error>> {

    let config = config::get_configuration();

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
                let mut game_tickets_collected = 0;

                let rules = match game::Game::list_leader_rule(game_id, &pool.clone()).await  {
                    Ok(rules) => rules,
                    Err(error) => panic!("Error {}", error),
                };
                
                match gplayer::GPlayer::list_unclosed_gplays(prize_id, game_id, &pool.clone()).await {
                    Ok(gplays) => {

                        let mut vec_user_id = vec![0];
                        let mut i: i32 = 1;
                        for gplay in gplays {

                            let gplay_id = gplay.id;
                            let user_id = gplay.user_id;
                            let game_score = gplay.game_score;

                            let mut is_existed = false;
                            if vec_user_id.contains(&user_id) {
                                is_existed = true;
                            }
                            if !is_existed {
                                vec_user_id.push(user_id);

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
                                            //This feature is not needed.
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
                                        
                                        let now = SystemTime::now();
                                        
                                        if i <= config.max_history  {
                                            //only keep the first (n) players based on the env config player's record into leaderboard_history table
                                            let history = tournament::LeaderboardHistory {
                                                rank: i,
                                                prize_id: prize_id,
                                                user_id: user_id,
                                                cg_id: cg_id,
                                                gplay_id: gplay_id,
                                                game_score: game_score,
                                                prize_type_id: prize_type_id,
                                                game_id: game_id,
                                                reward_gem: rank_gem,
                                                reward_exp:  rule.exp,
                                                tickets: reward_tickets as i32,
                                                created_on: now,
                                            };
                                            tournament::Tournament::record_leaderboard_history(history, &pool).await?;
                                        }

                                        if i <= config.max_notify {
                                            //only notify the first (n) players based on the env config
                                            match notify_player(
                                                "Your Tournament Result!", 
                                                format!("Tournament for game_id: {} has just Ended!", game_id).as_str(), 
                                                cg_id.to_string().as_str(), 
                                                i.to_string().as_str(), 
                                                prize_id.to_string().as_str(), 
                                                prize_type_id.to_string().as_str(), 
                                                game_id.to_string().as_str(), 
                                                game_score.to_string().as_str(),
                                                rank_gem.to_string().as_str(), 
                                                rule.exp.to_string().as_str(), 
                                                reward_tickets.to_string().as_str(), 
                                                user.msg_token.as_str(), 
                                                now.duration_since(UNIX_EPOCH).unwrap().as_secs().to_string().as_str()).await {
                                            Ok(_) => {
                                                
                                            },
                                            Err(e) => {
                                                checker::Checker::add_error(checker::ErrorLog {
                                                    module_id: 201,
                                                    detail: format!("{}", e),
                                                }, &pool).await?;
                                                println!("Error notify_player {}", e);
                                            }
                                        }

                                        }
                                        
                                        //and, append to prize_pool with rule.tickets, win_from=3,
                                        prize::Prize::log_prize_pool(prize_id, user_id, game_id, 3, reward_tickets.ceil() as i32, cg_id, &pool.clone()).await?;
                                        game_tickets_collected = game_tickets_collected + reward_tickets as i64;
                                    }

                                }

                                i = i + 1;
                            }

                            gplayer::GPlayer::close(gplay_id, cg_id, &pool.clone()).await?;
                            
                        }
                    },
                    Err(error) => {
                        println!("ERROR at list_leaderboard {}", error);
                        panic!("Error {}", error)
                    },
                };
                
                let prize_tickets_collected = prize::Prize::get_current_tickets_collected(prize_id, &pool.clone()).await?;
                prize::Prize::close_current_game(cg_id, game_tickets_collected, &pool.clone()).await?;

                match notify_tour_ending("Tournament Ending", format!("Tournament for game_id: {} has just Ended!", 
                    game_id).as_str(), cg_id.to_string().as_str(), 
                    prize_id.to_string().as_str(), prize_type_id.to_string().as_str(), 
                    game_id.to_string().as_str(), game_tickets_collected.to_string().as_str(), prize_tickets_collected.to_string().as_str()).await {
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

    Ok(())
}

fn get_reward_from_rank(exp: i32, ranks: &Vec<rank::Rank>) -> (f64, i32) {

    for rank in ranks {
        if exp >= rank.exp {
            return (rank.multiplier, rank.gem);
        }
    }

    return (0.0, 0);
}

async fn notify_tour_ending(title: &str, body: &str, cg_id: &str, prize_id: &str, prize_type_id: &str, game_id: &str, game_tickets_collected: &str, prize_tickets_collected: &str) -> Result<bool, reqwest::Error> {
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
            "msg_type": "200", // to everyone, notify during the game ending
            "cg_id": cg_id, 
            "prize_id": prize_id,
            "prize_type_id": prize_type_id,
            "game_id": game_id,
            "game_tickets_collected": game_tickets_collected,
            "prize_tickets_collected": prize_tickets_collected,
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
    rank: &str,
    prize_id: &str, prize_type_id: &str, 
    game_id: &str, 
    game_score: &str,
    reward_gem: &str, reward_exp: &str, tickets: &str, 
    token: &str, timestamp: &str) -> Result<bool, reqwest::Error> {
    let config = config::get_configuration();
    
    let echo_json: serde_json::Value = reqwest::Client::new()
    .post("https://fcm.googleapis.com/fcm/send")
    .header("authorization", format!("key={}", config.fcm_key))
    .json(&serde_json::json!({
        "notification" : {
            "body" : body,
            "title": title
        },
        "data": {
            "msg_type": "201", // to the player who played the game, notify during the game ending
            "cg_id": cg_id, 
            "prize_id": prize_id,
            "prize_type_id": prize_type_id,
            "game_id": game_id,
            "game_score": game_score,
            "reward_gem": reward_gem,
            "reward_exp": reward_exp,
            "tickets": tickets,
            "rank": rank,
            "timestamp": timestamp
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
