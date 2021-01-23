use std::env;

#[derive(Debug)]
pub struct Configuration {
    pub listen_on: String,
    pub db_conn_string: String,
    pub before_login_token: String,
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
        listen_on: expect_env_var("LISTEN_ON", "0.0.0.0:50051"),
        db_conn_string: expect_env_var("DB_CONN_STRING", "postgresql://postgres:notezpass99~-~@159.65.137.25:5432/esmstore"),
        before_login_token: expect_env_var("BEFORE_LOGIN_TOKEN", "Bearer before_login_token"),
    }
}
