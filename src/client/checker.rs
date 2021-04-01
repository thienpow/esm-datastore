//use std::thread;
//use std::time::Duration;

use std::time::{
    //SystemTime, 
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

    let prizes = match prize::Prize::list_active(&pool_db.clone()).await {
        Ok(prizes) => prizes,
        Err(error) => panic!("Error: {}.", error),
    };
    

    for prize in prizes {
        let _scheduled_on = prize.scheduled_on.duration_since(UNIX_EPOCH).unwrap().as_secs();

        //TODO: check the following requirements,
        // 1: update the published prize that is suppose to be running to "running" for the prize_status
        // 2: closing the prize, update the prize_status to closing, and generate winners
        // 3: finally, close the prize, update the prize status to "closed" after winners is generated.
        // 4: only if the prize_status is closed then only allowed user to claim.

    }  
    

    Ok(())
}