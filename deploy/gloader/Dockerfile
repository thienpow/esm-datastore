FROM ubuntu:20.04

RUN apt-get update && apt-get install -y ca-certificates libssl-dev && rm -rf /var/lib/apt/lists/*

COPY ./gloader/esm-game-loader /usr/local/bin/esm-game-loader
RUN chmod u+x /usr/local/bin/esm-game-loader

COPY ./gloader/start.sh /usr/local/bin/start
RUN chmod u+x /usr/local/bin/start

CMD ["/usr/local/bin/start"]