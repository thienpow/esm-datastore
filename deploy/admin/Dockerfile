FROM ubuntu:20.04

RUN apt-get update && apt-get install -y ca-certificates libssl-dev && rm -rf /var/lib/apt/lists/*

COPY ./admin/esm-admin-warp /esm-admin-warp
RUN chmod u+x /esm-admin-warp

COPY ./admin/www /www

CMD ["/esm-admin-warp"]