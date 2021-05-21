
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
  pub is_used_gem: bool,
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

pub struct LogSDetail {
  pub id: i64,
  pub user_id: i64,
  pub tickets_won: i64,
  pub enter_timestamp: SystemTime,
  pub leave_timestamp: SystemTime,
}

impl GPlayer {
    

    pub async fn enter(gplayer: GPlayer, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"gplayer\" (prize_id, game_id, user_id, enter_timestamp, is_watched_ad, is_used_gem) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&gplayer.prize_id, &gplayer.game_id, &gplayer.user_id, &gplayer.enter_timestamp, &gplayer.is_watched_ad, &gplayer.is_used_gem]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    

    pub async fn leave(gplayer: GPlayer, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"gplayer\" SET leave_timestamp=$1, game_score=$2 WHERE id=$3 AND user_id=$4;").await?;
      let n = conn.execute(&stmt, 
                  &[&gplayer.leave_timestamp, &gplayer.game_score, &gplayer.id, &gplayer.user_id]).await?;
    
      Ok(n)
    }
    
    pub async fn get_log_g(id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<GPlayer, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, user_id, prize_id, game_id, enter_timestamp, leave_timestamp, game_score, is_watched_ad, is_used_gem FROM public.\"gplayer\" WHERE id=$1;").await?;
      let row = conn.query_one(&stmt, 
                    &[&id]).await?;

      Ok(GPlayer {
        id: row.get(0),
        user_id: row.get(0),
        prize_id: row.get(0),
        game_id: row.get(0),
        enter_timestamp: row.get(0),
        leave_timestamp: row.get(0),
        game_score: row.get(0),
        is_watched_ad: row.get(0),
        is_used_gem: row.get(0),
      })
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


    pub async fn check_spin_available(user_id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT 
        (SELECT freespin_per_day FROM public.\"config\") - 
        (SELECT count(id) FROM public.\"spinner_log\" WHERE user_id=$1 AND date(enter_timestamp) = CURRENT_DATE)").await?;
      let row = conn.query_one(&stmt, &[&user_id]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    

    pub async fn spin_enter(spin_detail: LogSDetail, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"spinner_log\" (user_id, enter_timestamp) VALUES ($1, $2) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&spin_detail.user_id, &spin_detail.enter_timestamp]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn spin_leave(spin_detail: LogSDetail, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"spinner_log\" SET leave_timestamp=$1, tickets_won=$2 WHERE id=$3 AND user_id=$4;").await?;
      let n = conn.execute(&stmt, 
                  &[&spin_detail.leave_timestamp, &spin_detail.tickets_won, &spin_detail.id, &spin_detail.user_id]).await?;
    
      Ok(n)
    }
}
