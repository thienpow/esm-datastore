#!/bin/bash

export JWK_URL="https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com"
export JWK_AUDIENCE="esports-mini"
export JWK_ISSUER="https://securetoken.google.com/esports-mini"
export DB_CONN_STRING="postgresql://postgres:notezpass99~-~@10.104.0.2:5432/esmstore"
export LISTEN_ON="0.0.0.0:50051"
export BEFORE_LOGIN_TOKEN="Bearer before-login-token"
export SERVER_TIMEZONE="8"
export STRIPE_SECRET="sk_test_51IOa7gBGCaV2oEVpEDw9fOn1fUn8IaPOemu7Yjkg6N75C3ahsd7sEQr3ait4JYU55wfCBbXCRPIhcUxGMVtQYA6A003YKMqkYF"
export CHECKER_TIME_WAIT="180"

# IMPORTANT! need to have at least one looping... do not put & at the last command
/usr/local/bin/checker_current_game & 
# /usr/local/bin/checker_leaderboard & 
/usr/local/bin/esmserver
