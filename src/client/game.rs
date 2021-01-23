pub mod game_proto {
  tonic::include_proto!("esm.game");
}

use tonic::{metadata::MetadataValue, transport::Channel, Request};
use game_proto::game_client::GameClient;
use game_proto::{
  AddGameRequest, 
  UpdateGameRequest, 
  DeleteGameRequest, 
  ListGameRequest,
  GetGameCountRequest,
};


#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

  let token = MetadataValue::from_str("Bearer test-only-token")?;
  let channel = Channel::from_static("http://127.0.0.1:50051").connect().await?;

  let mut client = GameClient::with_interceptor(channel, move |mut req: Request<()>| {
    req.metadata_mut().insert("authorization", token.clone());
    Ok(req)
  });

  /* add */
  let request1 = tonic::Request::new(AddGameRequest {
   title: format!("Hello {}!", "title here"),
   subtitle: format!("Hello {}!", "subtitle here"),
   img_url: format!("Hello {}!", "https://img_url_here"),
   content: format!("Hello {}!", "<a>haha</a>"),
   type_id: 5,
   game_code: format!("Hello {}!", "<a>6</a>"),
   engine_id: 7,
   version: 8,
   status: 1
  });

  let response1 = client.add(request1).await?;
  
  /* update */
  let request2 = tonic::Request::new(UpdateGameRequest {
   id: 2,
   title: format!("Hello {}!", "title here"),
   subtitle: format!("Hello {}!", "subtitle here"),
   img_url: format!("Hello {}!", "https://img_url_here"),
   content: format!("Hello {}!", "<a>haha</a>"),
   type_id: 6,
   game_code: format!("Hello {}!", "<a>6</a>"),
   engine_id: 8,
   version: 9,
   status: 1
  });

  let response2 = client.update(request2).await?;
  


  /* delete */
  let request3 = tonic::Request::new(DeleteGameRequest {
      id: 5,
  });

  let response3 = client.delete(request3).await?;
  

  /* list */
  let request4 = tonic::Request::new(ListGameRequest {
      limit: 5,
      offset: 0,
  });

  let response4 = client.list(request4).await?;
  


  /* count */
  let request5 = tonic::Request::new(GetGameCountRequest {
    //id: 1,
  });

  let response5 = client.get_count(request5).await?;


  println!("RESPONSE={:?}", response1);
  println!("RESPONSE={:?}", response2);
  println!("RESPONSE={:?}", response3);
  println!("RESPONSE={:?}", response4);
  println!("RESPONSE={:?}", response5);

  for _x in 0..1000 {

    /* count */
    let request6 = tonic::Request::new(GetCountRequest {
      //id: 1,
    });

    let response6 = client.get_count(request6).await?;

    println!("RESPONSE={:?}", response6);
  }
  Ok(())

}
