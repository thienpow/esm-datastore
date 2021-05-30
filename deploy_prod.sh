#!/bin/sh

echo "IMPORTANT: read the README.md and make sure everything is in place: "

SOURCE_FOLDER='deploy'
TARGET_FOLDER='~/'
PROD_SERVER='esm-api.aadi.my'
USER='root'

rsync -av $SOURCE_FOLDER $USER@$PROD_SERVER:$TARGET_FOLDER
ssh $USER@$PROD_SERVER 'bash -s' < remote_deploy_prod.sh