
use std::time::{SystemTime};
use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;
use svc::adminapi::adminapi_proto::PrizeCount;
use crate::svc;


pub struct Prize {
  pub id: i64,
  pub title: String,
  pub subtitle: String,
  pub img_url: String,
  pub content: String,
  pub type_id: i32,
  pub tickets_required: i64,
  pub duration_days: i32,
  pub duration_hours: i32,
  pub timezone: f64,
  pub scheduled_on: SystemTime,
  pub is_repeat: bool,
  pub repeated_on: Vec<i32>,
  pub status: i32,
  pub status_prize: i32,
  pub tickets_collected: i64,
  pub tournament_ids: Vec<i64>
}

pub struct PrizeTour {
  pub id: i64,
  pub prize_id: i64,
  pub tour_id: i64,
  pub tour_title: String,
  pub status: i32,
}


pub struct PrizeType {
  pub id: i32,
  pub title: String
}

impl Prize {
    
    pub async fn add(prize: Prize, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"prize\" (title, subtitle, img_url, content, type_id, tickets_required, duration_days, duration_hours, timezone, scheduled_on, is_repeat, repeated_on, status, tournament_ids) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&prize.title, &prize.subtitle, &prize.img_url, &prize.content, 
                  &prize.type_id, &prize.tickets_required, 
                  &prize.duration_days, &prize.duration_hours,
                  &prize.timezone, &prize.scheduled_on, 
                  &prize.is_repeat, &prize.repeated_on, 
                  &prize.status, &prize.tournament_ids]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn update(prize: Prize, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"prize\" SET title=$1, subtitle=$2, img_url=$3, content=$4, type_id=$5, tickets_required=$6, duration_days=$7, duration_hours=$8, timezone=$9, scheduled_on=$10, is_repeat=$11, repeated_on=$12, status=$13, tournament_ids=$14 WHERE id=$15;").await?;
      let n = conn.execute(&stmt, 
                  &[&prize.title, &prize.subtitle, &prize.img_url, &prize.content, 
                  &prize.type_id, &prize.tickets_required, 
                  &prize.duration_days, &prize.duration_hours,
                  &prize.timezone, &prize.scheduled_on, 
                  &prize.is_repeat, &prize.repeated_on, 
                  &prize.status, &prize.tournament_ids,
                  &prize.id]).await?;
    
      Ok(n)
    }
    
    pub async fn delete(id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"prize\" WHERE id=$1;").await?;
      let n = conn.execute(&stmt, &[&id]).await?;
    
      Ok(n)
    }
    
    pub async fn list(limit: i64, offset: i64, search_title: String, status: i32, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<Prize>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let mut vec: Vec<Prize> = Vec::new();
      if search_title.len() > 2 {
        let mut sql_string = format!("SELECT id, title, subtitle, img_url, content, type_id, tickets_required, duration_days, duration_hours, timezone, scheduled_on, is_repeat, repeated_on, status, tournament_ids, status_prize, tickets_collected FROM public.\"prize\" WHERE title ILIKE '%{}%' ORDER BY id DESC LIMIT {} OFFSET {};", search_title, limit, offset);
        if status > 0 {
          sql_string = format!("SELECT id, title, subtitle, img_url, content, type_id, tickets_required, duration_days, duration_hours, timezone, scheduled_on, is_repeat, repeated_on, status, tournament_ids, status_prize, tickets_collected FROM public.\"prize\" WHERE title ILIKE '%{}%' AND status={} ORDER BY id DESC LIMIT {} OFFSET {};", search_title, status, limit, offset);
        }
        let stmt = conn.prepare(&sql_string).await?;
    
        for row in conn.query(&stmt, &[]).await? {
          let prize = Prize {
            id: row.get(0),
            title: row.get(1),
            subtitle: row.get(2),
            img_url: row.get(3),
            content: row.get(4),
            type_id: row.get(5),
            tickets_required: row.get(6),
            duration_days: row.get(7),
            duration_hours: row.get(8),
            timezone: row.get(9),
            scheduled_on: row.get(10),
            is_repeat: row.get(11),
            repeated_on: row.get(12),
            status: row.get(13),
            tournament_ids: row.get(14),
            status_prize: row.get(15),
            tickets_collected: row.get(16),
          };
  
          vec.push(prize);
        }
        
      } else {
        let mut sql_string = "SELECT id, title, subtitle, img_url, content, type_id, tickets_required, duration_days, duration_hours, timezone, scheduled_on, is_repeat, repeated_on, status, tournament_ids, status_prize, tickets_collected FROM public.\"prize\" ORDER BY id DESC LIMIT $1 OFFSET $2;".to_string();
        if status > 0 {
          sql_string = format!("SELECT id, title, subtitle, img_url, content, type_id, tickets_required, duration_days, duration_hours, timezone, scheduled_on, is_repeat, repeated_on, status, tournament_ids, status_prize, tickets_collected FROM public.\"prize\" WHERE status={} LIMIT $1 OFFSET $2;", status);
        }
        let stmt = conn.prepare(&sql_string).await?;
    
        for row in conn.query(&stmt, &[&limit, &offset]).await? {
          let prize = Prize {
            id: row.get(0),
            title: row.get(1),
            subtitle: row.get(2),
            img_url: row.get(3),
            content: row.get(4),
            type_id: row.get(5),
            tickets_required: row.get(6),
            duration_days: row.get(7),
            duration_hours: row.get(8),
            timezone: row.get(9),
            scheduled_on: row.get(10),
            is_repeat: row.get(11),
            repeated_on: row.get(12),
            status: row.get(13),
            tournament_ids: row.get(14),
            status_prize: row.get(15),
            tickets_collected: row.get(16),
          };
  
          vec.push(prize);
        }
        
      }
      
      Ok(vec)
    }


    pub async fn count(pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<PrizeCount, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let sql = "SELECT (SELECT COUNT(id) FROM public.\"prize\" WHERE status=1) AS draft, (SELECT COUNT(id) FROM public.\"prize\" WHERE status=2) AS published, (SELECT COUNT(id) FROM public.\"prize\" WHERE status=3) AS archived;";

      let stmt = conn.prepare(sql).await?;
      let row = conn.query_one(&stmt, &[]).await?;
      
      Ok(PrizeCount {
        draft: row.get::<usize, i64>(0),
        published: row.get::<usize, i64>(1),
        archived: row.get::<usize, i64>(2)
      })

    }


    pub async fn list_prize_type(pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<PrizeType>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, title FROM public.\"prize_type\" ORDER BY id ASC;").await?;
    
      let mut vec: Vec<PrizeType> = Vec::new();
      for row in conn.query(&stmt, &[]).await? {
        let t = PrizeType {
          id: row.get(0),
          title: row.get(1),
        };

        vec.push(t);
      }
      
      Ok(vec)
    }

    pub async fn add_prize_tour(p: PrizeTour, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"prize_tour\" (prize_id, tour_id, status) VALUES ($1, $2, $3) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&p.prize_id, &p.tour_id, &p.status]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn delete_prize_tour(id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"prize_tour\" WHERE id=$1;").await?;
      let n = conn.execute(&stmt, &[&id]).await?;
    
      Ok(n)
    }

    pub async fn list_prize_tour(id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<PrizeTour>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, prize_id, tour_id, public.\"tournament\".title as tour_title, status FROM public.\"prize_tour\" LEFT JOIN public.\"tournament\" ON public.\"prize_tour\".tour_id = public.\"tournament\".id WHERE public.\"prize_tour\".prize_id=$1 ORDER BY id ASC;").await?;
    
      let mut vec: Vec<PrizeTour> = Vec::new();
      for row in conn.query(&stmt, &[&id]).await? {
        let rule = PrizeTour {
          id: row.get(0),
          prize_id: row.get(1),
          tour_id: row.get(2),
          tour_title: row.get(3),
          status: row.get(4)
        };

        vec.push(rule);
      }
      
      Ok(vec)
    }

}
