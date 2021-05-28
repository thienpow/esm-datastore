
use tokio_postgres;
use bb8::{Pool, RunError};
use bb8_postgres::PostgresConnectionManager;

use std::time::{SystemTime};


pub struct Shop {
  //pub activated: bool,
  //pub created_on: chrono::NaiveDateTime,
}

pub struct NewBuy {
  pub id: i64,
  pub item_type_id: i32,
  pub item_id: i64,
  pub item_title: String,
  pub user_id: i64,
  pub user_nick_name: String,
  pub user_email: String,
  pub payment_id: String,
  pub sub_id: String,
  pub price: f64,
  pub created_on: SystemTime,
}

pub struct BuyCount {
  pub subscription: i64, 
  pub item: i64,
}


impl Shop {
    
    pub async fn buy(new_buy: NewBuy, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<i64, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let stmt = conn.prepare("INSERT INTO public.\"shop_buy\" (item_type_id, item_id, user_id, payment_id, sub_id, price) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;").await?;
      let row = conn.query_one(&stmt, 
                  &[&new_buy.item_type_id, &new_buy.item_id, &new_buy.user_id, &new_buy.payment_id, &new_buy.sub_id, &new_buy.price]).await?;
    
      Ok(row.get::<usize, i64>(0))
    }
    
     
    pub async fn list(user_id: i64, limit: i64, offset: i64, search_title: String, status: i32, pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<Vec<NewBuy>, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let mut vec: Vec<NewBuy> = Vec::new();
      if user_id > 0 {
        let stmt = conn.prepare("SELECT id, item_type_id, item_id, CASE 
              WHEN item_type_id = 101 THEN (SELECT title FROM public.\"subscription\" WHERE id=item_id) 
              WHEN item_type_id = 201 THEN (SELECT title FROM public.\"item\" WHERE id=item_id) 
              ELSE 'Unknown Item' 
          END AS item_title, 
          user_id, payment_id, sub_id, price, created_on 
          FROM public.\"shop_buy\" 
          WHERE user_id=$1 
          LIMIT $2 OFFSET $3;").await?;

        for row in conn.query(&stmt, &[&user_id, &limit, &offset]).await? {
          let new_buy = NewBuy {
            id: row.get(0),
            item_type_id: row.get(1),
            item_id: row.get(2),
            item_title: row.get(3),
            user_id: row.get(4),
            user_nick_name: "".to_string(),
            user_email: "".to_string(),
            payment_id: row.get(5),
            sub_id: row.get(6),
            price: row.get(7),
            created_on: row.get(8)
          };
  
          vec.push(new_buy);
        }

      } else {
        //begin search

        let mut sql_string: String = "".to_string();
        println!("{}", sql_string);

        if search_title.len() > 2 {
          sql_string = format!("SELECT b.id, b.item_type_id, b.item_id, CASE 
                                    WHEN b.item_type_id = 101 THEN (SELECT title FROM public.\"subscription\" WHERE id=b.item_id) 
                                    WHEN b.item_type_id = 201 THEN (SELECT title FROM public.\"item\" WHERE id=b.item_id) 
                                    ELSE 'Unknown Item' 
                                END AS item_title, 
                                b.user_id, 
                                u.nick_name, 
                                u.email, 
                                b.payment_id, b.sub_id, b.price, b.created_on 
                                FROM public.\"shop_buy\" AS b 
                                LEFT JOIN public.\"user\" AS u ON u.id = b.user_id 
                                WHERE 
                                  item_title ILIKE '%{}%' OR 
                                  u.nick_name ILIKE '%{}%' OR u.email ILIKE '%{}%' 
                                  OR b.payment_id ILIKE '%{}%' OR b.sub_id ILIKE '%{}%' 
                                LIMIT $1 OFFSET $2;", search_title, search_title, search_title, search_title, search_title);
          if status > -1 {
            sql_string = format!("SELECT b.id, b.item_type_id, b.item_id, CASE 
                                      WHEN b.item_type_id = 101 THEN (SELECT title FROM public.\"subscription\" WHERE id=b.item_id) 
                                      WHEN b.item_type_id = 201 THEN (SELECT title FROM public.\"item\" WHERE id=b.item_id) 
                                      ELSE 'Unknown Item' 
                                  END AS item_title, 
                                  b.user_id, 
                                  u.nick_name, 
                                  u.email, 
                                  b.payment_id, b.sub_id, b.price, b.created_on 
                                  FROM public.\"shop_buy\" AS b 
                                  LEFT JOIN public.\"user\" AS u ON u.id = b.user_id 
                                  WHERE 
                                    item_title ILIKE '%{}%' OR 
                                    u.nick_name ILIKE '%{}%' OR u.email ILIKE '%{}%' 
                                    OR b.payment_id ILIKE '%{}%' OR b.sub_id ILIKE '%{}%' 
                                    AND b.item_type_id={} 
                                  LIMIT $1 OFFSET $2;", search_title, search_title, search_title, search_title, search_title, status);
          }

        } else {

          sql_string = "SELECT b.id, b.item_type_id, b.item_id, CASE 
                                    WHEN b.item_type_id = 101 THEN (SELECT title FROM public.\"subscription\" WHERE id=b.item_id) 
                                    WHEN b.item_type_id = 201 THEN (SELECT title FROM public.\"item\" WHERE id=b.item_id) 
                                    ELSE 'Unknown Item' 
                                END AS item_title, 
                                b.user_id, 
                                u.nick_name, 
                                u.email, 
                                b.payment_id, b.sub_id, b.price, b.created_on 
                                FROM public.\"shop_buy\" AS b 
                                LEFT JOIN public.\"user\" AS u ON u.id = b.user_id 
                                LIMIT $1 OFFSET $2;".to_string();

          if status > -1 {
            sql_string = format!("SELECT b.id, b.item_type_id, b.item_id, CASE 
                                      WHEN b.item_type_id = 101 THEN (SELECT title FROM public.\"subscription\" WHERE id=b.item_id) 
                                      WHEN b.item_type_id = 201 THEN (SELECT title FROM public.\"item\" WHERE id=b.item_id) 
                                      ELSE 'Unknown Item' 
                                  END AS item_title, 
                                  b.user_id, 
                                  u.nick_name, 
                                  u.email, 
                                  b.payment_id, b.sub_id, b.price, b.created_on 
                                  FROM public.\"shop_buy\" AS b 
                                  LEFT JOIN public.\"user\" AS u ON u.id = b.user_id 
                                  WHERE 
                                  b.item_type_id={} 
                                  LIMIT $1 OFFSET $2;", status);
          }

        }
        
        let stmt = conn.prepare(&sql_string).await?;

        for row in conn.query(&stmt, &[&limit, &offset]).await? {
          let new_buy = NewBuy {
            id: row.get(0),
            item_type_id: row.get(1),
            item_id: row.get(2),
            item_title: row.get(3),
            user_id: row.get(4),
            user_nick_name: row.get(5),
            user_email: row.get(6),
            payment_id: row.get(7),
            sub_id:  row.get(8),
            price: row.get(9),
            created_on: row.get(10)
          };

          vec.push(new_buy);
        }


        //end search
      }
      
      
      Ok(vec)
    }
    


    pub async fn count(pool: &Pool<PostgresConnectionManager<tokio_postgres::NoTls>>) -> Result<BuyCount, RunError<tokio_postgres::Error>> {
      let conn = pool.get().await?;
  
      let sql = "SELECT (SELECT COUNT(id) FROM public.\"shop_buy\" WHERE item_type_id=101) AS subscription, (SELECT COUNT(id) FROM public.\"shop_buy\" WHERE item_type_id=201) AS item;";

      let stmt = conn.prepare(sql).await?;
      let row = conn.query_one(&stmt, &[]).await?;
      
      Ok(BuyCount {
        subscription: row.get::<usize, i64>(0),
        item: row.get::<usize, i64>(1),
      })
    }

}
