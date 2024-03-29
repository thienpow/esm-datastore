
use std::time::Duration;
use std::{fs, thread, time};
use std::time::{
    SystemTime, 
    UNIX_EPOCH
};
use chrono::{Datelike, Utc};
//use chrono::{NaiveDate, NaiveDateTime};
use rand::prelude::*;
use rand::distributions::WeightedIndex;

use bb8::{Pool};
use bb8_postgres::PostgresConnectionManager;
use esm_db::models::*;
use esm_db::models::prize::*;
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

        let time_wait = time::Duration::from_secs(config.checker_cg_time_wait);
        thread::sleep(time_wait);

    }

}

async fn main_loop(pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<(), Box<dyn std::error::Error>> {
        
    let start = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_millis();

    let config = config::get_configuration();
    let now = Utc::now();
    let today = now.weekday().number_from_monday() as i32;

    let prizes = match prize::Prize::list(10000, 0, "".to_string(), 2, &pool.clone()).await {
        Ok(prizes) => prizes,
        Err(error) => panic!("Error: {}.", error),
    };
    
    let mut i = 0;
    
    let server_timezone = (config.server_timezone * 3600) as i64;
    let now_sec = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs() as i64;
    for prize in prizes {
        
        let prize_id = prize.id;
        let type_id = prize.type_id;
        let status_progress = prize.status_progress;
        let is_repeat: bool = prize.is_repeat;
        let repeated_on = prize.repeated_on.clone();


        let today_index: i32 = match repeated_on.iter().position(|&x| x == today) {
            Some(index) => index as i32,
            _ => -1,
        };

        let mut is_today_repeat = false;
        if today_index > -1 {
            is_today_repeat = true;
        }

        i = i + 1;
    
        let scheduled_on = prize.scheduled_on.duration_since(UNIX_EPOCH).unwrap().as_secs() as i64;
        let scheduled_off = prize.scheduled_off.duration_since(UNIX_EPOCH).unwrap().as_secs() as i64;
        let timezone_seconds = (prize.timezone * (3600 as f64)) as i64;
        
        //let scheduled_on = scheduled_on + timezone_seconds;
        //let scheduled_off = scheduled_off + timezone_seconds;
        let adjusted_now = now_sec - server_timezone + timezone_seconds;

        /*
        println!("prize_id = {}", prize_id);
        println!("scheduled_on = {}", scheduled_on);
        println!("scheduled_off = {}", scheduled_off);
        println!("adjusted_now = {}", adjusted_now);
        println!("SystemTime::now() = {}", now_sec);

        let diff_on = scheduled_on - adjusted_now;
        println!("scheduled_on - adjusted_now = {}", diff_on);

        let diff_off = scheduled_off - adjusted_now;
        println!("scheduled_off - adjusted_now = {}", diff_off);
        */


        if scheduled_on <= adjusted_now {
            let _ = match prize::Prize::set_running(prize.id, &pool.clone()).await {
                Ok(_) => (),
                Err(error) => panic!("== set_running Error: {}.", error),
            };
        }

        if status_progress < 900 && scheduled_on <= (adjusted_now + 180) {
            let tickets_collected = prize::Prize::get_current_tickets_collected(prize_id, &pool.clone()).await?;
            prize::Prize::set_prize_tickets_collected(prize_id, tickets_collected, &pool.clone()).await?;

            if type_id == 1 || type_id == 2 {
        
                if tickets_collected < prize.tickets_required {

                    println!("{} prize_id={} Type 1/2, running, ", i, prize.id.to_string());
                    process_current_games(&prize, &pool.clone()).await?;

                    
                } else {

                    if is_repeat { //close & reset

                        // after closing is called here only do reset/perm-end below
                        //process closing here, loop the prize_pool, set is_closed and find winner
                        match process_closing(&prize, &pool.clone()).await {
                            Ok(success) => {
                                if success {

                                    //make sure prize's tickets_collected is kept in a log, to identify previous round's data
                                    let _ = match prize::Prize::log_closed(prize_id, tickets_collected, &pool.clone()).await {
                                        Ok(_) => (),
                                        Err(error) => panic!("== Type 1/2 log_closed Error: {}.", error),
                                    };
                                    
                                    println!("{} prize_id={} Type 1/2, tickets fulled and restart need to be set here",i , prize_id.to_string());

                                    let u_new_scheduled_on: u64 = prize.scheduled_off.duration_since(UNIX_EPOCH).unwrap().as_secs();
                                    let duration_days: u64 = (prize.duration_days as u64) * 86400;
                                    let duration_hours: u64 = (prize.duration_hours as u64) * 3600;
                                    let new_scheduled_on: SystemTime = UNIX_EPOCH + Duration::new(u_new_scheduled_on, 0);
                                    let new_scheduled_off: SystemTime = UNIX_EPOCH + Duration::new(u_new_scheduled_on + duration_days + duration_hours, 0);
                                    

                                    // before reset the schedule, check if the duration_days < 7, if smaller than 7 days, we need to make sure it's within repeated_on.
                                    // let say, if duration_days is 2, we need to check if scheduled_off is already pass, and if the repeated_on is within today.
                                    // if scheduled_off is not passed, meaning we need to reset with another new_scheduled_on and skip process_current_games because it's not suppose to have games until today is within repeated on.

                                    let mut is_reset = false;
                                    
                                    if prize.duration_days < 7 {
                                        if is_today_repeat {
                                            is_reset = true;
                                        }
                                    } else {
                                        is_reset = true;
                                    }

                                    if is_reset {
                                        //update the prize scheduled_on to new schedule and reset tickets_collected to 0, status_progress=running=1
                                        let _ = match prize::Prize::reset_schedule(prize_id, new_scheduled_on, new_scheduled_off, &pool.clone()).await {
                                            Ok(_) => (),
                                            Err(error) => panic!("== Type 1/2, tickets fulled, reset_schedule Error: {}.", error),
                                        };

                                        process_current_games(&prize, &pool.clone()).await?;
                                    }
                                    
                                    
                                }
                            },
                            Err(error) => panic!("== Type 1/2, tickets fulled, process_closing Error: {}.", error),
                        };

                    } else { //perm-close

                        if status_progress < 999 {

                            //process closing here, loop the prize_pool, set is_closed and find winner
                            match process_closing(&prize, &pool.clone()).await {
                                Ok(success) => {
                                    if success {

                                        //make sure prize's tickets_collected is kept in a log, to identify previous round's data
                                        let _ = match prize::Prize::log_closed(prize_id, tickets_collected, &pool.clone()).await {
                                            Ok(_) => (),
                                            Err(error) => panic!("== Type 1/2 log_closed Error: {}.", error),
                                        };

                                        println!("{} prize_id={} Type 1/2, TICKETS FULLED, NOT REPEAT and ENDED", i, prize.id.to_string());

                                        //update status_progress=closed=999
                                        let _ = match prize::Prize::set_permanent_closed(prize.id, &pool.clone()).await {
                                            Ok(_) => (),
                                            Err(error) => panic!("== Type 1/2, TICKETS FULLED, set_closed Error: {}.", error),
                                        };

                                    }
                                },
                                Err(error) => panic!("== Type 1/2, TICKETS FULLED, process_closing Error: {}.", error),
                            };
                            
                        }
                        
                    }
                }
                
            } else if type_id == 3 || type_id == 4 {

                // if is_repeat, meaning need to always show, because it never end.
                if is_repeat {

                    //if repeat, prize_status=running, as always

                    if scheduled_off >= adjusted_now {
                        
                        //scheduled_off is bigger than now, meaning it's not ended
                        
                        println!("{} prize_id={} Type 3/4, is Repeat and running, ", i, prize.id.to_string());
                        process_current_games(&prize, &pool.clone()).await?;


                    } else {

                        //scheduled_off is already smaller than now, meaning already ended
                        //process closing here, loop the prize_pool, set is_closed and find winner
                        //make sure prize's tickets_collected is kept in a log, to identify previous round's data
                        match process_closing(&prize, &pool.clone()).await {
                            Ok(success) => {
                                if success {
                                    let _ = match prize::Prize::log_closed(prize_id, tickets_collected, &pool.clone()).await {
                                        Ok(_) => (),
                                        Err(error) => panic!("== Type 3/4, is Repeat, log_closed Error: {}.", error),
                                    };
        
                                    println!("{} prize_id={} Type 3/4, is Repeat and restart need to be set here, ", i, prize.id.to_string());
        
                                    let u_new_scheduled_on: u64 = prize.scheduled_off.duration_since(UNIX_EPOCH).unwrap().as_secs();
                                    let duration_days: u64 = (prize.duration_days as u64) * 86400;
                                    let duration_hours: u64 = (prize.duration_hours as u64) * 3600;
                                    let new_scheduled_on: SystemTime = UNIX_EPOCH + Duration::new(u_new_scheduled_on, 0);
                                    let new_scheduled_off: SystemTime = UNIX_EPOCH + Duration::new(u_new_scheduled_on + duration_days + duration_hours, 0);
                                    
                                    // before reset the schedule, check if the duration_days < 7, if smaller than 7 days, we need to make sure it's within repeated_on.
                                    // let say, if duration_days is 2, we need to check if scheduled_off is already pass, and if the repeated_on is within today.
                                    // if scheduled_off is not passed, meaning we need to reset with another new_scheduled_on and skip process_current_games because it's not suppose to have games until today is within repeated on.
        

                                    let mut is_reset = false;

                                    if prize.duration_days < 7 {
                                        if is_today_repeat {
                                            is_reset = true;
                                        }
                                    } else {
                                        is_reset = true;
                                    }
                                    
                                    if is_reset {
                                        //update the prize scheduled_on to new schedule and reset tickets_collected to 0, status_progress=running=1
                                        let _ = match prize::Prize::reset_schedule(prize_id, new_scheduled_on, new_scheduled_off, &pool.clone()).await {
                                            Ok(_) => (),
                                            Err(error) => panic!("== Type 3/4, is Repeat, reset_schedule Error: {}.", error),
                                        };
            
                                        process_current_games(&prize, &pool.clone()).await?;
                                    }
                                    
                                }
                            },
                            Err(error) => panic!("== Type 3/4, is Repeat, process_closing Error: {}.", error)
                        }
                        
                    }
                    
                } else {

                    // if not repeat, then we need to check if it's still within the duration.
                    if scheduled_off >= adjusted_now {

                        //scheduled_off is bigger than now, meaning it's not ended
                        println!("{} prize_id={} Type 3/4, not repeat and running", i, prize.id.to_string());
                        process_current_games(&prize, &pool.clone()).await?;
                        

                    } else {

                        //scheduled_off is already smaller than now, meaning already ended
                        
                        if status_progress < 999 {
                            //process closing here, loop the prize_pool, set is_closed and find winner
                            //make sure prize's tickets_collected is kept in a log, to identify previous round's data
                        
                            match process_closing(&prize, &pool.clone()).await {
                                Ok(success) => {
                                    if success {

                                        let _ = match prize::Prize::log_closed(prize_id, tickets_collected, &pool.clone()).await {
                                            Ok(_) => (),
                                            Err(error) => panic!("== Type 3/4, NOT REPEAT, log_closed Error: {}.", error),
                                        };
            
                                        println!("{} prize_id={} Type 3/4, NOT REPEAT and ENDED", i, prize_id.to_string());
                                        println!("scheduled_off > adjusted_now  {} > {}", scheduled_off, adjusted_now);
        
                                        //update the status_progress=closed=999
                                        let _ = match prize::Prize::set_permanent_closed(prize_id, &pool.clone()).await {
                                            Ok(_) => (),
                                            Err(error) => panic!("== Type 3/4, NOT REPEAT, set_closed Error: {}.", error),
                                        };

                                    }
                                },
                                Err(error) => panic!("== Type 3/4, NOT REPEAT, process_closing Error: {}.", error),
                            }

                        }
                        
                    }
                } 
                
            }
        }
        
    } 
    
    
    let stop = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_millis();

    let diff = stop - start;
    println!("checker_current_game Time Spent = {}ms", diff);

    let _ = match checker::Checker::update_current_game_checked(diff as i64, &pool.clone()).await {
        Ok(_) => (),
        Err(error) => panic!("== update_checked Error: {}.", error),
    };

    Ok(())
}

async fn process_current_games(prize: &Prize, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<bool, Box<dyn std::error::Error>> {

    match prize::Prize::list_previous_game(prize.id, &pool.clone()).await {
        Ok(previous_games) => {
            if previous_games.len() > 0 {
                //println!("== prize_id={}, previous_games={}", prize.id.to_string(), previous_games.len().to_string());
                let end_timestamp = previous_games[0].end_timestamp.duration_since(UNIX_EPOCH).unwrap().as_secs() as i64;
                let set_duration_countdown= previous_games[0].set_duration_countdown;
                
                generate_current_games(
                    set_duration_countdown,  
                    true, &prize, 
                    previous_games[0].tour_id, 
                    previous_games[0].set_id, 
                    previous_games[0].game_id, 
                    end_timestamp, 
                    &pool.clone()).await?;
            } else {
                
                generate_current_games(
                    0,
                    false, 
                    &prize, 
                    0, 
                    0, 
                    0, 
                    0, 
                    &pool.clone()).await?;
            }

            Ok(true)
        },
        Err(error) => panic!("== list_current_games Error: {}.", error),
    }
    
}

fn find_next_set_id(previous_set_id: i64, tour_sets: &Vec<tournament::TourSetSmall>) ->  i64 {

    for i in 0..tour_sets.len() {
        if tour_sets[i].set_id == previous_set_id {
            if i != tour_sets.len()-1 {
                return tour_sets[i+1].set_id;
            } else {
                return tour_sets[0].set_id;
            }
        }
    }

    previous_set_id
}

fn get_next_set_countdown(previous_set_duration_countdown: i32, minutes: i32, hours: i32, days: i32) -> i32 {
    let result = previous_set_duration_countdown - (minutes + (hours * 60) +  (days * 24 * 60));
    if result < 0 {
        return 0;
    }

    result
}

async fn generate_current_games(previous_set_duration_countdown: i32, is_previous_game_found: bool, prize: &Prize, previous_tour_id: i64, previous_set_id: i64, previous_game_id: i64, previous_end_timestamp: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<(), Box<dyn std::error::Error>> {
    
    println!("===== generate_current_games =====");

    let now = SystemTime::now();


    let mut previous_set_duration_countdown = previous_set_duration_countdown;
    let mut previous_set_id = previous_set_id;

    let config = config::get_configuration();
    let scheduled_on = prize.scheduled_on.duration_since(UNIX_EPOCH).unwrap().as_secs() as i64;
    let scheduled_off = prize.scheduled_off.duration_since(UNIX_EPOCH).unwrap().as_secs() as i64;
    let timezone_seconds = prize.timezone * (3600 as f64);
    let adjusted_now = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs() - (config.server_timezone * 3600) + (timezone_seconds as u64);
    let adjusted_now = adjusted_now as i64;

    let mut start_timestamp: i64 = scheduled_on;

    //
    // we converted the end_timestamp when adding it to current_game table, now we need to convert it back.
    //
    let mut previous_end_timestamp: i64 = previous_end_timestamp;
    if previous_end_timestamp > 0 {
        previous_end_timestamp = previous_end_timestamp - (config.server_timezone as i64 * 3600) + (timezone_seconds as i64);
    }
    if previous_end_timestamp > start_timestamp {
        start_timestamp = previous_end_timestamp;
    }
    
    let day_sec_to_add = adjusted_now + 3600 * 1;
    let mut final_end_timestamp: i64 = scheduled_off;
    //println!("==== adjusted_now {} > scheduled_off {}", adjusted_now, scheduled_off);
    if day_sec_to_add > scheduled_off {

        if prize.type_id == 1 || prize.type_id == 2 {
            //type 1 and 2 follow tickets collected rule, so end_timestamp is extendable.
            final_end_timestamp = day_sec_to_add;
        } else if prize.type_id == 3 || prize.type_id == 4 {
            //Time Sensitive rule must obey the schedule. so just use back scheduled_off.
        }
        
    }

    let diff_timestamp = scheduled_off - scheduled_on;
    

    //
    // time loop here.
    //
    while start_timestamp < final_end_timestamp {

        println!("prize_id {} ", prize.id);
        println!("final_end_timestamp - start_timestamp = {} ", final_end_timestamp  as  i64 - start_timestamp as i64);
        println!("scheduled_off = {} ", scheduled_off);
        println!("final_end_timestamp = {} ", final_end_timestamp);
        println!("start_timestamp = {} ", start_timestamp);
        println!("now = {} ", SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs());

        if start_timestamp > day_sec_to_add {
            break;
        }
        

        let mut previous_group_duration_countdown = 0;
        let mut previous_group_id = 0;
        let mut previous_start_timestamp = 0;
        let mut max_active_games_len = 0;

        let mut is_after_previous = false;

        let mut is_need_reset_countdown =  false;

        // **************************************
        // if previous_set_duration_countdown is already 0, means we need to find next formatset not the current formatset.
        // first need to get the list of formatset under tournament, which can be found from the tour_set table
        // then loop into it to find the next item after the set_id, if not found, get the first set_id,
        // **************************************
        if previous_set_duration_countdown == 0 && previous_set_id > 0 {
            
            let tour_sets = match tournament::Tournament::list_tour_set_small(previous_tour_id, &pool.clone()).await {
                Ok(tour_sets) => tour_sets,
                Err(error) => panic!("==== generate_current_games.list_tour_set_small Error: {}.", error),
            };
        
            previous_set_id = find_next_set_id(previous_set_id, &tour_sets);
            is_need_reset_countdown = true;
        } 

        let active_games = match prize::Prize::list_active_by_prize_id(prize.id, previous_tour_id, previous_set_id, &pool.clone()).await {
            Ok(active_games) => active_games,
            Err(error) => panic!("==== generate_current_games.list_active_by_prize_id Error: {}.", error),
        };

        if active_games.len() < 1 {
            // this is just in case someone deleted/modified the record and we cant retrieve that anymore, so we just quit processing it
            return Ok(())
        } else {
            if is_need_reset_countdown {
                let game = &active_games[0];
                previous_set_duration_countdown = (game.set_duration_days * 24  * 60) + (game.set_duration_hours * 60);
            }
        }

        // *************************
        // push the first group into first_group_games array
        // we need this for special condition usage later.
        // *************************
        let mut first_group_id  = 0;
        let mut first_group_games: Vec<PrizeActiveSmall> = Vec::new();
        for game in &active_games {
              
            if game.set_is_group {
                if first_group_id == 0 {
                    first_group_id = game.group_id;
                }

                if first_group_id == game.group_id  {
                    first_group_games.push(prize::PrizeActiveSmall {
                        prize_id: game.prize_id,
                        prize_duration_days: game.prize_duration_days,
                        prize_duration_hours: game.prize_duration_hours,
                        
                        type_id: game.type_id,
                        tickets_required: game.tickets_required,
                        timezone: game.timezone,
                        scheduled_on: game.scheduled_on,
                        scheduled_off: game.scheduled_off,
                        is_repeat: game.is_repeat,
                        repeated_on: game.repeated_on.clone(),
                        status: game.status,
                        status_progress: game.status_progress,
                        tickets_collected: game.tickets_collected,
                    
                        tour_id: game.tour_id,
                        tour_status: game.tour_status,
                        set_id: game.set_id,
                        set_duration_days: game.set_duration_days,
                        set_duration_hours: game.set_duration_hours,
                        set_is_group: game.set_is_group,
                        set_status: game.set_status,
                        game_id: game.game_id,
                        game_status: game.game_status,
                    
                        tsg_id: game.tsg_id,
                        game_duration_days: game.game_duration_days,
                        game_duration_hours: game.game_duration_hours,
                        game_duration_minutes: game.game_duration_minutes,
                        group_id: game.group_id
                    });
                }
            }
        }

        let mut first_game = &prize::PrizeActiveSmall {
            prize_id: 0,
            prize_duration_days: 0,
            prize_duration_hours: 0,
            
            type_id: 0,
            tickets_required: 0,
            timezone: 0 as f64,
            scheduled_on: now,
            scheduled_off: now,
            is_repeat: false,
            repeated_on: vec![0],
            status: 0,
            status_progress: 0,
            tickets_collected: 0,
          
            tour_id: 0,
            tour_status: 0,
            set_id: 0,
            set_duration_days: 0,
            set_duration_hours: 0,
            set_is_group: false,
            set_status: 0,
            game_id: 0,
            game_status: 0,
          
            tsg_id: 0,
            game_duration_days: 0,
            game_duration_hours: 0,
            game_duration_minutes: 0,
            group_id: 0
        };



        // ******************
        //
        //
        // | core loop here |
        //
        //
        // ******************
        //println!("Reached Core Loop");

        let mut index: i64 = 0;
        for game in &active_games {

            max_active_games_len = max_active_games_len + 1;

            if index == 0  {
                first_game = game.clone();

                if previous_set_duration_countdown == 0 {
                    previous_set_duration_countdown = (game.set_duration_days * 24 * 60) + (game.set_duration_hours * 60)
                } 
                
            }

            if game.set_is_group {

                // **********************
                // CHECKPOINT: re-use previous_start_timestamp
                // use back the previous start_timestamp if found the group is the same as previous one.
                // because the game that's going to be added next should have same start_timestamp as the previous game in the same group.
                // remember, we are in the loop of &active_games now.
                // **********************
                if previous_group_id ==  game.group_id  {
                    start_timestamp = previous_start_timestamp;
                    previous_set_duration_countdown = previous_group_duration_countdown;
                } else {
                    // if already found previous group and now we are in next group so we are confirm we are after previous
                    is_after_previous = true;
                    previous_set_duration_countdown = get_next_set_countdown(previous_set_duration_countdown, game.game_duration_minutes, game.game_duration_hours, game.game_duration_days);
                }
            }

            // **********************
            // check for bad link
            // **********************
            if prize.type_id < 4 {
                if game.tour_id == 0 || game.tour_status != 2 || game.set_id == 0 || game.set_status != 2 || game.tsg_id == 0 || game.game_id == 0 ||  game.game_status != 2 {
                    println!("bad record!!!");
                    if prize.status_progress != 666 {
                        match prize::Prize::set_bad_link(prize.id, &pool.clone()).await {
                            Ok(_) => {
                                println!("=== set_bad_link ===");
                            },
                            Err(error) => panic!("==== generate_current_games.set_bad_link Error: {}.", error),
                        };
                    }
                    
                    return Ok(())
                }

            }

            // **********************
            // set status_progress as Ready
            // **********************
            let _ = match prize::Prize::set_ready(prize.id, &pool.clone()).await {
                Ok(_) => (),
                Err(error) => panic!("== set_ready Error: {}.", error),
            };




            println!("is_previous_game_found == {}", is_previous_game_found);
            if is_previous_game_found { 
            
                if is_after_previous {

                    if !game.set_is_group {
                        previous_set_duration_countdown = get_next_set_countdown(previous_set_duration_countdown, game.game_duration_minutes, game.game_duration_hours, game.game_duration_days);
                    }
                    let end_timestamp = process_add_current_game(previous_set_duration_countdown, index, start_timestamp, diff_timestamp, &prize, &game, &pool.clone()).await?;

                    previous_start_timestamp = start_timestamp;
                    start_timestamp = end_timestamp;
    
                    
                } else {
                    
                    if game.set_is_group {

                        //
                        // it's dead end of the loop, nothing found from previous, so we start fresh with this new game.
                        //
                        if max_active_games_len == active_games.len() {
                            previous_set_duration_countdown = get_next_set_countdown(previous_set_duration_countdown, game.game_duration_minutes, game.game_duration_hours, game.game_duration_days);
                            let mut temp_end_timestamp = 0;
                            for game1 in &first_group_games {
                                let end_timestamp = process_add_current_game(previous_set_duration_countdown, index, start_timestamp, diff_timestamp, &prize, game1, &pool.clone()).await?;
                                temp_end_timestamp = end_timestamp;
                            }
                            start_timestamp = temp_end_timestamp;
                            break;
                        }

                    } else {
                        
                        if game.game_id ==  previous_game_id {
                            is_after_previous = true;
                            previous_start_timestamp = start_timestamp;
                            start_timestamp = previous_end_timestamp;
                        } 

                        //
                        // it's dead, nothing found from previous, data is changed, so we start fresh with this new game.
                        //
                        if max_active_games_len == active_games.len() {
                            previous_set_duration_countdown = get_next_set_countdown(previous_set_duration_countdown, game.game_duration_minutes, game.game_duration_hours, game.game_duration_days);
                            let end_timestamp = process_add_current_game(previous_set_duration_countdown, index, start_timestamp, diff_timestamp, &prize, first_game, &pool.clone()).await?;

                            start_timestamp = end_timestamp;
                            break;
                        }
                    }
                    
                }

            } else { 
                
                // **********************
                // no previous game found.
                // so, we do a free loop and keep coming in this to add the game, no bother if it's group or single
                // the same game in the group would be same start_timestamp because we have handled it at the || CHECKPOINT: re-use previous_start_timestamp || above.
                // **********************
                if !game.set_is_group {
                    previous_set_duration_countdown = get_next_set_countdown(previous_set_duration_countdown, game.game_duration_minutes, game.game_duration_hours, game.game_duration_days);
                }
                let end_timestamp = process_add_current_game(previous_set_duration_countdown, index, start_timestamp, diff_timestamp, &prize, &game, &pool.clone()).await?;

                previous_start_timestamp = start_timestamp;
                start_timestamp = end_timestamp;

            }

            // remember the  group_id as previous_group_id so that next item can refer to it.
            if game.set_is_group {
                previous_group_id =  game.group_id;
                previous_group_duration_countdown = previous_set_duration_countdown;
            }

            index = index+1;
        }
        
        
    }
    
    
    Ok(())
}

async fn process_add_current_game(set_duration_countdown: i32, index: i64, start_timestamp: i64, diff_timestamp: i64, prize: &prize::Prize, active_game: &prize::PrizeActiveSmall, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<i64, Box<dyn std::error::Error>> {
    let mut end_timestamp = start_timestamp + active_game.game_duration_days as i64 * 86400 + active_game.game_duration_hours as i64 * 3600 + active_game.game_duration_minutes as i64 *  60;
    if prize.type_id == 4 {
        end_timestamp = end_timestamp + diff_timestamp;
    }

    let temp_end_timestamp = end_timestamp;

    let config = config::get_configuration();
    let timezone_seconds = prize.timezone * (3600 as f64);
    let start_timestamp = start_timestamp + (config.server_timezone as i64 * 3600) - (timezone_seconds as i64);
    let end_timestamp = end_timestamp + (config.server_timezone as i64 * 3600) - (timezone_seconds as i64);

    if start_timestamp <= 0 {
        println!("=====================  BAD BUG ===================== {} ", SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs());
        panic!("==== generate_current_games.  Error: start_timestamp <= 0 ====");
    }

    //append to db.current_game
    let cg = CurrentGame {
        id: 0,
        prize_id: prize.id,
        tour_id: active_game.tour_id,
        set_id: active_game.set_id,
        tsg_id: active_game.tsg_id,
        game_id: active_game.game_id,
        start_timestamp: UNIX_EPOCH + Duration::new(start_timestamp as u64, 0),
        end_timestamp: UNIX_EPOCH + Duration::new(end_timestamp as u64, 0),
        index: index,
        set_duration_countdown: set_duration_countdown
    };

    println!("== ||||| add_current_game ||||| ==");

    //println!("prize_id = {}", prize.id);
    //if prize.id == 37 {
    //    println!("===== DEBUG HERE ===== add_current_game ***********!!!!!! ");
    //}

    match prize::Prize::add_current_game(cg, &pool.clone()).await {
        Ok(_) => Ok(temp_end_timestamp),
        Err(error) => panic!("==== generate_current_games.add_current_game Error: {}.", error),
    }

}

async fn process_closing(prize: &prize::Prize, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<bool, Box<dyn std::error::Error>> {
    //For closing use WeightedIndex
    //https://docs.rs/rand/0.8.3/rand/distributions/weighted/struct.WeightedIndex.html
    let prize_id = prize.id;
    let prize_type_id = prize.type_id;

    if prize.type_id == 4 {
        // Automated Entry, everyone who played
        let scheduled_on = prize.scheduled_on.duration_since(UNIX_EPOCH).unwrap().as_secs();
        let scheduled_on = UNIX_EPOCH + Duration::new(scheduled_on, 0);

        match prize::Prize::list_all_prize_pool_users_tickets(scheduled_on, &pool.clone()).await {
            Ok(items) => {
                
                if items.len() > 0 {
    
                    let mut rng = thread_rng();
                    let dist = WeightedIndex::new(items.iter().map(|item| item.1)).unwrap();
                    
                    let winner_user_id: i64 = items[dist.sample(&mut rng)].0;
                    println!("Winner {}", winner_user_id);
        
                    //winner found, set is_closed for prize_pool
                    match prize::Prize::close_prize_pool(prize_id, &pool.clone()).await{
                        Ok(n) => {
                            println!("Rows Affected = {}", n);
                        },
                        Err(error) => panic!("==== process_closing.close_prize_pool Error: {}.", error),
                    };
                    
                    match winner::Winner::add(prize_id, winner_user_id, &pool.clone()).await {
                        Ok(n) => {
                            println!("Add Winner, Success {}.", n);
                        },
                        Err(error) => panic!("==== winner.add Error: {}.", error),
                    };
        
                    let prize_tickets_collected = prize::Prize::get_current_tickets_collected(prize_id, &pool.clone()).await?;
                    match notify_closing("Prize Closing", 
                        format!("The Winner of Prize: {}, is winner_user_id: {}", prize_id, winner_user_id).as_str(), prize_id.to_string().as_str(), 
                        prize_type_id.to_string().as_str(), 
                        winner_user_id.to_string().as_str(), prize_tickets_collected.to_string().as_str()).await {
                        Ok(_) => {},
                        Err(e) => {
                            checker::Checker::add_error(checker::ErrorLog {
                                module_id: 201,
                                detail: format!("{}", e),
                            }, &pool).await?;
                            println!("Error notify_closing {}", e);
                        }
                    }
                }
                
                Ok(true)
            },
            Err(error) => panic!("==== process_closing.list_all_prize_pool_users_tickets Error: {}.", error),
        }


    } else {
        match prize::Prize::list_prize_pool_users_tickets(prize_id, &pool.clone()).await{
            Ok(items) => {
    
                if items.len() > 0 {
    
                    let mut rng = thread_rng();
                    let dist = WeightedIndex::new(items.iter().map(|item| item.1)).unwrap();
                    
                    let winner_user_id: i64 = items[dist.sample(&mut rng)].0;
                    println!("Winner {}", winner_user_id);
        
                    //winner found, set is_closed for prize_pool
                    match prize::Prize::close_prize_pool(prize_id, &pool.clone()).await{
                        Ok(n) => {
                            println!("Rows Affected = {}", n);
                        },
                        Err(error) => panic!("==== process_closing.close_prize_pool Error: {}.", error),
                    };
                    
                    match winner::Winner::add(prize_id, winner_user_id, &pool.clone()).await {
                        Ok(n) => {
                            println!("Add Winner, Success {}.", n);
                        },
                        Err(error) => panic!("==== winner.add Error: {}.", error),
                    };
        
                    let prize_tickets_collected = prize::Prize::get_current_tickets_collected(prize_id, &pool.clone()).await?;
                    match notify_closing("Prize Closing", 
                        format!("The Winner of Prize: {}, is winner_user_id: {}", prize_id, winner_user_id).as_str(), 
                        prize_id.to_string().as_str(), 
                        prize_type_id.to_string().as_str(), 
                        winner_user_id.to_string().as_str(),
                        prize_tickets_collected.to_string().as_str()
                    ).await {
                        Ok(_) => {},
                        Err(e) => {
                            checker::Checker::add_error(checker::ErrorLog {
                                module_id: 201,
                                detail: format!("{}", e),
                            }, &pool).await?;
                            println!("Error notify_closing {}", e);
                        }
                    }
                }
                
                Ok(true)
    
            },
            Err(error) => panic!("==== process_closing.list_prize_pool_users_tickets Error: {}.", error),
        }
    }
    
    
}

async fn notify_closing(title: &str, body: &str, prize_id: &str, prize_type_id: &str, winner_user_id: &str, prize_tickets_collected: &str) -> Result<bool, reqwest::Error> {
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
            "msg_type": "300", // to everyone, notify during the Prize ending/closing
            "prize_id": prize_id, 
            "prize_type_id": prize_type_id,
            "winner_user_id": winner_user_id,
            "prize_tickets_collected": prize_tickets_collected,
            "timestamp": format!("{}", timestamp).as_str()
        },
        "to": "/topics/prize_closing"
    }))
    .send()
    .await?
    .json()
    .await?;
  
  
    println!("{:#?}", echo_json);
    
    Ok(true)
  
}
  