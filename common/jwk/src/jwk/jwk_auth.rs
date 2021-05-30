//use crate::jwk;
use crate::jwk::{fetch_keys, Claims, JwkKeys, JwkVerifier};
use jsonwebtoken::TokenData;
use std::sync::{Arc, Mutex};
use std::time::Duration;
use std::thread;

#[derive(Clone)]
pub struct JwkAuth {
    verifier: Arc<Mutex<JwkVerifier>>,
}

impl JwkAuth {
    pub async fn new() -> JwkAuth {
        //println!("New JwkAuth");
        
        let jwk_keys: JwkKeys = match fetch_keys().await {
            Ok(keys) => keys,
            Err(_) => {
                panic!("Unable to fetch jwk keys! Cannot verify user tokens! Shutting down...")
            }
        };
        let verifier = Arc::new(Mutex::new(JwkVerifier::new(jwk_keys.keys)));

        
        let instance = JwkAuth {
            verifier: verifier.clone(),
        };

        instance.start_key_update(verifier.clone());
        instance
    }

    
    pub fn verify(&self, token: &String) -> Option<TokenData<Claims>> {
        let verifier = self.verifier.lock().unwrap();
        verifier.verify(token)
    }

    fn start_key_update(&self, verifier: Arc<Mutex<JwkVerifier>>) {

        thread::spawn(move || {
            let rt = tokio::runtime::Runtime::new().unwrap();
            rt.block_on(async {
                
                
                loop {
    
                    let delay = match fetch_keys().await {
                        Ok(keys) => {
                            let mut verifier = verifier.lock().unwrap();
                            verifier.set_keys(keys.keys);
                            println!(
                                "Updated JWK keys. Next refresh will be in {:?}",
                                keys.validity
                            );
                            keys.validity
                        },
                        Err(_) => {
                            Duration::from_secs(10)
                        }
                    };
            
                    thread::sleep(delay);
                } 

            });
        });
            
    }
    

}
