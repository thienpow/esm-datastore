
use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;
use postgres_native_tls::MakeTlsConnector;
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
  pub is_used_gem: bool,
  pub game_score: i32,
}

pub struct LeaderBoard {
  pub gplay_id: i64,
  pub user_id: i64,
  pub nick_name: String,
  pub avatar_url: String,
  pub exp: i32,
  pub game_score: i32,
  pub leave_timestamp: SystemTime,
}

impl GPlayer {
    

    pub async fn enter(gplayer: GPlayer, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"gplayer\" (prize_id, game_id, user_id, enter_timestamp, is_watched_ad, is_used_gem) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&gplayer.prize_id, &gplayer.game_id, &gplayer.user_id, &gplayer.enter_timestamp, &gplayer.is_watched_ad, &gplayer.is_used_gem]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    

    pub async fn leave(gplayer: GPlayer, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"gplayer\" SET leave_timestamp=$1, game_score=$2, is_logged_leave=true WHERE id=$3 AND user_id=$4 AND is_logged_leave=false AND is_closed=false;").await?;
      let n = conn.execute(&stmt, 
                  &[&gplayer.leave_timestamp, &gplayer.game_score, &gplayer.id, &gplayer.user_id]).await?;
    
      Ok(n)
    }
    
    pub async fn close(id: i64, cg_id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"gplayer\" SET is_closed=true, closed_timestamp=NOW(), cg_id=$1 WHERE id=$2;").await?;
      let n = conn.execute(&stmt, 
                  &[&cg_id, &id]).await?;
    
      Ok(n)
    }
    
    pub async fn get_log_g(id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<GPlayer, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, user_id, prize_id, game_id, enter_timestamp, leave_timestamp, game_score, is_watched_ad, is_used_gem FROM public.\"gplayer\" WHERE id=$1;").await?;
      let row = conn.query_one(&stmt, 
                    &[&id]).await?;

      Ok(GPlayer {
        id: row.get(0),
        user_id: row.get(1),
        prize_id: row.get(2),
        game_id: row.get(3),
        enter_timestamp: row.get(4),
        leave_timestamp: row.get(5),
        game_score: row.get(6),
        is_watched_ad: row.get(7),
        is_used_gem: row.get(8),
      })
    }

    
    pub async fn list_log_g(user_id: i64, limit: i64, offset: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<LogGDetail>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT gp.id, gp.user_id, u.nick_name, u.avatar_url, gp.prize_id, p.title AS prize_title, p.img_url AS prize_img_url, p.type_id, gp.game_id, g.title AS game_title, g.img_url AS game_img_url, gp.enter_timestamp, gp.leave_timestamp, gp.is_watched_ad, gp.is_used_gem, gp.game_score FROM public.\"gplayer\" AS gp INNER JOIN public.\"user\" AS u ON gp.user_id = u.id INNER JOIN public.\"prize\" AS p ON gp.prize_id = p.id INNER JOIN public.\"game\" AS g ON gp.game_id = g.id WHERE gp.user_id=$1 AND gp.is_logged_leave=true ORDER BY gp.enter_timestamp DESC LIMIT $2 OFFSET $3;").await?;
    
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
          is_used_gem: row.get(14),
          game_score: row.get(15),
        };

        vec.push(log_g);
      }
      
      Ok(vec)
    }

    

    pub async fn list_leaderboard(game_id: i64, prize_id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<LeaderBoard>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare(r#" 
        SELECT gp1.id, gp1.user_id, u.nick_name, u.avatar_url, u.exp, gp1.game_score, gp1.leave_timestamp 
        FROM public.gplayer AS gp1
        LEFT JOIN public.user AS u ON u.id=gp1.user_id
        WHERE game_id=$1 AND prize_id=$2 AND is_logged_leave=true AND is_closed=false 
          AND game_score = (
            SELECT game_score 
            FROM public.gplayer AS gp2
            WHERE game_id=$1 AND prize_id=$2 AND is_logged_leave=true 
              AND is_closed=false AND gp1.user_id=gp2.user_id
            ORDER BY game_score DESC LIMIT 1
          )
        ORDER BY gp1.game_score DESC, gp1.leave_timestamp ASC LIMIT 100;"#).await?;
    
      let mut vec: Vec<LeaderBoard> = Vec::new();
      for row in conn.query(&stmt, &[&game_id, &prize_id]).await? {
        let lb =  LeaderBoard {
          gplay_id: row.get(0),
          user_id: row.get(1),
          nick_name: row.get(2),
          avatar_url: row.get(3),
          exp: row.get(4),
          game_score: row.get(5),
          leave_timestamp: row.get(6),
        };
      
        vec.push(lb);
      }
      
      Ok(vec)

    }

    pub async fn get_timestamp(game_id: i64, prize_id: i64, user_id: i64, game_score: i32, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<SystemTime, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT leave_timestamp FROM public.\"gplayer\" WHERE game_id=$1 AND prize_id=$2 AND user_id=$3 AND game_score=$4 AND is_logged_leave=true AND is_closed=false LIMIT 1;").await?;
      let row = conn.query_one(&stmt, 
        &[&game_id, &prize_id, &user_id, &game_score]).await?;

      Ok(row.get(0))

    }
    
    pub async fn list_log_g_by_player(player_id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<LogGDetail>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT gp.id, gp.user_id, u.nick_name, u.avatar_url, gp.prize_id, p.title AS prize_title, p.img_url AS prize_img_url, p.type_id, gp.game_id, g.title AS game_title, g.img_url AS game_img_url, gp.enter_timestamp, gp.leave_timestamp, gp.is_watched_ad, gp.is_used_gem, gp.game_score FROM public.\"gplayer\" AS gp INNER JOIN public.\"user\" AS u ON gp.user_id = u.id INNER JOIN public.\"prize\" AS p ON gp.prize_id = p.id INNER JOIN public.\"game\" AS g ON gp.game_id = g.id WHERE gp.user_id=$1 AND gp.is_logged_leave=true ORDER BY gp.game_score DESC LIMIT 100;").await?;
    
      let mut vec: Vec<LogGDetail> = Vec::new();
      for row in conn.query(&stmt, &[&player_id]).await? {
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
          is_used_gem: row.get(14),
          game_score: row.get(15),
        };

        vec.push(log_g);
      }
      
      Ok(vec)
    }

    pub async fn list_unclosed_gplays(prize_id: i64, game_id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<GPlayer>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, user_id, prize_id, game_id, enter_timestamp, leave_timestamp, is_watched_ad, is_used_gem, game_score FROM public.\"gplayer\" WHERE prize_id=$1 AND game_id=$2 AND is_logged_leave=true AND is_closed=false ORDER BY game_score DESC, leave_timestamp ASC;").await?;
    
      let mut vec: Vec<GPlayer> = Vec::new();
      for row in conn.query(&stmt, &[&prize_id, &game_id]).await? {
        let log_g = GPlayer {
          id: row.get(0),
          user_id: row.get(1),
          prize_id: row.get(2),
          game_id: row.get(3),
          enter_timestamp: row.get(4),
          leave_timestamp: row.get(5),
          is_watched_ad: row.get(6),
          is_used_gem: row.get(7),
          game_score: row.get(8),
        };

        vec.push(log_g);
      }
      
      Ok(vec)
    }
    

}
