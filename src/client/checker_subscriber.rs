//use std::thread;
use std::time::Duration;
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
use esm_db::models::prize::*;

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

        //TODO: make a daily checker for users' who subscribed and add the gem amount to user's gem
        /*
            //retrieve users that's subscribed and not yet updated with daily_gem
            for user in subscribed_users {
                if user.subscription_id > 0 {
                    let daily_gem = user.daily_gem;
                    let new_gem_balance = user.gem_balance + daily_gem;
                    
                    match user::User::update_subscribed_gem_balance(new_gem_balance, now).await {

                    }
                }
            }
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
