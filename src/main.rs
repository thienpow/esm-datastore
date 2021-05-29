use tonic::transport::Server;
use std::net::SocketAddr;
use bb8::Pool;
use bb8_postgres::PostgresConnectionManager;

use std::fs;
use native_tls::{Certificate, TlsConnector};
use postgres_native_tls::MakeTlsConnector;

use crate::jwk::JwkAuth;
mod jwk;
mod svc;
mod cryptic;
mod jwt;
mod errors;
mod config;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

    let jwk_auth = JwkAuth::new().await;

    let config = config::get_configuration();
    

    let cert = fs::read(config.db_cert_path)?;
    let cert = Certificate::from_pem(&cert)?;
    let connector = TlsConnector::builder().add_root_certificate(cert).build()?;
    let tls = MakeTlsConnector::new(connector);

    
    //check deploy/service/start.sh for the db_conn_string
    let pg_mgr = PostgresConnectionManager::new_from_stringlike(config.db_conn_string, tls).unwrap();
    let pool_db = match Pool::builder().build(pg_mgr).await {
        Ok(pool) => pool,
        Err(e) => panic!("builder error: {:?}", e),
    };

    let esmapi_server = svc::esmapi::EsmApiServer {
        jwk: jwk_auth.clone(),
        pool: pool_db.clone(),
        server_timezone: config.server_timezone,
    };
    let esmapi_service = svc::esmapi::esmapi_proto::esm_api_server::EsmApiServer::new(esmapi_server);


    let adminapi_server = svc::adminapi::AdminApiServer {
        jwk: jwk_auth.clone(),
        pool: pool_db.clone(),
        server_timezone: config.server_timezone,
    };
    let adminapi_service = svc::adminapi::adminapi_proto::admin_api_server::AdminApiServer::new(adminapi_server);
    

    let addr: SocketAddr = config.listen_on.parse()?;
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
