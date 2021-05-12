FROM ubuntu:20.04

RUN apt-get update && apt-get install -y ca-certificates libssl-dev nodejs npm && rm -rf /var/lib/apt/lists/*

COPY ./stripe/www /www
WORKDIR /www
RUN npm install

CMD [ "node", "index.js" ]