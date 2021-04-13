
#[tokio::main]
async fn main() -> Result<(), reqwest::Error> {
    
    let echo_json: serde_json::Value = reqwest::Client::new()
        .post("https://jsonplaceholder.typicode.com/posts")
        //.post("https://fcm.googleapis.com/fcm/send")
        .json(&serde_json::json!({
          "mode": "cors",
          "method": "POST",
          "headers": {
            "authorization": "key=SERVER ID",
            "content-type": "application/json"
          },
          "body": {
	          "collapse_key" : "type_a",
            "notification" : {
              "body" : "Body of Your Notification",
              "title": "Title of Your Notification",
	            "icon": "http://www.liberaldictionary.com/wp-content/uploads/2019/02/icon-0326.jpg"
            },
            "data" : {
              "body" : "Body of Your Notification in Data",
              "title": "Title of Your Notification in Title",
              "key_1" : "Value for key_1",
              "key_2" : "Value for key_2"
            },
	          "to": "cpMyI31Yb0_XILFhNTRE0R:APA91bFudP9-f_8oDIXiziGPQMTNWcmk2g7YJblbMAxkL2WnMze47mKfklXnuPAuiMIeGiKZmqKlo5948PqUju2B2SLuqBNcSgu52OTqIBDMGeld4n6181oIkszi40XUXKuc2wp17H2x"
          }
        }))
        .send()
        .await?
        .json()
        .await?;

    println!("{:#?}", echo_json);
    
    Ok(())
}