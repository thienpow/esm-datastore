FROM postgres:13-alpine


COPY ./certs/out/dbpg-standby-01.key /var/lib/postgresql/server.key
COPY ./certs/out/dbpg-standby-01.crt /var/lib/postgresql/server.crt

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


ENV GOSU_VERSION 1.12

ADD ./utility/gosu-amd64 /usr/bin/gosu
RUN chmod +x /usr/bin/gosu

RUN apk add --update iputils
RUN apk add --update htop

COPY ./postgres/standby/docker-entrypoint.sh /docker-entrypoint.sh

RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]

#CMD ["gosu", "postgres", "postgres"]