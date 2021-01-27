
use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;
//use std::time::{SystemTime};
use svc::adminapi::adminapi_proto::TournamentCount;
use crate::svc;


pub struct Tournament {
  pub id: i64,
  pub title: String,
  pub tour_set_ids: Vec<i64>,
  pub status: i32,
}

//pub scheduled_on: SystemTime,
pub struct TournamentSet {
  pub id: i64,
  pub title: String,
  pub duration_days: i32,
  pub duration_hours: i32,
  pub is_group: bool,
}
pub struct TournamentSetGameRule {
  pub id: i64,
  pub set_id: i64,
  pub game_id: i64,
  pub duration_days: i32,
  pub duration_hours: i32,
  pub duration_minutes: i32,
  pub group_id: i32,
}

impl Tournament {
    
    pub async fn add(tournament: Tournament, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"tournament\" (title, tour_set_ids, status) VALUES ($1, $2, $3) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&tournament.title, &tournament.tour_set_ids, &tournament.status]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn add_set(tournament_set: TournamentSet, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"tournament_set\" (title, duration_days, duration_hours, is_group) VALUES ($1, $2, $3, $4) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&tournament_set.title, &tournament_set.duration_days, &tournament_set.duration_hours, &tournament_set.is_group]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn add_set_game_rule(rule: TournamentSetGameRule, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"tournament_set_game_rule\" (set_id, game_id, duration_days, duration_hours, duration_minutes, group_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&rule.set_id, &rule.game_id, &rule.duration_days, &rule.duration_hours, &rule.duration_minutes, &rule.group_id]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn update(tournament: Tournament, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"tournament\" SET title=$1, tour_set_ids=$2, status=$3 WHERE id=$4;").await?;
      let n = conn.execute(&stmt, 
                  &[&tournament.title, &tournament.tour_set_ids, &tournament.status, 
                  &tournament.id]).await?;
    
      Ok(n)
    }
    
    pub async fn update_set(tournament_set: TournamentSet, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"tournament_set\" SET title=$1, duration_days=$2, duration_hours=$3, is_group=$4 WHERE id=$5;").await?;
      let n = conn.execute(&stmt, 
                  &[&tournament_set.title, &tournament_set.duration_days, &tournament_set.duration_hours, &tournament_set.is_group, &tournament_set.id]).await?;
    
      Ok(n)
    }
    
    pub async fn update_set_game_rule(rule: TournamentSetGameRule, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"tournament_set_game_rule\" SET set_id=$1, game_id=$2, duration_days=$3, duration_hours=$4, duration_minutes=$5, group_id=$6 WHERE id=$7;").await?;
      let n = conn.execute(&stmt, 
                  &[&rule.set_id, &rule.game_id, &rule.duration_days, &rule.duration_hours, &rule.duration_minutes, &rule.group_id, &rule.id]).await?;
    
      Ok(n)
    }
    
    pub async fn delete(id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"tournament\" WHERE id=$1;").await?;
      let n = conn.execute(&stmt, &[&id]).await?;
    
      Ok(n)
    }
    
    pub async fn delete_set(id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"tournament_set\" WHERE id=$1;").await?;
      let n = conn.execute(&stmt, &[&id]).await?;
    
      Ok(n)
    }
    
    pub async fn delete_set_game_rule(id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"tournament_set_game_rule\" WHERE id=$1;").await?;
      let n = conn.execute(&stmt, &[&id]).await?;
    
      Ok(n)
    }
    
    pub async fn list(limit: i64, offset: i64, search_title: String, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<Tournament>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let mut vec: Vec<Tournament> = Vec::new();
      if search_title.len() > 2 {
        let stmt = conn.prepare("SELECT id, title, tour_set_ids, status FROM public.\"tournament\" WHERE title LIKE '%$1%' ORDER BY id DESC LIMIT $2 OFFSET $3;").await?;
    
        for row in conn.query(&stmt, &[&search_title, &limit, &offset]).await? {
          let tournament = Tournament {
            id: row.get(0),
            title: row.get(1),
            tour_set_ids:  row.get(2),
            status: row.get(3)
          };
  
          vec.push(tournament);
        }
        
      } else {
        let stmt = conn.prepare("SELECT id, title, tour_set_ids, status FROM public.\"tournament\" ORDER BY id DESC LIMIT $1 OFFSET $2;").await?;
    
        for row in conn.query(&stmt, &[&limit, &offset]).await? {
          let tournament = Tournament {
            id: row.get(0),
            title: row.get(1),
            tour_set_ids:  row.get(2),
            status: row.get(3)
          };
  
          vec.push(tournament);
        }
        
      }
      
      Ok(vec)
    }

    pub async fn list_set(limit: i64, offset: i64, search_title: String, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<TournamentSet>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let mut vec: Vec<TournamentSet> = Vec::new();
      if search_title.len() > 2 {
        let stmt = conn.prepare("SELECT id, title, duration_days, duration_hours, is_group FROM public.\"tournament_set\" WHERE title LIKE '%$1%' ORDER BY id DESC LIMIT $2 OFFSET $3;").await?;
    
        for row in conn.query(&stmt, &[&search_title, &limit, &offset]).await? {
          let set = TournamentSet {
            id: row.get(0),
            title: row.get(1), 
            duration_days: row.get(2),
            duration_hours: row.get(3), 
            is_group: row.get(4), 
          };
  
          vec.push(set);
        }
        
      } else {
        let stmt = conn.prepare("SELECT id, title, duration_days, duration_hours, is_group FROM public.\"tournament_set\" ORDER BY id DESC LIMIT $1 OFFSET $2;").await?;
    
        for row in conn.query(&stmt, &[&limit, &offset]).await? {
          let set = TournamentSet {
            id: row.get(0),
            title: row.get(1), 
            duration_days: row.get(2),
            duration_hours: row.get(3), 
            is_group: row.get(4), 
          };
  
          vec.push(set);
        }
        
      }
      
      Ok(vec)
    }

    pub async fn list_set_game_rule(id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<TournamentSetGameRule>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, set_id, game_id, duration_days, duration_hours, duration_minutes, group_id FROM public.\"tournament_set_game_rule\" WHERE set_id=$1 ORDER BY id ASC;").await?;
    
      let mut vec: Vec<TournamentSetGameRule> = Vec::new();
      for row in conn.query(&stmt, &[&id]).await? {
        let rule = TournamentSetGameRule {
          id: row.get(0),
          set_id: row.get(1),
          game_id: row.get(2),
          duration_days: row.get(3),
          duration_hours: row.get(4),
          duration_minutes: row.get(5),
          group_id: row.get(6),
        };

        vec.push(rule);
      }
      
      Ok(vec)
    }


    pub async fn count(pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<TournamentCount, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let sql = "SELECT (SELECT COUNT(id) FROM public.\"tournament\" WHERE status=1) AS draft, (SELECT COUNT(id) FROM public.\"tournament\" WHERE status=2) AS published, (SELECT COUNT(id) FROM public.\"tournament\" WHERE status=3) AS archived;";

      let stmt = conn.prepare(sql).await?;
      let row = conn.query_one(&stmt, &[]).await?;
      
      Ok(TournamentCount {
        draft: row.get::<usize, i64>(0),
        published: row.get::<usize, i64>(1),
        archived: row.get::<usize, i64>(2)
      })
    }


}
