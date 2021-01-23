
use crate::errors::ServiceError;

use jsonwebtoken::{ 
  decode, Validation, EncodingKey, DecodingKey,
  encode, Header,
};

use serde::{Deserialize, Serialize};

extern crate chrono;
use chrono::{Utc};

#[derive(Debug, Serialize, Deserialize)]
struct Claims {
    user: String,
    role: i32,
    sub: String,
    company: String,
    exp: usize,
}


pub fn issue_token(user: String, role: i32) -> Result<String, ServiceError> {

  //2629800 = 30 days
  let now = Utc::now();
  let nowplus30 = now.timestamp() + 3600;
  
  let my_claims = Claims { user: user, role: role, sub: "esm".to_string(), company: "esm".to_string(), exp: nowplus30 as usize };
  let key = &EncodingKey::from_secret("somebadasskey7787thisbommatafaka".as_ref());

  match encode(&Header::default(), &my_claims, key) {
    Ok(t) => Ok(t),
    Err(_) => Err(ServiceError::Denied),
  }

}

/*
*  validate_token should be used in other microservice to verify the token issued from this auth service
*/

pub fn validate_token_admin(token: &str) -> Result<bool, ServiceError> {

  let key = &DecodingKey::from_secret("somebadasskey7787thisbommatafaka".as_ref());
  let validation = Validation { sub: Some("esm".to_string()), ..Validation::default() };

  match decode::<Claims>(&token, key, &validation) {
    Ok(c) => {
      let now = Utc::now();
      if c.claims.exp as i64 <= now.timestamp() {
        return Err(ServiceError::Expired);
      }
      if c.claims.role > 300 {
        return Err(ServiceError::Denied);
      }
      Ok(true)
    },
    Err(_) => Err(ServiceError::Denied),
  }
  
}


