FROM ubuntu:20.04

RUN apt-get update && apt-get install -y ca-certificates libssl-dev && rm -rf /var/lib/apt/lists/*

COPY ./admin/esm-admin-warp /usr/local/bin/esm-admin-warp
RUN chmod u+x /usr/local/bin/esm-admin-warp

COPY ./service/start.sh /usr/local/bin/start
RUN chmod u+x /usr/local/bin/start

CMD ["/usr/local/bin/start"]