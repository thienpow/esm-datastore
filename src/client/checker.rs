//use std::thread;
//use std::time::Duration;

use std::time::{
    SystemTime, 
    UNIX_EPOCH
};

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


    
    let prizes = match prize::Prize::list(10000, 0, "".to_string(), 2, &pool_db.clone()).await {
        Ok(prizes) => prizes,
        Err(error) => panic!("Error: {}.", error),
    };
    
    println!("prizes={}", prizes.len().to_string());
    for prize in prizes {
            
        let scheduled_on = prize.scheduled_on.duration_since(UNIX_EPOCH).unwrap().as_secs();
        let scheduled_off = prize.scheduled_off.duration_since(UNIX_EPOCH).unwrap().as_secs();
        let timezone_seconds = prize.timezone * (3600 as f64);

        let adjusted_now = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs() - (config.server_timezone * 3600) + (timezone_seconds as u64);
        if prize.type_id == 1 || prize.type_id == 2 {
        
            //For Featured and Premium prize, need to check if the tickets_collected is smaller than tickets_required, then only allow to list
            if prize.tickets_collected <= prize.tickets_required {
              //result.push(li);
            }
    
          //type_id 3=Time Sensitive, 4=Automated Entry
        } else if prize.type_id == 3 || prize.type_id == 4 {

            //if it's Prize 3 or 4, we need to check if now is greater than or equal to scheduled_on, meaning it's started.
            if scheduled_on <= adjusted_now {

                // if is_repeat, meaning need to always show, because it never end.
                if prize.is_repeat {
                    //result.push(li);
                    println!("prize_id={}, {}", prize.id.to_string(), adjusted_now.to_string());
                } else {

                    // if not repeat, then we need to check if it's still within the duration.
                    if scheduled_off >= adjusted_now {
                        //check if prize_timebased has a record for the server_scheduled_on/off within now, if don't have then add it
                        println!("prize_id={}, {}", prize.id.to_string(), adjusted_now.to_string());
                    }
                }
                
            }
        }
        /*
        let li = PrizeDetail {
            id: prize.id,
            title: prize.title,
            subtitle: prize.subtitle,
            img_url: prize.img_url,
            content: prize.content,
            type_id: prize.type_id,
            tickets_required: prize.tickets_required,
            duration_days: prize.duration_days,
            duration_hours: prize.duration_hours,
            timezone: prize.timezone,
            scheduled_on: seconds_on as i64,
            scheduled_off: seconds_off as i64,
            is_repeat: prize.is_repeat,
            repeated_on: prize.repeated_on,
            status: prize.status,
            status_progress: prize.status_progress,
            tickets_collected: prize.tickets_collected,
        };
        */
        
        //TODO: check the following requirements,
        // 1: generate a new record into prize_timebased for prize type_id = 3 and 4

        // 1: update the published prize that is suppose to be running to "running" for the prize_status
        // 2: closing the prize, update the prize_status to closing, and generate winners
        // 3: finally, close the prize, update the prize status to "closed" after winners is generated.
        // 4: only if the prize_status is closed then only allowed user to claim.
        // 5: if user din't logGLeave, and gem was deducted, then we should return it for the user.
    }  
    
    

    Ok(())
}