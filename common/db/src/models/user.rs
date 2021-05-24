
use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;
use std::time::{SystemTime};


pub struct User {
  pub id: i64,
  pub username: String,
  pub passhash: String,
  pub email: String,
  pub phone: String,
  pub firstname: String,
  pub lastname: String,
  pub created_on: SystemTime,
  pub last_login: SystemTime,
  pub role_id: i32,
  pub status: i32,
  pub gem_balance: i64,
  pub social_link_fb: String,
  pub social_link_google: String,
  pub avatar_url: String,
  pub exp: i32,
  pub full_name: String,
  pub address: String,
  pub city: String,
  pub state: String,
  pub zip_code: String,
  pub country: String,
  pub country_code: i32,
  pub is_notify_allowed: bool,
  pub is_notify_new_reward: bool,
  pub is_notify_new_tournament: bool,
  pub is_notify_tour_ending: bool,
  pub nick_name: String,
  pub msg_token: String,
  pub subscription_id: i64,
  pub one_time_multiplier: f64, 
  pub daily_gem: i64, 
  pub daily_multiplier: f64, 
  pub one_time_is_firstonly: bool, 
  pub sub_daily_timestamp: SystemTime,
}
pub struct Address {
  pub id: i64,
  pub full_name: String,
  pub address: String,
  pub city: String,
  pub state: String,
  pub zip_code: String,
  pub country: String,
  pub country_code: i32,
}
pub struct Settings {
  pub id: i64,
  pub is_notify_allowed: bool,
  pub is_notify_new_reward: bool,
  pub is_notify_new_tournament: bool,
  pub is_notify_tour_ending: bool,
  pub nick_name: String,
  pub avatar_url: String,
}

pub struct UserCount {
  pub active: i64,
  pub blocked: i64,
  pub pending_delete: i64,
  pub archived: i64
}


impl User {
    
    pub async fn add(user: User, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"user\" (id, username, passhash, email, phone, firstname, lastname, \
        created_on, last_login, role_id, status, gem_balance, social_link_fb, social_link_google, avatar_url, exp) \
        VALUES ((SELECT MAX(id) FROM public.\"user\")+1, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&user.username, &user.passhash, &user.email, &user.phone, 
                  &user.firstname, &user.lastname, 
                  &user.created_on, &user.last_login, &user.role_id, &user.status, &user.gem_balance, 
                  &user.social_link_fb, &user.social_link_google, &user.avatar_url, &user.exp]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
    pub async fn update_email_confirmed(id: i64, status: bool, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"user\" SET is_email_confirmed=$1 WHERE id=$2;").await?;
      let n = conn.execute(&stmt, 
                  &[&status, &id]).await?;
    
      Ok(n)
    }
    
    pub async fn update_msg_token(id: i64, msg_token: String, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"user\" SET msg_token=$1 WHERE id=$2;").await?;
      let n = conn.execute(&stmt, 
                  &[&msg_token, &id]).await?;
    
      Ok(n)
    }

    pub async fn update_exp(id: i64, exp: i32, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"user\" SET exp=$1 + (SELECT exp FROM public.\"user\" WHERE id=$2) WHERE id=$2;").await?;
      let n = conn.execute(&stmt, 
                  &[&exp, &id]).await?;
    
      Ok(n)
    }

    pub async fn update_social_link_fb(id: i64, fb_id: String, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"user\" SET social_link_fb=$1 WHERE id=$2;").await?;
      let n = conn.execute(&stmt, 
                  &[&fb_id, &id]).await?;
    
      Ok(n)
    }

    pub async fn update_social_link_google(id: i64, google_id: String, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"user\" SET social_link_google=$1 WHERE id=$2;").await?;
      let n = conn.execute(&stmt, 
                  &[&google_id, &id]).await?;
    
      Ok(n)
    }

    pub async fn update_status_gem_balance(id: i64, status: i32, gem_balance: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  

      let now = SystemTime::now();

      let stmt = conn.prepare("SELECT status, gem_balance FROM public.\"user\" WHERE id=$1;").await?;

      let row = conn.query_one(&stmt, 
                  &[&id]).await?;

      let old_status: i32 = row.get(0);
      let old_gem_balance: i64 = row.get(1);

      let stmt = conn.prepare("INSERT INTO public.\"user_admin_change_log\" (user_id, old_status, new_status, old_gem_balance, new_gem_balance, \
        created_on, changed_by) \
        VALUES ($1, $2, $3, $4, $5, $6, 1) RETURNING id;").await?;
      let _row = conn.query_one(&stmt, 
                  &[&id, &old_status, &status, &old_gem_balance, &gem_balance, &now]).await?;
    
      
      let stmt = conn.prepare("UPDATE public.\"user\" SET status=$1, gem_balance=$2 WHERE id=$3;").await?;
      let n = conn.execute(&stmt, 
                  &[&status, &gem_balance, &id]).await?;
    

      Ok(n)
    }
    
    pub async fn update_address(addr: Address, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      //println!("update address!!! {}", addr.id);
      let stmt = conn.prepare("UPDATE public.\"user\" SET full_name=$1, address=$2, city=$3, state=$4, zip_code=$5, country=$6, country_code=$7 WHERE id=$8;").await?;
      let n = conn.execute(&stmt, 
                  &[&addr.full_name, &addr.address, &addr.city, &addr.state, &addr.zip_code, &addr.country, &addr.country_code, 
                  &addr.id]).await?;
    
      Ok(n)
    }
    
    pub async fn update_settings(sett: Settings, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"user\" SET is_notify_allowed=$1, is_notify_new_reward=$2, is_notify_new_tournament=$3, is_notify_tour_ending=$4, nick_name=$5, avatar_url=$6 WHERE id=$7;").await?;
      let n = conn.execute(&stmt, 
                  &[&sett.is_notify_allowed, &sett.is_notify_new_reward, &sett.is_notify_new_tournament, &sett.is_notify_tour_ending, 
                  &sett.nick_name, &sett.avatar_url,
                  &sett.id]).await?;
    
      Ok(n)
    }
    
    pub async fn change_password(username: String, passhash: String, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"user\" SET passhash=$1 WHERE username=$2;").await?;
      let n = conn.execute(&stmt, 
                  &[&passhash, &username]).await?;
    
      Ok(n)
    }
    pub async fn update_subscription(id: i64, gem_balance: i64, subscription_id: i64, one_time_multiplier: f64, daily_gem: i64, daily_multiplier: f64, one_time_is_firstonly: bool, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<u64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("UPDATE public.\"user\" SET gem_balance=$1, subscription_id=$2, one_time_multiplier=$3, daily_gem=$4, daily_multiplier=$5, one_time_is_firstonly=$6 WHERE id=$7;").await?;
      let n = conn.execute(&stmt, 
                  &[&gem_balance, &subscription_id, &one_time_multiplier, &daily_gem, &daily_multiplier, &one_time_is_firstonly, &id]).await?;
    
      Ok(n)
    }

    pub async fn sign_in(username: String, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<User, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;

      let stmt = conn.prepare("SELECT id, username, passhash, email, phone, firstname, lastname, \
      created_on, last_login, role_id, status, gem_balance, \
      social_link_fb, social_link_google, avatar_url, exp, \
      full_name, address, city, state, zip_code, country, country_code, \
      is_notify_allowed, is_notify_new_reward, is_notify_new_tournament, is_notify_tour_ending, nick_name, msg_token, subscription_id, \
      one_time_multiplier, daily_gem, daily_multiplier, one_time_is_firstonly, sub_daily_timestamp \
      FROM public.\"user\" WHERE status=1 AND username=$1 LIMIT 1;").await?;

      let row = conn.query_one(&stmt, 
                  &[&username]).await?;

      let user = User {
        id: row.get(0),
        username: row.get(1),
        passhash: row.get(2),
        email: row.get(3),
        phone: row.get(4),
        firstname: row.get(5),
        lastname: row.get(6),
        created_on: row.get(7),
        last_login: row.get(8),
        role_id: row.get(9),
        status: row.get(10),
        gem_balance: row.get(11),
        social_link_fb: row.get(12), 
        social_link_google: row.get(13), 
        avatar_url: row.get(14), 
        exp: row.get(15),
        full_name: row.get(16), 
        address: row.get(17), 
        city: row.get(18), 
        state: row.get(19), 
        zip_code: row.get(20), 
        country: row.get(21), 
        country_code: row.get(22), 
        is_notify_allowed: row.get(23), 
        is_notify_new_reward: row.get(24), 
        is_notify_new_tournament: row.get(25), 
        is_notify_tour_ending: row.get(26), 
        nick_name: row.get(27),
        msg_token: row.get(28),
        subscription_id: row.get(29),
        one_time_multiplier: row.get(30), 
        daily_gem: row.get(31), 
        daily_multiplier: row.get(32), 
        one_time_is_firstonly: row.get(33), 
        sub_daily_timestamp: row.get(34),
      };

      Ok(user)
    }


    pub async fn get(id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<User, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;

      let stmt = conn.prepare("SELECT id, username, passhash, email, phone, firstname, lastname, \
      created_on, last_login, role_id, status, gem_balance, \
      social_link_fb, social_link_google, avatar_url, exp, \
      full_name, address, city, state, zip_code, country, country_code, \
      is_notify_allowed, is_notify_new_reward, is_notify_new_tournament, is_notify_tour_ending, nick_name, msg_token, subscription_id, \
      one_time_multiplier, daily_gem, daily_multiplier, one_time_is_firstonly, sub_daily_timestamp \
      FROM public.\"user\" WHERE status=1 AND id=$1;").await?;

      let row = conn.query_one(&stmt, 
                  &[&id]).await?;

      let user = User {
        id: row.get(0),
        username: row.get(1),
        passhash: row.get(2),
        email: row.get(3),
        phone: row.get(4),
        firstname: row.get(5),
        lastname: row.get(6),
        created_on: row.get(7),
        last_login: row.get(8),
        role_id: row.get(9),
        status: row.get(10),
        gem_balance: row.get(11),
        social_link_fb: row.get(12), 
        social_link_google: row.get(13), 
        avatar_url: row.get(14), 
        exp: row.get(15),
        full_name: row.get(16), 
        address: row.get(17), 
        city: row.get(18), 
        state: row.get(19), 
        zip_code: row.get(20), 
        country: row.get(21), 
        country_code: row.get(22), 
        is_notify_allowed: row.get(23), 
        is_notify_new_reward: row.get(24), 
        is_notify_new_tournament: row.get(25), 
        is_notify_tour_ending: row.get(26), 
        nick_name: row.get(27),
        msg_token: row.get(28),
        subscription_id: row.get(29),
        one_time_multiplier: row.get(30), 
        daily_gem: row.get(31), 
        daily_multiplier: row.get(32), 
        one_time_is_firstonly: row.get(33), 
        sub_daily_timestamp: row.get(34),
      };

      Ok(user)
    }

    pub async fn list(limit: i64, offset: i64, search_username: String, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<User>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let mut vec: Vec<User> = Vec::new();
      if search_username.len() > 2 {

        let sql_string = format!("SELECT \
                                    id, username, email, phone, firstname, lastname, created_on, last_login, role_id, status, gem_balance, \
                                    social_link_fb, social_link_google, avatar_url, exp, \
                                    full_name, address, city, state, zip_code, country, country_code, \
                                    is_notify_allowed, is_notify_new_reward, is_notify_new_tournament, is_notify_tour_ending, nick_name, \
                                    msg_token, subscription_id, \
                                    one_time_multiplier, daily_gem, daily_multiplier, one_time_is_firstonly, sub_daily_timestamp \
                                FROM public.\"user\" \
                                WHERE username ILIKE '%{}%' OR email ILIKE '%{}%' OR phone ILIKE '%{}%' OR firstname ILIKE '%{}%' OR lastname ILIKE '%{}%' \
                                ORDER BY id DESC LIMIT {} OFFSET {};", search_username, search_username, search_username, search_username, search_username, limit, offset);
        let stmt = conn.prepare(&sql_string).await?;
    
        for row in conn.query(&stmt, &[]).await? {
          let user = User {
            id: row.get(0),
            username: row.get(1),
            passhash: "".to_string(), //passhas field value won't be retrieved but must be set, just ignore.
            email: row.get(2),
            phone: row.get(3),
            firstname: row.get(4),
            lastname: row.get(5),
            created_on: row.get(6),
            last_login: row.get(7),
            role_id: row.get(8),
            status: row.get(9),
            gem_balance: row.get(10),
            social_link_fb: row.get(11),
            social_link_google: row.get(12),
            avatar_url: row.get(13),
            exp: row.get(14),
  
            //full_name, address, city, state, zip_code, country, country_code
            full_name: row.get(15),
            address: row.get(16),
            city: row.get(17),
            state: row.get(18),
            zip_code: row.get(19),
            country: row.get(20),
            country_code: row.get(21),
  
            //is_notify_allowed, is_notify_new_reward, is_notify_new_tournament, is_notify_tour_ending, nick_name
            is_notify_allowed: row.get(22),
            is_notify_new_reward: row.get(23),
            is_notify_new_tournament: row.get(24),
            is_notify_tour_ending: row.get(25),
            nick_name: row.get(26),
            msg_token: row.get(27),
            subscription_id: row.get(28),
            one_time_multiplier: row.get(29), 
            daily_gem: row.get(30), 
            daily_multiplier: row.get(31), 
            one_time_is_firstonly: row.get(32), 
            sub_daily_timestamp: row.get(33)
          };
  
          vec.push(user);
        }
        
      } else {

        let stmt = conn.prepare("SELECT id, username, email, phone, firstname, lastname, created_on, last_login, role_id, status, gem_balance, social_link_fb, social_link_google, avatar_url, exp, full_name, address, city, state, zip_code, country, country_code, is_notify_allowed, is_notify_new_reward, is_notify_new_tournament, is_notify_tour_ending, nick_name, msg_token, subscription_id, one_time_multiplier, daily_gem, daily_multiplier, one_time_is_firstonly, sub_daily_timestamp FROM public.\"user\" ORDER BY id DESC LIMIT $1 OFFSET $2;").await?;
    
        for row in conn.query(&stmt, &[&limit, &offset]).await? {
          let user = User {
            id: row.get(0),
            username: row.get(1),
            passhash: "".to_string(), //passhas field value won't be retrieved but must be set, just ignore.
            email: row.get(2),
            phone: row.get(3),
            firstname: row.get(4),
            lastname: row.get(5),
            created_on: row.get(6),
            last_login: row.get(7),
            role_id: row.get(8),
            status: row.get(9),
            gem_balance: row.get(10),
            social_link_fb: row.get(11),
            social_link_google: row.get(12),
            avatar_url: row.get(13),
            exp: row.get(14),
  
            //full_name, address, city, state, zip_code, country, country_code
            full_name: row.get(15),
            address: row.get(16),
            city: row.get(17),
            state: row.get(18),
            zip_code: row.get(19),
            country: row.get(20),
            country_code: row.get(21),
  
            //is_notify_allowed, is_notify_new_reward, is_notify_new_tournament, is_notify_tour_ending, nick_name
            is_notify_allowed: row.get(22),
            is_notify_new_reward: row.get(23),
            is_notify_new_tournament: row.get(24),
            is_notify_tour_ending: row.get(25),
            nick_name: row.get(26),
            msg_token:  row.get(27),
            subscription_id: row.get(28),
            one_time_multiplier: row.get(29), 
            daily_gem: row.get(30), 
            daily_multiplier: row.get(31), 
            one_time_is_firstonly: row.get(32), 
            sub_daily_timestamp: row.get(33)
          };
  
          vec.push(user);
        }
        
      }

      Ok(vec)
    }


    pub async fn list_player_active(pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<User>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let mut vec: Vec<User> = Vec::new();
      
      let sql_string = format!("SELECT id, username, email, phone, firstname, lastname, created_on, last_login, role_id, status, gem_balance, social_link_fb, social_link_google, avatar_url, exp, full_name, address, city, state, zip_code, country, country_code, is_notify_allowed, is_notify_new_reward, is_notify_new_tournament, is_notify_tour_ending, nick_name, msg_token, subscription_id, one_time_multiplier, daily_gem, daily_multiplier, one_time_is_firstonly, sub_daily_timestamp FROM public.\"user\" WHERE status=1 AND role_id=200");
      let stmt = conn.prepare(&sql_string).await?;
  
      for row in conn.query(&stmt, &[]).await? {
        let user = User {
          id: row.get(0),
            username: row.get(1),
            passhash: "".to_string(), //passhas field value won't be retrieved but must be set, just ignore.
            email: row.get(2),
            phone: row.get(3),
            firstname: row.get(4),
            lastname: row.get(5),
            created_on: row.get(6),
            last_login: row.get(7),
            role_id: row.get(8),
            status: row.get(9),
            gem_balance: row.get(10),
            social_link_fb: row.get(11),
            social_link_google: row.get(12),
            avatar_url: row.get(13),
            exp: row.get(14),
  
            //full_name, address, city, state, zip_code, country, country_code
            full_name: row.get(15),
            address: row.get(16),
            city: row.get(17),
            state: row.get(18),
            zip_code: row.get(19),
            country: row.get(20),
            country_code: row.get(21),
  
            //is_notify_allowed, is_notify_new_reward, is_notify_new_tournament, is_notify_tour_ending, nick_name
            is_notify_allowed: row.get(22),
            is_notify_new_reward: row.get(23),
            is_notify_new_tournament: row.get(24),
            is_notify_tour_ending: row.get(25),
            nick_name: row.get(26),
            msg_token:  row.get(27),
            subscription_id: row.get(28),
            one_time_multiplier: row.get(29), 
            daily_gem: row.get(30), 
            daily_multiplier: row.get(31), 
            one_time_is_firstonly: row.get(32), 
            sub_daily_timestamp: row.get(33)
        };

        vec.push(user);
      }

      Ok(vec)
    }

    
    pub async fn count(pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<UserCount, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let sql = "SELECT (SELECT COUNT(id) FROM public.\"user\" WHERE status=1) AS active, (SELECT COUNT(id) FROM public.\"user\" WHERE status=2) AS blocked, (SELECT COUNT(id) FROM public.\"user\" WHERE status=3) AS pending_delete, (SELECT COUNT(id) FROM public.\"user\" WHERE status=4) AS archived;";

      let stmt = conn.prepare(sql).await?;
      let row = conn.query_one(&stmt, &[]).await?;
      
      Ok(UserCount {
        active: row.get::<usize, i64>(0),
        blocked: row.get::<usize, i64>(1),
        pending_delete: row.get::<usize, i64>(2),
        archived: row.get::<usize, i64>(3)
      })

    }

    pub async fn verify_exact_match(uid: String, id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<bool, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let sql = "SELECT COUNT(id) FROM public.\"user\" WHERE status=1 AND username=$1 AND id=$2;";

      let stmt = conn.prepare(sql).await?;
      let row = conn.query_one(&stmt, &[&uid, &id]).await?;
      
      let count: i64 = row.get::<usize, i64>(0);

      if count > 0 {
        Ok(true)
      } else {
        Ok(false)
      }

    }

    /*
    pub async fn get_user_status_gem_balance(id: i64, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<(i32, i64), RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("SELECT status, gem_balance FROM public.\"user\" WHERE id=$1;").await?;
      let row = conn.query_one(&stmt, 
                    &[&id]).await?;

      Ok((row.get(0), row.get(1)))
    }
    */


    
}
