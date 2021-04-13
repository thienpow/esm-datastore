git pull
cargo build --bin esmserver --release

cd deploy/
docker-compose down
rm service/esmserver

cd ..
cp target/release/esmserver deploy/service/esmserver

cd deploy/
docker-compose up --build -d
