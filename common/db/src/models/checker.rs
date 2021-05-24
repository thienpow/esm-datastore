use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;

pub struct Checker {
}

impl Checker {
    
    pub async fn update_current_game_checked(time_spent: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"checker_log\" SET current_game_checked_on=NOW(), current_game_time_spent=$1 WHERE id=1;").await?;
      let n = conn.execute(&stmt, 
                  &[&time_spent]).await?;
    
      Ok(n)
    }
    
    pub async fn update_leaderboard_checked(time_spent: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"checker_log\" SET leaderboard_checked_on=NOW(), leaderboard_time_spent=$1 WHERE id=1;").await?;
      let n = conn.execute(&stmt, 
                  &[&time_spent]).await?;
    
      Ok(n)
    }

    pub async fn update_subscriber_checked(time_spent: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"checker_log\" SET subscriber_checked_on=NOW(), subscriber_time_spent=$1 WHERE id=1;").await?;
      let n = conn.execute(&stmt, 
                  &[&time_spent]).await?;
    
      Ok(n)
    }
}
