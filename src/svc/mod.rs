
pub mod esmapi;
pub mod adminapi;

use tonic::{
  metadata::MetadataMap,
  Status
};


use crate::jwk::{
  JwkAuth,
};

use crate::jwt;
//use reqwest::StatusCode;
//use reqwest::Response;
//use reqwest::header::{HeaderMap, HeaderValue, AUTHORIZATION};

pub async fn notify_all(title: &str, body: &str) -> Result<bool, reqwest::Error> {

  Ok(true)

}

pub async fn notify(title: &str, body: &str, token: &str) -> Result<bool, reqwest::Error> {

  let echo_json: serde_json::Value = reqwest::Client::new()
  .post("https://fcm.googleapis.com/fcm/send")
  .header("authorization", "key=AAAAzT8d8lM:APA91bHtFSHVIBiiSDUWSaUkrYNrcBSyhMY_JBYSeaaoWpkrxSgBO-7xgHtySH3qfTvsgHHTIsrh_SwwirCvTTuOWBl0--JhddEV8MFnEgWuGRPOXPVyTBHym5k9gh8WrCxr-rY13Y54")
  .json(&serde_json::json!({
      "data" : {
        "title": title,
        "body" : body,
        //"key_1" : "Value for key_1",
        //"key_2" : "Value for key_2",
        //"messaround": "abcxyz",
      },
    "to": token
      //"to": "f18gb342bpbt1MWR6goOAJ:APA91bEGMyhFt9ZcmMI4BBrhgb_emtALklyxDz3kab7h0a4j9qF4buSqRXKzoh6aYNVo8u4P0lqvHV-B2a96vOQv4v4TYtIydnbCZ4lH-VCsB4K-MoaOid6nKakOF-aAkUMfxB6gF7"
    
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
  
  //TODO: use reqwest to check the token from http://127.0.0.1:8000/user
  /*
  let token = meta.get("authorization").unwrap().to_str().unwrap();
  //let uid = meta.get("uid").unwrap();

  let token_value = format!("Bearer {}", token);
  let mut headers = HeaderMap::new();
  headers.insert(AUTHORIZATION, HeaderValue::from_str(&token_value).unwrap());

  let client = reqwest::Client::new();
  let resp: Response = client.get("http://127.0.0.1:8000/user").headers(headers).send().await.unwrap();

  match resp.status() {
    StatusCode::OK => {
      //println!("success!");
      Ok(true)
    },
    s => Err(Status::permission_denied(format!("{:?}", s))),
  }
  */
}

/*
pub async fn check_is_user_then_admin(meta: &MetadataMap, jwk: &JwkAuth) ->  Result<bool, Status> {

  match check_is_user(&meta, &jwk).await {
    Ok(true) => Ok(true),
    _  => {
      //if normal user failed, try check if is admin
      match check_is_admin(&meta).await {
        Ok(true) => Ok(true),
        _ => return Err(Status::permission_denied("Not Allowed to access this feature."))
      }
    }
  }

}
*/


pub async fn check_is_exact_user(meta: &MetadataMap, jwk: &JwkAuth) ->  Result<bool, Status> {
  
  let token = meta.get("authorization").unwrap().to_str().unwrap().to_string();
  let uid = meta.get("uid").unwrap().to_str().unwrap().to_string();

  match jwk.verify(&token) {
    Some(t) => {
      if t.claims.sub != uid {
        return Err(Status::permission_denied("Not the right user  to do this!"))
      }
      Ok(true)
    },
    _ =>  Err(Status::permission_denied(""))
  }
}