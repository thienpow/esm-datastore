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


        //TODO: add a loop to current_game table and do closing, to find out the leaderboard and tickets award and set into prize_pool
        // check if end_timestamp < now, meaning already past, then do the closing.


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
