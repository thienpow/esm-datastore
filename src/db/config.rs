use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;

pub struct Config {
  pub invites: i32,
  pub games_per_ad: i32,
  pub days_to_claim: i32,
}

pub struct StatusType {
  pub id: i32,
  pub title: String
}

pub struct Timezones {
  pub id: i32,
  pub offset: f64,
  pub stext: String,
  pub ltext: String
}

impl Config {
    
    pub async fn update(config: Config, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"config\" SET invites=$1, games_per_ad=$2, days_to_claim=$3;").await?;
      let n = conn.execute(&stmt, 
                  &[&config.invites,
                  &config.games_per_ad, &config.days_to_claim]).await?;
    
      Ok(n)
    }
    
    pub async fn get(pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Config, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT invites, games_per_ad, days_to_claim FROM public.\"config\";").await?;
      let row = conn.query_one(&stmt, &[]).await?;

      Ok(Config {
        invites: row.get(0),
        games_per_ad: row.get(1),
        days_to_claim: row.get(2)
      })
    }


    pub async fn list_status_type(pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<StatusType>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, title FROM public.\"status_type\" ORDER BY id ASC;").await?;
    
      let mut vec: Vec<StatusType> = Vec::new();
      for row in conn.query(&stmt, &[]).await? {
        let t = StatusType {
          id: row.get(0),
          title: row.get(1),
        };

        vec.push(t);
      }
      
      Ok(vec)
    }

    pub async fn list_user_status_type(pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<StatusType>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, title FROM public.\"user_status_type\" ORDER BY id ASC;").await?;
    
      let mut vec: Vec<StatusType> = Vec::new();
      for row in conn.query(&stmt, &[]).await? {
        let t = StatusType {
          id: row.get(0),
          title: row.get(1),
        };

        vec.push(t);
      }
      
      Ok(vec)
    }

    pub async fn list_timezones(pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<Timezones>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT id, \"offset\", stext, ltext FROM public.\"timezones\" ORDER BY id ASC;").await?;
    
      let mut vec: Vec<Timezones> = Vec::new();
      for row in conn.query(&stmt, &[]).await? {
        let t = Timezones {
          id: row.get(0),
          offset: row.get(1),
          stext: row.get(2),
          ltext: row.get(3),
        };

        vec.push(t);
      }
      
      Ok(vec)
    }

}
