use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;
use postgres_native_tls::MakeTlsConnector;

pub struct Checker {
}

pub struct ErrorLog {
  pub module_id: i32,
  pub detail: String,
}
impl Checker {
      
    pub async fn add_error(error: ErrorLog, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;

      let stmt = conn.prepare("INSERT INTO public.\"error_log\" (module_id, detail) VALUES ($1, $2) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&error.module_id, &error.detail]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn update_current_game_checked(time_spent: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"checker_log\" SET current_game_checked_on=NOW(), current_game_time_spent=$1 WHERE id=1;").await?;
      let n = conn.execute(&stmt, 
                  &[&time_spent]).await?;
    
      Ok(n)
    }
    
    pub async fn update_leaderboard_checked(time_spent: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"checker_log\" SET leaderboard_checked_on=NOW(), leaderboard_time_spent=$1 WHERE id=1;").await?;
      let n = conn.execute(&stmt, 
                  &[&time_spent]).await?;
    
      Ok(n)
    }

    pub async fn update_subscriber_checked(time_spent: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"checker_log\" SET subscriber_checked_on=NOW(), subscriber_time_spent=$1 WHERE id=1;").await?;
      let n = conn.execute(&stmt, 
                  &[&time_spent]).await?;
    
      Ok(n)
    }


    pub async fn update_unclaim_checked(time_spent: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"checker_log\" SET unclaim_checked_on=NOW(), unclaim_time_spent=$1 WHERE id=1;").await?;
      let n = conn.execute(&stmt, 
                  &[&time_spent]).await?;
    
      Ok(n)
    }

}
