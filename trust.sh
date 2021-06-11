
# only use this trust.sh in docker development environment if needed

cp certs/out/ca.crt certs/out/server.crt  /usr/share/ca-certificates
update-ca-certificates