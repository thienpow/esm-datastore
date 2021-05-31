#!/bin/bash
echo "host  replication          replicator         0.0.0.0/0         md5" >> "$PGDATA/pg_hba.conf"
echo "hostssl all all all cert clientcert=verify-ca" >> "$PGDATA/pg_hba.conf"

#fill the initial data
psql -p 5432 -f initial_data.sql -d postgres

set -e
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
CREATE USER $PG_REP_USER REPLICATION LOGIN CONNECTION LIMIT 100 ENCRYPTED PASSWORD '$PG_REP_PASSWORD';
EOSQL
