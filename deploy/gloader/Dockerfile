FROM ubuntu:20.04

RUN apt-get update && apt-get install -y ca-certificates libssl-dev && rm -rf /var/lib/apt/lists/*


COPY ./certs/out/CA.crt /usr/local/bin/CA.crt

COPY ./gloader/gloader /usr/local/bin/gloader
RUN chmod u+x /usr/local/bin/gloader

COPY ./common_env.sh /usr/local/bin/common_env
RUN chmod u+x /usr/local/bin/common_env

COPY ./gloader/start.sh /usr/local/bin/start
RUN chmod u+x /usr/local/bin/start

CMD ["/usr/local/bin/start"]