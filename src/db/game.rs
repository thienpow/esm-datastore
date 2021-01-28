use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;
use svc::adminapi::adminapi_proto::GameCount;
use crate::svc;


pub struct Game {
  pub id: i64,
  pub title: String,
  pub subtitle: String,
  pub img_url: String,
  pub content: String,
  pub type_id: i32,
  pub game_code: String,
  pub engine_id: i32,
  pub version: i32,
  pub status: i32,
  pub score_rule: i32,
  pub watch_ad_get_tickets: i32,
  pub watch_ad_get_exp: i32,
  pub use_gem_get_tickets: i32,
  pub use_gem_get_exp: i32
}

pub struct GameLeaderRule {
  pub game_id: i64,
  pub rank: i32,
  pub tickets: i32,
  pub exp: i32,
}


impl Game {
    
    pub async fn add(game: Game, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"game\" (title, subtitle, img_url, content, type_id, game_code, engine_id, version, status, score_rule, watch_ad_get_tickets, watch_ad_get_exp, use_gem_get_tickets, use_gem_get_exp) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&game.title, &game.subtitle, &game.img_url, &game.content, 
                  &game.type_id, &game.game_code, &game.engine_id, &game.version, &game.status,
                  &game.score_rule, &game.watch_ad_get_tickets, &game.watch_ad_get_exp, &game.use_gem_get_tickets, &game.use_gem_get_exp]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn update(game: Game, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"game\" SET title=$1, subtitle=$2, img_url=$3, content=$4, type_id=$5, game_code=$6, engine_id=$7, version=$8, status=$9, score_rule=$10, watch_ad_get_tickets=$11, watch_ad_get_exp=$12, use_gem_get_tickets=$13, use_gem_get_exp=$14 WHERE id=$15;").await?;
      let n = conn.execute(&stmt, 
                  &[&game.title, &game.subtitle, &game.img_url, &game.content, 
                  &game.type_id, &game.game_code, &game.engine_id, &game.version, &game.status,
                  &game.score_rule, &game.watch_ad_get_tickets, &game.watch_ad_get_exp, &game.use_gem_get_tickets, &game.use_gem_get_exp,
                  &game.id]).await?;
    
      Ok(n)
    }
    
    pub async fn add_leader_rule(rule: GameLeaderRule, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"game_leader_rule\" (game_id, rank, tickets, exp) VALUES ($1, $2, $3, $4);").await?;
      let n = conn.execute(&stmt, 
                  &[&rule.game_id, &rule.rank, &rule.tickets, &rule.exp]).await?;
    
      Ok(n)
    }
    
    pub async fn delete_leader_rule(game_id: i64, rank: i32, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"game_leader_rule\" WHERE game_id=$1 AND rank=$2;").await?;
      let n = conn.execute(&stmt, &[&game_id, &rank]).await?;
    
      Ok(n)
    }

    pub async fn list_leader_rule(game_id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<GameLeaderRule>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT game_id, rank, tickets, exp FROM public.\"game_leader_rule\" WHERE game_id=$1 ORDER BY rank ASC;").await?;
    
      let mut vec: Vec<GameLeaderRule> = Vec::new();
      for row in conn.query(&stmt, &[&game_id]).await? {
        let rule = GameLeaderRule {
          game_id: row.get(0),
          rank: row.get(1),
          tickets: row.get(2),
          exp: row.get(3)
        };

        vec.push(rule);
      }
      
      Ok(vec)
    }

    pub async fn get_game_code(id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<String, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT game_code FROM public.\"game\" WHERE id=$1 LIMIT 1;").await?;
      let row = conn.query_one(&stmt, 
                    &[&id]).await?;

      Ok(row.get(0))
    }

    pub async fn delete(id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("DELETE FROM public.\"game\" WHERE id=$1;").await?;
      let n = conn.execute(&stmt, &[&id]).await?;
    
      Ok(n)
    }
    
    pub async fn list(limit: i64, offset: i64, search_title: String, status: i32, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<Game>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let mut vec: Vec<Game> = Vec::new();
      if search_title.len() > 2 {
        let mut sql_string = format!("SELECT id, title, subtitle, img_url, content, type_id, engine_id, version, status, score_rule, watch_ad_get_tickets, watch_ad_get_exp, use_gem_get_tickets, use_gem_get_exp FROM public.\"game\" WHERE title LIKE '%{}%' ORDER BY id DESC LIMIT {} OFFSET {};", search_title, limit, offset);
        if status > 0 {
          sql_string = format!("SELECT id, title, subtitle, img_url, content, type_id, engine_id, version, status, score_rule, watch_ad_get_tickets, watch_ad_get_exp, use_gem_get_tickets, use_gem_get_exp FROM public.\"game\" WHERE title LIKE '%{}%' AND status={} ORDER BY id DESC LIMIT {} OFFSET {};", search_title, status, limit, offset);
        }
        let stmt = conn.prepare(&sql_string).await?;
    
        for row in conn.query(&stmt, &[]).await? {
          let game = Game {
            id: row.get(0),
            title: row.get(1),
            subtitle: row.get(2),
            img_url: row.get(3),
            content: row.get(4),
            type_id: row.get(5),
            engine_id: row.get(6),
            version: row.get(7),
            status: row.get(8),
            score_rule: row.get(9),
            watch_ad_get_tickets: row.get(10),
            watch_ad_get_exp: row.get(11),
            use_gem_get_tickets: row.get(12),
            use_gem_get_exp: row.get(13),
            game_code: "".to_string() //game_code field value won't be retrieved but must be set, just ignore.
          };
  
          vec.push(game);
        }
      } else {
        let stmt = conn.prepare("SELECT id, title, subtitle, img_url, content, type_id, engine_id, version, status, score_rule, watch_ad_get_tickets, watch_ad_get_exp, use_gem_get_tickets, use_gem_get_exp FROM public.\"game\" ORDER BY id DESC LIMIT $1 OFFSET $2;").await?;
    
        for row in conn.query(&stmt, &[&limit, &offset]).await? {
          let game = Game {
            id: row.get(0),
            title: row.get(1),
            subtitle: row.get(2),
            img_url: row.get(3),
            content: row.get(4),
            type_id: row.get(5),
            engine_id: row.get(6),
            version: row.get(7),
            status: row.get(8),
            score_rule: row.get(9),
            watch_ad_get_tickets: row.get(10),
            watch_ad_get_exp: row.get(11),
            use_gem_get_tickets: row.get(12),
            use_gem_get_exp: row.get(13),
            game_code: "".to_string() //game_code field value won't be retrieved but must be set, just ignore.
          };
  
          vec.push(game);
        }
      }
      
      
      Ok(vec)
    }


    pub async fn count(pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<GameCount, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;

      let sql = "SELECT (SELECT COUNT(id) FROM public.\"game\" WHERE status=1) AS draft, (SELECT COUNT(id) FROM public.\"game\" WHERE status=2) AS published, (SELECT COUNT(id) FROM public.\"game\" WHERE status=3) AS archived;";

      let stmt = conn.prepare(sql).await?;
      let row = conn.query_one(&stmt, &[]).await?;
      
      Ok(GameCount {
        draft: row.get::<usize, i64>(0),
        published: row.get::<usize, i64>(1),
        archived: row.get::<usize, i64>(2)
      })

    }

}
