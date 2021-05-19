FROM node:latest

#RUN apt-get update && apt-get install -y ca-certificates libssl-dev nodejs npm && rm -rf /var/lib/apt/lists/*

COPY ./stripe/www /www
WORKDIR /www
RUN npm install

COPY ./stripe/start.sh /www
RUN chmod u+x /www/start

CMD ["start"]
# CMD [ "node", "index.js" ]