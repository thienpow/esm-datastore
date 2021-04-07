
use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;


use std::time::{SystemTime};

pub struct Invites {
  pub id: i64,
  pub user_id: i64,
  pub invited_by: i64,
  pub invited_date: SystemTime
}


impl Invites {
    
    pub async fn add(invites: Invites, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"user_invites\" (user_id, invited_by, invited_date) VALUES ($1, $2, $3) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&invites.user_id, &invites.invited_by, &invites.invited_date]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn list_invited_by(invited_by: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<Invites>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, user_id, invited_by, invited_date FROM public.\"user_invites\" WHERE invited_by=$1;").await?;
      
      let mut vec: Vec<Invites> = Vec::new();
      for row in conn.query(&stmt, &[&invited_by]).await? {
        let invites = Invites {
          id: row.get(0),
          user_id: row.get(1),
          invited_by: row.get(2),
          invited_date: row.get(3)
        };

        vec.push(invites);
      }
      
      Ok(vec)
    }


    pub async fn get_invited_by_count(invited_by: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let sql = "SELECT COUNT(id) FROM public.\"user_invites\" WHERE invited_by=$1;";

      let stmt = conn.prepare(sql).await?;
      let row = conn.query_one(&stmt, &[&invited_by]).await?;
      Ok(row.get::<usize, i64>(0))
    }

    pub async fn delete(id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"user_invites\" WHERE id=$1;").await?;
      let n = conn.execute(&stmt, &[&id]).await?;
    
      Ok(n)
    }
    

}
