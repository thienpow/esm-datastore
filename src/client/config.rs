use std::env;

#[derive(Debug)]
pub struct Configuration {
    pub db_conn_string: String,
    pub server_timezone: u64,
    pub checker_time_wait: u64,
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
        db_conn_string: expect_env_var("DB_CONN_STRING", "postgresql://postgres:notezpass99~-~@159.65.137.25:5432/esmstore"),
        server_timezone: expect_env_var("SERVER_TIMEZONE", "8").parse::<u64>().unwrap(),
        checker_time_wait: expect_env_var("CHECKER_TIME_WAIT", "60").parse::<u64>().unwrap(),
        fcm_key: expect_env_var("FCM_KEY", "AAAAzT8d8lM:APA91bHtFSHVIBiiSDUWSaUkrYNrcBSyhMY_JBYSeaaoWpkrxSgBO-7xgHtySH3qfTvsgHHTIsrh_SwwirCvTTuOWBl0--JhddEV8MFnEgWuGRPOXPVyTBHym5k9gh8WrCxr-rY13Y54"),
    }
}
