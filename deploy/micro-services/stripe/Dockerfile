FROM node:slim

COPY ./stripe/www /www

COPY ./stripe/start.sh /start
RUN chmod u+x /start

WORKDIR /www
RUN npm install


CMD ["/start"]