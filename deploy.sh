# push the latest
git add .
git commit -m "deploy"
git push

ssh root@esm-api.aadi.my 'bash -s' < remote_deploy.sh