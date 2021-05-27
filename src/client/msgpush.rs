
mod config;

#[tokio::main]
async fn main() -> Result<(), reqwest::Error> {
    let config = config::get_configuration();

    let echo_json: serde_json::Value = reqwest::Client::new()
    .post("https://fcm.googleapis.com/fcm/send")
    .header("authorization", format!("key={}", config.fcm_key))
    .json(&serde_json::json!({
        "notification" : {
            "body" : "body text",
            "title": "title test"
        },
        "to": "/topics/tournament_ending",
        //"condition": "!('anytopicyoudontwanttouse' in topics)"
        //"to": "f0NltnhrMsA0Sn9FAl7Xp5:APA91bHKZRpEhAo3YAbbm-sZkGnZfMF43ykhFB7myINYl_ytxy3POaaFd8yPSzRI94aIn7AZaCNAoiXd-0v6NmmtafjvBHohrQGB-55k8vGc2ETkbXhRsyt58Feju5EXz7Vdjc7kTCSx"
    }))
    .send()
    .await?
    .json()
    .await?;

    println!("{:#?}", echo_json);
    
    Ok(())
}