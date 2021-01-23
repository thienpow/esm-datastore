fn main() {
  
  tonic_build::configure()
      //.out_dir("proto/rust")
      .compile(&[
        "proto/esmapi.proto",
        "proto/adminapi.proto"
      ], &["proto"]).unwrap();
      
}
