FROM node:latest

#RUN apt-get update && apt-get install -y ca-certificates libssl-dev nodejs npm && rm -rf /var/lib/apt/lists/*

COPY ./stripe/www /www

COPY ./stripe/start.sh /www/start
RUN chmod u+x /www/start

WORKDIR /www
RUN npm install


CMD ["/www/start"]
# CMD [ "node", "index.js" ]