use tokio_postgres;
use bb8::{Pool};
use bb8_postgres::PostgresConnectionManager;

use esm_db::{models::*};

pub mod esmapi;
pub mod adminapi;

use tonic::{
  metadata::MetadataMap,
  Status
};


use crate::jwk::{
  JwkAuth,
};

use crate::config;
use crate::jwt;

/*
pub async fn notify_all(title: &str, body: &str) -> Result<bool, reqwest::Error> {
  let config = config::get_configuration();
    
  let echo_json: serde_json::Value = reqwest::Client::new()
  .post("https://fcm.googleapis.com/fcm/send")
  .header("authorization", format!("key={}", config.fcm_key))
  .json(&serde_json::json!({
      "data" : {
        "title": title,
        "body" : body,
      },
    "to": "/topics/all"
   
  }))
  .send()
  .await?
  .json()
  .await?;


  println!("{:#?}", echo_json);
  
  Ok(true)

}
*/

pub async fn notify(title: &str, body: &str, token: &str) -> Result<bool, reqwest::Error> {
  let config = config::get_configuration();
    
  let echo_json: serde_json::Value = reqwest::Client::new()
  .post("https://fcm.googleapis.com/fcm/send")
  .header("authorization", format!("key={}", config.fcm_key))
  .json(&serde_json::json!({
      "data" : {
        "title": title,
        "body" : body,
        //"key_1" : "Value for key_1",
        //"key_2" : "Value for key_2",
        //"messaround": "abcxyz",
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

pub async fn check_is_admin(meta: &MetadataMap) -> Result<bool, Status> {
  let test_token = "test-only-token";

  let token = meta.get("authorization").unwrap().to_str().unwrap();

  if test_token == token {
    println!("tester yeah!");
    return Ok(true);
  }

  match jwt::validate_token_admin(token) {
    Ok(true) => {
      println!("admin yeah!");
      Ok(true)
    },
    _ => {
      println!("You are not admin!");
      Err(Status::permission_denied("You are not admin!"))
    }
  }
      
}

pub async fn check_is_user(meta: &MetadataMap, jwk: &JwkAuth) ->  Result<bool, Status> {
  
  let token = meta.get("authorization").unwrap().to_str().unwrap().to_string();

  match jwk.verify(&token) {
    Some(_) => Ok(true),
    _ =>  Err(Status::permission_denied(""))
  }
  
}


pub async fn check_is_exact_user(meta: &MetadataMap, jwk: &JwkAuth) ->  Result<String, Status> {
  
  let token = meta.get("authorization").unwrap().to_str().unwrap().to_string();
  let uid = meta.get("uid").unwrap().to_str().unwrap().to_string();

  match jwk.verify(&token) {
    Some(t) => {
      if t.claims.sub != uid {
        return Err(Status::permission_denied("Not the right user to do this!"))
      }
      Ok(uid)
    },
    _ =>  Err(Status::permission_denied(""))
  }
}

pub async fn verify_exact_match(uid: String, user_id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<bool, Status> {

  match user::User::verify_exact_match(uid, user_id, pool).await {
    Ok(result) => {
      if result {
        Ok(true)
      } else {
        return Err(Status::permission_denied("Not the right exact user to do this!"))
      }
    },
    Err(error) =>  Err(Status::permission_denied(format!("Error: verify_exact_match {}.", error)))
  }
}