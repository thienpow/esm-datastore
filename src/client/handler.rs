
use esm_db::models::*;

use bb8::Pool;
use postgres_native_tls::MakeTlsConnector;
use bb8_postgres::PostgresConnectionManager;

type Result<T> = std::result::Result<T, Rejection>;
type DBPool = Pool<PostgresConnectionManager<MakeTlsConnector>>;

use warp::{
  Reply, Rejection
};

use serde_derive::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct GameLoaderParams {
    user_id: i64,
    game_id: i64,
}

pub async fn get_game_code(
  //token: String, 
  params: GameLoaderParams, 
  pool: DBPool
) -> Result<impl Reply> {

  //println!("token = {}", token);
  match game::Game::get_game_code(params.game_id, &pool.clone()).await {
    Ok(game_code) => {
  
      Ok(warp::reply::html(format!("
<!DOCTYPE html>
<html>
<head>
  <title>ESportsMini</title>
  <script>
    let game_id = {}
    let user_id = {}
  </script>
</head>
<body>
{}
</body>
</html>", params.game_id, params.user_id, game_code)))

    },
    Err(e) => panic!(e)
  }
  

}

pub async fn secure_get_game_code(
  token: String, 
  params: GameLoaderParams, 
  pool: DBPool
) -> Result<impl Reply> {

  println!("token = {}", token);
  match game::Game::get_game_code(params.game_id, &pool.clone()).await {
    Ok(game_code) => {
  
      Ok(warp::reply::html(format!("
<!DOCTYPE html>
<html>
<head>
  <title>ESportsMini</title>
  <script>
    let game_id = {}
    let user_id = {}
  </script>
</head>
<body>
{}
</body>
</html>", params.game_id, params.user_id, game_code)))
  
    },
    Err(e) => panic!(e)
  }
  

}


