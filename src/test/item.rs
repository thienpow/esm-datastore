pub mod item_proto {
  tonic::include_proto!("esm.item");
}

use tonic::{metadata::MetadataValue, transport::Channel, Request};
use item_proto::item_client::ItemClient;
use item_proto::{
  AddRequest, 
  UpdateRequest, 
  DeleteRequest, 
  ListRequest
};


#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

  let token = MetadataValue::from_str("Bearer some-secret-token")?;
  let channel = Channel::from_static("http://127.0.0.1:50051").connect().await?;

  let mut client = ItemClient::with_interceptor(channel, move |mut req: Request<()>| {
    req.metadata_mut().insert("authorization", token.clone());
    Ok(req)
  });

  /* add */
  let request1 = tonic::Request::new(AddRequest {
   title: format!("Hello {}!", "title here"),
   subtitle: format!("Hello {}!", "subtitle here"),
   img_url: format!("Hello {}!", "https://img_url_here"),
   content: format!("Hello {}!", "<a>haha</a>"),
   type_id: 5,
   amount: 6,
   status: 1
  });

  let response1 = client.add(request1).await?;
  
  /* update */
  let request2 = tonic::Request::new(UpdateRequest {
   id: 1,
   title: format!("Hello {}!", "title here"),
   subtitle: format!("Hello {}!", "subtitle here"),
   img_url: format!("Hello {}!", "https://img_url_here"),
   content: format!("Hello {}!", "<a>haha</a>"),
   type_id: 6,
   amount: 7,
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
  

  println!("RESPONSE={:?}", response1);
  println!("RESPONSE={:?}", response2);
  println!("RESPONSE={:?}", response3);
  println!("RESPONSE={:?}", response4);

  Ok(())

}
