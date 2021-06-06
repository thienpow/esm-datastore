FROM ubuntu:20.04

RUN apt-get update && apt-get install -y ca-certificates libssl-dev && rm -rf /var/lib/apt/lists/*

COPY ./admin/wwwloader /wwwloader
RUN chmod u+x /wwwloader

COPY ./admin/www /www

COPY ./admin/start.sh /start
RUN chmod u+x /start

CMD ["/start"]