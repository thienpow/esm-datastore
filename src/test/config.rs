pub mod config_proto {
  tonic::include_proto!("esm.config");
}

use tonic::{metadata::MetadataValue, transport::Channel, Request};
use config_proto::config_client::ConfigClient;
use config_proto::{
  UpdateConfigRequest, 
  GetConfigRequest,
};


#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

  
  let tokenstr = "test-only-token";
  //Bearer test-only-token
  let token = MetadataValue::from_str(tokenstr)?;
  let channel = Channel::from_static("http://localhost:50051").connect().await?;

  let uid = MetadataValue::from_str("S77rrH8NhafvYaXTVsg0LWe8sPv1")?;
  let mut client = ConfigClient::with_interceptor(channel, move |mut req: Request<()>| {
    req.metadata_mut().insert("authorization", token.clone());
    req.metadata_mut().insert("uid", uid.clone());
    Ok(req)
  });

  /* update */
  
  let request2 = tonic::Request::new(UpdateConfigRequest {
    top_ten: vec![1, 2, 3],
    spinner: vec![1, 2, 3],
    invites: 3,
    watch_ad_get_exp: 4,
    watch_ad_get_tickets: 5,
    use_gem_get_exp: 6,
    use_gem_get_tickets: 7,
    games_per_ad: 8,
    days_to_claim: 9
  });

  let response2 = client.update_config(request2).await?;
  

  /* get */
  let request5 = tonic::Request::new(GetConfigRequest {
    //id: 1,
  });

  let response5 = client.get_config(request5).await?;


  println!("RESPONSE={:?}", response2);
  println!("RESPONSE={:?}", response5);

  Ok(())

}
