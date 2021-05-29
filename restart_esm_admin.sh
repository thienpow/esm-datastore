git pull

cd esm-datastore/deploy/
docker-compose up -d --build esm-admin

# clean  up unused docker images
docker images -q | xargs docker rmi