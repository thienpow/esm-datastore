# Convert Proto files
Run the convert.sh in proto folder to convert all proto file at once.


# Test & Deploy
Prepare a Ubuntu 20.04 VM, (docker is slow in compile), edit the build_prod file and run ./build_prod
must be Ubuntu 20.04 because our docker images on Kubernetes all configured as Ubuntu 20.04.
So, the binary file must be build on Ubuntu 20.04, else we will risk cannot run the binary in the docker.

### IMPORTANT: all these binary must be build on Ubuntu 20 if deploy target is Ubuntu 20




# Build inside Rust Docker
```sh
docker-compose run dev
```
* run dev would enable the container running in the background never exit, and you can type exit and go in again via docker comman.
* to check the container id, run 
```sh
docker container ls
```
* then go back into the container via
```sh
docker exec -it <ContainerID> bash
```
when you are done with programming, you can stop the container via Docker Desktop to gain back the cpu/memory resources.
the next time you want to run the container again, don't do the docker-compose run dev. Just run it via Docker Desktop.
This will allow you to get back to the cache from your last build. if you do docker-compose run dev again, it will create a new container, 
your cargo build again will waste time and previous cache is still in previous container. 
BTW you can delete the accidentally created multiple container via Docker Desktop also.




### make sure the following binary are in place: (all the release binary files will be inside build folder after you run the build_prod)
1. wwwloader is in kubernetes/micro/admin folder.
2. gloader is in kubernetes/micro/gloader folder.
3. (  esmserver, checker_current_game, checker_subscriber, checker_leaderboard, checker_unclaim  ) are in kubernetes/micro/service

