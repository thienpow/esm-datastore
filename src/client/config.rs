use std::env;

#[derive(Debug)]
pub struct Configuration {
    pub db_conn_string: String,
    pub server_timezone: u64,
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
        db_conn_string: expect_env_var("DB_CONN_STRING", "postgresql://postgres:notezpass99~-~@159.65.137.25:5432/esmstore"),
        server_timezone: expect_env_var("SERVER_TIMEZONE", "8").parse::<u64>().unwrap(),
    }
}
