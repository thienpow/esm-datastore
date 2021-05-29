cd ~/esm-datastore/
ls -a
echo "building esmserver"

CARGO_PATH="/root/.cargo/bin"
$CARGO_PATH/cargo build --bin esmserver --release

uptime