

# Setup DB
copy the content of deploy/initdb.sql to pgAdmin and run the sql at schema root.


Run the following command in proto folder to generate grpc-web stub class from the .proto definitions:
Or run the convert.sh in proto folder to convert all proto file at once.
```
protoc -I=. helloworld.proto --js_out=import_style=commonjs:js/. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:js/.
```


# Test
Copy the source to linux & Build the esmserver in linux environment
run the following
```
./deploy.sh

```

### RENEW CERT
sudo certbot certonly --server https://acme-v02.api.letsencrypt.org/directory --manual --preferred-challenges dns -d *.aadi.my

### REBUILD WEB
docker-compose up --detach --build esmadmin