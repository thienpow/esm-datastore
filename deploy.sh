
git pull

echo "building esmserver"
cargo build --bin esmserver --release

echo "building checker_current_game"
cargo build --bin checker_current_game --release

echo "building checker_leaderboard"
cargo build --bin checker_leaderboard --release

cd deploy/
docker-compose down
rm service/esmserver
rm service/checker_current_game
rm service/checker_leaderboard

cd ..
cp target/release/esmserver deploy/service/esmserver
cp target/release/checker_current_game deploy/service/checker_current_game
cp target/release/checker_leaderboard deploy/service/checker_leaderboard

cd deploy/
docker-compose up --build -d

# clean  up unused docker images
docker images -q | xargs docker rmi