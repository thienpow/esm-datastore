#!/bin/bash

export STRIPE_SECRET="sk_test_51IOa7gBGCaV2oEVpEDw9fOn1fUn8IaPOemu7Yjkg6N75C3ahsd7sEQr3ait4JYU55wfCBbXCRPIhcUxGMVtQYA6A003YKMqkYF"
export DB_CONN_STRING="postgresql://postgres:notezpass99~-~@10.104.0.2:5432/esmstore"
export SERVER_TIMEZONE="8"
export PORT="4242"

node /www/index.js