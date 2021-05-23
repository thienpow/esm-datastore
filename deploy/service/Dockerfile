FROM ubuntu:20.04

RUN apt-get update && apt-get install -y ca-certificates libssl-dev && rm -rf /var/lib/apt/lists/*

COPY ./service/esmserver /usr/local/bin/esmserver
RUN chmod u+x /usr/local/bin/esmserver

COPY ./service/checker_current_game /usr/local/bin/checker_current_game
RUN chmod u+x /usr/local/bin/checker_current_game

COPY ./service/start.sh /usr/local/bin/start
RUN chmod u+x /usr/local/bin/start

CMD ["/usr/local/bin/start"]