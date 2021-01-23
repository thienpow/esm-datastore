
use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;
use std::time::{SystemTime};
use svc::adminapi::adminapi_proto::TournamentCount;
use crate::svc;


pub struct Tournament {
  pub id: i64,
  pub title: String,
  pub scheduled_on: SystemTime,
  pub scheduled_off: SystemTime,
  pub prize_ids: Vec<i64>,
  pub game_ids: Vec<i64>,
  pub status: i32,
}


impl Tournament {
    
    pub async fn add(tournament: Tournament, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"tournament\" (title, scheduled_on, scheduled_off, prize_ids, game_ids, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&tournament.title, &tournament.scheduled_on, &tournament.scheduled_off, &tournament.prize_ids, &tournament.game_ids, &tournament.status]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn update(tournament: Tournament, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"tournament\" SET title=$1, scheduled_on=$2, scheduled_off=$3, prize_ids=$4, game_ids=$5, status=$6 WHERE id=$7;").await?;
      let n = conn.execute(&stmt, 
                  &[&tournament.title, &tournament.scheduled_on, &tournament.scheduled_off, &tournament.prize_ids, &tournament.game_ids, &tournament.status, 
                  &tournament.id]).await?;
    
      Ok(n)
    }
    
    pub async fn delete(id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"tournament\" WHERE id=$1;").await?;
      let n = conn.execute(&stmt, &[&id]).await?;
    
      Ok(n)
    }
    
    pub async fn list(limit: i64, offset: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<Tournament>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, title, scheduled_on, scheduled_off, prize_ids, game_ids, status FROM public.\"tournament\" ORDER BY id DESC LIMIT $1 OFFSET $2;").await?;
    
      let mut vec: Vec<Tournament> = Vec::new();
      for row in conn.query(&stmt, &[&limit, &offset]).await? {
        let tournament = Tournament {
          id: row.get(0),
          title: row.get(1),
          scheduled_on: row.get(2),
          scheduled_off: row.get(3),
          prize_ids: row.get(4),
          game_ids: row.get(5),
          status: row.get(6)
        };

        vec.push(tournament);
      }
      
      Ok(vec)
    }


    pub async fn count(pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<TournamentCount, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let sql = "SELECT (SELECT COUNT(id) FROM public.\"tournament\" WHERE status=1) AS draft, (SELECT COUNT(id) FROM public.\"tournament\" WHERE status=2) AS published, (SELECT COUNT(id) FROM public.\"tournament\" WHERE status=3) AS archived;";

      let stmt = conn.prepare(sql).await?;
      let row = conn.query_one(&stmt, &[]).await?;
      
      Ok(TournamentCount {
        draft: row.get::<usize, i64>(0),
        published: row.get::<usize, i64>(1),
        archived: row.get::<usize, i64>(2)
      })
    }


}
