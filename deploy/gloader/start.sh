#!/bin/bash

export JWK_URL="https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com"
export JWK_AUDIENCE="esports-mini"
export JWK_ISSUER="https://securetoken.google.com/esports-mini"
export DB_CONN_STRING="postgresql://postgres:notezpass99~-~@10.104.0.2:5432/esmstore"
export LISTEN_ON="0.0.0.0:3033"

/usr/local/bin/esm-game-loader