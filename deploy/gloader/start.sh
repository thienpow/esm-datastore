#!/bin/bash

export JWK_URL="https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com"
export JWK_AUDIENCE="esports-mini"
export JWK_ISSUER="https://securetoken.google.com/esports-mini"
export DB_CERT_PATH="/usr/local/bin/db_cert.cer"
export DB_CONN_STRING="postgresql://doadmin:tf45h3hpz6xstby6@private-db-postgresql-dev-sgp1-32064-do-user-7964287-0.b.db.ondigitalocean.com:25061/dev-pool?sslmode=require"
export LISTEN_ON="0.0.0.0:3033"
export SERVER_TIMEZONE="8"

/usr/local/bin/gloader