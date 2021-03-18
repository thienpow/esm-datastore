git pull
cd deploy/
docker-compose down
rm service/esmserver
cd ..
cargo build --bin esmserver --release
cp target/release/esmserver deploy/service/esmserver
cd deploy/
docker-compose up --build -d
