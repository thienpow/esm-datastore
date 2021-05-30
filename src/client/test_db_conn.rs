use std::time::{SystemTime};


use bb8::{Pool};
use bb8_postgres::PostgresConnectionManager;
use postgres_native_tls::MakeTlsConnector;
//use esm_db::models::*;

//use bb8_postgres::tokio_postgres::config::Config;
use native_tls::{Certificate, TlsConnector};

use std::{
  fs,
};

mod config;


#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

  let config = config::get_configuration();

  let cert = fs::read(config.db_cert_path)?;
  let cert = Certificate::from_pem(&cert)?;
  let connector = TlsConnector::builder().add_root_certificate(cert).build()?;
  let tls = MakeTlsConnector::new(connector);


  let pg_mgr = PostgresConnectionManager::new_from_stringlike(config.db_conn_string, tls).unwrap();
  let pool = match Pool::builder().build(pg_mgr).await {
      Ok(pool) => pool,
      Err(e) => panic!("builder error: {:?}", e),
  };

  match foo(&pool.clone()).await {
    Ok(n) => {
      println!("user {}", n);
    },
    Err(e) => panic!("get error: {:?}", e),
  };
  

  
  
  Ok(())
}

pub struct User {
  pub id: i64,
  pub username: String,
  pub passhash: String,
  pub email: String,
  pub phone: String,
  pub firstname: String,
  pub lastname: String,
  pub created_on: SystemTime,
  pub last_login: SystemTime,
  pub role_id: i32,
  pub status: i32,
  pub gem_balance: i32,
  pub social_link_fb: String,
  pub social_link_google: String,
  pub avatar_url: String,
  pub exp: i32,
  pub full_name: String,
  pub address: String,
  pub city: String,
  pub state: String,
  pub zip_code: String,
  pub country: String,
  pub country_code: i32,
  pub is_notify_allowed: bool,
  pub is_notify_new_reward: bool,
  pub is_notify_new_tournament: bool,
  pub is_notify_tour_ending: bool,
  pub nick_name: String,
  pub msg_token: String,
  pub subscription_id: i64,
  pub sub_id: String,
  pub one_time_multiplier: f64, 
  pub daily_gem: i32, 
  pub daily_multiplier: f64, 
  pub one_time_is_firstonly: bool, 
  pub sub_daily_timestamp: SystemTime,
}

pub async fn foo(pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, anyhow::Error> {
  let conn = pool.get().await?;

  let stmt = conn.prepare("SELECT 1;").await?;
  let n = conn.execute(&stmt, 
              &[]).await?;

  Ok(n)
}

