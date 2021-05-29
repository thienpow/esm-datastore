use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;
use postgres_native_tls::MakeTlsConnector;

pub struct SpinnerRule {
  pub id: i32,
  pub probability: f64,
  pub win: f64,
  pub type_id: i32,
}

pub struct WinType {
  pub id: i32,
  pub title: String,
}


impl SpinnerRule {
    
    pub async fn add(sr: SpinnerRule, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<i32, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"spinner_rule\" (probability, win, type_id) VALUES ($1, $2, $3) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&sr.probability, &sr.win, &sr.type_id]).await?;
    
      Ok(row.get::<usize, i32>(0))
    }
    
    pub async fn update(sr: SpinnerRule, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"spinner_rule\" SET probability=$1, win=$2, type_id=$3 WHERE id=$4;").await?;
      let n = conn.execute(&stmt, 
                  &[&sr.probability, &sr.win, &sr.type_id,
                  &sr.id]).await?;
    
      Ok(n)
    }
    
    pub async fn delete(id: i32, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"spinner_rule\" WHERE id=$1;").await?;
      let n = conn.execute(&stmt, &[&id]).await?;
    
      Ok(n)
    }

    pub async fn list(pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<SpinnerRule>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, probability, win, type_id FROM public.\"spinner_rule\" ORDER BY id ASC;").await?;
    
      let mut vec: Vec<SpinnerRule> = Vec::new();
      for row in conn.query(&stmt, &[]).await? {
        let rule = SpinnerRule {
          id: row.get(0),
          probability: row.get(1),
          win: row.get(2),
          type_id: row.get(3)
        };

        vec.push(rule);
      }
      
      Ok(vec)
    }


    pub async fn list_win_type(pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<WinType>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, title FROM public.\"spinner_win_type\" ORDER BY id ASC;").await?;
    
      let mut vec: Vec<WinType> = Vec::new();
      for row in conn.query(&stmt, &[]).await? {
        let t = WinType {
          id: row.get(0),
          title: row.get(1),
        };

        vec.push(t);
      }
      
      Ok(vec)
    }

}
