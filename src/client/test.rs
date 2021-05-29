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


pub async fn get(id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<User, anyhow::Error> {
  let conn = pool.get().await?;

  let stmt = conn.prepare("SELECT id, username, passhash, email, phone, firstname, lastname, \
  created_on, last_login, role_id, status, gem_balance, \
  social_link_fb, social_link_google, avatar_url, exp, \
  full_name, address, city, state, zip_code, country, country_code, \
  is_notify_allowed, is_notify_new_reward, is_notify_new_tournament, is_notify_tour_ending, nick_name, msg_token, \
  subscription_id, sub_id, \
  one_time_multiplier, daily_gem, daily_multiplier, one_time_is_firstonly, sub_daily_timestamp \
  FROM public.\"user\" WHERE status=1 AND id=$1;").await?;

  let row = conn.query_one(&stmt, 
              &[&id]).await?;

  let user = User {
    id: row.get(0),
    username: row.get(1),
    passhash: row.get(2),
    email: row.get(3),
    phone: row.get(4),
    firstname: row.get(5),
    lastname: row.get(6),
    created_on: row.get(7),
    last_login: row.get(8),
    role_id: row.get(9),
    status: row.get(10),
    gem_balance: row.get(11),
    social_link_fb: row.get(12), 
    social_link_google: row.get(13), 
    avatar_url: row.get(14), 
    exp: row.get(15),
    full_name: row.get(16), 
    address: row.get(17), 
    city: row.get(18), 
    state: row.get(19), 
    zip_code: row.get(20), 
    country: row.get(21), 
    country_code: row.get(22), 
    is_notify_allowed: row.get(23), 
    is_notify_new_reward: row.get(24), 
    is_notify_new_tournament: row.get(25), 
    is_notify_tour_ending: row.get(26), 
    nick_name: row.get(27),
    msg_token: row.get(28),
    subscription_id: row.get(29),
    sub_id: row.get(30),
    one_time_multiplier: row.get(31), 
    daily_gem: row.get(32), 
    daily_multiplier: row.get(33), 
    one_time_is_firstonly: row.get(34), 
    sub_daily_timestamp: row.get(35),
  };

  Ok(user)
}
