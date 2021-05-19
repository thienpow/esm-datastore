use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;

pub struct Checker {
}

impl Checker {
    
    pub async fn update_checked(time_spent: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"checker_log\" SET checked_on=NOW(), time_spent=$1 WHERE id=1;").await?;
      let n = conn.execute(&stmt, 
                  &[&time_spent]).await?;
    
      Ok(n)
    }
    
}
