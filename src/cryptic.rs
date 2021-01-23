extern crate argonautica;
extern crate failure;
extern crate num_cpus;

//use std::time::Instant;

use crate::errors::ServiceError;

use argonautica::{Hasher, Verifier};
use argonautica::config::{Variant, Version};
use argonautica::input::{Salt, SecretKey};


pub const HASH_LEN: u32 = 32;
pub const SALT_LEN: u32 = 32;
pub const ITERS: u32 = 1;
pub const MEM_SIZE: u32 = 64;
//pub const ITERS: u32 = 1;
//pub const MEM_SIZE: u32 = 64;
pub const VARIANT: Variant = Variant::Argon2id;
pub const VERSION: Version = Version::_0x13;

pub fn hash_password(password: &str) -> Result<String, ServiceError> {


    let salt = Salt::random(SALT_LEN);
    let secret_key = SecretKey::from_base64_encoded("xdB6/HU0dYeE6ckey7787thizv6t9nGEsDxjWtJYZng=").unwrap();
    let threads = 1; //num_cpus::get();

    let mut hasher = Hasher::default();
    hasher
        .configure_hash_len(HASH_LEN)
        .configure_iterations(ITERS)
        .configure_lanes(threads as u32)
        .configure_memory_size(MEM_SIZE)
        .configure_threads(threads as u32)
        .configure_variant(VARIANT)
        .configure_version(VERSION)
        .with_password(password)
        .with_salt(&salt)
        .with_secret_key(secret_key)
        .hash()
        .map_err(|err| {
            dbg!(err);
            ServiceError::InternalServerError
        })
}


pub fn verify(hash: &str, password: &str) -> Result<bool, ServiceError> {

    let secret_key = SecretKey::from_base64_encoded("xdB6/HU0dYeE6ckey7787thizv6t9nGEsDxjWtJYZng=").unwrap();

    Verifier::default()
        .with_hash(hash)
        .with_password(password)
        .with_secret_key(secret_key)
        .verify()
        .map_err(|err| {
            dbg!(err);
            ServiceError::Denied
        })
}

