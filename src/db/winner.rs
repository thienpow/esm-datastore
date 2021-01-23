
use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;
use std::time::{SystemTime};
use svc::adminapi::adminapi_proto::WinnerCount;
use crate::svc;


pub struct Winner {
  pub id: i64,
  pub prize_id: i64,
  pub user_id: i64,
  pub created_on: SystemTime,
  pub status: i32,
  pub tournament_id: i64

}


impl Winner {
    
    pub async fn add(winner: Winner, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"winner\" (prize_id, user_id, created_on, status, tournament_id) VALUES ($1, $2, $3, $4, $5) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&winner.prize_id, &winner.user_id, &winner.created_on, &winner.status, &winner.tournament_id]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn delete(id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"winner\" WHERE id=$1;").await?;
      let n = conn.execute(&stmt, &[&id]).await?;
    
      Ok(n)
    }
    
    pub async fn list(limit: i64, offset: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<Winner>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, prize_id, user_id, created_on, status, tournament_id FROM public.\"winner\" ORDER BY id DESC LIMIT $1 OFFSET $2;").await?;
    
      let mut vec: Vec<Winner> = Vec::new();
      for row in conn.query(&stmt, &[&limit, &offset]).await? {
        let winner = Winner {
          id: row.get(0),
          prize_id: row.get(1),
          user_id: row.get(2),
          created_on: row.get(3),
          status: row.get(4),
          tournament_id: row.get(5)
        };

        vec.push(winner);
      }
      
      Ok(vec)
    }


    pub async fn count(pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<WinnerCount, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let sql = "SELECT ((SELECT COUNT(id) FROM public.\"winner\" WHERE status=1) AS active, (SELECT COUNT(id) FROM public.\"winner\" WHERE status=2) AS archived;";

      let stmt = conn.prepare(sql).await?;
      let row = conn.query_one(&stmt, &[]).await?;
      
      Ok(WinnerCount {
        active: row.get::<usize, i64>(0),
        archived: row.get::<usize, i64>(1)
      })
    }

}
