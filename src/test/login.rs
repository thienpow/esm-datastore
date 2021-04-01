pub mod login_proto {
  tonic::include_proto!("esm.login");
}

use tonic::{metadata::MetadataValue, transport::Channel, Request};
use login_proto::login_client::LoginClient;
use login_proto::{
  SignInRequest
};


#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

  let token = MetadataValue::from_str("Bearer before-login-token")?;
  let channel = Channel::from_static("http://127.0.0.1:50051").connect().await?;

  let mut client = LoginClient::with_interceptor(channel, move |mut req: Request<()>| {
    req.metadata_mut().insert("authorization", token.clone());
    Ok(req)
  });

  /* signin wrong password*/
  let request1 = tonic::Request::new(SignInRequest {
    username: format!("{}", "wukong"),
    password: format!("{}", "password"),
  });

  let response1 = client.sign_in(request1).await?;
  
  /* signin correct password*/
  /*
  let request2 = tonic::Request::new(SignInRequest {
    username: format!("{}", "wukong"),
    password: format!("{}", "password"),
  });

  let response2 = client.sign_in(request2).await?;
  */

  println!("RESPONSE={:?}", response1);
 // println!("RESPONSE={:?}", response2);

  Ok(())

}
