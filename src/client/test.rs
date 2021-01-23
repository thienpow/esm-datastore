use jsonwebtoken::decode;
use jsonwebtoken::DecodingKey;
use jsonwebtoken::Validation;
use jsonwebtoken::Algorithm;

use serde::Deserialize;
use std::str::FromStr;

#[derive(Debug, Deserialize)]
pub struct Claims {
    // The audience the token was issued for
    pub aud: String,
    // The expiry date -- as epoch seconds
    pub exp: i64,
    // The token issuer
    pub iss: String,
    // The subject the token refers to
    pub sub: String,
    // Issued at -- as epoch seconds
    pub iat: i64,
}

#[derive(Debug)]
pub enum ServiceError {

    Expired,

    Denied,

    InternalServerError,

    BadRequest(String),

}

pub fn validate_token_google(token: &str, _: String) -> Result<bool, ServiceError> {

  let algorithm = match Algorithm::from_str("RS256") {
    Ok(alg) => alg,
    Err(_error) => return Err(ServiceError::InternalServerError),
  };

  let mut validation = Validation::new(algorithm);
  validation.set_audience(&[&"esports-mini"]);
  validation.iss = Some("https://securetoken.google.com/esports-mini".to_string());
  println!("validation === {:?}", validation);

  let n = "w8sjrF2P2B9g0fGDGcvr9EKQIy9bXx8ZfBK72Kcu4XA_SpeZUxuPTzPnyNoHNVNNS1_gpvwZlmByuO2aOSFcQ6J8GnngZwl6Yp-V-cuCWIvl8bAp4WNw9R6tD9GnPzoWsqdWh8iwzkgXo7nbXo_cM0mTkOK_bTUQHFkldLGjj4rTzknpGqAwCKa4PFLNH_WuHul5BPlXPxxF9Gdxodgyp42wk8L4ZUW1uEuuPVHBmbgayNebArdnbJviHYMnZNXMD6QTXqUF828Q_Vh0bxU0WO3YIc3_ORhUFkmPpsGoVACu1BkjTfR-RzN8p4rt0sFvPPVdm5ioXobgMgSbTqSa7Q";
  let e = "AQAB";
  let key = DecodingKey::from_rsa_components(n, e);

  //println!("key === {:?}", key);
  match decode::<Claims>(token, &key, &validation) {
    Ok(c) => {

      println!("{:?}", c);
      Ok(true)
    },
    Err(e) => {
      println!(" wtf!!! {:?}", e);
      Ok(false)
    }
  }
  
}


#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
  /*
  validate_token_google(
    "eyJhbGciOiJSUzI1NiIsImtpZCI6IjA4MGU0NWJlNGIzMTE4MzA5M2RhNzUyYmIyZGU5Y2RjYTNlNmU4ZTciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiVGhpZW4gUG93IENob25nIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdoc2wwc193QlgtcDUzTEpFYlltTjUydzlCdTRDa3JZN3ZmM2JvTkFnIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2VzcG9ydHMtbWluaSIsImF1ZCI6ImVzcG9ydHMtbWluaSIsImF1dGhfdGltZSI6MTYwOTQzOTU3MSwidXNlcl9pZCI6IlM3N3JySDhOaGFmdllhWFRWc2cwTFdlOHNQdjEiLCJzdWIiOiJTNzdyckg4TmhhZnZZYVhUVnNnMExXZThzUHYxIiwiaWF0IjoxNjA5NTY4NDUxLCJleHAiOjE2MDk1NzIwNTEsImVtYWlsIjoidGhpZW5wb3dAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDc4ODg4MDQ2NDUyNDA3NDU4NzYiXSwiZW1haWwiOlsidGhpZW5wb3dAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.GYipWc9g4BJxQK_LgAc19j_Oc3RjjbYeSZIh2uhQg4XQW18kpBa6cupCZordAeD19vDsHb_S4MQ-BrEt1Vzo_Dz4xN_FOBtJcbWPDiQxFscUL9sDGboMzCz-2YfklUTnpkW5I_YyqVUI1QXY7q8ukr648uV1jix_R1Ir1phapOdGtBpJlRg1fRjYLXj5qSA_NRRGCBmE5k5PZT17OZJSOIBHwKYS21UIx7nMNICp3WoKEnvYBo_dATmbXiFBhi6tTpnEzAQxAxA9bWHHuYUEQvuDGJTaPJm99IcxYKyZJOlfITXqMMsYJQU6X4c5cahNpP3DA7YWvMoxqXVHYGGAEg", 
    "".to_string()
  );
  */
  Ok(())
}