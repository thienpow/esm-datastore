
use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;

use std::time::{SystemTime};

pub struct GPlayer {
  pub id: i64,
  pub game_id: i64,
  pub user_id: i64,
  pub enter_timestamp: SystemTime,
  pub leave_timestamp: SystemTime,
  pub game_score: i32,
  pub is_watched_ad: bool,
}


impl GPlayer {
    

    pub async fn enter(gplayer: GPlayer, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"gplayer\" (game_id, user_id, enter_timestamp, is_watched_ad) VALUES ($1, $2, $3, $4) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&gplayer.game_id, &gplayer.user_id, &gplayer.enter_timestamp, &gplayer.is_watched_ad]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    

    pub async fn leave(gplayer: GPlayer, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"gplayer\" SET leave_timestamp=$1, game_score=$2 WHERE id=$3;").await?;
      let n = conn.execute(&stmt, 
                  &[&gplayer.leave_timestamp, &gplayer.game_score, &gplayer.id]).await?;
    
      Ok(n)
    }
    
    
}
