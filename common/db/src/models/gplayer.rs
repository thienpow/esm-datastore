
use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;

use std::time::{SystemTime};

pub struct GPlayer {
  pub id: i64,
  pub user_id: i64,
  pub prize_id: i64,
  pub game_id: i64,
  pub enter_timestamp: SystemTime,
  pub leave_timestamp: SystemTime,
  pub game_score: i32,
  pub is_watched_ad: bool,
}

pub struct LogGDetail {
  pub id: i64,
  pub user_id: i64,
  pub nick_name: String,
  pub avatar_url: String,
  pub prize_id: i64,
  pub prize_title: String,
  pub prize_img_url: String,
  pub type_id: i32,
  pub game_id: i64,
  pub game_title: String,
  pub game_img_url: String,
  pub enter_timestamp: SystemTime,
  pub leave_timestamp: SystemTime,
  pub is_watched_ad: bool,
  pub game_score: i32,
}


impl GPlayer {
    

    pub async fn enter(gplayer: GPlayer, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"gplayer\" (prize_id, game_id, user_id, enter_timestamp, is_watched_ad) VALUES ($1, $2, $3, $4, $5) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&gplayer.prize_id, &gplayer.game_id, &gplayer.user_id, &gplayer.enter_timestamp, &gplayer.is_watched_ad]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    

    pub async fn leave(gplayer: GPlayer, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"gplayer\" SET leave_timestamp=$1, game_score=$2 WHERE id=$3;").await?;
      let n = conn.execute(&stmt, 
                  &[&gplayer.leave_timestamp, &gplayer.game_score, &gplayer.id]).await?;
    
      Ok(n)
    }
    
    
    pub async fn list_log_g(user_id: i64, limit: i64, offset: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<LogGDetail>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT gp.id, gp.user_id, u.nick_name, u.avatar_url, gp.prize_id, p.title AS prize_title, p.img_url AS prize_img_url, p.type_id, gp.game_id, g.title AS game_title, g.img_url AS game_img_url, gp.enter_timestamp, gp.leave_timestamp, gp.is_watched_ad, gp.game_score FROM public.\"gplayer\" AS gp INNER JOIN public.\"user\" AS u ON gp.user_id = u.id INNER JOIN public.\"prize\" AS p ON gp.prize_id = p.id INNER JOIN public.\"game\" AS g ON gp.game_id = g.id WHERE gp.user_id=$1 ORDER BY enter_timestamp DESC LIMIT $2 OFFSET $3;").await?;
    
      let mut vec: Vec<LogGDetail> = Vec::new();
      for row in conn.query(&stmt, &[&user_id, &limit, &offset]).await? {
        let log_g = LogGDetail {
          id: row.get(0),
          user_id: row.get(1),
          nick_name: row.get(2),
          avatar_url: row.get(3),
          prize_id: row.get(4),
          prize_title: row.get(5),
          prize_img_url: row.get(6),
          type_id: row.get(7),
          game_id: row.get(8),
          game_title: row.get(9),
          game_img_url: row.get(10),
          enter_timestamp: row.get(11),
          leave_timestamp: row.get(12),
          is_watched_ad: row.get(13),
          game_score: row.get(14),
        };

        vec.push(log_g);
      }
      
      Ok(vec)
    }

    pub async fn list_log_g_by_game(game_id: i64, prize_id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<LogGDetail>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT gp.id, gp.user_id, u.nick_name, u.avatar_url, gp.prize_id, p.title AS prize_title, p.img_url AS prize_img_url, p.type_id, gp.game_id, g.title AS game_title, g.img_url AS game_img_url, gp.enter_timestamp, gp.leave_timestamp, gp.is_watched_ad, gp.game_score FROM public.\"gplayer\" AS gp INNER JOIN public.\"user\" AS u ON gp.user_id = u.id INNER JOIN public.\"prize\" AS p ON gp.prize_id = p.id INNER JOIN public.\"game\" AS g ON gp.game_id = g.id WHERE gp.game_id=$1 AND gp.prize_id=$2 ORDER BY gp.game_score DESC LIMIT 100;").await?;
    
      let mut vec: Vec<LogGDetail> = Vec::new();
      for row in conn.query(&stmt, &[&game_id, &prize_id]).await? {
        let log_g = LogGDetail {
          id: row.get(0),
          user_id: row.get(1),
          nick_name: row.get(2),
          avatar_url: row.get(3),
          prize_id: row.get(4),
          prize_title: row.get(5),
          prize_img_url: row.get(6),
          type_id: row.get(7),
          game_id: row.get(8),
          game_title: row.get(9),
          game_img_url: row.get(10),
          enter_timestamp: row.get(11),
          leave_timestamp: row.get(12),
          is_watched_ad: row.get(13),
          game_score: row.get(14),
        };

        vec.push(log_g);
      }
      
      Ok(vec)
    }
}
