git pull
cargo build --bin esmserver --release
cargo build --bin checker --release
cd deploy/
docker-compose down
rm service/esmserver
rm service/checker

cd ..
cp target/release/esmserver deploy/service/esmserver
cp target/release/checker deploy/service/checker

cd deploy/
docker-compose up --build -d
