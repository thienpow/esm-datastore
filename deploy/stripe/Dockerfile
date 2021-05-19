FROM node:latest

#RUN apt-get update && apt-get install -y ca-certificates libssl-dev nodejs npm && rm -rf /var/lib/apt/lists/*

COPY ./stripe/www /www

COPY ./stripe/start.sh /start
RUN chmod u+x /start

WORKDIR /www
RUN npm install


CMD ["/start"]