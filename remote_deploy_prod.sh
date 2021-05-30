#!/bin/sh

cd deploy/
docker-compose up -d --build
# clean  up unused docker images
docker images -q | xargs docker rmi
# show the running containers and server uptime
docker ps -a
uptime