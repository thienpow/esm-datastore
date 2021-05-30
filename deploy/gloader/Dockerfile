FROM ubuntu:20.04

RUN apt-get update && apt-get install -y ca-certificates libssl-dev && rm -rf /var/lib/apt/lists/*


COPY ./service/db_cert.cer /usr/local/bin/db_cert.cer

COPY ./gloader/gloader /usr/local/bin/gloader
RUN chmod u+x /usr/local/bin/gloader

COPY ./gloader/start.sh /usr/local/bin/start
RUN chmod u+x /usr/local/bin/start

CMD ["/usr/local/bin/start"]