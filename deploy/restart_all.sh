git pull

docker-compose down
docker-compose up --build -d

# clean  up unused docker images
docker images -q | xargs docker rmi