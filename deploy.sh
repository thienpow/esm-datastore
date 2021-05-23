
git pull

echo "building esmserver"
cargo build --bin esmserver --release

echo "building checker_current_game"
cargo build --bin checker_current_game --release

cd deploy/
docker-compose down
rm service/esmserver
rm service/checker_current_game

cd ..
cp target/release/esmserver deploy/service/esmserver
cp target/release/checker_current_game deploy/service/checker_current_game

cd deploy/
docker-compose up --build -d

# clean  up unused docker images
docker images -q | xargs docker rmi