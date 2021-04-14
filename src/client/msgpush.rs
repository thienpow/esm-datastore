
#[tokio::main]
async fn main() -> Result<(), reqwest::Error> {
    
    let echo_json: serde_json::Value = reqwest::Client::new()
        .post("https://fcm.googleapis.com/fcm/send")
        .header("authorization", "key=AAAAzT8d8lM:APA91bHtFSHVIBiiSDUWSaUkrYNrcBSyhMY_JBYSeaaoWpkrxSgBO-7xgHtySH3qfTvsgHHTIsrh_SwwirCvTTuOWBl0--JhddEV8MFnEgWuGRPOXPVyTBHym5k9gh8WrCxr-rY13Y54")
        .json(&serde_json::json!({
            "data" : {
              "body" : "Some important message",
              "title": "ESM Push Test! 28888",
              "key_1" : "Value for key_1",
              "key_2" : "Value for key_2",
              "messaround": "abcxyz",
            },
	        "to": "c0ncfy3krhbZxyCJPMQcVh:APA91bH76237L94gryvXOx0Ky9SQAQvxxt45CelCo2WQHa5GEsmS4ckxQ147a9dY2KSSHRLlUuFg0BmhNmCk4mB3Y28tid7nLW0MNy6vQ2USlbWEOLIS1zdg2H7KATIbut98v3qon4Qi"
            //"to": "f18gb342bpbt1MWR6goOAJ:APA91bEGMyhFt9ZcmMI4BBrhgb_emtALklyxDz3kab7h0a4j9qF4buSqRXKzoh6aYNVo8u4P0lqvHV-B2a96vOQv4v4TYtIydnbCZ4lH-VCsB4K-MoaOid6nKakOF-aAkUMfxB6gF7"
          
        }))
        .send()
        .await?
        .json()
        .await?;

    println!("{:#?}", echo_json);
    
    Ok(())
}