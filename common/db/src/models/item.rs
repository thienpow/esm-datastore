use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;


pub struct Item {
  pub id: i64,
  pub title: String,
  pub subtitle: String,
  pub img_url: String,
  pub content: String,
  pub type_id: i32,
  pub price: f64,
  pub quantity: i32,
  pub status: i32
}

pub struct ItemType {
  pub id: i32,
  pub title: String
}

pub struct ItemCount {
  pub draft: i64,
  pub published: i64,
  pub archived: i64 
}

impl Item {
    
    pub async fn add(item: Item, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"item\" (title, subtitle, img_url, content, type_id, price, quantity, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&item.title, &item.subtitle, &item.img_url, &item.content, 
                  &item.type_id, &item.price, &item.quantity, &item.status]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn update(item: Item, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"item\" SET title=$1, subtitle=$2, img_url=$3, content=$4, type_id=$5, price=$6, quantity=$7, status=$8 WHERE id=$9;").await?;
      let n = conn.execute(&stmt, 
                  &[&item.title, &item.subtitle, &item.img_url, &item.content, 
                  &item.type_id, &item.price, &item.quantity, &item.status,
                  &item.id]).await?;
    
      Ok(n)
    }
    
    pub async fn delete(id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"item\" WHERE id=$1;").await?;
      let n = conn.execute(&stmt, &[&id]).await?;
    
      Ok(n)
    }
    
    pub async fn list(limit: i64, offset: i64, search_title: String, status: i32, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<Item>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let mut vec: Vec<Item> = Vec::new();
      if search_title.len() > 2 {
        let mut sql_string = format!("SELECT id, title, subtitle, img_url, content, type_id, price, quantity, status FROM public.\"item\" WHERE title ILIKE '%{}%' ORDER BY id DESC LIMIT {} OFFSET {};", search_title, limit, offset);
        if status > 0 {
          sql_string = format!("SELECT id, title, subtitle, img_url, content, type_id, price, quantity, status FROM public.\"item\" WHERE title ILIKE '%{}%' AND status={} ORDER BY id DESC LIMIT {} OFFSET {};", search_title, status, limit, offset);
        }
        let stmt = conn.prepare(&sql_string).await?;
    
        for row in conn.query(&stmt, &[]).await? {
          let item = Item {
            id: row.get(0),
            title: row.get(1),
            subtitle: row.get(2),
            img_url: row.get(3),
            content: row.get(4),
            type_id: row.get(5),
            price: row.get(6),
            quantity: row.get(7),
            status: row.get(8)
          };
  
          vec.push(item);
        }
      } else {
        let mut sql_string = "SELECT id, title, subtitle, img_url, content, type_id, price, quantity, status FROM public.\"item\" ORDER BY id DESC LIMIT $1 OFFSET $2;".to_string();
        if status > 0 {
          sql_string = format!("SELECT id, title, subtitle, img_url, content, type_id, price, quantity, status FROM public.\"item\" WHERE status={} LIMIT $1 OFFSET $2;", status);
        }
        let stmt = conn.prepare(&sql_string).await?;
    
        for row in conn.query(&stmt, &[&limit, &offset]).await? {
          let item = Item {
            id: row.get(0),
            title: row.get(1),
            subtitle: row.get(2),
            img_url: row.get(3),
            content: row.get(4),
            type_id: row.get(5),
            price: row.get(6),
            quantity: row.get(7),
            status: row.get(8)
          };
  
          vec.push(item);
        }
      }
      
      
      Ok(vec)
    }


    pub async fn count(pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<ItemCount, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let sql = "SELECT (SELECT COUNT(id) FROM public.\"item\" WHERE status=1) AS draft, (SELECT COUNT(id) FROM public.\"item\" WHERE status=2) AS published, (SELECT COUNT(id) FROM public.\"item\" WHERE status=3) AS archived;";

      let stmt = conn.prepare(sql).await?;
      let row = conn.query_one(&stmt, &[]).await?;
      
      Ok(ItemCount {
        draft: row.get::<usize, i64>(0),
        published: row.get::<usize, i64>(1),
        archived: row.get::<usize, i64>(2)
      })
    }

    pub async fn list_item_type(pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<ItemType>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, title FROM public.\"item_type\" ORDER BY id ASC;").await?;
    
      let mut vec: Vec<ItemType> = Vec::new();
      for row in conn.query(&stmt, &[]).await? {
        let item = ItemType {
          id: row.get(0),
          title: row.get(1),
        };

        vec.push(item);
      }
      
      Ok(vec)
    }



    pub async fn get_quantity(id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i32, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT quantity FROM public.\"item\" WHERE id=$1").await?;
      let row = conn.query_one(&stmt, &[&id]).await?;
    
      Ok(row.get::<usize, i32>(0))
    }
}
