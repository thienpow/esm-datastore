
git pull

echo "building esmserver"
cargo build --bin esmserver --release

echo "building checker"
cargo build --bin checker --release

cd deploy/
docker-compose down
rm service/esmserver
rm service/checker

cd ..
cp target/release/esmserver deploy/service/esmserver
cp target/release/checker deploy/service/checker

cd deploy/
docker-compose up --build -d

# clean  up unused docker images
docker images -q | xargs docker rmi