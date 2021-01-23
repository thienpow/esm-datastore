
psql -c "DROP DATABASE esmstore;" -d postgres
psql -c "CREATE DATABASE esmstore;" -d postgres
psql -f initdb.sql -d esmstore
psql -f preset.sql -d esmstore