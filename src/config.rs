use std::env;

#[derive(Debug)]
pub struct Configuration {
    pub listen_on: String,
    pub db_cert_path: String,
    pub db_conn_string: String,
    pub before_login_token: String,
    pub server_timezone: u64,
    pub fcm_key: String,
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
        db_cert_path: expect_env_var("DB_CERT_PATH", "cert/do_cert.cer"),
        db_conn_string: expect_env_var("DB_CONN_STRING", "postgresql://doadmin:tf45h3hpz6xstby6@db-postgresql-dev-sgp1-32064-do-user-7964287-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require"),
        before_login_token: expect_env_var("BEFORE_LOGIN_TOKEN", "Bearer before_login_token"),
        server_timezone: expect_env_var("SERVER_TIMEZONE", "8").parse::<u64>().unwrap(),
        fcm_key: expect_env_var("FCM_KEY", "AAAAzT8d8lM:APA91bHtFSHVIBiiSDUWSaUkrYNrcBSyhMY_JBYSeaaoWpkrxSgBO-7xgHtySH3qfTvsgHHTIsrh_SwwirCvTTuOWBl0--JhddEV8MFnEgWuGRPOXPVyTBHym5k9gh8WrCxr-rY13Y54"),
    }
}
