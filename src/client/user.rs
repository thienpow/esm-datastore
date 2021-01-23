pub mod user_proto {
  tonic::include_proto!("esm.user");
}

use tonic::{metadata::MetadataValue, transport::Channel, Request};
use user_proto::user_client::UserClient;
use user_proto::{
  //AddRequest, 
  UpdateStatusRequest
};


#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

  let token = MetadataValue::from_str("test-only-token")?;
  let channel = Channel::from_static("http://127.0.0.1:50051").connect().await?;

  let mut client = UserClient::with_interceptor(channel, move |mut req: Request<()>| {
    req.metadata_mut().insert("authorization", token.clone());
    Ok(req)
  });

  /* add */
  /*
  let request1 = tonic::Request::new(AddRequest {
   username: format!("{}", "wukong"),
   password: format!("{}", "password"),
   email: format!("{}", "thienpow@gmail.com"),
   phone: format!("{}", "0188888888"),
   firstname: format!("{}", "black"),
   lastname: format!("{}", "myth"),
   social_link_fb: "thienpow".to_lowercase(),
   social_link_google: "thienpow@gmail.com".to_lowercase(),
   avatar_url: "local://dog".to_lowercase(),
   id_token: "".to_lowercase(),
  });

  let response1 = client.add(request1).await?;
  */
  /* update */
  let request2 = tonic::Request::new(UpdateStatusRequest {
   id: 1,
   status: 1
  });

  let response2 = client.update_status(request2).await?;
  

  //println!("RESPONSE={:?}", response1);
  println!("RESPONSE={:?}", response2);
  
  Ok(())

}
