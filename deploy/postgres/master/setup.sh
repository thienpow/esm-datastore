#!/bin/bash
echo "host  replication          replicator         0.0.0.0/0         md5" >> "$PGDATA/pg_hba.conf"
echo "hostssl all all all cert clientcert=verify-ca" >> "$PGDATA/pg_hba.conf"
# psql -p 5432 -c "CREATE USER replicator WITH REPLICATION ENCRYPTED PASSWORD 'secret'"

set -e
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
CREATE USER $PG_REP_USER REPLICATION LOGIN CONNECTION LIMIT 100 ENCRYPTED PASSWORD '$PG_REP_PASSWORD';
EOSQL
