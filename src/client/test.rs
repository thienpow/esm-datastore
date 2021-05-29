use std::time::{SystemTime};


use bb8_postgres::tokio_postgres;
use bb8::{Pool};
use bb8_postgres::PostgresConnectionManager;
use postgres_native_tls::MakeTlsConnector;
use bb8_postgres::tokio_postgres::config::{Config, SslMode};

use tokio_postgres::tls::{MakeTlsConnect, TlsConnect};

use tokio::net::TcpStream;

use esm_db::models::*;

//use bb8_postgres::tokio_postgres::config::Config;
use native_tls::{Certificate, TlsConnector};

use std::{
  fs,
  fs::File,
  io::BufReader,
};
use std::path::Path;


#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

  let ca_cert_text = "-----BEGIN CERTIFICATE-----
  MIIEQTCCAqmgAwIBAgIUG2plaxKq9CIWFK+fLV7nknVIs8swDQYJKoZIhvcNAQEM
  BQAwOjE4MDYGA1UEAwwvYjMxYmZiNDUtNmVmOS00ZTU0LTkzYTctMWM2M2VkMGFh
  MDllIFByb2plY3QgQ0EwHhcNMjEwMTAyMTYxNDA1WhcNMzAxMjMxMTYxNDA1WjA6
  MTgwNgYDVQQDDC9iMzFiZmI0NS02ZWY5LTRlNTQtOTNhNy0xYzYzZWQwYWEwOWUg
  UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAPn4NVj9
  h5pw6npLwaqOaqGttrSE/e1D2UT26pdgxE2H+3kTFzwmPj++QttK6k7HmN4ViEB5
  /z0RCr8IqKlGYAO6Yg0PzE0uz/vMK+/v6s0cUxamfV1dgZtaPQx7DxFwoO/OFGIf
  et9J10j+ku4q1PvowJJcBolYbP39ZKDE71gIf/sYIgjFnP2u7dedOz14MjA9CQHa
  s1F5s4uZvsb02RYpzsDdoUIsHOAfL6Csvym9PcbJMracoYorcej8dREvEmZ+FzIV
  iXPPphgGewb53k2PCVzjrBhw7oksJnMdheXNIFYGmOkyJI1hyr60rZue5V6UYAOC
  IZ6zJLIRn9xkLz0cG2uX+pSkfPWIQf9jIi7qVJPRW9iVZ2daK4Kxo/nXpxKxaVhS
  cCvoZnnXgwjahpmDBOf0pAETs5yzQibkPBygKtAqqkCbzicIqTKZonBbZlv4dP5s
  EOuOvcB2MWf+lWBfL6YbNSRYHqyVZwF7aNArxDxJITpZJ3jesZ7yw41L5wIDAQAB
  oz8wPTAdBgNVHQ4EFgQU2q00JxL1NHypNgeKuauDStYvPzgwDwYDVR0TBAgwBgEB
  /wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBABrPci7Izn03N9gw
  gP/QI3f2DidGXpY4I/O2D6vVmW/K16DNPBW068lNk/fuXDpeWuYe0vttWIT5HqoB
  9YDMEUAIFTJC6VTA8f4F4oj4qnDZa1eZW0KiP5t+kTftC5SNkt9v9GsPPjgjLOKC
  gL/GiSr07k2QKL143266swIVfSPerMgG2/8hzx0Gc/Ndn5HJgpuHJZ45lZTKk5aw
  04ssJ2xKfolLVOa3ANYSiMaLTraPPQLVfiHm/PRqvFxZQbESd47jJYTIEvKfR4bv
  LPX3L1w2olvQjXFDEgMRzLmUQZJH0tMxXsLXgKovAhS2mdVgY1MnbrIvPcoQVatD
  I9kEMwPrGoO36oDWTw6UfOXSAZH5Ct6GdoeGcEolsk+2pZE+/MOzksuVgfWk6Kf+
  /nr8JNnr8M2SP3oduFPodWgDa4E4Xhj44J6CXtmDJz5r3H9/OPT0kjUnxZ9RyIur
  fYvwUI0z9ULGQFtB8dxKFtlAreraBwr27sCWEaNGCH4IJvxDHg==
  -----END CERTIFICATE-----".to_string();


  // postgresql://doadmin:tf45h3hpz6xstby6@db-postgresql-dev-sgp1-32064-do-user-7964287-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require
  /*
  let mut tls_config = Config::new();//  
  
  tls_config.dbname("esmstore");
  tls_config.user("doadmin");
  tls_config.password("tf45h3hpz6xstby6");
  tls_config.host("db-postgresql-dev-sgp1-32064-do-user-7964287-0.b.db.ondigitalocean.com");
  tls_config.port(25060);
  tls_config.ssl_mode(SslMode::Require);
*/


  let cert = fs::read("./../cert/cert.cer")?;
  let cert = Certificate::from_pem(&cert)?;
  let connector = TlsConnector::builder().add_root_certificate(cert).build()?;
  let tls = MakeTlsConnector::new(connector);

/*
  username = doadmin
  password = tf45h3hpz6xstby6
  host = private-db-postgresql-dev-sgp1-32064-do-user-7964287-0.b.db.ondigitalocean.com
  port = 25060
  database = defaultdb
  sslmode = require
*/

  //let builder = "postgresql://doadmin:tf45h3hpz6xstby6@db-postgresql-dev-sgp1-32064-do-user-7964287-0.b.db.ondigitalocean.com:25060/esmstore?sslmode=require".parse::<tokio_postgres::Config>().unwrap();
  //builder.connect_raw()
  let (client, connection) = tokio_postgres::connect("postgresql://doadmin:tf45h3hpz6xstby6@private-db-postgresql-dev-sgp1-32064-do-user-7964287-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require", tls).await?;
  tokio::spawn(async move {
    if let Err(e) = connection.await {
      eprintln!("connection error: {}", e);
    }
  });
  /*
  let pg_mgr = PostgresConnectionManager::new_from_stringlike("postgresql://doadmin:tf45h3hpz6xstby6@db-postgresql-dev-sgp1-32064-do-user-7964287-0.b.db.ondigitalocean.com:25060/esmstore?sslmode=require", tls).unwrap();
  let pool = match Pool::builder().build(pg_mgr).await {
      Ok(pool) => pool,
      Err(e) => panic!("builder error: {:?}", e),
  };

  let n = match foo(&pool.clone()).await {
    Ok(n) => {
      println!("user {}", n);
    },
    Err(e) => panic!("get error: {:?}", e),
  };
  */

  
  
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
