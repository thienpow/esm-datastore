use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;
use postgres_native_tls::MakeTlsConnector;
use std::time::{SystemTime};


pub struct Spinner {

}

pub struct SpinnerRule {
  pub id: i32,
  pub probability: f64,
  pub win: f64,
  pub type_id: i32,
}

pub struct WinType {
  pub id: i32,
  pub title: String,
}

pub struct LogSDetail {
  pub id: i64,
  pub user_id: i64,
  pub prize_id: i64,
  pub win_type: i32,
  pub win_amount: i32,
  pub enter_timestamp: SystemTime,
  pub leave_timestamp: SystemTime,
}


impl Spinner {
    
    pub async fn add(sr: SpinnerRule, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<i32, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"spinner_rule\" (probability, win, type_id) VALUES ($1, $2, $3) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&sr.probability, &sr.win, &sr.type_id]).await?;
    
      Ok(row.get::<usize, i32>(0))
    }

    pub async fn add_extra_free_spin(user_id: i64, free_spins: i32, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"spinner_extra_log\" (free_spins, user_id) VALUES ($1, $2) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&free_spins, &user_id]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn update(sr: SpinnerRule, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"spinner_rule\" SET probability=$1, win=$2, type_id=$3 WHERE id=$4;").await?;
      let n = conn.execute(&stmt, 
                  &[&sr.probability, &sr.win, &sr.type_id,
                  &sr.id]).await?;
    
      Ok(n)
    }
    
    pub async fn delete(id: i32, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"spinner_rule\" WHERE id=$1;").await?;
      let n = conn.execute(&stmt, &[&id]).await?;
    
      Ok(n)
    }

    pub async fn list(pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<SpinnerRule>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, probability, win, type_id FROM public.\"spinner_rule\" ORDER BY id ASC;").await?;
    
      let mut vec: Vec<SpinnerRule> = Vec::new();
      for row in conn.query(&stmt, &[]).await? {
        let rule = SpinnerRule {
          id: row.get(0),
          probability: row.get(1),
          win: row.get(2),
          type_id: row.get(3)
        };

        vec.push(rule);
      }
      
      Ok(vec)
    }


    pub async fn list_win_type(pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<WinType>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, title FROM public.\"spinner_win_type\" ORDER BY id ASC;").await?;
    
      let mut vec: Vec<WinType> = Vec::new();
      for row in conn.query(&stmt, &[]).await? {
        let t = WinType {
          id: row.get(0),
          title: row.get(1),
        };

        vec.push(t);
      }
      
      Ok(vec)
    }


    pub async fn check_spin_available(user_id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT 
        (SELECT COALESCE(SUM(free_spins), 0) FROM public.\"spinner_extra_log\" WHERE user_id=$1 AND DATE(created_on)=CURRENT_DATE) + (SELECT freespin_per_day FROM public.\"config\") - 
        (SELECT count(id) FROM public.\"spinner_log\" WHERE user_id=$1 AND is_logged_leave=true AND date(enter_timestamp) = CURRENT_DATE);").await?;
      let row = conn.query_one(&stmt, &[&user_id]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    

    pub async fn spin_enter(spin_detail: LogSDetail, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"spinner_log\" (user_id, prize_id, enter_timestamp) VALUES ($1, $2, $3) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&spin_detail.user_id, &spin_detail.prize_id, &spin_detail.enter_timestamp]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn spin_leave(spin_detail: LogSDetail, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"spinner_log\" SET leave_timestamp=$1, win_type=$2, win_amount=$3, is_logged_leave=true WHERE id=$4 AND user_id=$5 AND is_logged_leave=false;").await?;
      let n = conn.execute(&stmt, 
                  &[&spin_detail.leave_timestamp, &spin_detail.win_type, &spin_detail.win_amount, &spin_detail.id, &spin_detail.user_id]).await?;
    
      Ok(n)
    }


    pub async fn get_spin_prize_id(id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT prize_id FROM public.\"spinner_log\" WHERE id=$1").await?;
      let row = conn.query_one(&stmt, &[&id]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
}
