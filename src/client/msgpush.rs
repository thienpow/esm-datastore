
mod config;

#[tokio::main]
async fn main() -> Result<(), reqwest::Error> {
    let config = config::get_configuration();

    let echo_json: serde_json::Value = reqwest::Client::new()
    .post("https://fcm.googleapis.com/fcm/send")
    .header("authorization", format!("key={}", config.fcm_key))
    .json(&serde_json::json!({
        "message": {
            "topic": "Prize Closing",
            "notification" : {
                "body" : "body text",
                "title": "title test"
            }
        },
        "condition": "!('anytopicyoudontwanttouse' in topics)"
        //"to": "/topics/all"
    }))
    .send()
    .await?
    .json()
    .await?;

    println!("{:#?}", echo_json);
    
    Ok(())
}