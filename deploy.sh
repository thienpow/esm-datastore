cd deploy/
docker-compose stop
rm service/esmserver
cd ..
cargo build --bin esmserver --release
cp target/release/esmserver deploy/service/esmserver
cd deploy/
docker-compose up --build -d
