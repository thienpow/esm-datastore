#!/bin/sh


CARGO_PATH="$HOME/.cargo/bin"

cd ~/esm-datastore/

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
  echo "building esmserver"
  $CARGO_PATH/cargo build --bin esmserver --release
  ;;
2)
  echo "building checker_current_game"
  $CARGO_PATH/cargo build --bin checker_current_game --release
  ;;
3)
  echo "building checker_leaderboard"
  $CARGO_PATH/cargo build --bin checker_leaderboard --release
  ;;
4)
  echo "building checker_subscriber"
  $CARGO_PATH/cargo build --bin checker_subscriber --release
  ;;
5)
  echo "building checker_unclaim"
  $CARGO_PATH/cargo build --bin checker_unclaim --release
  ;;
6)
  echo "building gloader"
  $CARGO_PATH/cargo build --bin gloader --release
  ;;
7)
  echo "building wwwloader"
  $CARGO_PATH/cargo build --bin wwwloader --release
  ;;
8)
  echo "skip building"
  ;;
esac

[ ! -d "build" ] && mkdir build
cp target/release/esmserver build/esmserver
cp target/release/checker_current_game ./build/checker_current_game
cp target/release/checker_leaderboard ./build/checker_leaderboard
cp target/release/checker_subscriber ./build/checker_subscriber
cp target/release/checker_unclaim ./build/checker_unclaim
cp target/release/gloader ./build/gloader
cp target/release/wwwloader ./build/wwwloader

uptime