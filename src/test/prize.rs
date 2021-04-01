pub mod prize_proto {
  tonic::include_proto!("esm.prize");
}

use tonic::{metadata::MetadataValue, transport::Channel, Request};
use prize_proto::prize_client::PrizeClient;
use prize_proto::{AddRequest, UpdateRequest, DeleteRequest, ListRequest};


#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

  let token = MetadataValue::from_str("Bearer some-secret-token")?;
  let channel = Channel::from_static("http://127.0.0.1:50051").connect().await?;

  let mut client = PrizeClient::with_interceptor(channel, move |mut req: Request<()>| {
    req.metadata_mut().insert("authorization", token.clone());
    Ok(req)
  });

  /* add */
  let request1 = tonic::Request::new(AddRequest {
   title: format!("Hello {}!", "title here"),
   subtitle: format!("Hello {}!", "subtitle here"),
   img_url: format!("Hello {}!", "https://img_url_here"),
   content: format!("Hello {}!", "<a>haha</a>"),
   tickets_required: 5,
   type_id: 1,
   reward_id: 1,
   reward_amount: 1,
   game_id: 1,
   status: 1
  });

  let response1 = client.add(request1).await?;
  

  /* update */
  let request2 = tonic::Request::new(UpdateRequest {
   id: 6,
   title: format!("updated {}!", "title here"),
   subtitle: format!("updated {}!", "subtitle here"),
   img_url: format!("updated {}!", "https://img_url_here"),
   content: format!("updated {}!", "<a>haha</a>"),
   tickets_required: 5,
   type_id: 1,
   reward_id: 1,
   reward_amount: 1,
   game_id: 2,
   status: 1
  });

  let response2 = client.update(request2).await?;
  
  /* delete */
  let request3 = tonic::Request::new(DeleteRequest {
      secret: "Tonic".into(),
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
  println!("RESPONSE={:?}", response2);
  println!("RESPONSE={:?}", response3);
  println!("RESPONSE={:?}", response4);

  Ok(())

}
