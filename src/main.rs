use tonic::transport::Server;
use std::net::SocketAddr;

use tokio_postgres;
use bb8::Pool;

use bb8_postgres::PostgresConnectionManager;

use crate::jwk::JwkAuth;
mod jwk;
mod svc;
mod db;
mod cryptic;
mod jwt;
mod errors;
mod config;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

    let jwk_auth = JwkAuth::new().await;

    let conf = config::get_configuration();
    
    //check deploy/service/start.sh for the db_conn_string
    let pg_mgr = PostgresConnectionManager::new_from_stringlike(conf.db_conn_string, tokio_postgres::NoTls).unwrap();
    let pool: Pool<PostgresConnectionManager<tokio_postgres::NoTls>> = match Pool::builder().build(pg_mgr).await {
        Ok(pool) => pool,
        Err(e) => panic!("builder error: {:?}", e),
    };

    let esmapi_server = svc::esmapi::EsmApiServer {
        jwk: jwk_auth.clone(),
        pool: pool.clone(),
    };

    let adminapi_server = svc::adminapi::AdminApiServer {
        jwk: jwk_auth.clone(),
        pool: pool.clone(),
    };

    let esmapi_service = svc::esmapi::esmapi_proto::esm_api_server::EsmApiServer::new(esmapi_server);
    let adminapi_service = svc::adminapi::adminapi_proto::admin_api_server::AdminApiServer::new(adminapi_server);

    let addr: SocketAddr = conf.listen_on.parse()?;
    println!("Server Running on {}", addr);
    
    Server::builder()
        .add_service(esmapi_service)
        .add_service(adminapi_service)
        .serve(addr)
        .await?;

    Ok(())
}

/*
fn check_auth_login(req: Request<()>) -> Result<Request<()>, Status> {
    let conf = config::get_configuration();
    let token = MetadataValue::from_str(conf.before_login_token.as_str()).unwrap();

    match req.metadata().get("authorization") {
        Some(t) if token == t => Ok(req),
        _ => Err(Status::unauthenticated("No valid auth token")),
    }
    
}
*/
