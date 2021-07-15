use crate::jwk;
use crate::jwk::get_max_age::get_max_age;
use crate::jwk::JwkConfiguration;
use serde::Deserialize;
use std::error::Error;
use std::time::Duration;

#[derive(Debug, Deserialize)]
struct KeyResponse {
    keys: Vec<JwkKey>,
}

#[derive(Debug, Deserialize, Eq, PartialEq)]
pub struct JwkKey {
    pub e: String,
    pub alg: String,
    pub kty: String,
    pub kid: String,
    pub n: String,
}

pub struct JwkKeys {
    pub keys: Vec<JwkKey>,
    pub validity: Duration,
}

const FALLBACK_TIMEOUT: Duration = Duration::from_secs(60);

pub async fn fetch_keys_for_config(
    config: &JwkConfiguration,
) -> Result<JwkKeys, Box<dyn std::error::Error>> {

    match reqwest::get(&config.jwk_url).await {
        Ok(http_response) => {

            let max_age = get_max_age(&http_response).unwrap_or(FALLBACK_TIMEOUT);
            let result = Result::Ok(http_response.json::<KeyResponse>().await.unwrap());
        
            return result.map(|res| JwkKeys {
                keys: res.keys,
                validity: max_age,
            });

        },
        Err(e) => panic!("Error fetch_keys_for_config: {:?}", e),
    };

}

pub async fn fetch_keys() -> Result<JwkKeys, Box<dyn Error>> {
    let config = jwk::get_configuration();
    return fetch_keys_for_config(&config).await;
}
