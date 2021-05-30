use std::convert::Infallible;
use std::{fs};
use warp::{
    Filter
};

use bb8::Pool;
use postgres_native_tls::MakeTlsConnector;
use bb8_postgres::PostgresConnectionManager;
use native_tls::{Certificate, TlsConnector};


mod handler;

mod config;



#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

    let config = config::get_configuration();

    
    let cert = fs::read(config.db_cert_path)?;
    let cert = Certificate::from_pem(&cert)?;
    let connector = TlsConnector::builder().add_root_certificate(cert).build()?;
    let tls = MakeTlsConnector::new(connector);

    let pg_mgr = PostgresConnectionManager::new_from_stringlike(config.db_conn_string, tls).unwrap();
    let pool: Pool<PostgresConnectionManager<MakeTlsConnector>> = match Pool::builder().build(pg_mgr).await {
        Ok(pool) => pool,
        Err(e) => panic!("builder error: {:?}", e),
    };

    //GET /pkg/ ... => ./pkg/
    //let pkg_routes = warp::path("pkg").and(warp::fs::dir("./pkg/"));
    

    //GET /
    let cors = warp::cors()
        .allow_any_origin()
        .allow_headers(vec![ "Access-Control-Allow-Origin", "Access-Control-Allow-Methods", "Authorization" ]) //
        .allow_methods(vec![ "POST", "GET", "HEAD", "OPTIONS" ]);
        
    let game_loader_route = warp::path("loader")
        .and(warp::get())
        .and(warp::query())
        .and(with_db(pool.clone()))
        .and_then(handler::get_game_code);


    /* 
        this is how client side should do before passing the response's contentData to iframe's srcdoc
        
        const ax = axios.create({
            baseURL: 'https://esm-gloader.aadi.my',
            headers: {'authorization': jwtToken}
        });

        let response = await ax.get('/sloader?game_id=xxxxxx&user_id=xxxxxx');

    */
    // <iframe srcdoc={contentData}></iframe>
    let secure_game_loader_route = warp::path("sloader")
        .and(warp::get())
        .and(warp::header::<String>("authorization"))
        .and(warp::query())
        .and(with_db(pool.clone()))
        .and_then(handler::secure_get_game_code);

    let routes = game_loader_route.or(secure_game_loader_route).with(cors);//.recover(error::handle_rejection);

    println!("Service Started at Port: 3033");
    warp::serve(routes).run(([0, 0, 0, 0], 3033)).await;

    Ok(())
}

fn with_db(pool: Pool<PostgresConnectionManager<MakeTlsConnector>>) -> impl Filter<Extract = (Pool<PostgresConnectionManager<MakeTlsConnector>>,), Error = Infallible> + Clone {
    warp::any().map(move || pool.clone())
}
