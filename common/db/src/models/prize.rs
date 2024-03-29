
use std::time::{SystemTime};
use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;
use postgres_native_tls::MakeTlsConnector;

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
  pub scheduled_off: SystemTime,
  pub is_repeat: bool,
  pub repeated_on: Vec<i32>,
  pub status: i32,
  pub status_progress: i32,
  pub tickets_collected: i64
}

pub struct PrizeActive {
  pub current_game_id: i64,

  pub prize_id: i64,
  pub prize_title: String,
  pub prize_img_url: String,
  pub prize_subtitle: String,
  pub prize_content: String,
  pub prize_duration_days: i32,
  pub prize_duration_hours: i32,
  
  pub type_id: i32,
  pub tickets_required: i64,
  pub timezone: f64,
  pub scheduled_on: SystemTime,
  pub scheduled_off: SystemTime,
  pub is_repeat: bool,
  pub repeated_on: Vec<i32>,
  pub status: i32,
  pub status_progress: i32,
  pub tickets_collected: i64,

  pub tour_id: i64,
  pub tour_title: String,
  pub tour_status: i32,
  pub set_id: i64,
  pub set_title: String,
  pub game_id: i64,
  pub game_title: String,
  pub game_subtitle: String,
  pub game_img_url: String,
  pub game_content: String,
  pub game_status: i32,

  pub score_rule: i32,
  pub watch_ad_get_tickets: i32,
  pub watch_ad_get_exp: i32,
  pub use_gem_get_tickets: i32,
  pub use_gem_get_exp: i32,
  pub use_how_many_gems: i32,

  pub tsg_id: i64,
  pub game_duration_days: i32,
  pub game_duration_hours: i32,
  pub game_duration_minutes: i32,
  pub group_id: i32,

  pub start_timestamp: SystemTime,
  pub end_timestamp: SystemTime,
}

pub struct PrizeActiveSmall {
  pub prize_id: i64,
  pub prize_duration_days: i32,
  pub prize_duration_hours: i32,
  
  pub type_id: i32,
  pub tickets_required: i64,
  pub timezone: f64,
  pub scheduled_on: SystemTime,
  pub scheduled_off: SystemTime,
  pub is_repeat: bool,
  pub repeated_on: Vec<i32>,
  pub status: i32,
  pub status_progress: i32,
  pub tickets_collected: i64,

  pub tour_id: i64,
  pub tour_status: i32,
  pub set_id: i64,
  pub set_duration_days: i32,
  pub set_duration_hours: i32,
  pub set_is_group: bool,
  pub set_status: i32,
  pub game_id: i64,
  pub game_status: i32,

  pub tsg_id: i64,
  pub game_duration_days: i32,
  pub game_duration_hours: i32,
  pub game_duration_minutes: i32,
  pub group_id: i32,

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

pub struct PrizeCount {
  pub draft: i64,
  pub published: i64,
  pub archived: i64 
}

pub struct CurrentGame {
  pub id: i64,
  pub prize_id: i64,
  pub tour_id: i64,
  pub set_id: i64,
  pub tsg_id: i64,
  pub game_id: i64,
  pub start_timestamp: SystemTime,
  pub end_timestamp: SystemTime,
  pub index: i64,
  pub set_duration_countdown: i32
}

pub struct ClosedCurrentGame {
  pub id: i64,
  pub prize_id: i64,
  pub tour_id: i64,
  pub set_id: i64,
  pub tsg_id: i64,
  pub game_id: i64,
  pub game_title: String,
  pub start_timestamp: SystemTime,
  pub end_timestamp: SystemTime,
  pub index: i64,
  pub set_duration_countdown: i32
}

pub struct PastCurrentGame {
  pub id: i64,
  pub prize_id: i64,
  pub prize_type_id: i32,
  pub tour_id: i64,
  pub set_id: i64,
  pub tsg_id: i64,
  pub game_id: i64,
  pub start_timestamp: SystemTime,
  pub end_timestamp: SystemTime,
}

pub struct PrizePool {
  pub id: i64,
  pub prize_id: i64,
  pub game_id: i64,
  pub win_from: i32,
  pub tickets: i32,
  pub created_on: SystemTime,
  pub is_closed: bool,
  pub cg_id: i64
}

pub struct PrizeBasicDetail {
  pub id: i64,
  pub title: String,
  pub img_url: String
}

impl Prize {
    
    pub async fn add(prize: Prize, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"prize\" (title, subtitle, img_url, content, type_id, tickets_required, duration_days, duration_hours, timezone, scheduled_on, scheduled_off, is_repeat, repeated_on, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&prize.title, &prize.subtitle, &prize.img_url, &prize.content, 
                  &prize.type_id, &prize.tickets_required, 
                  &prize.duration_days, &prize.duration_hours,
                  &prize.timezone, 
                  &prize.scheduled_on, &prize.scheduled_off,
                  &prize.is_repeat, &prize.repeated_on, 
                  &prize.status]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn get(id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<PrizeBasicDetail, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;

      let stmt = conn.prepare("SELECT id, title, img_url FROM public.\"prize\" WHERE status=2 AND id=$1;").await?;

      let row = conn.query_one(&stmt, &[&id]).await?;

      let user = PrizeBasicDetail {
        id: row.get(0),
        title: row.get(1), 
        img_url: row.get(2)
      };

      Ok(user)
    }

    pub async fn add_current_game(current_game: CurrentGame, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"current_game\" (prize_id, tour_id, set_id, tsg_id, game_id, start_timestamp, end_timestamp, index, set_duration_countdown) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&current_game.prize_id, &current_game.tour_id, &current_game.set_id, &current_game.tsg_id, &current_game.game_id, &current_game.start_timestamp, &current_game.end_timestamp, &current_game.index, &current_game.set_duration_countdown]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn update(prize: Prize, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"prize\" SET title=$1, subtitle=$2, img_url=$3, content=$4, type_id=$5, tickets_required=$6, duration_days=$7, duration_hours=$8, timezone=$9, scheduled_on=$10, scheduled_off=$11, is_repeat=$12, repeated_on=$13, status=$14, status_progress=$15 WHERE id=$16;").await?;
      let n = conn.execute(&stmt, 
                  &[&prize.title, &prize.subtitle, &prize.img_url, &prize.content, 
                  &prize.type_id, &prize.tickets_required, 
                  &prize.duration_days, &prize.duration_hours,
                  &prize.timezone, 
                  &prize.scheduled_on, &prize.scheduled_off,
                  &prize.is_repeat, &prize.repeated_on, 
                  &prize.status, &prize.status_progress,
                  &prize.id]).await?;
    
      Ok(n)
    }
    
    pub async fn reset_schedule(prize_id: i64, scheduled_on: SystemTime, scheduled_off: SystemTime, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"prize\" SET scheduled_on=$1, scheduled_off=$2, tickets_collected=0, status_progress=2 WHERE id=$3 AND is_repeat=true;").await?;
      let n = conn.execute(&stmt, 
                  &[&scheduled_on, &scheduled_off, &prize_id]).await?;
    
      Ok(n)
    }

    pub async fn set_permanent_closed(prize_id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"prize\" SET status_progress=999 WHERE id=$1 AND is_repeat=false;").await?;
      let n = conn.execute(&stmt, 
                  &[&prize_id]).await?;
    
      Ok(n)
    }

    pub async fn set_bad_link(prize_id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"prize\" SET status_progress=666 WHERE id=$1;").await?;
      let n = conn.execute(&stmt, 
                  &[&prize_id]).await?;
    
      Ok(n)
    }

    pub async fn log_closed(prize_id: i64, tickets_collected: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"prize_closed\" (prize_id, tickets_collected, batch) VALUES ($1, $2, (SELECT COUNT(id) FROM public.\"prize_closed\" WHERE prize_id=$1)) RETURNING id;").await?;
      let n = conn.execute(&stmt, 
                  &[&prize_id, &tickets_collected]).await?;
    
      Ok(n)
    }
    
    pub async fn log_prize_pool(prize_id: i64, user_id: i64, game_id: i64, win_from: i32, tickets: i32, cg_id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"prize_pool\" (prize_id, user_id, game_id, win_from, tickets, cg_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;").await?;
      let n = conn.execute(&stmt, 
                  &[&prize_id, &user_id, &game_id, &win_from, &tickets, &cg_id]).await?;
    
      Ok(n)
    }
    
    pub async fn list_prize_pool(user_id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<PrizePool>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, prize_id, game_id, win_from, tickets, created_on, is_closed, cg_id FROM public.\"prize_pool\" WHERE user_id=$1 ORDER BY id DESC;").await?;
    
      let mut vec: Vec<PrizePool> = Vec::new();
      for row in conn.query(&stmt, &[&user_id]).await? {
        let t = PrizePool {
          id: row.get(0),
          prize_id: row.get(1),
          game_id: row.get(2),
          win_from: row.get(3),
          tickets: row.get(4),
          created_on: row.get(5),
          is_closed: row.get(6),
          cg_id: row.get(7)
        };

        vec.push(t);
      }
      
      Ok(vec)
    }


    pub async fn set_running(prize_id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"prize\" SET status_progress=2 WHERE id=$1 AND status_progress=1;").await?;
      let n = conn.execute(&stmt, 
                  &[&prize_id]).await?;
    
      Ok(n)
    }

    pub async fn set_ready(prize_id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"prize\" SET status_progress=1 WHERE id=$1 AND status_progress=0;").await?;
      let n = conn.execute(&stmt, 
                  &[&prize_id]).await?;
    
      Ok(n)
    }

    pub async fn delete(id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"prize\" WHERE id=$1;").await?;
      let n = conn.execute(&stmt, &[&id]).await?;
    
      Ok(n)
    }
    
    pub async fn sos_stop(id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      //let stmt = conn.prepare("").await?;
      let mut n = conn.execute("DELETE FROM public.\"current_game\" WHERE prize_id=$1 AND is_closed=false;", &[&id]).await?;
      n = conn.execute("DELETE FROM public.\"prize_pool\" WHERE prize_id=$1 AND is_closed=false;", &[&id]).await? + n;
      n = conn.execute("UPDATE public.\"prize\" SET status_progress=9999, status=3 WHERE id=$1;", &[&id]).await? + n;
  
      Ok(n)
    }
    
    pub async fn list(limit: i64, offset: i64, search_title: String, status: i32, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<Prize>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let mut vec: Vec<Prize> = Vec::new();
      if search_title.len() > 2 {
        let mut sql_string = format!("SELECT id, title, subtitle, img_url, content, type_id, tickets_required, duration_days, duration_hours, timezone, scheduled_on, scheduled_off, is_repeat, repeated_on, status, status_progress, tickets_collected FROM public.\"prize\" WHERE title ILIKE '%{}%' ORDER BY id DESC LIMIT {} OFFSET {};", search_title, limit, offset);
        if status > -1 {
          sql_string = format!("SELECT id, title, subtitle, img_url, content, type_id, tickets_required, duration_days, duration_hours, timezone, scheduled_on, scheduled_off, is_repeat, repeated_on, status, status_progress, tickets_collected FROM public.\"prize\" WHERE title ILIKE '%{}%' AND status={} ORDER BY id DESC LIMIT {} OFFSET {};", search_title, status, limit, offset);
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
            scheduled_off: row.get(11),
            is_repeat: row.get(12),
            repeated_on: row.get(13),
            status: row.get(14),
            status_progress: row.get(15),
            tickets_collected: row.get(16),
          };
  
          vec.push(prize);
        }
        
      } else {
        let mut sql_string = "SELECT id, title, subtitle, img_url, content, type_id, tickets_required, duration_days, duration_hours, timezone, scheduled_on, scheduled_off, is_repeat, repeated_on, status, status_progress, tickets_collected FROM public.\"prize\" ORDER BY id DESC LIMIT $1 OFFSET $2;".to_string();
        if status > -1 {
          sql_string = format!("SELECT id, title, subtitle, img_url, content, type_id, tickets_required, duration_days, duration_hours, timezone, scheduled_on, scheduled_off, is_repeat, repeated_on, status, status_progress, tickets_collected FROM public.\"prize\" WHERE status={} ORDER BY id DESC LIMIT $1 OFFSET $2;", status);
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
            scheduled_off: row.get(11),
            is_repeat: row.get(12),
            repeated_on: row.get(13),
            status: row.get(14),
            status_progress: row.get(15),
            tickets_collected: row.get(16),
          };
  
          vec.push(prize);
        }
        
      }
      
      Ok(vec)
    }

    pub async fn list_active(pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<PrizeActive>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let sql_string = "SELECT DISTINCT cg.prize_id,
      cg.id AS current_game_id, 
      p.title AS prize_title, 
      p.subtitle AS prize_subtitle, 
      p.img_url AS prize_img_url, 
      p.content AS prize_content, 
      p.duration_days AS prize_duration_days, 
      p.duration_hours AS prize_duration_hours, 
      p.type_id, p.tickets_required, p.timezone, 
      p.scheduled_on, p.scheduled_off, 
      p.is_repeat, p.repeated_on, p.status, p.status_progress, p.tickets_collected, 
      COALESCE(cg.tour_id, 0) AS tour_id, 
      COALESCE(t.title, '') AS tour_title, 
      COALESCE(t.status, 0) AS tour_status, 
      COALESCE(cg.set_id, 0) AS set_id, 
      COALESCE(s.title, '') AS set_title, 
      COALESCE(cg.game_id, 0) AS game_id, 
      COALESCE(g.title, '') AS game_title, 
      COALESCE(g.subtitle, '') AS game_sub_title, 
      COALESCE(g.img_url, '') AS game_img_url, 
      COALESCE(g.content, '') AS game_content, 
      COALESCE(g.status, 0) AS game_status, 
      COALESCE(g.score_rule, 0) AS score_rule, 
      COALESCE(g.watch_ad_get_tickets, 0) AS watch_ad_get_tickets, 
      COALESCE(g.watch_ad_get_exp, 0) AS watch_ad_get_exp, 
      COALESCE(g.use_gem_get_tickets, 0) AS use_gem_get_tickets, 
      COALESCE(g.use_gem_get_exp, 0) AS use_gem_get_exp, 
      COALESCE(g.use_how_many_gems, 0) AS use_how_many_gems, 
      COALESCE(cg.id, 0) AS tsg_id, 
      COALESCE(tsg.duration_days, 0) AS game_duration_days, 
      COALESCE(tsg.duration_hours, 0) AS game_duration_hours, 
      COALESCE(tsg.duration_minutes, 0) AS game_duration_minutes, 
      COALESCE(tsg.group_id, 0) AS group_id,
      cg.start_timestamp, cg.end_timestamp 
    FROM public.\"current_game\" AS cg 
      LEFT JOIN public.\"prize\" AS p on p.id = cg.prize_id 
      LEFT JOIN public.\"tournament\" AS t ON t.id = cg.tour_id 
      LEFT JOIN public.\"tournament_set\" AS s ON s.id = cg.set_id 
      LEFT JOIN public.\"game\" AS g ON g.id = cg.game_id 
      LEFT JOIN public.\"tournament_set_game_rule\" AS tsg ON tsg.id = cg.tsg_id 
    WHERE cg.start_timestamp <= NOW() + INTERVAL '3 minutes' AND cg.end_timestamp > NOW() ORDER BY p.type_id, cg.start_timestamp;".to_string();
      let stmt = conn.prepare(&sql_string).await?;
  
      let mut vec: Vec<PrizeActive> = Vec::new();
      for row in conn.query(&stmt, &[]).await? {
        let prize = PrizeActive {
          prize_id: row.get(0),
          current_game_id: row.get(1),
          prize_title: row.get(2),
          prize_subtitle: row.get(3),
          prize_img_url: row.get(4),
          prize_content: row.get(5),
          prize_duration_days: row.get(6),
          prize_duration_hours: row.get(7),
          type_id: row.get(8),
          tickets_required: row.get(9),
          timezone: row.get(10),
          scheduled_on: row.get(11),
          scheduled_off: row.get(12),
          is_repeat: row.get(13),
          repeated_on: row.get(14),
          status: row.get(15),
          status_progress: row.get(16),
          tickets_collected: row.get(17),
          tour_id: row.get(18),
          tour_title: row.get(19),
          tour_status: row.get(20),
          set_id: row.get(21),
          set_title: row.get(22),
          game_id: row.get(23),
          game_title: row.get(24),
          game_subtitle: row.get(25),
          game_img_url: row.get(26),
          game_content: row.get(27),
          game_status: row.get(28),

          score_rule: row.get(29), 
          watch_ad_get_tickets: row.get(30), 
          watch_ad_get_exp: row.get(31), 
          use_gem_get_tickets: row.get(32), 
          use_gem_get_exp: row.get(33), 
          use_how_many_gems: row.get(34),

          tsg_id: row.get(35),
          game_duration_days: row.get(36),
          game_duration_hours: row.get(37),
          game_duration_minutes: row.get(38),
          group_id: row.get(39),
          start_timestamp: row.get(40),
          end_timestamp: row.get(41)
        };

        vec.push(prize);
      }
        
      
      Ok(vec)
    }


    pub async fn count(pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<PrizeCount, RunError<tokio_postgres::Error>> {
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


    pub async fn list_prize_type(pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<PrizeType>, RunError<tokio_postgres::Error>> {
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

    pub async fn add_prize_tour(p: PrizeTour, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"prize_tour\" (prize_id, tour_id, status) VALUES ($1, $2, $3) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&p.prize_id, &p.tour_id, &p.status]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn delete_prize_tour(id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"prize_tour\" WHERE id=$1;").await?;
      let n = conn.execute(&stmt, &[&id]).await?;
    
      Ok(n)
    }

    pub async fn list_prize_tour(id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<PrizeTour>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT pt.id, pt.prize_id, pt.tour_id, t.title as tour_title, pt.status FROM public.\"prize_tour\" as pt LEFT JOIN public.\"tournament\" as t ON pt.tour_id = t.id WHERE pt.prize_id=$1 ORDER BY pt.id ASC;").await?;
    
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


    pub async fn list_closed_current_game_by_admin(prize_id: i64, closed_date: i32, limit: i64, offset: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<ClosedCurrentGame>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let sql_string = format!("SELECT cg.id, cg.prize_id, cg.tour_id, cg.set_id, cg.tsg_id, cg.game_id, g.title AS game_title, cg.start_timestamp, cg.end_timestamp, cg.index, cg.set_duration_countdown 
      FROM public.\"current_game\" AS cg 
      LEFT JOIN public.\"game\" AS g ON g.id=cg.game_id
      WHERE cg.prize_id={} AND cg.is_closed=true AND cg.end_timestamp::date=TO_DATE('{}', 'YYYYMMDD')
      ORDER BY cg.id DESC LIMIT {} OFFSET {};", prize_id, closed_date, limit, offset);

      //println!("DEBUG=== {}", &sql_string);

      let stmt = conn.prepare(&sql_string).await?;
    
      let mut vec: Vec<ClosedCurrentGame> = Vec::new();
      for row in conn.query(&stmt, &[]).await? {
        let rule = ClosedCurrentGame {
          id: row.get(0),
          prize_id: row.get(1),
          tour_id: row.get(2),
          set_id: row.get(3),
          tsg_id: row.get(4),
          game_id: row.get(5),
          game_title: row.get(6),
          start_timestamp: row.get(7),
          end_timestamp: row.get(8),
          index: row.get(9),
          set_duration_countdown: row.get(10)
        };

        vec.push(rule);
      }
      
      Ok(vec)
    }

    pub async fn list_current_game_by_system(prize_id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<CurrentGame>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, prize_id, tour_id, set_id, tsg_id, game_id, start_timestamp, end_timestamp, index, set_duration_countdown FROM public.\"current_game\" WHERE prize_id=$1 AND start_timestamp <= NOW() + INTERVAL '1 day' AND end_timestamp > NOW() + INTERVAL '1 day';").await?;
    
      let mut vec: Vec<CurrentGame> = Vec::new();
      for row in conn.query(&stmt, &[&prize_id]).await? {
        let rule = CurrentGame {
          id: row.get(0),
          prize_id: row.get(1),
          tour_id: row.get(2),
          set_id: row.get(3),
          tsg_id: row.get(4),
          game_id: row.get(5),
          start_timestamp: row.get(6),
          end_timestamp: row.get(7),
          index: row.get(8),
          set_duration_countdown: row.get(9)
        };

        vec.push(rule);
      }
      
      Ok(vec)
    }

    pub async fn list_past_unclosed_current_games(pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<PastCurrentGame>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT cg.id, cg.prize_id, p.type_id AS prize_type_id, cg.tour_id, cg.set_id, cg.tsg_id, cg.game_id, cg.start_timestamp, cg.end_timestamp FROM public.\"current_game\" AS cg LEFT JOIN public.\"prize\" AS p ON p.id=cg.prize_id WHERE cg.end_timestamp < NOW() AND cg.is_closed=false;").await?;
    
      let mut vec: Vec<PastCurrentGame> = Vec::new();
      for row in conn.query(&stmt, &[]).await? {
        let rule = PastCurrentGame {
          id: row.get(0),
          prize_id: row.get(1),
          prize_type_id: row.get(2),
          tour_id: row.get(3),
          set_id: row.get(4),
          tsg_id: row.get(5),
          game_id: row.get(6),
          start_timestamp: row.get(7),
          end_timestamp: row.get(8)
        };

        vec.push(rule);
      }
      
      Ok(vec)
    }
    
    pub async fn close_current_game(id: i64, tickets_collected: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"current_game\" SET is_closed=true, tickets_collected=$1 WHERE id=$2;").await?;
      let n = conn.execute(&stmt, 
                  &[&tickets_collected, &id]).await?;
    
      Ok(n)
    }
    

    pub async fn list_previous_game(prize_id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<CurrentGame>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, prize_id, tour_id, set_id, tsg_id, game_id, start_timestamp, end_timestamp, index, set_duration_countdown FROM public.\"current_game\" WHERE prize_id=$1 AND end_timestamp > NOW() ORDER BY id DESC LIMIT 1;").await?;
    
      let mut vec: Vec<CurrentGame> = Vec::new();
      for row in conn.query(&stmt, &[&prize_id]).await? {
        let rule = CurrentGame {
          id: row.get(0),
          prize_id: row.get(1),
          tour_id: row.get(2),
          set_id: row.get(3),
          tsg_id: row.get(4),
          game_id: row.get(5),
          start_timestamp: row.get(6),
          end_timestamp: row.get(7),
          index: row.get(8),
          set_duration_countdown: row.get(9)
        };

        vec.push(rule);
      }
      
      Ok(vec)
    }


    pub async fn list_active_by_prize_id(prize_id: i64, tour_id: i64, set_id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<PrizeActiveSmall>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let mut sql_string = "SELECT 
                          p.id AS prize_id, 
                          p.duration_days AS prize_duration_days, 
                          p.duration_hours AS prize_duration_hours, 
                          p.type_id, 
                          p.tickets_required, 
                          p.timezone, 
                          p.scheduled_on, 
                          p.scheduled_off, 
                          p.is_repeat, 
                          p.repeated_on, 
                          p.status, 
                          p.status_progress, 
                          p.tickets_collected, 
                          COALESCE(t.id, 0) AS tour_id, 
                          COALESCE(t.status, 0) AS tour_status, 
                          COALESCE(s.id, 0) AS set_id, 
                          COALESCE(s.duration_days, 0) AS set_duration_days, 
                          COALESCE(s.duration_hours, 0) AS set_duration_hours, 
                          COALESCE(s.is_group, false) AS set_is_group,
                          COALESCE(s.status, 0) AS set_status, 
                          COALESCE(tsg.game_id, 0) AS game_id, 
                          COALESCE(g.status, 0) AS game_status, 
                          COALESCE(tsg.id, 0) AS tsg_id, 
                          COALESCE(tsg.duration_days, 0) AS game_duration_days, 
                          COALESCE(tsg.duration_hours, 0) AS game_duration_hours, 
                          COALESCE(tsg.duration_minutes, 0) AS game_duration_minutes, 
                          COALESCE(tsg.group_id, 0) AS group_id
                        FROM public.\"prize\" AS p 
                          LEFT JOIN public.\"prize_tour\" AS pt ON pt.prize_id = p.id 
                          LEFT JOIN public.\"tournament\" AS t ON t.id = pt.tour_id 
                          LEFT JOIN public.\"tour_set\"  AS ts ON ts.tour_id = pt.tour_id 
                          LEFT JOIN public.\"tournament_set\" AS s ON s.id = ts.set_id 
                          LEFT JOIN public.\"tournament_set_game_rule\" AS tsg ON tsg.set_id = ts.set_id 
                          LEFT JOIN public.\"game\" AS g ON g.id = tsg.game_id 
                        WHERE p.status = 2 AND p.id = $1
                        ORDER BY p.id, t.id, s.id, tsg.group_id, tsg.id;".to_string();
      
      if tour_id > 0 && set_id > 0 {
        sql_string = format!("SELECT 
                          p.id AS prize_id, 
                          p.duration_days AS prize_duration_days, 
                          p.duration_hours AS prize_duration_hours, 
                          p.type_id, 
                          p.tickets_required, 
                          p.timezone, 
                          p.scheduled_on, 
                          p.scheduled_off, 
                          p.is_repeat, 
                          p.repeated_on, 
                          p.status, 
                          p.status_progress, 
                          p.tickets_collected, 
                          COALESCE(t.id, 0) AS tour_id, 
                          COALESCE(t.status, 0) AS tour_status, 
                          COALESCE(s.id, 0) AS set_id, 
                          COALESCE(s.duration_days, 0) AS set_duration_days, 
                          COALESCE(s.duration_hours, 0) AS set_duration_hours, 
                          COALESCE(s.is_group, false) AS set_is_group,
                          COALESCE(s.status, 0) AS set_status, 
                          COALESCE(tsg.game_id, 0) AS game_id, 
                          COALESCE(g.status, 0) AS game_status, 
                          COALESCE(tsg.id, 0) AS tsg_id, 
                          COALESCE(tsg.duration_days, 0) AS game_duration_days, 
                          COALESCE(tsg.duration_hours, 0) AS game_duration_hours, 
                          COALESCE(tsg.duration_minutes, 0) AS game_duration_minutes, 
                          COALESCE(tsg.group_id, 0) AS group_id
                        FROM public.\"prize\" AS p 
                          LEFT JOIN public.\"prize_tour\" AS pt ON pt.prize_id = p.id 
                          LEFT JOIN public.\"tournament\" AS t ON t.id = pt.tour_id 
                          LEFT JOIN public.\"tour_set\"  AS ts ON ts.tour_id = pt.tour_id 
                          LEFT JOIN public.\"tournament_set\" AS s ON s.id = ts.set_id 
                          LEFT JOIN public.\"tournament_set_game_rule\" AS tsg ON tsg.set_id = ts.set_id 
                          LEFT JOIN public.\"game\" AS g ON g.id = tsg.game_id 
                        WHERE p.status = 2 AND p.id = $1 AND t.id = {} AND s.id = {}
                        ORDER BY p.id, t.id, s.id, tsg.group_id, tsg.id;", tour_id, set_id);
      
      }
      let stmt = conn.prepare(&sql_string).await?;
  
      let mut vec: Vec<PrizeActiveSmall> = Vec::new();
      for row in conn.query(&stmt, &[&prize_id]).await? {
        let prize = PrizeActiveSmall {
          prize_id: row.get(0),
          prize_duration_days: row.get(1),
          prize_duration_hours: row.get(2),
          type_id: row.get(3),
          tickets_required: row.get(4),
          timezone: row.get(5),
          scheduled_on: row.get(6),
          scheduled_off: row.get(7),
          is_repeat: row.get(8),
          repeated_on: row.get(9),
          status: row.get(10),
          status_progress: row.get(11),
          tickets_collected: row.get(12),
          tour_id: row.get(13),
          tour_status: row.get(14),
          set_id: row.get(15),
          set_duration_days: row.get(16),
          set_duration_hours: row.get(17),
          set_is_group: row.get(18),
          set_status: row.get(19),
          game_id: row.get(20),
          game_status: row.get(21),
          tsg_id: row.get(22),
          game_duration_days: row.get(23),
          game_duration_hours: row.get(24),
          game_duration_minutes: row.get(25),
          group_id: row.get(26)
        };

        vec.push(prize);
      }
        
      
      Ok(vec)
    }


    pub async fn get_current_tickets_collected_by_user(user_id: i64, prize_id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT COALESCE(SUM(tickets), 0) FROM public.\"prize_pool\" WHERE user_id=$1 AND prize_id=$2 AND is_closed=false;").await?;
      let row = conn.query_one(&stmt, &[&user_id, &prize_id]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }

    pub async fn get_tickets_collected(id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT tickets_collected FROM public.\"prize\" WHERE id=$1;").await?;
      let row = conn.query_one(&stmt, &[&id]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }

    pub async fn get_current_tickets_collected(id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT COALESCE(SUM(tickets), 0) FROM public.\"prize_pool\" WHERE prize_id=$1 AND is_closed=false;").await?;
      let row = conn.query_one(&stmt, &[&id]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }

    pub async fn set_prize_tickets_collected(prize_id: i64, tickets_collected: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"prize\" SET tickets_collected=$1, tickets_collected_on=NOW() WHERE id=$2 AND status_progress<900;").await?;
      let n = conn.execute(&stmt, 
                  &[&tickets_collected, &prize_id]).await?;
    
      Ok(n)
    }

    pub async fn add_prize_tickets_collected(prize_id: i64, tickets_to_add: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"prize\" SET tickets_collected=tickets_collected+$1, tickets_collected_on=NOW() WHERE id=$2;").await?;
      let n = conn.execute(&stmt, 
                  &[&tickets_to_add, &prize_id]).await?;
    
      Ok(n)
    }

    pub async fn list_prize_pool_users_tickets(prize_id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<(i64, i64)>, RunError<tokio_postgres::Error>> {

      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT DISTINCT user_id, SUM(tickets) FROM public.\"prize_pool\" WHERE is_closed=false AND prize_id=$1 GROUP BY user_id;").await?;
    
      let mut vec: Vec<(i64, i64)> = Vec::new();
      for row in conn.query(&stmt, &[&prize_id]).await? {

        vec.push(
          (row.get(0), row.get(1))
        );
      }
      
      Ok(vec)
    }

    pub async fn list_all_prize_pool_users_tickets(scheduled_on: SystemTime,  pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<Vec<(i64, i64)>, RunError<tokio_postgres::Error>> {

      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT DISTINCT user_id, SUM(tickets) FROM public.\"prize_pool\" WHERE created_on >= $1 GROUP BY user_id;").await?;
    
      let mut vec: Vec<(i64, i64)> = Vec::new();
      for row in conn.query(&stmt, &[&scheduled_on]).await? {

        vec.push(
          (row.get(0), row.get(1))
        );
      }
      
      Ok(vec)
    }

    pub async fn get_all_prize_pool_tickets_by_user(user_id: i64, scheduled_on: SystemTime,  pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<i64, RunError<tokio_postgres::Error>> {

      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT COALESCE(SUM(tickets), 0) FROM public.\"prize_pool\" WHERE user_id=$1 AND created_on >= $2;").await?;
    
      let row = conn.query_one(&stmt, &[&user_id, &scheduled_on]).await?;
    
      Ok(row.get::<usize, i64>(0))
      
    }

    pub async fn close_prize_pool(prize_id: i64, pool: &Pool<PostgresConnectionManager<MakeTlsConnector>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"prize_pool\" SET is_closed=true, closed_on=NOW() WHERE prize_id=$1;").await?;
      let n = conn.execute(&stmt, 
                  &[&prize_id]).await?;
    
      Ok(n)
    }
}
