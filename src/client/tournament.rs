pub mod tournament_proto {
  tonic::include_proto!("esm.tournament");
}

use tonic::{metadata::MetadataValue, transport::Channel, Request};
use tournament_proto::tournament_client::TournamentClient;
use tournament_proto::{
  AddRequest, 
  UpdateRequest, 
  DeleteRequest, 
  ListRequest,
  GetCountRequest,
};


#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

  let token = MetadataValue::from_str("Bearer test-only-token")?;
  let channel = Channel::from_static("http://127.0.0.1:50051").connect().await?;

  let mut client = TournamentClient::with_interceptor(channel, move |mut req: Request<()>| {
    req.metadata_mut().insert("authorization", token.clone());
    Ok(req)
  });

  /* add */
  let request1 = tonic::Request::new(AddRequest {
   title: format!("Hello {}!", "title here"),
   scheduled_on: 4,
   scheduled_off: 4,
   prize_ids: [1,2,3].to_vec(),
   game_ids: [1,2,3].to_vec(),
   status: 1
  });

  let response1 = client.add(request1).await?;
  
  /* update */
  let request2 = tonic::Request::new(UpdateRequest {
   id: 3,
   title: format!("Hello {}!", "title here"),
   scheduled_on: 4,
   scheduled_off: 4,
   prize_ids: [1,2,3].to_vec(),
   game_ids: [1,2,3].to_vec(),
   status: 1
  });

  let response2 = client.update(request2).await?;
  


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
  


  /* count */
  let request5 = tonic::Request::new(GetCountRequest {
    //id: 1,
  });

  let response5 = client.get_count(request5).await?;


  println!("RESPONSE={:?}", response1);
  println!("RESPONSE={:?}", response2);
  println!("RESPONSE={:?}", response3);
  println!("RESPONSE={:?}", response4);
  println!("RESPONSE={:?}", response5);

  /*
  for x in 0..1000 {

    /* count */
    let request6 = tonic::Request::new(GetCountRequest {
      id: 1,
    });

    let response6 = client.get_count(request6).await?;

    println!("RESPONSE={:?}", response6);
  }
  */
  
  Ok(())

}
