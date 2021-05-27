
mod config;

#[tokio::main]
async fn main() -> Result<(), reqwest::Error> {
    let config = config::get_configuration();

    let echo_json: serde_json::Value = reqwest::Client::new()
    .post("https://fcm.googleapis.com/fcm/send")
    .header("authorization", format!("key={}", config.fcm_key))
    .json(&serde_json::json!({
    
        //"topic": "Prize Closing",
        "notification" : {
            "body" : "body text",
            "title": "title test"
        },
    
        //"condition": "!('anytopicyoudontwanttouse' in topics)"
        "to": "dSoILFz6RNxmlUn1i0Clf9:APA91bETcTH7AQerhnfaDosDpjA58NbGQ9qiHX6RIzZ1OKMsNlaaf49ZEBvS67FaIpcBLG9MAjk8-gXUDyBnPyI23ZWG4pYB85C0DhJFYi7JzJfjRae5Cn3jLwsNVyy_aWKC4uUQ5G5X"
    }))
    .send()
    .await?
    .json()
    .await?;

    println!("{:#?}", echo_json);
    
    Ok(())
}