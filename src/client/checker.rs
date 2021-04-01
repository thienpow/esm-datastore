//use std::thread;
//use std::time::Duration;

//use std::time::{SystemTime, UNIX_EPOCH};

//use tokio_postgres;
//use bb8::{Pool};
//use bb8_postgres::PostgresConnectionManager;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

    /*
    let prizes = match db::prize::Prize::list_active(&pool.clone()).await {
        Ok(prizes) => prizes,
        Err(error) => panic!("Error: {}.", error),
    };
    

    for prize in prizes {
        let scheduled_on = prize.scheduled_on.duration_since(UNIX_EPOCH).unwrap().as_secs();
    }  
    */

    Ok(())
}