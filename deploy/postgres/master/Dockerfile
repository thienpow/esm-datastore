FROM postgres:13-alpine

COPY ./certs/out/postgres-master.key /var/lib/postgresql/server.key
COPY ./certs/out/postgres-master.crt /var/lib/postgresql/server.crt

COPY ./certs/out/CA.crt /var/lib/postgresql/CA.crt
COPY ./certs/out/CA.crl /var/lib/postgresql/CA.crl

# COPY ./postgres/master/postgresql.conf /var/lib/postgresql/data/postgresql.conf
# COPY ./postgres/pg_hba.conf /var/lib/postgresql/data/pg_hba.conf

RUN chown 70:70 /var/lib/postgresql/server.key 
RUN chmod 600 /var/lib/postgresql/server.key
RUN chown 70:70 /var/lib/postgresql/server.crt 
RUN chmod 600 /var/lib/postgresql/server.crt

RUN chown 70:70 /var/lib/postgresql/CA.crt
RUN chmod 600 /var/lib/postgresql/CA.crt
RUN chown 70:70 /var/lib/postgresql/CA.crl
RUN chmod 600 /var/lib/postgresql/CA.crl

ENTRYPOINT ["docker-entrypoint.sh"] 
