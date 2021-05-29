# pull latest repo
cd ~/esm-datastore/
git pull
./deploy.sh

# rebuild and restart the esm-admin
cd ~/esm-datastore/deploy/
docker-compose up -d --build esmservice

# clean  up unused docker images
docker images -q | xargs docker rmi

# show the running containers and server uptime
docker ps -a
uptime
