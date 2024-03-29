
use tokio_postgres;
use std::time::{SystemTime};
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;
use postgres_native_tls::MakeTlsConnector;

pub struct Tournament {
  pub id: i64,
  pub title: String,
  pub status: i32,
}

pub struct TourSet {
  pub id: i64,
  pub tour_id: i64,
  pub set_id: i64,
  pub set_title: String,
  pub status: i32,
}
pub struct TourSetSmall {
  pub id: i64,
  pub tour_id: i64,
  pub set_id: i64,
  pub status: i32,
}

//pub scheduled_on: SystemTime,
pub struct TournamentSet {
  pub id: i64,
  pub title: String,
  pub status: i32, 
  pub duration_days: i32,
  pub duration_hours: i32,
  pub is_group: bool,
}
pub struct TournamentSetGameRule {
  pub id: i64,
  pub set_id: i64,
  pub game_id: i64,
  pub game_title: String,
  pub duration_days: i32,
  pub duration_hours: i32,
  pub duration_minutes: i32,
  pub group_id: i32,
}


pub struct TournamentCount {
  pub draft: i64,
  pub published: i64,
  pub archived: i64 
}

pub struct TournamentSetCount {
  pub draft: i64,
  pub published: i64,
  pub archived: i64 
}
pub struct LeaderboardHistory {
  pub rank: i32,
  pub prize_id: i64,
  pub user_id: i64,
  pub cg_id: i64,
  pub gplay_id: i64,
  pub game_score: i32,
  pub prize_type_id: i32,
  pub game_id: i64,
  pub reward_gem: i32,
  pub reward_exp: i32,
  pub tickets: i32,
  pub created_on: SystemTime,
}


impl Tournament {
    
    pub async fn record_leaderboard_history(history: LeaderboardHistory, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare(r#"INSERT INTO public.leaderboard_history 
      (rank, prize_id, user_id, cg_id, gplay_id, game_score, prize_type_id, game_id, reward_gem, reward_exp, tickets, created_on) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) 
      RETURNING id;"#).await?;

      let row = conn.query_one(&stmt, &[
        &history.rank, &history.prize_id, &history.user_id,
        &history.cg_id, &history.gplay_id, &history.game_score,
        &history.prize_type_id, 
        &history.game_id, &history.reward_gem, &history.reward_exp, 
        &history.tickets, &history.created_on]).await?;
    
      Ok(row.get::<usize, i64>(0))
      
    }
    pub async fn add(tournament: Tournament, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"tournament\" (title, status) VALUES ($1, $2) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&tournament.title, &tournament.status]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn add_set(tournament_set: TournamentSet, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"tournament_set\" (title, status, duration_days, duration_hours, is_group) VALUES ($1, $2, $3, $4, $5) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&tournament_set.title, &tournament_set.status, &tournament_set.duration_days, &tournament_set.duration_hours, &tournament_set.is_group]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn add_set_game_rule(rule: TournamentSetGameRule, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"tournament_set_game_rule\" (set_id, game_id, duration_days, duration_hours, duration_minutes, group_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&rule.set_id, &rule.game_id, &rule.duration_days, &rule.duration_hours, &rule.duration_minutes, &rule.group_id]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn update(tournament: Tournament, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"tournament\" SET title=$1, status=$2 WHERE id=$3;").await?;
      let n = conn.execute(&stmt, 
                  &[&tournament.title, &tournament.status, 
                  &tournament.id]).await?;
    
      Ok(n)
    }
    
    pub async fn update_set(tournament_set: TournamentSet, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"tournament_set\" SET title=$1, status=$2, duration_days=$3, duration_hours=$4, is_group=$5 WHERE id=$6;").await?;
      let n = conn.execute(&stmt, 
                  &[&tournament_set.title, &tournament_set.status, &tournament_set.duration_days, &tournament_set.duration_hours, &tournament_set.is_group, &tournament_set.id]).await?;
    
      Ok(n)
    }
    
    pub async fn update_set_game_rule(rule: TournamentSetGameRule, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"tournament_set_game_rule\" SET set_id=$1, game_id=$2, duration_days=$3, duration_hours=$4, duration_minutes=$5, group_id=$6 WHERE id=$7;").await?;
      let n = conn.execute(&stmt, 
                  &[&rule.set_id, &rule.game_id, &rule.duration_days, &rule.duration_hours, &rule.duration_minutes, &rule.group_id, &rule.id]).await?;
    
      Ok(n)
    }
    
    pub async fn delete(id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"tournament\" WHERE id=$1;").await?;
      let n = conn.execute(&stmt, &[&id]).await?;
    
      Ok(n)
    }
    
    pub async fn delete_set(id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"tournament_set\" WHERE id=$1;").await?;
      let n = conn.execute(&stmt, &[&id]).await?;
    
      Ok(n)
    }
    
    pub async fn delete_set_game_rule(id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"tournament_set_game_rule\" WHERE id=$1;").await?;
      let n = conn.execute(&stmt, &[&id]).await?;
    
      Ok(n)
    }
    
    pub async fn delete_all_set_game_rule(set_id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"tournament_set_game_rule\" WHERE set_id=$1;").await?;
      let n = conn.execute(&stmt, &[&set_id]).await?;
    
      Ok(n)
    }
    
    pub async fn list(limit: i64, offset: i64, search_title: String, status: i32, ids: String, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<Tournament>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let mut vec: Vec<Tournament> = Vec::new();
      if search_title.len() > 2 {
        let mut sql_string = format!("SELECT id, title, status FROM public.\"tournament\" WHERE title ILIKE '%{}%' ORDER BY id DESC LIMIT {} OFFSET {};", search_title, limit, offset);
        if status > -1 {
          sql_string = format!("SELECT id, title, status FROM public.\"tournament\" WHERE title ILIKE '%{}%' AND status={} ORDER BY id DESC LIMIT {} OFFSET {};", search_title, status, limit, offset);
        }
        let stmt = conn.prepare(&sql_string).await?;
    
        for row in conn.query(&stmt, &[]).await? {
          let tournament = Tournament {
            id: row.get(0),
            title: row.get(1),
            status: row.get(2)
          };
  
          vec.push(tournament);
        }
        
      } else {
        if ids.len() > 0 {
          let sql_string = format!("SELECT id, title, status FROM public.\"tournament\" WHERE id IN ({});", ids);
          //print!("sql_string: {}.", sql_string);
          let stmt = conn.prepare(&sql_string).await?;
      
          for row in conn.query(&stmt, &[]).await? {
            let tournament = Tournament {
              id: row.get(0),
              title: row.get(1),
              status: row.get(2)
            };
    
            vec.push(tournament);
          }
          
        } else {
          let mut sql_string = "SELECT id, title, status FROM public.\"tournament\" ORDER BY id DESC LIMIT $1 OFFSET $2;".to_string();
          if status > -1 {
            sql_string = format!("SELECT id, title, status FROM public.\"tournament\" WHERE status={} ORDER BY id DESC LIMIT $1 OFFSET $2;", status);
          }
          
          let stmt = conn.prepare(&sql_string).await?;
      
          for row in conn.query(&stmt, &[&limit, &offset]).await? {
            let tournament = Tournament {
              id: row.get(0),
              title: row.get(1),
              status: row.get(2)
            };
    
            vec.push(tournament);
          }
          
        }
        
      }
      
      Ok(vec)
    }

    pub async fn list_set(limit: i64, offset: i64, search_title: String, status: i32, ids: String, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<TournamentSet>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let mut vec: Vec<TournamentSet> = Vec::new();
      if search_title.len() > 2 {
        let mut sql_string = format!("SELECT id, title, status, duration_days, duration_hours, is_group FROM public.\"tournament_set\" WHERE title ILIKE '%{}%' ORDER BY id DESC LIMIT {} OFFSET {};", search_title, limit, offset);
        if status > -1 {
          sql_string = format!("SELECT id, title, status, duration_days, duration_hours, is_group FROM public.\"tournament_set\" WHERE title ILIKE '%{}%' AND status={} ORDER BY id DESC LIMIT {} OFFSET {};", search_title, status, limit, offset);
        }
        let stmt = conn.prepare(&sql_string).await?;
    
        for row in conn.query(&stmt, &[]).await? {
          let set = TournamentSet {
            id: row.get(0),
            title: row.get(1), 
            status: row.get(2),
            duration_days: row.get(3),
            duration_hours: row.get(4), 
            is_group: row.get(5), 
          };
  
          vec.push(set);
        }
        
      } else {

        if ids.len() > 0 {
          let sql_string = format!("SELECT id, title, status, duration_days, duration_hours, is_group FROM public.\"tournament_set\" WHERE id IN ({});", ids);

          let stmt = conn.prepare(&sql_string).await?;
      
          for row in conn.query(&stmt, &[]).await? {
            let set = TournamentSet {
              id: row.get(0),
              title: row.get(1), 
              status: row.get(2),
              duration_days: row.get(3),
              duration_hours: row.get(4), 
              is_group: row.get(5), 
            };
    
            vec.push(set);
          }
        } else {
          let mut sql_string = "SELECT id, title, status, duration_days, duration_hours, is_group FROM public.\"tournament_set\" ORDER BY id DESC LIMIT $1 OFFSET $2;".to_string();
          if status > -1 {
            sql_string = format!("SELECT id, title, status, duration_days, duration_hours, is_group FROM public.\"tournament_set\" WHERE status={} ORDER BY id DESC LIMIT $1 OFFSET $2;", status);
          }
          let stmt = conn.prepare(&sql_string).await?;
      
          for row in conn.query(&stmt, &[&limit, &offset]).await? {
            let set = TournamentSet {
              id: row.get(0),
              title: row.get(1), 
              status: row.get(2),
              duration_days: row.get(3),
              duration_hours: row.get(4), 
              is_group: row.get(5), 
            };
    
            vec.push(set);
          }
        }
        
      }
      
      Ok(vec)
    }

    pub async fn list_set_game_rule(id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<TournamentSetGameRule>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT tsg.id, tsg.set_id, tsg.game_id, COALESCE(g.title, '') AS game_title, tsg.duration_days, tsg.duration_hours, tsg.duration_minutes, tsg.group_id FROM public.\"tournament_set_game_rule\" AS tsg LEFT JOIN public.\"game\" AS g ON g.id = tsg.game_id  WHERE set_id=$1 ORDER BY id ASC;").await?;
    
      let mut vec: Vec<TournamentSetGameRule> = Vec::new();
      for row in conn.query(&stmt, &[&id]).await? {
        let rule = TournamentSetGameRule {
          id: row.get(0),
          set_id: row.get(1),
          game_id: row.get(2),
          game_title: row.get(3),
          duration_days: row.get(4),
          duration_hours: row.get(5),
          duration_minutes: row.get(6),
          group_id: row.get(7),
        };

        vec.push(rule);
      }
      
      Ok(vec)
    }


    pub async fn count(pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<TournamentCount, RunError<tokio_postgres::Error>> {
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

    pub async fn count_set(pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<TournamentSetCount, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let sql = "SELECT (SELECT COUNT(id) FROM public.\"tournament_set\" WHERE status=1) AS draft, (SELECT COUNT(id) FROM public.\"tournament_set\" WHERE status=2) AS published, (SELECT COUNT(id) FROM public.\"tournament_set\" WHERE status=3) AS archived;";

      let stmt = conn.prepare(sql).await?;
      let row = conn.query_one(&stmt, &[]).await?;
      
      Ok(TournamentSetCount {
        draft: row.get::<usize, i64>(0),
        published: row.get::<usize, i64>(1),
        archived: row.get::<usize, i64>(2)
      })
    }


    pub async fn add_tour_set(ts: TourSet, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"tour_set\" (tour_id, set_id, status) VALUES ($1, $2, $3) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&ts.tour_id, &ts.set_id, &ts.status]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn delete_tour_set(id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"tour_set\" WHERE id=$1;").await?;
      let n = conn.execute(&stmt, &[&id]).await?;
    
      Ok(n)
    }

    pub async fn list_tour_set(id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<TourSet>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT ts.id, ts.tour_id, ts.set_id, s.title as set_title, ts.status FROM public.\"tour_set\" AS ts LEFT JOIN public.\"tournament_set\" AS s ON s.id = ts.set_id WHERE ts.tour_id=$1 ORDER BY ts.id ASC;").await?;
    
      let mut vec: Vec<TourSet> = Vec::new();
      for row in conn.query(&stmt, &[&id]).await? {
        let rule = TourSet {
          id: row.get(0),
          tour_id: row.get(1),
          set_id: row.get(2),
          set_title: row.get(3),
          status: row.get(4)
        };

        vec.push(rule);
      }
      
      Ok(vec)
    }

    pub async fn list_tour_set_small(tour_id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<TourSetSmall>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, tour_id, set_id, status FROM public.\"tour_set\" WHERE tour_id=$1 ORDER BY id ASC;").await?;
    
      let mut vec: Vec<TourSetSmall> = Vec::new();
      for row in conn.query(&stmt, &[&tour_id]).await? {
        let rule = TourSetSmall {
          id: row.get(0),
          tour_id: row.get(1),
          set_id: row.get(2),
          status: row.get(3)
        };

        vec.push(rule);
      }
      
      Ok(vec)
    }

}
