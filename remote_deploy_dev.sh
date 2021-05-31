#!/bin/sh


CARGO_PATH="/root/.cargo/bin"

cd ~/esm-datastore/

git pull

read -p "Rebuild: All(0), esmserver(1), admin(2), checker_current_game(3), checker_leaderboard(4), checker_subscriber(5), gloader(6), wwwloader(7)" choice


case $1 in
0)
  echo "Rebuilding All..."
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

  echo "building wwwloader"
  $CARGO_PATH/cargo build --bin wwwloader --release

  ;;
1)
  CARGO_PATH="/root/.cargo/bin"
  echo "building esmserver"
  $CARGO_PATH/cargo build --bin esmserver --release
  ;;
2)
  ;;
3)
  echo "building checker_current_game"
  $CARGO_PATH/cargo build --bin checker_current_game --release
  ;;
4)
  echo "building checker_leaderboard"
  $CARGO_PATH/cargo build --bin checker_leaderboard --release
  ;;
5)
  echo "building checker_subscriber"
  $CARGO_PATH/cargo build --bin checker_subscriber --release
  ;;
6)
  echo "building gloader"
  $CARGO_PATH/cargo build --bin gloader --release
  ;;
7)
  echo "building wwwloader"
  $CARGO_PATH/cargo build --bin wwwloader --release
  ;;
9)
  echo "RESTART ONLY: docker-compose up -d --build"
  ;;
99)
  echo "DEBUG ONLY: docker-compose up --build"
  ;;
esac

  


cd deploy/
rm service/esmserver
rm service/checker_current_game
rm service/checker_leaderboard
rm service/checker_subscriber
rm gloader/gloader
rm admin/wwwloader

cd ..
cp target/release/esmserver deploy/service/esmserver
cp target/release/checker_current_game deploy/service/checker_current_game
cp target/release/checker_leaderboard deploy/service/checker_leaderboard
cp target/release/checker_subscriber deploy/service/checker_subscriber
cp target/release/gloader deploy/gloader/gloader
cp target/release/wwwloader deploy/admin/wwwloader


cd deploy/

# clean  up unused docker images
docker images -q | xargs docker rmi

case $1 in
0)
  docker-compose up -d --build
  ;;
1)
  docker-compose up -d --build esmservice
  ;;
2)
  docker-compose up -d --build esm-admin
  ;;
3)
  docker-compose up -d --build esmservice
  ;;
4)
  docker-compose up -d --build esmservice
  ;;
5)
  docker-compose up -d --build esmservice
  ;;
6)
  docker-compose up -d --build esm-game-loader
  ;;
7)
  docker-compose up -d --build esm-admin
  ;;
9)
  docker-compose down
  docker-compose up -d --build
  ;;
99)
  docker-compose down
  docker-compose up --build
  ;;
esac

# show the running containers and server uptime
docker ps -a
uptime