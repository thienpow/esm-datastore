#!/bin/sh


CARGO_PATH="/root/.cargo/bin"

cd ~/esm-datastore/

git pull

read -p "Rebuild: All(0), esmserver(1), admin(2), checker_current_game(3), checker_leaderboard(4), checker_subscriber(5), checker_unclaim(6), gloader(7), wwwloader(8)" choice


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

  echo "building checker_unclaim"
  $CARGO_PATH/cargo build --bin checker_unclaim --release

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
  echo "building checker_unclaim"
  $CARGO_PATH/cargo build --bin checker_unclaim --release
  ;;
7)
  echo "building gloader"
  $CARGO_PATH/cargo build --bin gloader --release
  ;;
8)
  echo "building wwwloader"
  $CARGO_PATH/cargo build --bin wwwloader --release
  ;;
9)
  echo "rebuild database"
  ;;
11)
  echo "RESTART ONLY: docker-compose up -d --build"
  ;;
88)
  echo "TEST ONLY"
  ;;
99)
  echo "DEBUG ONLY: docker-compose up --build"
  ;;
esac

  


rm deploy/micro-services/service/esmserver
rm deploy/micro-services/service/checker_current_game
rm deploy/micro-services/service/checker_leaderboard
rm deploy/micro-services/service/checker_subscriber
rm deploy/micro-services/service/checker_unclaim
rm deploy/micro-services/gloader/gloader
rm deploy/micro-services/admin/wwwloader

cp target/release/esmserver deploy/micro-services/service/esmserver
cp target/release/checker_current_game deploy/micro-services/service/checker_current_game
cp target/release/checker_leaderboard deploy/micro-services/service/checker_leaderboard
cp target/release/checker_subscriber deploy/micro-services/service/checker_subscriber
cp target/release/checker_unclaim deploy/micro-services/service/checker_unclaim
cp target/release/gloader deploy/gloader/micro-services/gloader
cp target/release/wwwloader deploy/admin/micro-services/wwwloader




case $1 in
0)
  cd deploy/micro-services/
  docker-compose up -d --build
  ;;
1)
  cd deploy/micro-services/
  docker-compose up -d --build esmservice
  ;;
2)
  cd deploy/micro-services/
  docker-compose up -d --build esm-admin
  ;;
3)
  cd deploy/micro-services/
  docker-compose up -d --build esmservice
  ;;
4)
  cd deploy/micro-services/
  docker-compose up -d --build esmservice
  ;;
5)
  cd deploy/micro-services/
  docker-compose up -d --build esmservice
  ;;
6)
  cd deploy/micro-services/
  docker-compose up -d --build esmservice
  ;;
7)
  cd deploy/micro-services/
  docker-compose up -d --build esm-game-loader
  ;;
8)
  cd deploy/micro-services/
  docker-compose up -d --build esm-admin
  ;;
9)
  cd deploy/database/
  docker-compose up -d --build
  ;;
11)
  cd deploy/micro-services/
  docker-compose up -d --build
  ;;
88)
  #docker-compose up --build dbpg-standby-01
  ;;
99)
  cd deploy/micro-services/
  docker-compose up --build
  ;;
esac

# clean  up unused docker images
docker images -q | xargs docker rmi

# show the running containers and server uptime
docker ps -a
uptime