use std::env;

#[derive(Debug)]
pub struct Configuration {
    pub db_cert_path: String,
    pub db_conn_string: String,
    pub server_timezone: u64,
    pub checker_cg_time_wait: u64,
    pub checker_lb_time_wait: u64,
    pub checker_sb_time_wait: u64,
    pub checker_uc_time_wait: u64,
    pub max_notify: i32,
    pub max_history: i32,
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
        db_cert_path: expect_env_var("DB_CERT_PATH", "deploy/certs/out/CA.crt"),
        db_conn_string: expect_env_var("DB_CONN_STRING", "postgresql://doadmin:tf45h3hpz6xstby6@esm-api.aadi.my:25432/postgres?sslmode=require"),
        server_timezone: expect_env_var("SERVER_TIMEZONE", "8").parse::<u64>().unwrap(),
        checker_cg_time_wait: expect_env_var("CHECKER_CG_TIME_WAIT", "60").parse::<u64>().unwrap(),
        checker_lb_time_wait: expect_env_var("CHECKER_LB_TIME_WAIT", "30").parse::<u64>().unwrap(),
        checker_sb_time_wait: expect_env_var("CHECKER_SB_TIME_WAIT", "60").parse::<u64>().unwrap(),
        checker_uc_time_wait: expect_env_var("CHECKER_UC_TIME_WAIT", "60").parse::<u64>().unwrap(),
        max_notify: expect_env_var("MAX_NOTIFY", "200").parse::<i32>().unwrap(),
        max_history: expect_env_var("MAX_HISTORY", "200").parse::<i32>().unwrap(),
        fcm_key: expect_env_var("FCM_KEY", "AAAAzT8d8lM:APA91bHtFSHVIBiiSDUWSaUkrYNrcBSyhMY_JBYSeaaoWpkrxSgBO-7xgHtySH3qfTvsgHHTIsrh_SwwirCvTTuOWBl0--JhddEV8MFnEgWuGRPOXPVyTBHym5k9gh8WrCxr-rY13Y54"),
    }
}
