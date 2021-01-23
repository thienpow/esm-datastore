#!/bin/sh
export PGPASSWORD=notezpass99~-~
psql -h localhost -p 5432 -U postgres -c "DROP DATABASE esmstore;" -d postgres
psql -h localhost -p 5432 -U postgres -c "CREATE DATABASE esmstore;" -d postgres
psql -h localhost -p 5432 -U postgres -f initdb.sql -d esmstore
psql -h localhost -p 5432 -U postgres -f preset.sql -d esmstore