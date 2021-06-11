# Convert Proto files
Run the convert.sh in proto folder to convert all proto file at once.

# Test & Deploy
Prepare a Ubuntu 20.04 VM, (docker is slow in compile), edit the build_prod file and run ./build_prod
must be Ubuntu 20.04 because our docker images on Kubernetes all configured as Ubuntu 20.04.
So, the binary file must be build on Ubuntu 20.04, else we will risk cannot run the binary in the docker.

### IMPORTANT: all these binary must be build on Ubuntu 20 if deploy target is Ubuntu 20


# Build inside Rust Docker
docker-compose run --rm dev


### make sure the following binary are in place: (all the release binary files will be inside build folder after you run the build_prod)
1. wwwloader is in production/micro-services/admin folder.
2. gloader is in production/micro-services/gloader folder.
3. esmserver, checker_current_game, checker_subscriber, checker_leaderboard, checker_unclaim is in production/micro-services/service


# Postgresql Server

## CUSTOM Self Signed CERT for Postgrest Server
look into production/database/certs/regen.sh