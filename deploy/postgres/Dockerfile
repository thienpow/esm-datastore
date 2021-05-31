FROM postgres:13-alpine

COPY ./certs/out/server.key /var/lib/postgresql/server.key
COPY ./certs/out/server.crt /var/lib/postgresql/server.crt

COPY ./certs/out/CA.crt /var/lib/postgresql/CA.crt
COPY ./certs/out/CA.crl /var/lib/postgresql/CA.crl

COPY ./postgres/pg_hba.conf /var/lib/postgresql/data/pg_hba.conf

RUN chown 70:70 /var/lib/postgresql/server.key 
RUN chmod 600 /var/lib/postgresql/server.key
RUN chown 70:70 /var/lib/postgresql/server.crt 
RUN chmod 600 /var/lib/postgresql/server.crt

RUN chown 70:70 /var/lib/postgresql/CA.crt
RUN chmod 600 /var/lib/postgresql/CA.crt
RUN chown 70:70 /var/lib/postgresql/CA.crl
RUN chmod 600 /var/lib/postgresql/CA.crl

# RUN echo "listen_addresses='*'" >> /var/lib/postgresql/data/postgresql.conf

ENTRYPOINT ["docker-entrypoint.sh"] 

CMD [ "-c", "hba_file=/var/lib/postgresql/data/pg_hba.conf",  "-c", "ssl=on" , "-c", "ssl_cert_file=/var/lib/postgresql/server.crt", "-c", "ssl_key_file=/var/lib/postgresql/server.key", "-c", "ssl_ca_file=/var/lib/postgresql/CA.crt", "-c", "ssl_crl_file=/var/lib/postgresql/CA.crl" ]