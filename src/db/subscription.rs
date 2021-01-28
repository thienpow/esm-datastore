use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;
use svc::adminapi::adminapi_proto::SubscriptionCount; 
use crate::svc;


pub struct Subscription {
  pub id: i64,
  pub title: String,
  pub subtitle: String,
  pub img_url: String,
  pub content: String,
  pub type_id: i32,
  pub amount: i32,
  pub status: i32,
}

pub struct SubscriptionType {
  pub id: i32,
  pub title: String
}


impl Subscription {
    
    pub async fn add(sub: Subscription, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"subscription\" (title, subtitle, img_url, content, type_id, amount, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&sub.title, &sub.subtitle, &sub.img_url, &sub.content, 
                  &sub.type_id, &sub.amount, &sub.status]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn update(sub: Subscription, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"subscription\" SET title=$1, subtitle=$2, img_url=$3, content=$4, type_id=$5, amount=$6, status=$7 WHERE id=$8;").await?;
      let n = conn.execute(&stmt, 
                  &[&sub.title, &sub.subtitle, &sub.img_url, &sub.content, 
                  &sub.type_id, &sub.amount, &sub.status,
                  &sub.id]).await?;
    
      Ok(n)
    }
    
    pub async fn delete(id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"subscription\" WHERE id=$1;").await?;
      let n = conn.execute(&stmt, &[&id]).await?;
    
      Ok(n)
    }
    
    pub async fn list(limit: i64, offset: i64, search_title: String, status: i32, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<Subscription>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let mut vec: Vec<Subscription> = Vec::new();
      if search_title.len() > 2 {
        let mut sql_string = format!("SELECT id, title, subtitle, img_url, content, type_id, amount, status FROM public.\"subscription\" WHERE title LIKE '%{}%' ORDER BY id DESC LIMIT {} OFFSET {};", search_title, limit, offset);
        if status > 0 {
          sql_string = format!("SELECT id, title, subtitle, img_url, content, type_id, amount, status FROM public.\"subscription\" WHERE title LIKE '%{}%' AND status={} ORDER BY id DESC LIMIT {} OFFSET {};", search_title, status, limit, offset);
        }
        let stmt = conn.prepare(&sql_string).await?;
    
        for row in conn.query(&stmt, &[]).await? {
          let sub = Subscription {
            id: row.get(0),
            title: row.get(1),
            subtitle: row.get(2),
            img_url: row.get(3),
            content: row.get(4),
            type_id: row.get(5),
            amount: row.get(6),
            status: row.get(7)
          };
  
          vec.push(sub);
        }
        
      } else {
        let stmt = conn.prepare("SELECT id, title, subtitle, img_url, content, type_id, amount, status FROM public.\"subscription\" ORDER BY id DESC LIMIT $1 OFFSET $2;").await?;
    
        for row in conn.query(&stmt, &[&limit, &offset]).await? {
          let sub = Subscription {
            id: row.get(0),
            title: row.get(1),
            subtitle: row.get(2),
            img_url: row.get(3),
            content: row.get(4),
            type_id: row.get(5),
            amount: row.get(6),
            status: row.get(7)
          };
  
          vec.push(sub);
        }
        
      }
      
      Ok(vec)
    }


    pub async fn count(pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<SubscriptionCount, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let sql = "SELECT (SELECT COUNT(id) FROM public.\"subscription\" WHERE status=1) AS draft, (SELECT COUNT(id) FROM public.\"subscription\" WHERE status=2) AS published, (SELECT COUNT(id) FROM public.\"subscription\" WHERE status=3) AS archived;";

      let stmt = conn.prepare(sql).await?;
      let row = conn.query_one(&stmt, &[]).await?;

      Ok(SubscriptionCount {
        draft: row.get::<usize, i64>(0),
        published: row.get::<usize, i64>(1),
        archived: row.get::<usize, i64>(2)
      })
    }

    pub async fn list_subscription_type(pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<SubscriptionType>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, title FROM public.\"subscription_type\" ORDER BY id ASC;").await?;
    
      let mut vec: Vec<SubscriptionType> = Vec::new();
      for row in conn.query(&stmt, &[]).await? {
        let item = SubscriptionType {
          id: row.get(0),
          title: row.get(1),
        };

        vec.push(item);
      }
      
      Ok(vec)
    }


}
