

# Setup DB
copy the content of deploy/initdb.sql to pgAdmin and run the sql at schema root.

# Convert Proto files
Run the convert.sh in proto folder to convert all proto file at once.
```
```


# Test & Deploy
Copy the source to linux & Build the esmserver in linux environment
run the following
```
./deploy.sh

```

### RENEW CERT
sudo certbot certonly --server https://acme-v02.api.letsencrypt.org/directory --manual --preferred-challenges dns -d *.aadi.my

public
postgresql://doadmin:tf45h3hpz6xstby6@db-postgresql-dev-sgp1-32064-do-user-7964287-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require

private
postgresql://doadmin:tf45h3hpz6xstby6@private-db-postgresql-dev-sgp1-32064-do-user-7964287-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require

migrate data
PGPASSWORD=tf45h3hpz6xstby6 pg_restore -U doadmin -h db-postgresql-dev-sgp1-32064-do-user-7964287-0.b.db.ondigitalocean.com -p 25060 -d defaultdb 
