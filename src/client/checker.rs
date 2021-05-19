//use std::thread;
use std::time::Duration;

use std::time::{
    SystemTime, 
    UNIX_EPOCH
};
//use chrono::{NaiveDate, NaiveDateTime};

use tokio_postgres;
use bb8::{Pool};
use bb8_postgres::PostgresConnectionManager;
use esm_db::models::*;
use esm_db::models::prize::*;

mod config;


#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

    let start = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs();
    let config = config::get_configuration();
    
    let pg_mgr = PostgresConnectionManager::new_from_stringlike(config.db_conn_string, tokio_postgres::NoTls).unwrap();
    let pool_db: Pool<PostgresConnectionManager<tokio_postgres::NoTls>> = match Pool::builder().build(pg_mgr).await {
        Ok(pool) => pool,
        Err(e) => panic!("builder error: {:?}", e),
    };


    
    let prizes = match prize::Prize::list(10000, 0, "".to_string(), 2, &pool_db.clone()).await {
        Ok(prizes) => prizes,
        Err(error) => panic!("Error: {}.", error),
    };
    
    let mut i = 0;
    //println!("Total Prizes={}", prizes.len().to_string());
    for prize in prizes {
        
        i = i + 1;
       
        let scheduled_on = prize.scheduled_on.duration_since(UNIX_EPOCH).unwrap().as_secs();
        let scheduled_off = prize.scheduled_off.duration_since(UNIX_EPOCH).unwrap().as_secs();
        let timezone_seconds = prize.timezone * (3600 as f64);

        let adjusted_now = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs() - (config.server_timezone * 3600) + (timezone_seconds as u64);
        if prize.type_id == 1 || prize.type_id == 2 {
        
            if scheduled_on <= adjusted_now {
                if prize.tickets_collected < prize.tickets_required {

                    println!("{} prize_id={} Type 1/2, running, ", i, prize.id.to_string());
                    process_current_games(prize, &pool_db.clone()).await?;
                    
                } else {
    
                    //TODO: process closing here
                    // after closing is called here only do reset/perm-end below

                    if prize.is_repeat { //reset
                        println!("{} prize_id={} Type 1/2, tickets fulled and restart need to be set here",i , prize.id.to_string());
                        println!("TODO: reset here!!!");
                        //TODO: update the prize scheduled_on to today and reset tickets_collected to 0;
                        //TODO: make sure prize's ticket_collected is kept in a log, to identify previous round's data
    
                        process_current_games(prize, &pool_db.clone()).await?;
                    } else { //perm-end
                        println!("{} prize_id={} Type 1/2, TICKETS FULLED, NOT REPEAT and ENDED", i, prize.id.to_string());
                    }
                }
            }
            

        } else if prize.type_id == 3 || prize.type_id == 4 {

            if scheduled_on <= (adjusted_now - 60) {

                // if is_repeat, meaning need to always show, because it never end.
                if prize.is_repeat {

                    //if repeat, prize_status=running, as always

                    if scheduled_off >= adjusted_now {
                        
                        //scheduled_off is bigger than now, meaning it's not ended
                        
                        println!("{} prize_id={} Type 3/4, is Repeat and running, ", i, prize.id.to_string());
                        process_current_games(prize, &pool_db.clone()).await?;
                        
                    } else {

                        //scheduled_off is already smaller than now, meaning already ended
                        //TODO: process closing here and update the scheduled_on and scheduled_off

                        println!("{} prize_id={} Type 3/4, is Repeat and restart need to be set here, ", i, prize.id.to_string());
                        process_current_games(prize, &pool_db.clone()).await?;
                    }
                    
                } else {

                    // if not repeat, then we need to check if it's still within the duration.
                    if scheduled_off >= adjusted_now {

                        //scheduled_off is bigger than now, meaning it's not ended

                        println!("{} prize_id={} Type 3/4, not repeat and running", i, prize.id.to_string());
                        process_current_games(prize, &pool_db.clone()).await?;

                    } else {

                        //scheduled_off is already smaller than now, meaning already ended
                        //TODO: process closing here and update the prize_status=closed

                        println!("{} prize_id={} Type 3/4, NOT REPEAT and ENDED", i, prize.id.to_string());
                    }
                } 
                
            } 

        }
        
        println!("");
        
        //TODO: check the following requirements,
        // 1: update the published prize that is suppose to be running to "running" for the prize_status
        // 2: closing the prize, update the prize_status to closing, and generate winners
        // 3: finally, close the prize, update the prize status to "closed" after winners is generated. closed prize is recorded into closed_prize_log table
        // 4: only if the prize is closed then only allowed user to claim.
        // 5: if user din't logGLeave, and gem was deducted, then we should return it for the user.
    }  

    let stop = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs();

    let diff = stop - start;
    println!("Time Spent = {}", diff);

    Ok(())
}

async fn process_current_games(prize: Prize, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<CurrentGame>, Box<dyn std::error::Error>> {

    let current_games: Vec<CurrentGame> = match prize::Prize::list_current_game_by_system(prize.id, &pool.clone()).await {
        Ok(current_games) => current_games,
        Err(error) => panic!("== list_current_games Error: {}.", error),
    };

    if current_games.len() > 0 {
        println!("== prize_id={}, current_games={}", prize.id.to_string(), current_games.len().to_string());
    } else {

        //println!("== No current_games found (we add 1 day here, so current game checking is always tomorrow.), finding previous_games...");
        let _ = match prize::Prize::list_previous_game(prize.id, &pool.clone()).await {
            Ok(previous_games) => {
                if previous_games.len() > 0 {
                    //println!("== prize_id={}, previous_games={}", prize.id.to_string(), previous_games.len().to_string());
                    let end_timestamp = previous_games[0].end_timestamp.duration_since(UNIX_EPOCH).unwrap().as_secs();
                    println!("== previous_games found, generating current_games from time after {}... and game_id after {}, until next end...", end_timestamp.to_string(), previous_games[0].game_id.to_string());
                    generate_current_games(prize, previous_games[0].tour_id, previous_games[0].set_id, previous_games[0].game_id, end_timestamp, &pool.clone()).await?;
                } else {
                    println!("== No previous_games found, generating current_games from start until next end...");
                    generate_current_games(prize, 0, 0, 0, 0, &pool.clone()).await?;
                }
            },
            Err(error) => panic!("== list_current_games Error: {}.", error),
        };

    }

    Ok(current_games)
}

async fn generate_current_games(prize: Prize, previous_tour_id: i64, previous_set_id: i64, previous_game_id: i64, previous_end_timestamp: u64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<(), Box<dyn std::error::Error>> {
    
    let config = config::get_configuration();
    let scheduled_on = prize.scheduled_on.duration_since(UNIX_EPOCH).unwrap().as_secs();
    let scheduled_off = prize.scheduled_off.duration_since(UNIX_EPOCH).unwrap().as_secs();
    let timezone_seconds = prize.timezone * (3600 as f64);
    let adjusted_now = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs() - (config.server_timezone * 3600) + (timezone_seconds as u64);
   
    let mut is_after_previous = false;

    let active_games = match prize::Prize::list_active_by_prize_id(prize.id, &pool.clone()).await {
        Ok(active_games) => active_games,
        Err(error) => panic!("==== generate_current_games.list_active_by_prize_id Error: {}.", error),
    };

    let mut start_timestamp = scheduled_on;
    let mut end_timestamp = 0;

    let mut final_end_timestamp = scheduled_off;
    if adjusted_now > scheduled_off {
        final_end_timestamp = adjusted_now + 3600 * 24;
    }

    while start_timestamp < final_end_timestamp {

        for game in &active_games {
        
            if previous_tour_id > 0 {

                if is_after_previous {
                    end_timestamp = start_timestamp + game.game_duration_days as u64 * 86400 + game.game_duration_hours as u64 * 3600 + game.game_duration_minutes as u64 *  60;
                    
                    //append to db.current_game
                    //println!("==== TODO: need to check here");
                    let cg = CurrentGame {
                        id: 0,
                        prize_id: prize.id,
                        tour_id: game.tour_id,
                        set_id: game.set_id,
                        tsg_id: game.tsg_id,
                        game_id: game.game_id,
                        start_timestamp: UNIX_EPOCH + Duration::new(start_timestamp as u64, 0),
                        end_timestamp: UNIX_EPOCH + Duration::new(end_timestamp as u64, 0)
                      };
    
                    match prize::Prize::add_current_game(cg, &pool.clone()).await {
                        Ok(_) => {
                            ()
                        },
                        Err(error) => panic!("==== generate_current_games.add_current_game Error: {}.", error),
                    }

                    start_timestamp = end_timestamp;
    
                    
                } else {
                    if game.tour_id == previous_tour_id && game.set_id == previous_set_id && game.game_id ==  previous_game_id {
                        is_after_previous = true;
                        start_timestamp = previous_end_timestamp;
                    }
                }

            } else { // if 0 then means genearate from scheduled_on of prize
                end_timestamp = start_timestamp + game.game_duration_days as u64 * 86400 + game.game_duration_hours as u64 * 3600 + game.game_duration_minutes as u64 *  60;
                
                
                //append to db.current_game only if the end_timestamp still not yet end for now.
                if end_timestamp >= adjusted_now {

                    let cg = CurrentGame {
                        id: 0,
                        prize_id: prize.id,
                        tour_id: game.tour_id,
                        set_id: game.set_id,
                        tsg_id: game.tsg_id,
                        game_id: game.game_id,
                        start_timestamp: UNIX_EPOCH + Duration::new(start_timestamp as u64, 0),
                        end_timestamp: UNIX_EPOCH + Duration::new(end_timestamp as u64, 0)
                      };
    
                    match prize::Prize::add_current_game(cg, &pool.clone()).await {
                        Ok(_) => {
                            ()
                        },
                        Err(error) => panic!("==== generate_current_games.add_current_game Error: {}.", error),
                    }
    
                }
                
                start_timestamp = end_timestamp;

            }
        }
    
    }
    
    
    Ok(())
}