#!/bin/bash

export STRIPE_SECRET="sk_test_51IOa7gBGCaV2oEVpEDw9fOn1fUn8IaPOemu7Yjkg6N75C3ahsd7sEQr3ait4JYU55wfCBbXCRPIhcUxGMVtQYA6A003YKMqkYF"
export DB_CERT_PATH="/usr/local/bin/db_cert.cer"
export DB_CONN_STRING="postgresql://doadmin:tf45h3hpz6xstby6@127.0.0.1:5432/postgres?sslmode=require"
export SERVER_TIMEZONE="8"
export PORT="4242"

node /www/index.js