use std::env;

#[derive(Debug)]
pub struct Configuration {
    pub db_cert_path: String,
    pub db_conn_string: String,
}

#[cfg(debug_assertions)]
fn expect_env_var(name: &str, default: &str) -> String {
    return env::var(name).unwrap_or(String::from(default));
}

#[cfg(not(debug_assertions))]
fn expect_env_var(name: &str, _default: &str) -> String {
    return env::var(name).expect(&format!(
        "Environment variable {name} is not defined",
        name = name
    ));
}

pub fn get_configuration() -> Configuration {
    Configuration {
        db_cert_path: expect_env_var("DB_CERT_PATH", "deploy/certs/out/CA.crt"),
        db_conn_string: expect_env_var("DB_CONN_STRING", "postgresql://doadmin:tf45h3hpz6xstby6@esm-api.aadi.my:25433/postgres?sslmode=require"),
    }
}
