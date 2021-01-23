pub mod gplayer_proto {
  tonic::include_proto!("esm.gplayer");
}

use tonic::{metadata::MetadataValue, transport::Channel, Request};
use gplayer_proto::g_player_client::GPlayerClient;
use gplayer_proto::{
  LogEnterRequest, 
  LogLeaveRequest
};


#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

  let token = MetadataValue::from_str("Bearer some-secret-token")?;
  let channel = Channel::from_static("http://127.0.0.1:50051").connect().await?;

  let mut client = GPlayerClient::with_interceptor(channel, move |mut req: Request<()>| {
    req.metadata_mut().insert("authorization", token.clone());
    Ok(req)
  });


  /* LogEnterRequest */
  let request1 = tonic::Request::new(LogEnterRequest {
    secret: format!("Hello {}!", "secret here"),
    access_token: format!("Hello {}!", "accessToken here"),
    user_id: 3,
    game_id: 4,
  });

  let response1 = client.log_enter(request1).await?;


  /* LogLeaveRequest */
  let request2 = tonic::Request::new(LogLeaveRequest {
    secret: format!("Hello {}!", "secret here"),
    access_token: format!("Hello {}!", "accessToken here"),
    id: 3,
    game_score: 4,
  });

  let response2 = client.log_leave(request2).await?;
  


  println!("RESPONSE={:?}", response1);
  println!("RESPONSE={:?}", response2);

  Ok(())

}
