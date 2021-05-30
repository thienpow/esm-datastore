#!/bin/bash

export JWK_URL="https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com"
export JWK_AUDIENCE="esports-mini"
export JWK_ISSUER="https://securetoken.google.com/esports-mini"
export DB_CERT_PATH="/usr/local/bin/db_cert.cer"
export DB_CONN_STRING="postgresql://doadmin:tf45h3hpz6xstby6@private-db-postgresql-dev-sgp1-32064-do-user-7964287-0.b.db.ondigitalocean.com:25061/defaultdb?sslmode=require"
export LISTEN_ON="0.0.0.0:50051"
export BEFORE_LOGIN_TOKEN="Bearer before-login-token"
export SERVER_TIMEZONE="8"
export STRIPE_SECRET="sk_test_51IOa7gBGCaV2oEVpEDw9fOn1fUn8IaPOemu7Yjkg6N75C3ahsd7sEQr3ait4JYU55wfCBbXCRPIhcUxGMVtQYA6A003YKMqkYF"
export CHECKER_TIME_WAIT="180"
export FCM_KEY="AAAAzT8d8lM:APA91bHtFSHVIBiiSDUWSaUkrYNrcBSyhMY_JBYSeaaoWpkrxSgBO-7xgHtySH3qfTvsgHHTIsrh_SwwirCvTTuOWBl0--JhddEV8MFnEgWuGRPOXPVyTBHym5k9gh8WrCxr-rY13Y54"

# IMPORTANT! need to have at least one looping... do not put & at the last command
/usr/local/bin/checker_current_game & 
/usr/local/bin/checker_leaderboard & 
/usr/local/bin/checker_subscriber & 
/usr/local/bin/esmserver
