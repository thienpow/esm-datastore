pub mod raffle_proto {
  tonic::include_proto!("esm.raffle");
}

use tonic::{metadata::MetadataValue, transport::Channel, Request};
use raffle_proto::raffle_client::RaffleClient;
use raffle_proto::{
  LogEnterTicketsRequest
};


#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

  let token = MetadataValue::from_str("Bearer some-secret-token")?;
  let channel = Channel::from_static("http://127.0.0.1:50051").connect().await?;

  let mut client = RaffleClient::with_interceptor(channel, move |mut req: Request<()>| {
    req.metadata_mut().insert("authorization", token.clone());
    Ok(req)
  });

  /* add */
  let request1 = tonic::Request::new(LogEnterTicketsRequest {
    secret: format!("Hello {}!", "secret here"),
    prize_id: 2,
    user_id: 3,
    tickets_amount: 4,
  });

  let response1 = client.log_enter_tickets(request1).await?;
  
  println!("RESPONSE={:?}", response1);

  Ok(())

}
