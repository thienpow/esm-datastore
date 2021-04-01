pub mod winner_proto {
  tonic::include_proto!("esm.winner");
}

use tonic::{metadata::MetadataValue, transport::Channel, Request};
use winner_proto::winner_client::WinnerClient;
use winner_proto::{
  AddRequest, 
  DeleteRequest, 
  ListRequest
};


#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

  let token = MetadataValue::from_str("Bearer some-secret-token")?;
  let channel = Channel::from_static("http://127.0.0.1:50051").connect().await?;

  let mut client = WinnerClient::with_interceptor(channel, move |mut req: Request<()>| {
    req.metadata_mut().insert("authorization", token.clone());
    Ok(req)
  });

  /* add */
  let request1 = tonic::Request::new(AddRequest {
    prize_id: 1,
    user_id: 2,
    tournament_id: 3,
  });

  let response1 = client.add(request1).await?;
  

  /* delete */
  let request3 = tonic::Request::new(DeleteRequest {
      id: 5,
  });

  let response3 = client.delete(request3).await?;
  

  /* list */
  let request4 = tonic::Request::new(ListRequest {
      limit: 5,
      offset: 0,
  });

  let response4 = client.list(request4).await?;
  

  println!("RESPONSE={:?}", response1);
  println!("RESPONSE={:?}", response3);
  println!("RESPONSE={:?}", response4);

  Ok(())

}
