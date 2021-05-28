use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;

pub struct Subscription {
  pub id: i64,
  pub title: String,
  pub subtitle: String,
  pub img_url: String,
  pub content: String,
  pub type_id: i32,
  pub price: f64,
  pub quantity: i32,
  pub one_time_gem: i32,
  pub one_time_multiplier: f64,
  pub one_time_is_firstonly: bool,
  pub daily_gem: i32,
  pub daily_multiplier: f64,
  pub status: i32,
}

pub struct SubscriptionType {
  pub id: i32,
  pub title: String
}

pub struct SubscriptionCount {
  pub draft: i64,
  pub published: i64,
  pub archived: i64 
}

impl Subscription {
    
    pub async fn add(sub: Subscription, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"subscription\" (title, subtitle, img_url, content, type_id, price, quantity, one_time_gem, one_time_multiplier, one_time_is_firstonly, daily_gem, daily_multiplier, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&sub.title, &sub.subtitle, &sub.img_url, &sub.content, 
                  &sub.type_id, &sub.price, &sub.quantity, 
                  &sub.one_time_gem, &sub.one_time_multiplier, &sub.one_time_is_firstonly,
                  &sub.daily_gem, &sub.daily_multiplier,
                  &sub.status]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn update(sub: Subscription, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"subscription\" SET title=$1, subtitle=$2, img_url=$3, content=$4, type_id=$5, price=$6, quantity=$7, one_time_gem=$8, one_time_multiplier=$9, one_time_is_firstonly=$10, daily_gem=$11, daily_multiplier=$12, status=$13 WHERE id=$14;").await?;
      let n = conn.execute(&stmt, 
                  &[&sub.title, &sub.subtitle, &sub.img_url, &sub.content, 
                  &sub.type_id, &sub.price, &sub.quantity, 
                  &sub.one_time_gem, &sub.one_time_multiplier, &sub.one_time_is_firstonly,
                  &sub.daily_gem, &sub.daily_multiplier,
                  &sub.status,
                  &sub.id]).await?;
    
      Ok(n)
    }
    
    pub async fn delete(id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"subscription\" WHERE id=$1;").await?;
      let n = conn.execute(&stmt, &[&id]).await?;
    
      Ok(n)
    }
    

    pub async fn get(id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Subscription, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, title, subtitle, img_url, content, type_id, price, quantity, one_time_gem, one_time_multiplier, one_time_is_firstonly, daily_gem, daily_multiplier, status FROM public.\"subscription\" WHERE id=$1;").await?;
      let row = conn.query_one(&stmt, 
                    &[&id]).await?;

      Ok(Subscription {
        id: row.get(0),
        title: row.get(1),
        subtitle: row.get(2),
        img_url: row.get(3),
        content: row.get(4),
        type_id: row.get(5),
        price: row.get(6),
        quantity: row.get(7),
        one_time_gem: row.get(8),
        one_time_multiplier: row.get(9),
        one_time_is_firstonly: row.get(10),
        daily_gem: row.get(11),
        daily_multiplier: row.get(12),
        status: row.get(13)
      })
    }

    pub async fn list(limit: i64, offset: i64, search_title: String, status: i32, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<Subscription>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let mut vec: Vec<Subscription> = Vec::new();
      if search_title.len() > 2 {
        let mut sql_string = format!("SELECT id, title, subtitle, img_url, content, type_id, price, quantity, one_time_gem, one_time_multiplier, one_time_is_firstonly, daily_gem, daily_multiplier, status FROM public.\"subscription\" WHERE title ILIKE '%{}%' ORDER BY id DESC LIMIT {} OFFSET {};", search_title, limit, offset);
        if status > -1 {
          sql_string = format!("SELECT id, title, subtitle, img_url, content, type_id, price, quantity, one_time_gem, one_time_multiplier, one_time_is_firstonly, daily_gem, daily_multiplier, status FROM public.\"subscription\" WHERE title ILIKE '%{}%' AND status={} ORDER BY id DESC LIMIT {} OFFSET {};", search_title, status, limit, offset);
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
            price: row.get(6),
            quantity: row.get(7),
            one_time_gem: row.get(8),
            one_time_multiplier: row.get(9),
            one_time_is_firstonly: row.get(10),
            daily_gem: row.get(11),
            daily_multiplier: row.get(12),
            status: row.get(13)
          };
  
          vec.push(sub);
        }
        
      } else {
        let mut sql_string = "SELECT id, title, subtitle, img_url, content, type_id, price, quantity, one_time_gem, one_time_multiplier, one_time_is_firstonly, daily_gem, daily_multiplier, status FROM public.\"subscription\" ORDER BY id DESC LIMIT $1 OFFSET $2;".to_string();
        if status > -1 {
          sql_string = format!("SELECT id, title, subtitle, img_url, content, type_id, price, quantity, one_time_gem, one_time_multiplier, one_time_is_firstonly, daily_gem, daily_multiplier, status FROM public.\"subscription\" WHERE status={} LIMIT $1 OFFSET $2;", status);
        }
        let stmt = conn.prepare(&sql_string).await?;
    
        for row in conn.query(&stmt, &[&limit, &offset]).await? {
          let sub = Subscription {
            id: row.get(0),
            title: row.get(1),
            subtitle: row.get(2),
            img_url: row.get(3),
            content: row.get(4),
            type_id: row.get(5),
            price: row.get(6),
            quantity: row.get(7),
            one_time_gem: row.get(8),
            one_time_multiplier: row.get(9),
            one_time_is_firstonly: row.get(10),
            daily_gem: row.get(11),
            daily_multiplier: row.get(12),
            status: row.get(13)
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
