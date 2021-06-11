# Setup DB
For development environment, copy the content of deploy/postgres/schema/schema.sql to pgAdmin and run the sql at schema root.
then, restore the data by doing a restore on /deploy/postgres/initial_data.sql

# Convert Proto files
Run the convert.sh in proto folder to convert all proto file at once.

# Test & Deploy
First git clone the source to linux & Build the esmserver in linux environment
run the following on your local dev machine
```
./deploy_dev.sh

```
# Build inside Rust Docker
docker-compose run --rm dev


# Production Deployment

### make sure the following binary are in place: 
1. wwwloader is in production/micro-services/admin folder.
2. gloader is in production/micro-services/gloader folder.
3. esmserver, checker_current_game, checker_subscriber, checker_leaderboard, checker_unclaim is in production/micro-services/service

### make sure the DB Cert and env variables are correct.
1. out/* in production/micro-services/certs/, if want to regenerate a different CA & Server certs, edit and run the regen.sh. Make sure install certstrap first
2. check the production/micro-services/service/start.sh for the env variables
3. check the production/micro-services/gloader/start.sh for the env variables
4. check the production/micro-services/stripe/start.sh for the env variables

### IMPORTANT: all these binary must be build on Ubuntu 20 if deploy target is Ubuntu 20


### RENEW CERT
#### once and for all *wildcard method
sudo certbot certonly --server https://acme-v02.api.letsencrypt.org/directory --manual --preferred-challenges dns -d *.aadi.my
IMPORTANT: wildcard method do not support Auto Renewal
#### all in one (specify each method)
sudo certbot certonly --cert-name esm-api.aadi.my-0001 --standalone --expand -d esm-gloader.aadi.my -d esm-api.aadi.my -d esm-admin.aadi.my -d esm-stripe.aadi.my

#### check certbot status
sudo systemctl status certbot.timer


# Postgresql Server

## CUSTOM Self Signed CERT for Postgrest Server
look into deploy/micro-services/certs/regen.sh


pg_basebackup -h dbpg-master -p 25432 -U replicator -D /var/lib/postgresql/data -Fp -R -Xs -P
