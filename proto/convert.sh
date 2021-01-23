rm -rf js

mkdir js

protoc -I=. esmapi.proto --js_out=import_style=commonjs:js/. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:js/.
protoc -I=. adminapi.proto --js_out=import_style=commonjs:js/. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:js/.

cp -r js/esmapi_grpc_web_pb.js ../../../FrontEnd/esportsmini/src/services/esm/
cp -r js/esmapi_pb.js ../../../FrontEnd/esportsmini/src/services/esm/
cp -r js/adminapi_grpc_web_pb.js ../../../FrontEnd/esm-admin/src/js/
cp -r js/adminapi_pb.js ../../../FrontEnd/esm-admin/src/js/
