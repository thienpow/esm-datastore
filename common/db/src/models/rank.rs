
use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;
use postgres_native_tls::MakeTlsConnector;

pub struct Rank {
  pub id: i64,
  pub title: String,
  pub exp: i32,
  pub gem: i32,
  pub multiplier: f64,
}


impl Rank {
    

    pub async fn add(rank: Rank, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"rank\" (id, title, exp, gem, multiplier) VALUES ($1, $2, $3, $4, $5) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&rank.id, &rank.title, &rank.exp, &rank.gem, &rank.multiplier]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    

    pub async fn update(rank: Rank, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"rank\" SET title=$1, exp=$2, gem=$3, multiplier=$4 WHERE id=$5;").await?;
      let n = conn.execute(&stmt, 
                  &[&rank.title, &rank.exp, &rank.gem, &rank.multiplier, &rank.id]).await?;
    
      Ok(n)
    }
    
    pub async fn delete(id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"rank\" WHERE id=$1;").await?;
      let n = conn.execute(&stmt, &[&id]).await?;
    
      Ok(n)
    }
    
    
    pub async fn list(pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<Rank>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, title, exp, gem, multiplier FROM public.\"rank\" ORDER BY id;").await?;
    
      let mut vec: Vec<Rank> = Vec::new();
      for row in conn.query(&stmt, &[]).await? {
        let rank = Rank {
          id: row.get(0),
          title: row.get(1),
          exp: row.get(2),
          gem: row.get(3),
          multiplier: row.get(4)
        };

        vec.push(rank);
      }
      
      Ok(vec)
    }

    pub async fn list_reverse(pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<Rank>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, title, exp, gem, multiplier FROM public.\"rank\" ORDER BY exp DESC;").await?;
    
      let mut vec: Vec<Rank> = Vec::new();
      for row in conn.query(&stmt, &[]).await? {
        let rank = Rank {
          id: row.get(0),
          title: row.get(1),
          exp: row.get(2),
          gem: row.get(3),
          multiplier: row.get(4)
        };

        vec.push(rank);
      }
      
      Ok(vec)
    }
}
