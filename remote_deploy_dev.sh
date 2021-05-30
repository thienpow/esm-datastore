#!/bin/sh

cd ~/esm-datastore/

git pull

CARGO_PATH="/root/.cargo/bin"
echo "building esmserver"
$CARGO_PATH/cargo build --bin esmserver --release

echo "building checker_current_game"
$CARGO_PATH/cargo build --bin checker_current_game --release

echo "building checker_leaderboard"
$CARGO_PATH/cargo build --bin checker_leaderboard --release

echo "building checker_subscriber"
$CARGO_PATH/cargo build --bin checker_subscriber --release

echo "building gloader"
$CARGO_PATH/cargo build --bin gloader --release

cd deploy/
rm service/esmserver
rm service/checker_current_game
rm service/checker_leaderboard
rm service/checker_subscriber
rm service/checker_subscriber
rm gloader/gloader

cd ..
cp target/release/esmserver deploy/service/esmserver
cp target/release/checker_current_game deploy/service/checker_current_game
cp target/release/checker_leaderboard deploy/service/checker_leaderboard
cp target/release/checker_subscriber deploy/service/checker_subscriber
cp target/release/gloader deploy/gloader/gloader


cd deploy/
docker-compose up -d --build esmservice

# clean  up unused docker images
docker images -q | xargs docker rmi

# show the running containers and server uptime
docker ps -a
uptime