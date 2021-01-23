
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
  pub tickets_required: i64,
  pub count_down_hours: i32,
  pub type_id: i32,
  pub reward_id: i64,
  pub reward_amount: i64,
  pub scheduled_on: SystemTime,
  pub repeated_on: Vec<i32>,
  pub status: i32,
  pub status_prize: i32,
  pub tickets_collected: i64,
  pub tournament_ids: Vec<i64>
}


pub struct PrizeType {
  pub id: i32,
  pub title: String
}

impl Prize {
    
    pub async fn add(prize: Prize, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"prize\" (title, subtitle, img_url, content, tickets_required, count_down_hours, type_id, reward_id, reward_amount, scheduled_on, repeated_on, status, tournament_ids) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&prize.title, &prize.subtitle, &prize.img_url, &prize.content, &prize.tickets_required, &prize.count_down_hours,
                  &prize.type_id, &prize.reward_id, &prize.reward_amount, 
                  &prize.scheduled_on, &prize.repeated_on, 
                  &prize.status, &prize.tournament_ids]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn update(prize: Prize, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"prize\" SET title=$1, subtitle=$2, img_url=$3, content=$4, tickets_required=$5, count_down_hours=$6, type_id=$7, reward_id=$8, reward_amount=$9, scheduled_on=$10, repeated_on=$11, status=$12, tournament_ids=$13 WHERE id=$14;").await?;
      let n = conn.execute(&stmt, 
                  &[&prize.title, &prize.subtitle, &prize.img_url, &prize.content, &prize.tickets_required, &prize.count_down_hours,
                  &prize.type_id, &prize.reward_id, &prize.reward_amount, &prize.scheduled_on, &prize.repeated_on, &prize.status, &prize.tournament_ids,
                  &prize.id]).await?;
    
      Ok(n)
    }
    
    pub async fn delete(id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"prize\" WHERE id=$1;").await?;
      let n = conn.execute(&stmt, &[&id]).await?;
    
      Ok(n)
    }
    
    pub async fn list(limit: i64, offset: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<Prize>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, title, subtitle, img_url, content, tickets_required, count_down_hours, type_id, reward_id, reward_amount, scheduled_on, repeated_on, status, status_prize, tickets_collected, tournament_ids FROM public.\"prize\" ORDER BY id DESC LIMIT $1 OFFSET $2;").await?;
    
      //let rows = conn.query(&stmt, &[]).await?;

      let mut vec: Vec<Prize> = Vec::new();
      for row in conn.query(&stmt, &[&limit, &offset]).await? {
        let prize = Prize {
          id: row.get(0),
          title: row.get(1),
          subtitle: row.get(2),
          img_url: row.get(3),
          content: row.get(4),
          tickets_required: row.get(5),
          count_down_hours: row.get(6),
          type_id: row.get(7),
          reward_id: row.get(8),
          reward_amount: row.get(9),
          scheduled_on: row.get(10),
          repeated_on: row.get(11),
          status: row.get(12),
          status_prize: row.get(13),
          tickets_collected: row.get(14),
          tournament_ids: row.get(15),
        };

        vec.push(prize);
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

}
