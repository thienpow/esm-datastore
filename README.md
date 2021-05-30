# Setup DB
copy the content of deploy/initdb.sql to pgAdmin and run the sql at schema root.

# Convert Proto files
Run the convert.sh in proto folder to convert all proto file at once.
```
```


# Test & Deploy
First git clone the source to linux & Build the esmserver in linux environment
run the following on your local dev machine
```
./deploy_dev.sh

```

# Production Deployment

### make sure the following binary are in place: 
1. esm-admin-warp is in deploy/admin folder.
2. esm-game-loader is in deploy/gloader folder.
3. esmserver, checker_current_game, checker_subscriber

### make sure the DB Cert and env variables are correct.
check the /deploy/service.start.sh for the env variables

### IMPORTANT: all these binary must be build on Ubuntu 20 if deploy target is Ubuntu 20


### RENEW CERT
#### once and for all *wildcard method
sudo certbot certonly --server https://acme-v02.api.letsencrypt.org/directory --manual --preferred-challenges dns -d *.aadi.my
#### all in one (specify each method)
sudo certbot certonly --cert-name esm-api.aadi.my-0001 --standalone --expand -d esm-gloader.aadi.my -d esm-api.aadi.my -d esm-admin.aadi.my

Postgresql Server

public
postgresql://doadmin:tf45h3hpz6xstby6@db-postgresql-dev-sgp1-32064-do-user-7964287-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require

private
postgresql://doadmin:tf45h3hpz6xstby6@private-db-postgresql-dev-sgp1-32064-do-user-7964287-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require

migrate data
PGPASSWORD=tf45h3hpz6xstby6 pg_restore -U doadmin -h db-postgresql-dev-sgp1-32064-do-user-7964287-0.b.db.ondigitalocean.com -p 25060 -d defaultdb 
