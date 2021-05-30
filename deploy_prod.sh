#!/bin/sh

echo "make sure the following binary are in place: "
echo "1. esm-admin-warp is in deploy/admin folder."
echo "2. esm-game-loader is in deploy/gloader folder."
echo "3. esmserver, checker_current_game, checker_subscriber"
echo "IMPORTANT: all these binary must be build on Ubuntu 20 if deploy target is Ubuntu 20"

SOURCE_FOLDER='deploy'
TARGET_FOLDER='~/'
PROD_SERVER='esm-api.aadi.my'
USER='root'

rsync -av $SOURCE_FOLDER $USER@$PROD_SERVER:$TARGET_FOLDER