FROM postgres:13-alpine

COPY ./certs/out/postgres-master.key /var/lib/postgresql/server.key
COPY ./certs/out/postgres-master.crt /var/lib/postgresql/server.crt

COPY ./certs/out/CA.crt /var/lib/postgresql/CA.crt
COPY ./certs/out/CA.crl /var/lib/postgresql/CA.crl

RUN chown 70:70 /var/lib/postgresql/server.key 
RUN chmod 600 /var/lib/postgresql/server.key
RUN chown 70:70 /var/lib/postgresql/server.crt 
RUN chmod 600 /var/lib/postgresql/server.crt

RUN chown 70:70 /var/lib/postgresql/CA.crt
RUN chmod 600 /var/lib/postgresql/CA.crt
RUN chown 70:70 /var/lib/postgresql/CA.crl
RUN chmod 600 /var/lib/postgresql/CA.crl

COPY ./postgres/master/setup.sh /docker-entrypoint-initdb.d/setup.sh
RUN chmod 0666 /docker-entrypoint-initdb.d/setup.sh

# put the initdb.sql inside this folder
COPY ./postgres/master/*.sql /docker-entrypoint-initdb.d/
RUN chmod a+r /docker-entrypoint-initdb.d/*

ENTRYPOINT ["docker-entrypoint.sh"] 