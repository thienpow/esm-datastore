
use derive_more::Display;
use std::convert::From;
use uuid::parser::ParseError;

#[derive(Debug, Display)]
pub enum ServiceError {

    #[display(fmt = "Expired")]
    Expired,

    #[display(fmt = "Denied")]
    Denied,

    #[display(fmt = "Internal Server Error")]
    InternalServerError,

    #[display(fmt = "BadRequest: {}", _0)]
    BadRequest(String),

}


// we can return early in our handlers if UUID provided by the user is not valid
// and provide a custom message
impl From<ParseError> for ServiceError {
    fn from(_: ParseError) -> ServiceError {
        ServiceError::BadRequest("Invalid UUID".into())
    }
}
