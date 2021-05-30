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
        
        let start = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_millis();

        //daily checker for users' who subscribed and yet to be rewarded with daily_gem and add the gem amount to user's gem
        match user::User::list_unrewarded_subscriber(&pool.clone()).await {
            Ok(users) => {
                //retrieve users that's subscribed and not yet updated with daily_gem
                for user in users {

                    user::User::reward_gem(user.id, user.daily_gem, &pool.clone()).await?;
                    notify("Daily Gem Reward", format!("Your Subscription Reward has just reloaded: {} GEMS!", user.daily_gem).as_str(), user.daily_gem.to_string().as_str(), user.msg_token.as_str()).await?;
                }

            },
            Err(e) => panic!("list_subscriber error: {:?}", e),
        }
        
    

        let stop = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_millis();

        let diff = stop - start;
        println!("checker_subscriber Time Spent = {}ms", diff);

        let _ = match checker::Checker::update_subscriber_checked(diff as i64, &pool.clone()).await {
            Ok(_) => (),
            Err(e) => panic!("== update_subscriber_checked Error: {:?}.", e),
        };
        let time_wait = time::Duration::from_secs(config.checker_time_wait);
        thread::sleep(time_wait);
    }

}


pub async fn notify(title: &str, body: &str, daily_gem: &str, token: &str) -> Result<bool, reqwest::Error> {
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
            "daily_gem": daily_gem
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