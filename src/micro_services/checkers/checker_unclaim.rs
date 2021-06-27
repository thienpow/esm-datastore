//use std::thread;

use std::{fs, thread, time};
use std::time::{
    SystemTime, 
    UNIX_EPOCH
};

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

        let time_wait = time::Duration::from_secs(config.checker_time_wait);
        thread::sleep(time_wait);
    }

}


async fn main_loop(pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<(), Box<dyn std::error::Error>> {

    let start = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_millis();

    match esm_db::models::config::Config::get_days_to_claim(&pool.clone()).await {
        Ok(days_to_claim) => {
  
          match winner::Winner::set_all_expired_unclaimed(days_to_claim, &pool.clone()).await {
            Ok(_) => {},
            Err(e) => panic!("== set_all_expired_unclaimed Error: {:?}.", e),
          }
        },
        Err(e) => panic!("== get_days_to_claim Error: {:?}.", e),
    };
  
    let stop = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_millis();

    let diff = stop - start;
    println!("checker_unclaim Time Spent = {}ms", diff);

    let _ = match checker::Checker::update_unclaim_checked(diff as i64, &pool.clone()).await {
        Ok(_) => (),
        Err(e) => panic!("== update_unclaim_checked Error: {:?}.", e),
    };

    Ok(())
}