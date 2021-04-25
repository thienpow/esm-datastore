

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
