cd ~/esm-datastore/

git pull

echo "building esmserver"
cargo build --bin esmserver --release

echo "building checker_current_game"
cargo build --bin checker_current_game --release

echo "building checker_leaderboard"
cargo build --bin checker_leaderboard --release

echo "building checker_subscriber"
cargo build --bin checker_subscriber --release

cd deploy/
rm service/esmserver
rm service/checker_current_game
rm service/checker_leaderboard
rm service/checker_subscriber

cd ..
cp target/release/esmserver deploy/service/esmserver
cp target/release/checker_current_game deploy/service/checker_current_game
cp target/release/checker_leaderboard deploy/service/checker_leaderboard
cp target/release/checker_subscriber deploy/service/checker_subscriber

cd deploy/
docker-compose up -d --build esmservice

# clean  up unused docker images
docker images -q | xargs docker rmi

# show the running containers and server uptime
docker ps -a
uptime