
use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;


pub struct Shop {
  //pub activated: bool,
  //pub created_on: chrono::NaiveDateTime,
}

pub struct NewBuy {
  pub id: i64,
  pub item_type_id: i32,
  pub item_id: i64,
  pub user_id: i64,

  //pub activated: bool,
  //pub created_on: chrono::NaiveDateTime,
}


impl Shop {
    
    pub async fn buy(new_buy: NewBuy, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"shop_buy\" (item_type_id, item_id, user_id) VALUES ($1, $2, $3) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&new_buy.item_type_id, &new_buy.item_id, &new_buy.user_id]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    /*
    pub async fn list(limit: i64, offset: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<NewBuy>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, item_type_id, item_id, user_id FROM public.\"shop_buy\" LIMIT $1 OFFSET $2;").await?;
    
      let mut vec: Vec<NewBuy> = Vec::new();
      for row in conn.query(&stmt, &[&limit, &offset]).await? {
        let new_buy = NewBuy {
          id: row.get(0),
          item_type_id: row.get(1),
          item_id: row.get(2),
          user_id: row.get(2),
        };

        vec.push(new_buy);
      }
      
      Ok(vec)
    }
    */
}
