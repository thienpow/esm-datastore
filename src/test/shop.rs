pub mod shop_proto {
  tonic::include_proto!("esm.shop");
}

use tonic::{metadata::MetadataValue, transport::Channel, Request};
use shop_proto::shop_client::ShopClient;
use shop_proto::{
  BuyRequest, 
};


#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

  let token = MetadataValue::from_str("Bearer some-secret-token")?;
  let channel = Channel::from_static("http://127.0.0.1:50051").connect().await?;

  let mut client = ShopClient::with_interceptor(channel, move |mut req: Request<()>| {
    req.metadata_mut().insert("authorization", token.clone());
    Ok(req)
  });

  /* buy */
  let request1 = tonic::Request::new(BuyRequest {
    secret: format!("Hello {}!", "secret here"),
    item_type_id: 1,
    item_id: 2, 
    user_id: 3,
  });

  let response1 = client.buy(request1).await?;
  


  println!("RESPONSE={:?}", response1);

  Ok(())

}
