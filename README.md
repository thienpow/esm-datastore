# Setup DB
For development environment, copy the content of deploy/postgres/schema/schema.sql to pgAdmin and run the sql at schema root.
then, restore the data by doing a restore on /deploy/postgres/initial_data.sql

# Convert Proto files
Run the convert.sh in proto folder to convert all proto file at once.

# Test & Deploy
First git clone the source to linux & Build the esmserver in linux environment
run the following on your local dev machine
```
./deploy_dev.sh

```

# Production Deployment

### make sure the following binary are in place: 
1. wwwloader is in production/micro-services/admin folder.
2. gloader is in production/micro-services/gloader folder.
3. esmserver, checker_current_game, checker_subscriber, checker_leaderboard, checker_unclaim is in production/micro-services/service

### make sure the DB Cert and env variables are correct.
1. out/* in production/micro-services/certs/, if want to regenerate a different CA & Server certs, edit and run the regen.sh. Make sure install certstrap first
2. check the production/micro-services/service/start.sh for the env variables
3. check the production/micro-services/gloader/start.sh for the env variables
4. check the production/micro-services/stripe/start.sh for the env variables

### IMPORTANT: all these binary must be build on Ubuntu 20 if deploy target is Ubuntu 20


### RENEW CERT
#### once and for all *wildcard method
sudo certbot certonly --server https://acme-v02.api.letsencrypt.org/directory --manual --preferred-challenges dns -d *.aadi.my
IMPORTANT: wildcard method do not support Auto Renewal
#### all in one (specify each method)
sudo certbot certonly --cert-name esm-api.aadi.my-0001 --standalone --expand -d esm-gloader.aadi.my -d esm-api.aadi.my -d esm-admin.aadi.my -d esm-stripe.aadi.my

#### check certbot status
sudo systemctl status certbot.timer


# Postgresql Server

## CUSTOM Self Signed CERT for Postgrest Server
look into deploy/certs/regen.sh


pg_basebackup -h dbpg-master -p 25432 -U replicator -D /var/lib/postgresql/data -Fp -R -Xs -P

```sh
curl -Lo minikube https://storage.googleapis.com/minikube/releases/v1.21.0-beta.0/minikube-darwin-amd64
chmod +x minikube
sudo mv minikube /usr/local/bin/
```

#### generate Personal Access Token at DigitalOcean API menu
export DIGITALOCEAN_ACCESS_TOKEN=e1b03c02f77eee583d315f83ee664eeee3a893ba6a58213c48cbc409431a30e6
doctl auth init
doctl k8s cluster create mycluster --region "sgp1" --auto-upgrade --node-pool "name=mypool;auto-scale=true;min-nodes=1;max-nodes=10"
#### after created, cluster credentials to kubeconfig file found in "/Users/thienpow/.kube/config", it's added automatically

#### alternatively, can get the token from digitalocean kubernetes dashboard and add the config manually by using command below.
doctl k8s cluster kubeconfig save fd190b20-6c38-4e84-baee-9ed8939e560a

download the kubeconfig.yaml DigitalOcean Kubernetes Dashboard, go into the the pool, find the Download Cluster Config File, and save it into ~/.kube
#### to check the cluster nodes running
cd ~/.kube && kubectl --kubeconfig="mycluster-kubeconfig.yaml" get nodes

#### learn the basic of Kubernetes on DigitalOcean
https://www.digitalocean.com/community/tutorials/how-to-set-up-an-nginx-ingress-on-digitalocean-kubernetes-using-helm


## build docker
docker build .
docker tag 19435260b7f1 registry.digitalocean.com/esm-dev/esm-admin
docker push registry.digitalocean.com/esm-dev/esm-admin

docker tag f8c4184fa44b registry.digitalocean.com/esm-dev/esm-stripe
docker push registry.digitalocean.com/esm-dev/esm-stripe

docker tag c6de86db75a8 registry.digitalocean.com/esm-dev/esmservice
docker push registry.digitalocean.com/esm-dev/esmservice

docker tag dd89c7822680 registry.digitalocean.com/esm-dev/esm-game-loader
docker push registry.digitalocean.com/esm-dev/esm-game-loader

## create service
kubectl apply -f xxx.yaml


## install ingress

#### must wait for the service ready and got the ExternalIP and then go to DNS to point all the subdomain in this project to that IP.
#### use the line below to check and wait for the ExternalIP is ready.

###### if using nginx-ingress
kubectl --namespace default get services -o wide -w nginx-ingress-ingress-nginx-controller
###### if using envoy
kubectl --namespace default get services -o wide -w frontenvoy

## issue cert via cert-manager on Kubernetes
#### must have issuer first before applying ingress, 
kubectl apply -f esm-production-issuer.yaml 
kubectl apply -f esm-kubernetes-ingress.yaml 
#### if the order is messed up, do kubectl delete -f esm-kubernetes-ingress.yaml and redo again above again.


sudo certbot certonly --server https://acme-v02.api.letsencrypt.org/directory --manual --preferred-challenges dns -d esm-gloader.esportsmini.com -d esm-api.esportsmini.com -d esm-admin.esportsmini.com -d esm-stripe.esportsmini.com

install cert-manager
helm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.3.1 --set installCRDs=true


# add secret to allow docker image registry access
doctl registry kubernetes-manifest | kubectl apply -f -
kubectl patch serviceaccount default -p '{"imagePullSecrets": [{"name": "registry-esm-dev"}]}'

