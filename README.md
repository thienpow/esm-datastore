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
1. wwwloader is in deploy/admin folder.
2. gloader is in deploy/gloader folder.
3. esmserver, checker_current_game, checker_subscriber, checker_leaderboard is in deploy/service

### make sure the DB Cert and env variables are correct.
1. db_cert.cer in /deploy/certs/
2. check the /deploy/service/start.sh for the env variables
3. check the /deploy/gloader/start.sh for the env variables
4. check the /deploy/stripe/start.sh for the env variables

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
look into deploy/certs/regen.sh
