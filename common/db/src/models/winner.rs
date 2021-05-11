
use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;
use std::time::{SystemTime};

pub struct Winner {
  pub id: i64,
  pub prize_id: i64,
  pub prize_title: String,
  pub prize_img_url: String,
  pub prize_type_id: i32,
  pub user_id: i64,
  pub user_nick_name: String,
  pub user_avatar_url: String,
  pub created_on: SystemTime,
  pub claimed_on: SystemTime,
  pub status: i32,
  pub ship_tracking: String,
}

pub struct WinnerCount {
  pub unclaimed: i64,
  pub claimed: i64,
  pub delivered: i64,
  pub expired: i64
}

impl Winner {
    
    pub async fn add(winner: Winner, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"winner\" (prize_id, user_id, created_on, status, ship_tracking) VALUES ($1, $2, $3, $4, $5) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&winner.prize_id, &winner.user_id, &winner.created_on, &winner.status, &winner.ship_tracking]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn update(id: i64, status: i32, ship_tracking: String, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  

      let now = SystemTime::now();

      let stmt = conn.prepare("SELECT status, ship_tracking FROM public.\"winner\" WHERE id=$1;").await?;

      let row = conn.query_one(&stmt, 
                  &[&id]).await?;

      let old_status: i32 = row.get(0);
      let old_ship_tracking: String = row.get(1);

      let stmt = conn.prepare("INSERT INTO public.\"winner_change_log\" (winner_id, old_status, new_status, old_ship_tracking, new_ship_tracking, \
        created_on, changed_by) \
        VALUES ($1, $2, $3, $4, $5, $6, 1) RETURNING id;").await?;
      let _row = conn.query_one(&stmt, 
                  &[&id, &old_status, &status, &old_ship_tracking, &ship_tracking, &now]).await?;
    
      
      let stmt = conn.prepare("UPDATE public.\"winner\" SET status=$1, ship_tracking=$2 WHERE id=$3;").await?;
      let n = conn.execute(&stmt, 
                  &[&status, &ship_tracking, &id]).await?;
    

      Ok(n)
    }
    

    pub async fn claim(id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let now = SystemTime::now();

      let stmt = conn.prepare("UPDATE public.\"winner\" SET status=2, claimed_on=$1 WHERE id=$2 AND status=1;").await?;
      let n = conn.execute(&stmt, &[&now, &id]).await?;
    
      Ok(n)
    }

    pub async fn list(limit: i64, offset: i64, search_title: String, status: i32, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<Winner>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let mut vec: Vec<Winner> = Vec::new();
      if search_title.len() > 2 {
        let mut sql_string = format!("SELECT w.id, w.prize_id, p.title AS prize_title, p.img_url AS prize_img_url, p.type_id AS prize_type_id, w.user_id, u.nick_name AS user_nick_name, u.avatar_url, w.created_on, w.claimed_on, w.status, w.ship_tracking FROM public.\"winner\" AS w LEFT JOIN public.\"prize\" AS p ON w.prize_id = p.id LEFT JOIN public.\"user\" AS u ON w.user_id = u.id WHERE p.title ILIKE '%{}%' OR u.nick_name ILIKE '%{}%' ORDER BY w.id DESC LIMIT {} OFFSET {};", search_title, search_title, limit, offset);
        if status > 0 {
          sql_string = format!("SELECT w.id, w.prize_id, p.title AS prize_title, p.img_url AS prize_img_url, p.type_id AS prize_type_id, w.user_id, u.nick_name AS user_nick_name, u.avatar_url, w.created_on, w.claimed_on, w.status, w.ship_tracking FROM public.\"winner\" AS w LEFT JOIN public.\"prize\" AS p ON w.prize_id = p.id LEFT JOIN public.\"user\" AS u ON w.user_id = u.id WHERE p.title ILIKE '%{}%' OR u.nick_name ILIKE '%{}%' AND status={} ORDER BY w.id DESC LIMIT {} OFFSET {};", search_title, search_title, status, limit, offset);
        }
        let stmt = conn.prepare(&sql_string).await?;
    
        for row in conn.query(&stmt, &[]).await? {
          let winner = Winner {
            id: row.get(0),
            prize_id: row.get(1),
            prize_title:  row.get(2),
            prize_img_url:  row.get(3),
            prize_type_id: row.get(4),
            user_id:  row.get(5),
            user_nick_name:  row.get(6),
            user_avatar_url: row.get(7),
            created_on:  row.get(8),
            claimed_on: row.get(9),
            status:  row.get(10),
            ship_tracking:  row.get(11),
          };
  
          vec.push(winner);
        }
        
      } else {

        let mut sql_string = "SELECT w.id, w.prize_id, p.title AS prize_title, p.img_url AS prize_img_url, p.type_id AS prize_type_id, w.user_id, u.nick_name AS user_nick_name, u.avatar_url, w.created_on, w.claimed_on, w.status, w.ship_tracking FROM public.\"winner\" AS w LEFT JOIN public.\"prize\" AS p ON w.prize_id = p.id LEFT JOIN public.\"user\" AS u ON w.user_id = u.id ORDER BY w.id DESC LIMIT $1 OFFSET $2;".to_string();
        if status > 0 {
          sql_string = format!("SELECT w.id, w.prize_id, p.title AS prize_title, p.img_url AS prize_img_url, p.type_id AS prize_type_id, w.user_id, u.nick_name AS user_nick_name, u.avatar_url, w.created_on, w.claimed_on, w.status, w.ship_tracking FROM public.\"winner\" AS w LEFT JOIN public.\"prize\" AS p ON w.prize_id = p.id LEFT JOIN public.\"user\" AS u ON w.user_id = u.id WHERE w.status={} ORDER BY w.id DESC LIMIT $1 OFFSET $2;", status);
        }
        let stmt = conn.prepare(&sql_string).await?;
    
        for row in conn.query(&stmt, &[&limit, &offset]).await? {
          let winner = Winner {
            id: row.get(0),
            prize_id: row.get(1),
            prize_title:  row.get(2),
            prize_img_url:  row.get(3),
            prize_type_id: row.get(4),
            user_id:  row.get(5),
            user_nick_name:  row.get(6),
            user_avatar_url: row.get(7),
            created_on:  row.get(8),
            claimed_on: row.get(9),
            status:  row.get(10),
            ship_tracking:  row.get(11),
          };
  
          vec.push(winner);
        }
        
      }
      
      Ok(vec)
    }

    pub async fn list_recent(pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<Winner>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT w.id, w.prize_id, p.title AS prize_title, p.img_url AS prize_img_url, p.type_id AS prize_type_id, w.user_id, u.nick_name AS user_nick_name, u.avatar_url, w.created_on, w.claimed_on, w.status, w.ship_tracking FROM public.\"winner\" AS w LEFT JOIN public.\"prize\" AS p ON w.prize_id = p.id LEFT JOIN public.\"user\" AS u ON w.user_id = u.id ORDER BY w.created_on DESC LIMIT 20 OFFSET 0;").await?;
    
      let mut vec: Vec<Winner> = Vec::new();
      for row in conn.query(&stmt, &[]).await? {
        let winner = Winner {
          id: row.get(0),
          prize_id: row.get(1),
          prize_title:  row.get(2),
          prize_img_url:  row.get(3),
          prize_type_id: row.get(4),
          user_id:  row.get(5),
          user_nick_name:  row.get(6),
          user_avatar_url: row.get(7),
          created_on:  row.get(8),
          claimed_on: row.get(9),
          status:  row.get(10),
          ship_tracking:  row.get(11),
        };

        vec.push(winner);
      }
      
      Ok(vec)
    }

    pub async fn list_unclaimed(user_id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<Winner>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;

      let stmt = conn.prepare("SELECT w.id, w.prize_id, p.title AS prize_title, p.img_url AS prize_img_url, p.type_id AS prize_type_id, w.user_id, u.nick_name AS user_nick_name, u.avatar_url, w.created_on, w.claimed_on, w.status, w.ship_tracking FROM public.\"winner\" AS w LEFT JOIN public.\"prize\" AS p ON w.prize_id = p.id LEFT JOIN public.\"user\" AS u ON w.user_id = u.id WHERE w.user_id=$1 AND w.status=1 ORDER BY w.created_on DESC;").await?;
    
      let mut vec: Vec<Winner> = Vec::new();
      for row in conn.query(&stmt, &[&user_id]).await? {
        let winner = Winner {
          id: row.get(0),
          prize_id: row.get(1),
          prize_title:  row.get(2),
          prize_img_url:  row.get(3),
          prize_type_id: row.get(4),
          user_id:  row.get(5),
          user_nick_name:  row.get(6),
          user_avatar_url: row.get(7),
          created_on:  row.get(8),
          claimed_on: row.get(9),
          status:  row.get(10),
          ship_tracking:  row.get(11),
        };

        vec.push(winner);
      }
      
      Ok(vec)
    }

    pub async fn list_claimed(user_id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<Winner>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;

      let stmt = conn.prepare("SELECT w.id, w.prize_id, p.title AS prize_title, p.img_url AS prize_img_url, p.type_id AS prize_type_id, w.user_id, u.nick_name AS user_nick_name, u.avatar_url, w.created_on, w.claimed_on, w.status, w.ship_tracking FROM public.\"winner\" AS w LEFT JOIN public.\"prize\" AS p ON w.prize_id = p.id LEFT JOIN public.\"user\" AS u ON w.user_id = u.id WHERE w.user_id=$1 AND w.status>1 ORDER BY w.created_on DESC;").await?;
    
      let mut vec: Vec<Winner> = Vec::new();
      for row in conn.query(&stmt, &[&user_id]).await? {
        let winner = Winner {
          id: row.get(0),
          prize_id: row.get(1),
          prize_title:  row.get(2),
          prize_img_url:  row.get(3),
          prize_type_id: row.get(4),
          user_id:  row.get(5),
          user_nick_name:  row.get(6),
          user_avatar_url: row.get(7),
          created_on:  row.get(8),
          claimed_on: row.get(9),
          status:  row.get(10),
          ship_tracking:  row.get(11),
        };

        vec.push(winner);
      }
      
      Ok(vec)
    }

    pub async fn count(pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<WinnerCount, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let sql = "SELECT (SELECT COUNT(id) FROM public.\"winner\" WHERE status=1) AS unclaimed, (SELECT COUNT(id) FROM public.\"winner\" WHERE status=2) AS claimed, (SELECT COUNT(id) FROM public.\"winner\" WHERE status=3) AS delivered, (SELECT COUNT(id) FROM public.\"winner\" WHERE status=4) AS expired;";

      let stmt = conn.prepare(sql).await?;
      let row = conn.query_one(&stmt, &[]).await?;
      
      Ok(WinnerCount {
        unclaimed: row.get::<usize, i64>(0),
        claimed: row.get::<usize, i64>(1),
        delivered: row.get::<usize, i64>(2),
        expired: row.get::<usize, i64>(3)
      })
    }

}
