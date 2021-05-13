
pub mod adminapi_proto {
  tonic::include_proto!("adminapi.esm");
}
use core::time::Duration;
use std::time::{SystemTime, UNIX_EPOCH};

use tonic::{Request, Response, Status};
use tokio_postgres;
use bb8::{Pool};
use bb8_postgres::PostgresConnectionManager;


use crate::jwk::{
  JwkAuth,
};

use esm_db::{models::*};

use crate::jwt;
use crate::cryptic;
use crate::svc;

use adminapi_proto::{

  // Common 
  ListStatusTypeRequest,  ListStatusTypeResponse,
  ListUserStatusTypeRequest,  ListUserStatusTypeResponse,
  ListWinnerStatusTypeRequest,  ListWinnerStatusTypeResponse,
  StatusTypeDetail, UserStatusTypeDetail, WinnerStatusTypeDetail,
  ListWinTypeRequest, ListWinTypeResponse,
  WinTypeDetail,
  ListTimezonesRequest,  ListTimezonesResponse,
  TimezonesDetail,
  // User
  SignInRequest, SignInResponse,
  AddUserRequest, AddUserResponse,
  UpdateEmailConfirmedRequest, UpdateEmailConfirmedResponse,
  UpdateSocialLinkFbRequest, UpdateSocialLinkFbResponse,
  UpdateSocialLinkGoogleRequest, UpdateSocialLinkGoogleResponse,
  UpdateUserStatusGemBalanceRequest, UpdateUserStatusGemBalanceResponse,
  UpdateAddressRequest, UpdateAddressResponse,
  UpdateUserSettingsRequest, UpdateUserSettingsResponse,
  ChangePasswordRequest, ChangePasswordResponse,
  ListUserRequest, ListUserResponse, 
  GetUserCountRequest, GetUserCountResponse,
  GetUserRequest, GetUserResponse,
  UserDetail, //UserCount,

  //Config
  UpdateConfigRequest, UpdateConfigResponse,
  GetConfigRequest, GetConfigResponse,
  ConfigDetail,

  AddSpinnerRuleRequest, AddSpinnerRuleResponse,
  UpdateSpinnerRuleRequest, UpdateSpinnerRuleResponse,
  DeleteSpinnerRuleRequest, DeleteSpinnerRuleResponse,
  ListSpinnerRuleRequest, ListSpinnerRuleResponse,
  SpinnerRuleDetail,
  // Game
  AddGameRequest, AddGameResponse,
  UpdateGameRequest, UpdateGameResponse,
  AddGameLeaderRuleRequest, AddGameLeaderRuleResponse,
  UpdateGameLeaderRuleRequest, UpdateGameLeaderRuleResponse,
  DeleteGameLeaderRuleRequest, DeleteGameLeaderRuleResponse,
  ListGameLeaderRuleRequest, ListGameLeaderRuleResponse,
  GameLeaderRuleDetail,
  GetGameCodeRequest, GetGameCodeResponse,
  DeleteGameRequest, DeleteGameResponse,
  ListGameRequest, ListGameResponse,
  GetGameCountRequest, GetGameCountResponse,
  GameDetail, //GameCount,

  //  Invites
  AddInviteRequest, AddInviteResponse,
  ListInvitedByRequest, ListInvitedByResponse,
  GetInvitedByCountRequest, GetInvitedByCountResponse,
  DeleteInviteRequest, DeleteInviteResponse,
  InvitedByDetail,

  // Item
  AddItemRequest, AddItemResponse,
  UpdateItemRequest, UpdateItemResponse,
  DeleteItemRequest, DeleteItemResponse,
  ListItemRequest, ListItemResponse, 
  GetItemCountRequest, GetItemCountResponse,
  ItemDetail, //ItemCount,
  ListItemTypeRequest, ListItemTypeResponse,
  ItemTypeDetail,

  // Prize
  AddPrizeRequest, AddPrizeResponse,
  UpdatePrizeRequest, UpdatePrizeResponse,
  DeletePrizeRequest, DeletePrizeResponse,
  ListPrizeRequest, ListPrizeResponse, 
  GetPrizeCountRequest, GetPrizeCountResponse,
  PrizeDetail, //PrizeCount,
  ListPrizeTypeRequest, ListPrizeTypeResponse,
  PrizeTypeDetail,
  AddPrizeTourRequest, AddPrizeTourResponse,
  DeletePrizeTourRequest, DeletePrizeTourResponse,
  ListPrizeTourRequest, ListPrizeTourResponse,
  PrizeTourDetail,

  // Rank
  AddRankRequest, AddRankResponse,
  UpdateRankRequest, UpdateRankResponse,
  DeleteRankRequest, DeleteRankResponse,
  ListRankRequest, ListRankResponse,
  RankDetail,

  // Shop
  GetBuyCountRequest, GetBuyCountResponse,
  ListBuyRequest, ListBuyResponse,
  BuyDetail,

  // Subscription
  AddSubscriptionRequest, AddSubscriptionResponse,
  UpdateSubscriptionRequest, UpdateSubscriptionResponse,
  DeleteSubscriptionRequest, DeleteSubscriptionResponse,
  ListSubscriptionRequest, ListSubscriptionResponse, 
  GetSubscriptionCountRequest, GetSubscriptionCountResponse,
  SubscriptionDetail, //SubscriptionCount,
  ListSubscriptionTypeRequest, ListSubscriptionTypeResponse,
  SubscriptionTypeDetail,

  // Tournament
  AddTournamentRequest, AddTournamentResponse,
  AddTournamentSetRequest, AddTournamentSetResponse,
  AddTournamentSetGameRuleRequest, AddTournamentSetGameRuleResponse,
  UpdateTournamentRequest, UpdateTournamentResponse,
  UpdateTournamentSetRequest, UpdateTournamentSetResponse,
  UpdateTournamentSetGameRuleRequest, UpdateTournamentSetGameRuleResponse,
  DeleteTournamentRequest, DeleteTournamentResponse,
  DeleteTournamentSetRequest, DeleteTournamentSetResponse,
  DeleteTournamentSetGameRuleRequest, DeleteTournamentSetGameRuleResponse,
  ListTournamentRequest, ListTournamentResponse, 
  ListTournamentSetRequest, ListTournamentSetResponse, 
  ListTournamentSetGameRuleRequest, ListTournamentSetGameRuleResponse, 
  GetTournamentCountRequest, GetTournamentCountResponse,
  GetTournamentSetCountRequest, GetTournamentSetCountResponse,
  TournamentDetail, TournamentSetDetail, TournamentSetGameRuleDetail,
  AddTourSetRequest, AddTourSetResponse,
  DeleteTourSetRequest, DeleteTourSetResponse,
  ListTourSetRequest, ListTourSetResponse,
  TourSetDetail,
  // Winner
  UpdateWinnerRequest, UpdateWinnerResponse,
  ListWinnerRequest, ListWinnerResponse, 
  GetWinnerCountRequest, GetWinnerCountResponse,
  WinnerDetail, //WinnerCount,


  // GPlayer
  ListLogGRequest, ListLogGResponse,
  LogGDetail,

  UserCount, GameCount, ItemCount, PrizeCount, BuyCount, SubscriptionCount, TournamentCount, TournamentSetCount, WinnerCount
};



pub struct AdminApiServer {
  pub jwk: JwkAuth,
  pub pool: Pool<PostgresConnectionManager<tokio_postgres::NoTls>>,
}


#[tonic::async_trait]
impl adminapi_proto::admin_api_server::AdminApi for AdminApiServer {
















  /*************************************** Common ***************************************
  *
  *
  */

  async fn list_status_type(&self, request: Request<ListStatusTypeRequest>, ) -> Result<Response<ListStatusTypeResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let status_types = match config::Config::list_status_type(&self.pool.clone()).await {
      Ok(status_types) => status_types,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<StatusTypeDetail> = Vec::new();
    
    for s in status_types {
      
      let li = StatusTypeDetail {
        id: s.id,
        title: s.title
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListStatusTypeResponse {
      result: result,
    }))

  }

  async fn list_user_status_type(&self, request: Request<ListUserStatusTypeRequest>, ) -> Result<Response<ListUserStatusTypeResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let status_types = match config::Config::list_user_status_type(&self.pool.clone()).await {
      Ok(status_types) => status_types,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<UserStatusTypeDetail> = Vec::new();
    
    for s in status_types {
      
      let li = UserStatusTypeDetail {
        id: s.id,
        title: s.title
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListUserStatusTypeResponse {
      result: result,
    }))

  }

  async fn list_winner_status_type(&self, request: Request<ListWinnerStatusTypeRequest>, ) -> Result<Response<ListWinnerStatusTypeResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let status_types = match config::Config::list_winner_status_type(&self.pool.clone()).await {
      Ok(status_types) => status_types,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<WinnerStatusTypeDetail> = Vec::new();
    
    for s in status_types {
      
      let li = WinnerStatusTypeDetail {
        id: s.id,
        title: s.title
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListWinnerStatusTypeResponse {
      result: result,
    }))

  }

  async fn list_win_type(&self, request: Request<ListWinTypeRequest>, ) -> Result<Response<ListWinTypeResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let win_types = match spinner::SpinnerRule::list_win_type(&self.pool.clone()).await {
      Ok(win_types) => win_types,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<WinTypeDetail> = Vec::new();
    
    for s in win_types {
      
      let li = WinTypeDetail {
        id: s.id,
        title: s.title
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListWinTypeResponse {
      result: result,
    }))

  }

  async fn list_timezones(&self, request: Request<ListTimezonesRequest>, ) -> Result<Response<ListTimezonesResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let timezones = match config::Config::list_timezones(&self.pool.clone()).await {
      Ok(timezones) => timezones,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<TimezonesDetail> = Vec::new();
    
    for s in timezones {
      
      let li = TimezonesDetail {
        id: s.id,
        offset: s.offset,
        stext: s.stext,
        ltext: s.ltext
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListTimezonesResponse {
      result: result,
    }))

  }


  /*************************************** User ***************************************
  *
  *
  */

  async fn sign_in(&self, request: Request<SignInRequest>, ) -> Result<Response<SignInResponse>, Status> {
    
    let req = request.into_inner();
    let username = req.username.clone();
    //println!("trying sign_in");
    match user::User::sign_in(req.username.into(), &self.pool.clone()).await {
      Ok(user) => {

        //println!("sign_in ok got user");

        if cryptic::verify(&user.passhash, &req.password).unwrap() {
          let jwt_token = jwt::issue_token(username.into(), user.role_id).unwrap();

          let created_on = user.created_on.duration_since(UNIX_EPOCH).unwrap().as_secs();
          let last_login = user.last_login.duration_since(UNIX_EPOCH).unwrap().as_secs();

          return Ok(Response::new(SignInResponse {
            result: Some(UserDetail {
              id: user.id,
              username: user.username,
              email: user.email,
              phone: user.phone,
              firstname: user.firstname,
              lastname: user.lastname,
              created_on: created_on as i64,
              last_login: last_login as i64,
              role_id: user.role_id,
              status: user.status,
              gem_balance: user.gem_balance,
              social_link_fb: user.social_link_fb,
              social_link_google: user.social_link_google,
              avatar_url: user.avatar_url,
              exp: user.exp,
              //Address
              full_name: user.full_name,
              address: user.address,
              city: user.city,
              state: user.state,
              zip_code: user.zip_code,
              country: user.country,
              country_code: user.country_code,
              //Settings
              is_notify_allowed: user.is_notify_allowed,
              is_notify_new_reward: user.is_notify_new_reward,
              is_notify_new_tournament: user.is_notify_new_tournament,
              is_notify_tour_ending: user.is_notify_tour_ending,
              nick_name: user.nick_name,
              jwt_token: jwt_token
            }),
          }))
        } else {
          //issue error
          Err(Status::permission_denied("Invalid Password!"))
        }
      },
      Err(e) => {
        println!("sign_in not ok {:?}", e);
        return Err(Status::internal(format!("{:?}", e)))
      }
    }
    

  }
    
  async fn add_user(&self, request: Request<AddUserRequest>, ) -> Result<Response<AddUserResponse>, Status> {
    let _ = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let now = SystemTime::now();

    let req = request.into_inner();
    
    let user = user::User {
      id: 0,
      username: req.username.into(),
      passhash: cryptic::hash_password(&req.password).unwrap(),
      email: req.email.into(),
      phone: req.phone.into(),
      firstname: req.firstname.into(),
      lastname: req.lastname.into(),
      created_on: now,
      last_login: now,
      role_id: 200,
      status: 1,
      gem_balance: 0,
      social_link_fb: req.social_link_fb.into(),
      social_link_google: req.social_link_google.into(),
      avatar_url: req.avatar_url.into(),
      exp: 0,

      //address
      full_name: "".to_string(),
      address: "".to_string(),
      city: "".to_string(),
      state: "".to_string(),
      zip_code: "".to_string(),
      country: "".to_string(),
      country_code: 0,
      //settings
      is_notify_allowed:  true,
      is_notify_new_reward:  true,
      is_notify_new_tournament:  true,
      is_notify_tour_ending:  true,
      nick_name: "".to_string(),
      msg_token: "".to_string(),
    };
    
    let result = match user::User::add(user, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(AddUserResponse {
      result: result,
    }))

  }


  async fn update_email_confirmed(&self, request: Request<UpdateEmailConfirmedRequest>, ) -> Result<Response<UpdateEmailConfirmedResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    
    let result = match user::User::update_email_confirmed(req.id.into(), req.status.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(UpdateEmailConfirmedResponse {
      result: result,
    }))

  }

  async fn update_social_link_fb(&self, request: Request<UpdateSocialLinkFbRequest>, ) -> Result<Response<UpdateSocialLinkFbResponse>, Status> {
    let _ = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    
    let result = match user::User::update_social_link_fb(req.id.into(), req.fb_id.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(UpdateSocialLinkFbResponse {
      result: result,
    }))

  }

  async fn update_social_link_google(&self, request: Request<UpdateSocialLinkGoogleRequest>, ) -> Result<Response<UpdateSocialLinkGoogleResponse>, Status> {
    let _ = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    
    let result = match user::User::update_social_link_google(req.id.into(), req.google_id.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(UpdateSocialLinkGoogleResponse {
      result: result,
    }))

  }

  async fn update_user_status_gem_balance(&self, request: Request<UpdateUserStatusGemBalanceRequest>, ) -> Result<Response<UpdateUserStatusGemBalanceResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    
    let result = match user::User::update_status_gem_balance(req.id.into(), req.status.into(), req.gem_balance.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(UpdateUserStatusGemBalanceResponse {
      result: result,
    }))

  }

  async fn update_address(&self, request: Request<UpdateAddressRequest>, ) -> Result<Response<UpdateAddressResponse>, Status> {
    let _ = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    let address = user::Address {
      id: req.id.into(),
      full_name: req.full_name.into(),
      address: req.address.into(),
      city: req.city.into(),
      state: req.state.into(),
      zip_code: req.zip_code.into(),
      country: req.country.into(),
      country_code: req.country_code.into(),
    };
    
    let result = match user::User::update_address(address, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(UpdateAddressResponse {
      result: result,
    }))

  }

  async fn update_user_settings(&self, request: Request<UpdateUserSettingsRequest>, ) -> Result<Response<UpdateUserSettingsResponse>, Status> {
    let _ = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    let settings = user::Settings {
      id: req.id.into(),
      is_notify_allowed: req.is_notify_allowed.into(),
      is_notify_new_reward: req.is_notify_new_reward.into(),
      is_notify_new_tournament: req.is_notify_new_tournament.into(),
      is_notify_tour_ending: req.is_notify_tour_ending.into(),
      nick_name: req.nick_name.into(),
      avatar_url: req.avatar_url.into()
    };
    
    let result = match user::User::update_settings(settings, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(UpdateUserSettingsResponse {
      result: result,
    }))

  }
  async fn change_password(&self, request: Request<ChangePasswordRequest>, ) -> Result<Response<ChangePasswordResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    
    let username = req.username.clone();

    let result = match user::User::sign_in(req.username.into(), &self.pool.clone()).await {
      Ok(sign_in_user) => {
        if cryptic::verify(&sign_in_user.passhash, &req.old_password).unwrap() {
                
          match user::User::change_password(username.into(), cryptic::hash_password(&req.new_password).unwrap(), &self.pool.clone()).await {
            Ok(result) => result.to_string(),
            Err(error) => error.to_string(),
          }
          
        } else {
          "Invalid Password.".to_string()
        }
      },
      Err(error) => error.to_string(),
    };

    Ok(Response::new(ChangePasswordResponse {
      result: result,
    }))

  }


  async fn list_user(&self, request: Request<ListUserRequest>, ) -> Result<Response<ListUserResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    
    let users = match user::User::list(req.limit.into(), req.offset.into(), req.search_username.into(), &self.pool.clone()).await {
      Ok(users) => users,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<UserDetail> = Vec::new();
    
    for user in users {
      
      let seconds_created_on = user.created_on.duration_since(UNIX_EPOCH).unwrap().as_secs();
      let seconds_last_login = user.last_login.duration_since(UNIX_EPOCH).unwrap().as_secs();
        
      let li = UserDetail {
        id: user.id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        firstname: user.firstname,
        lastname: user.lastname,
        created_on: seconds_created_on as i64,
        last_login: seconds_last_login as i64,
        role_id: user.role_id,
        status: user.status,
        gem_balance: user.gem_balance,
        social_link_fb: user.social_link_fb,
        social_link_google: user.social_link_google,
        avatar_url: user.avatar_url,
        exp: user.exp,
        //address
        full_name: user.full_name,
        address: user.address,
        city: user.city,
        state: user.state,
        zip_code: user.zip_code,
        country: user.country,
        country_code: user.country_code,
        //settings
        is_notify_allowed:  user.is_notify_allowed,
        is_notify_new_reward:  user.is_notify_new_reward,
        is_notify_new_tournament:  user.is_notify_new_tournament,
        is_notify_tour_ending:  user.is_notify_tour_ending,
        nick_name: user.nick_name,
        jwt_token: "".to_string()
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListUserResponse {
      result: result,
    }))

  }


  async fn get_user_count(&self, request: Request<GetUserCountRequest>, ) -> Result<Response<GetUserCountResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let count = match user::User::count(&self.pool.clone()).await {
      Ok(result) => result,
      Err(error) => panic!("Error: {}.", error),
    };
    
    Ok(Response::new(GetUserCountResponse {
      result: Some(
        UserCount{
          active: count.active,
          blocked: count.blocked,
          pending_delete: count.pending_delete,
          archived: count.archived,
        }
      ),
    }))
  }

  async fn get_user(&self, request: Request<GetUserRequest>, ) -> Result<Response<GetUserResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let req = request.into_inner();
    
    let user = match user::User::get(req.id.into(), &self.pool.clone()).await {
      Ok(user) => user,
      Err(error) => panic!("Error: {}.", error),
    };


    let seconds_created_on = user.created_on.duration_since(UNIX_EPOCH).unwrap().as_secs();
    let seconds_last_login = user.last_login.duration_since(UNIX_EPOCH).unwrap().as_secs();
      
    Ok(Response::new(GetUserResponse {
      result: Some(UserDetail {
        id: user.id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        firstname: user.firstname,
        lastname: user.lastname,
        created_on: seconds_created_on as i64,
        last_login: seconds_last_login as i64,
        role_id: user.role_id,
        status: user.status,
        gem_balance: user.gem_balance,
        social_link_fb: user.social_link_fb,
        social_link_google: user.social_link_google,
        avatar_url: user.avatar_url,
        exp: user.exp,
        //Address
        full_name: user.full_name,
        address: user.address,
        city: user.city,
        state: user.state,
        zip_code: user.zip_code,
        country: user.country,
        country_code: user.country_code,
        //Settings
        is_notify_allowed: user.is_notify_allowed,
        is_notify_new_reward: user.is_notify_new_reward,
        is_notify_new_tournament: user.is_notify_new_tournament,
        is_notify_tour_ending: user.is_notify_tour_ending,
        nick_name: user.nick_name,
        jwt_token: "".to_string()
      }),
    }))
    
  }


















  /*************************************** Config ***************************************
  *
  *
  */
  async fn update_config(&self, request: Request<UpdateConfigRequest>, ) -> Result<Response<UpdateConfigResponse>, Status> {

    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    let config = config::Config {
      invites: req.invites.into(),
      games_per_ad: req.games_per_ad.into(),
      days_to_claim: req.days_to_claim.into(),
      freespin_per_day: req.freespin_per_day.into(),
      gems_per_spins_1: req.gems_per_spins_1.into(),
      ads_per_spins_1: req.ads_per_spins_1.into(),
      gems_per_spins_2: req.gems_per_spins_2.into(),
      ads_per_spins_2: req.ads_per_spins_2.into(),
    };
    
    let result = match config::Config::update(config, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(UpdateConfigResponse {
      result: result,
    }))

  }


  async fn get_config(&self, request: Request<GetConfigRequest>, ) -> Result<Response<GetConfigResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    match config::Config::get(&self.pool.clone()).await {
      Ok(result) => {

        Ok(Response::new(GetConfigResponse {
          result: Some(ConfigDetail {
            invites: result.invites,
            games_per_ad: result.games_per_ad,
            days_to_claim: result.days_to_claim,
            freespin_per_day: result.freespin_per_day,
            gems_per_spins_1: result.gems_per_spins_1,
            ads_per_spins_1: result.ads_per_spins_1,
            gems_per_spins_2: result.gems_per_spins_2,
            ads_per_spins_2: result.ads_per_spins_2,
          })
        }))
      },
      Err(e) => Err(Status::internal(format!("Error: config.get failed! {}", e.to_string())))
    }
  }





/**  Spinner Rule */


async fn add_spinner_rule(&self, request: Request<AddSpinnerRuleRequest>, ) -> Result<Response<AddSpinnerRuleResponse>, Status> {
  let _ = svc::check_is_admin(&request.metadata()).await?;

  let req = request.into_inner();
  let sr = spinner::SpinnerRule {
    id: 0,
    probability: req.probability.into(),
    win: req.win.into(),
    type_id: req.type_id.into()
  };
  
  let result = match spinner::SpinnerRule::add(sr, &self.pool.clone()).await {
    Ok(result) => result.to_string(),
    Err(error) => error.to_string(),
  };
  
  Ok(Response::new(AddSpinnerRuleResponse {
    result: result,
  }))

}

async fn update_spinner_rule(&self, request: Request<UpdateSpinnerRuleRequest>, ) -> Result<Response<UpdateSpinnerRuleResponse>, Status> {
  let _ = svc::check_is_admin(&request.metadata()).await?;

  let req = request.into_inner();
  let sr = spinner::SpinnerRule {
    id: req.id.into(),
    probability: req.probability.into(),
    win: req.win.into(),
    type_id: req.type_id.into()
  };
  
  let result = match spinner::SpinnerRule::update(sr, &self.pool.clone()).await {
    Ok(result) => result.to_string(),
    Err(error) => error.to_string(),
  };
  
  Ok(Response::new(UpdateSpinnerRuleResponse {
    result: result,
  }))

}

async fn delete_spinner_rule(&self, request: Request<DeleteSpinnerRuleRequest>, ) -> Result<Response<DeleteSpinnerRuleResponse>, Status> {
  let _ = svc::check_is_admin(&request.metadata()).await?;
  
  let req = request.into_inner();
  
  let result = match spinner::SpinnerRule::delete(req.id.into(), &self.pool.clone()).await {
    Ok(result) => result.to_string(),
    Err(error) => error.to_string(),
  };
  
  Ok(Response::new(DeleteSpinnerRuleResponse {
    result: result,
  }))
}

async fn list_spinner_rule(&self, request: Request<ListSpinnerRuleRequest>, ) -> Result<Response<ListSpinnerRuleResponse>, Status> {
  let _ = svc::check_is_admin(&request.metadata()).await?;

  //let req = request.into_inner();
  
  let rules = match spinner::SpinnerRule::list(&self.pool.clone()).await {
    Ok(rules) => rules,
    Err(error) => panic!("Error: {}.", error),
  };
  
  let mut result: Vec<SpinnerRuleDetail> = Vec::new();
  
  for rule in rules {
    
    let li = SpinnerRuleDetail {
      id: rule.id,
      probability: rule.probability,
      win: rule.win,
      type_id: rule.type_id
    };
    
    result.push(li);
  };
  
  Ok(Response::new(ListSpinnerRuleResponse {
    result: result,
  }))

}












  /*************************************** game ***************************************
  *
  *
  */
  async fn add_game(&self, request: Request<AddGameRequest>, ) -> Result<Response<AddGameResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    let game = game::Game {
      id: 0,
      title: req.title.into(),
      subtitle: req.subtitle.into(),
      img_url: req.img_url.into(),
      content: req.content.into(),
      type_id: req.type_id.into(),
      game_code: req.game_code.into(),
      engine_id: req.engine_id.into(),
      version: req.version.into(),
      status: req.status.into(),
      score_rule: req.score_rule.into(),
      watch_ad_get_tickets: req.watch_ad_get_tickets.into(),
      watch_ad_get_exp: req.watch_ad_get_exp.into(),
      use_gem_get_tickets: req.use_gem_get_tickets.into(),
      use_gem_get_exp: req.use_gem_get_exp.into(),
      use_how_many_gems: req.use_how_many_gems.into()
    };
    
    let result = match game::Game::add(game, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(AddGameResponse {
      result: result,
    }))

  }


  async fn update_game(&self, request: Request<UpdateGameRequest>, ) -> Result<Response<UpdateGameResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    let game = game::Game {
      id: req.id.into(),
      title: req.title.into(),
      subtitle: req.subtitle.into(),
      img_url: req.img_url.into(),
      content: req.content.into(),
      type_id: req.type_id.into(),
      game_code: req.game_code.into(),
      engine_id: req.engine_id.into(),
      version: req.version.into(),
      status: req.status.into(),
      score_rule: req.score_rule.into(),
      watch_ad_get_tickets: req.watch_ad_get_tickets.into(),
      watch_ad_get_exp: req.watch_ad_get_exp.into(),
      use_gem_get_tickets: req.use_gem_get_tickets.into(),
      use_gem_get_exp: req.use_gem_get_exp.into(),
      use_how_many_gems: req.use_how_many_gems.into()
    };
    
    let result = match game::Game::update(game, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => {
        //println!("update_game not ok {:?}", error);
        return Err(Status::internal(format!("{:?}", error)))
      }
    };
    
    Ok(Response::new(UpdateGameResponse {
      result: result,
    }))

  }


  async fn add_game_leader_rule(&self, request: Request<AddGameLeaderRuleRequest>, ) -> Result<Response<AddGameLeaderRuleResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    let score_rule = game::GameLeaderRule {
      game_id: req.game_id.into(),
      rank_from: req.rank_from.into(),
      rank_to: req.rank_to.into(),
      tickets: req.tickets.into(),
      exp: req.exp.into()
    };
    
    let result = match game::Game::add_leader_rule(score_rule, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(AddGameLeaderRuleResponse {
      result: result,
    }))

  }

  async fn update_game_leader_rule(&self, request: Request<UpdateGameLeaderRuleRequest>, ) -> Result<Response<UpdateGameLeaderRuleResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    let score_rule = game::GameLeaderRule {
      game_id: req.game_id.into(),
      rank_from: req.rank_from.into(),
      rank_to: req.rank_to.into(),
      tickets: req.tickets.into(),
      exp: req.exp.into()
    };
    
    let result = match game::Game::update_leader_rule(score_rule, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(UpdateGameLeaderRuleResponse {
      result: result,
    }))

  }

  async fn delete_game_leader_rule(&self, request: Request<DeleteGameLeaderRuleRequest>, ) -> Result<Response<DeleteGameLeaderRuleResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let req = request.into_inner();
    
    let result = match game::Game::delete_leader_rule(req.game_id.into(), req.rank_from.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(DeleteGameLeaderRuleResponse {
      result: result,
    }))
  }

  async fn list_game_leader_rule(&self, request: Request<ListGameLeaderRuleRequest>, ) -> Result<Response<ListGameLeaderRuleResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    
    let rules = match game::Game::list_leader_rule(req.game_id.into(), &self.pool.clone()).await {
      Ok(rules) => rules,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<GameLeaderRuleDetail> = Vec::new();
    
    for rule in rules {
      
      let li = GameLeaderRuleDetail {
        game_id: rule.game_id,
        rank_from: rule.rank_from,
        rank_to: rule.rank_to,
        tickets: rule.tickets,
        exp: rule.exp
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListGameLeaderRuleResponse {
      result: result,
    }))

  }


  async fn get_game_code(&self, request: Request<GetGameCodeRequest>, ) -> Result<Response<GetGameCodeResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    
    let result = match game::Game::get_game_code(req.id.into(), &self.pool.clone()).await {
      Ok(result) => result,
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(GetGameCodeResponse {
      result: result,
    }))
  }


  async fn delete_game(&self, request: Request<DeleteGameRequest>, ) -> Result<Response<DeleteGameResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let req = request.into_inner();
    
    let result = match game::Game::delete(req.id.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(DeleteGameResponse {
      result: result,
    }))
  }

  
  async fn list_game(&self, request: Request<ListGameRequest>, ) -> Result<Response<ListGameResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    
    let games = match game::Game::list(req.limit.into(), req.offset.into(), req.search_title.into(), req.status.into(), &self.pool.clone()).await {
      Ok(games) => games,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<GameDetail> = Vec::new();
    
    for game in games {
      
      let li = GameDetail {
        id: game.id,
        title: game.title,
        subtitle: game.subtitle,
        img_url: game.img_url,
        content: game.content,
        type_id: game.type_id,
        engine_id: game.engine_id,
        version: game.version,
        status: game.status,
        score_rule: game.score_rule,
        watch_ad_get_tickets: game.watch_ad_get_tickets,
        watch_ad_get_exp: game.watch_ad_get_exp,
        use_gem_get_tickets: game.use_gem_get_tickets,
        use_gem_get_exp: game.use_gem_get_exp,
        use_how_many_gems: game.use_how_many_gems
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListGameResponse {
      result: result,
    }))

  }


  async fn get_game_count(&self, request: Request<GetGameCountRequest>, ) -> Result<Response<GetGameCountResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let count = match game::Game::count(&self.pool.clone()).await {
      Ok(result) => result,
      Err(error) => panic!("Error: {}.", error),
    };
    
    Ok(Response::new(GetGameCountResponse {
      result: Some(GameCount{
        draft: count.draft,
        published: count.published,
        archived: count.archived
      }),
    }))
  }


















  /*************************************** Invites ***************************************
  *
  *
  */

  async fn add_invite(&self, request: Request<AddInviteRequest>, ) -> Result<Response<AddInviteResponse>, Status> {
    
    let now = SystemTime::now();

    let req = request.into_inner();
    let invites = invites::Invites {
      id: 0,
      user_id: req.user_id.into(),
      invited_by: req.invited_by.into(),
      invited_date: now,
    };
    
    let result = match invites::Invites::add(invites, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(AddInviteResponse {
      result: result,
    }))

  }


  async fn list_invited_by(&self, request: Request<ListInvitedByRequest>, ) -> Result<Response<ListInvitedByResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    
    let invites = match invites::Invites::list_invited_by(req.invited_by.into(), &self.pool.clone()).await {
      Ok(invites) => invites,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<InvitedByDetail> = Vec::new();
    
    for invite in invites {
      
      let invited_date = invite.invited_date.duration_since(UNIX_EPOCH).unwrap().as_secs();
        
      let li = InvitedByDetail {
        id: invite.id,
        user_id: invite.user_id,
        invited_by: invite.invited_by,
        invited_date: invited_date as i64
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListInvitedByResponse {
      result: result,
    }))

  }


  async fn get_invited_by_count(&self, request: Request<GetInvitedByCountRequest>, ) -> Result<Response<GetInvitedByCountResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let req = request.into_inner();
    
    let result = match invites::Invites::get_invited_by_count(req.invited_by.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(GetInvitedByCountResponse {
      result: result,
    }))
  }


  async fn delete_invite(&self, request: Request<DeleteInviteRequest>, ) -> Result<Response<DeleteInviteResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let req = request.into_inner();
    
    let result = match invites::Invites::delete(req.id.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(DeleteInviteResponse {
      result: result,
    }))
  }



















  /*************************************** Item ***************************************
  *
  *
  */
  async fn add_item(&self, request: Request<AddItemRequest>, ) -> Result<Response<AddItemResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    let item = item::Item {
      id: 0,
      title: req.title.into(),
      subtitle: req.subtitle.into(),
      img_url: req.img_url.into(),
      content: req.content.into(),
      type_id: req.type_id.into(),
      price: req.price.into(),
      quantity: req.quantity.into(),
      status: req.status.into()
    };
    
    let result = match item::Item::add(item, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(AddItemResponse {
      result: result,
    }))

  }


  async fn update_item(&self, request: Request<UpdateItemRequest>, ) -> Result<Response<UpdateItemResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    let item = item::Item {
      id: req.id.into(),
      title: req.title.into(),
      subtitle: req.subtitle.into(),
      img_url: req.img_url.into(),
      content: req.content.into(),
      type_id: req.type_id.into(),
      price: req.price.into(),
      quantity: req.quantity.into(),
      status: req.status.into()
    };
    
    let result = match item::Item::update(item, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(UpdateItemResponse {
      result: result,
    }))

  }


  async fn delete_item(&self, request: Request<DeleteItemRequest>, ) -> Result<Response<DeleteItemResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    
    let result = match item::Item::delete(req.id.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(DeleteItemResponse {
      result: result,
    }))
  }


  async fn list_item(&self, request: Request<ListItemRequest>, ) -> Result<Response<ListItemResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    
    let items = match item::Item::list(req.limit.into(), req.offset.into(), req.search_title.into(), req.status.into(), &self.pool.clone()).await {
      Ok(items) => items,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<ItemDetail> = Vec::new();
    
    for item in items {
      
      let li = ItemDetail {
        id: item.id,
        title: item.title,
        subtitle: item.subtitle,
        img_url: item.img_url,
        content: item.content,
        type_id: item.type_id,
        price: item.price,
        quantity: item.quantity,
        status: item.status
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListItemResponse {
      result: result,
    }))

  }



  async fn get_item_count(&self, request: Request<GetItemCountRequest>, ) -> Result<Response<GetItemCountResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let count = match item::Item::count(&self.pool.clone()).await {
      Ok(result) => result,
      Err(error) => panic!("Error: {}.", error),
    };
    
    Ok(Response::new(GetItemCountResponse {
      result: Some(ItemCount{
        draft: count.draft,
        published: count.published,
        archived: count.archived
      }),
    }))
  }

  async fn list_item_type(&self, request: Request<ListItemTypeRequest>, ) -> Result<Response<ListItemTypeResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let item_types = match item::Item::list_item_type(&self.pool.clone()).await {
      Ok(item_types) => item_types,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<ItemTypeDetail> = Vec::new();
    
    for i in item_types {
      
      let li = ItemTypeDetail {
        id: i.id,
        title: i.title
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListItemTypeResponse {
      result: result,
    }))

  }



















  /*************************************** Prize ***************************************
  *
  *
  */
  async fn add_prize(&self, request: Request<AddPrizeRequest>, ) -> Result<Response<AddPrizeResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();

    let duration_days = req.duration_days.into();
    let duration_hours = req.duration_hours.into();
    let iseconds_on: i64 = req.scheduled_on.into();
    let iseconds_duration_days: i64 = (duration_days as i64) * 86400;
    let iseconds_duration_hours: i64 = (duration_hours as i64) * 3600;
    let iseconds_off: i64 = iseconds_on + iseconds_duration_days + iseconds_duration_hours;
    let scheduled_on = UNIX_EPOCH + Duration::new(iseconds_on as u64, 0);
    let scheduled_off = UNIX_EPOCH + Duration::new(iseconds_off as u64, 0);

    let prize = prize::Prize {
      id: 0,
      title: req.title.into(),
      subtitle: req.subtitle.into(),
      img_url: req.img_url.into(),
      content: req.content.into(),
      type_id: req.type_id.into(),
      tickets_required: req.tickets_required.into(),
      duration_days: duration_days,
      duration_hours: duration_hours,
      timezone: req.timezone.into(),
      scheduled_on: scheduled_on,
      scheduled_off: scheduled_off,
      is_repeat: req.is_repeat.into(),
      repeated_on: req.repeated_on.into(),
      status: req.status.into(),
      status_progress: 0,
      tickets_collected: 0,
    };
    
    let result = match prize::Prize::add(prize, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(AddPrizeResponse {
      result: result,
    }))

  }


  async fn update_prize(&self, request: Request<UpdatePrizeRequest>, ) -> Result<Response<UpdatePrizeResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();

    let duration_days = req.duration_days.into();
    let duration_hours = req.duration_hours.into();
    let iseconds_on: i64 = req.scheduled_on.into();
    let iseconds_duration_days: i64 = (duration_days as i64) * 86400;
    let iseconds_duration_hours: i64 = (duration_hours as i64) * 3600;
    let iseconds_off: i64 = iseconds_on + iseconds_duration_days + iseconds_duration_hours;
    let scheduled_on = UNIX_EPOCH + Duration::new(iseconds_on as u64, 0);
    let scheduled_off = UNIX_EPOCH + Duration::new(iseconds_off as u64, 0);

    let prize = prize::Prize {
      id: req.id.into(),
      title: req.title.into(),
      subtitle: req.subtitle.into(),
      img_url: req.img_url.into(),
      content: req.content.into(),
      type_id: req.type_id.into(),
      tickets_required: req.tickets_required.into(),
      duration_days: duration_days,
      duration_hours: duration_hours,
      timezone: req.timezone.into(),
      scheduled_on: scheduled_on,
      scheduled_off: scheduled_off,
      is_repeat: req.is_repeat.into(),
      repeated_on: req.repeated_on.into(),
      status: req.status.into(),
      status_progress: 0,
      tickets_collected: 0,
    };
    
    let result = match prize::Prize::update(prize, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(UpdatePrizeResponse {
      result: result,
    }))

  }


  async fn delete_prize(&self, request: Request<DeletePrizeRequest>, ) -> Result<Response<DeletePrizeResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let req = request.into_inner();
    
    let result = match prize::Prize::delete(req.id.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(DeletePrizeResponse {
      result: result,
    }))
  }


  async fn list_prize(&self, request: Request<ListPrizeRequest>, ) -> Result<Response<ListPrizeResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let req = request.into_inner();
    
    let prizes = match prize::Prize::list(req.limit.into(), req.offset.into(), req.search_title.into(), req.status.into(), &self.pool.clone()).await {
      Ok(prizes) => prizes,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<PrizeDetail> = Vec::new();
    
    for prize in prizes {
      
      let seconds_on = prize.scheduled_on.duration_since(UNIX_EPOCH).unwrap().as_secs();
      let seconds_off = prize.scheduled_off.duration_since(UNIX_EPOCH).unwrap().as_secs();

      let li = PrizeDetail {
        id: prize.id,
        title: prize.title,
        subtitle: prize.subtitle,
        img_url: prize.img_url,
        content: prize.content,
        type_id: prize.type_id,
        tickets_required: prize.tickets_required,
        duration_days: prize.duration_days,
        duration_hours: prize.duration_hours,
        timezone: prize.timezone,
        scheduled_on: seconds_on as i64,
        scheduled_off: seconds_off as i64,
        is_repeat: prize.is_repeat,
        repeated_on: prize.repeated_on,
        status: prize.status,
        status_progress: prize.status_progress,
        tickets_collected: prize.tickets_collected,
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListPrizeResponse {
      result: result,
    }))
    
  }


  async fn get_prize_count(&self, request: Request<GetPrizeCountRequest>, ) -> Result<Response<GetPrizeCountResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let count = match prize::Prize::count(&self.pool.clone()).await {
      Ok(result) => result,
      Err(error) => panic!("Error: {}.", error),
    };
    
    Ok(Response::new(GetPrizeCountResponse {
      result: Some(PrizeCount{
        draft: count.draft,
        published: count.published,
        archived: count.archived
      }),
    }))
  }

  async fn list_prize_type(&self, request: Request<ListPrizeTypeRequest>, ) -> Result<Response<ListPrizeTypeResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let prize_types = match prize::Prize::list_prize_type(&self.pool.clone()).await {
      Ok(prize_types) => prize_types,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<PrizeTypeDetail> = Vec::new();
    
    for p in prize_types {
      
      let li = PrizeTypeDetail {
        id: p.id,
        title: p.title
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListPrizeTypeResponse {
      result: result,
    }))

  }

  async fn add_prize_tour(&self, request: Request<AddPrizeTourRequest>, ) -> Result<Response<AddPrizeTourResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();

    let p = prize::PrizeTour {
      id: 0,
      prize_id: req.prize_id.into(),
      tour_id: req.tour_id.into(),
      tour_title: "".to_string(),
      status: 0
    };
    
    let result = match prize::Prize::add_prize_tour(p, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(AddPrizeTourResponse {
      result: result,
    }))

  }

  async fn delete_prize_tour(&self, request: Request<DeletePrizeTourRequest>, ) -> Result<Response<DeletePrizeTourResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let req = request.into_inner();
    
    let result = match prize::Prize::delete_prize_tour(req.id.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(DeletePrizeTourResponse {
      result: result,
    }))
  }

  async fn list_prize_tour(&self, request: Request<ListPrizeTourRequest>, ) -> Result<Response<ListPrizeTourResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let req = request.into_inner();
    
    let prize_tours = match prize::Prize::list_prize_tour(req.id, &self.pool.clone()).await {
      Ok(prize_tours) => prize_tours,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<PrizeTourDetail> = Vec::new();
    
    for p in prize_tours {
      
      let li = PrizeTourDetail {
        id: p.id,
        prize_id: p.prize_id,
        tour_id: p.tour_id,
        tour_title: p.tour_title,
        status: p.status
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListPrizeTourResponse {
      result: result,
    }))
    
  }


















  /*************************************** Rank ***************************************
  *
  *
  */
  async fn add_rank(&self, request: Request<AddRankRequest>, ) -> Result<Response<AddRankResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    let rank = rank::Rank {
      id: req.id.into(),
      title: req.title.into(),
      exp: req.exp.into(),
      gem: req.gem.into(),
      multiplier: req.multiplier.into()
    };
    
    let result = match rank::Rank::add(rank, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(AddRankResponse {
      result: result,
    }))

  }


  async fn update_rank(&self, request: Request<UpdateRankRequest>, ) -> Result<Response<UpdateRankResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    let rank = rank::Rank {
      id: req.id.into(),
      title: req.title.into(),
      exp: req.exp.into(),
      gem: req.gem.into(),
      multiplier: req.multiplier.into()
    };
    
    let result = match rank::Rank::update(rank, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(UpdateRankResponse {
      result: result,
    }))

  }


  async fn delete_rank(&self, request: Request<DeleteRankRequest>, ) -> Result<Response<DeleteRankResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let req = request.into_inner();
    
    let result = match rank::Rank::delete(req.id.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(DeleteRankResponse {
      result: result,
    }))
  }

  
  async fn list_rank(&self, request: Request<ListRankRequest>, ) -> Result<Response<ListRankResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    //let req = request.into_inner();
    
    let ranks = match rank::Rank::list(&self.pool.clone()).await {
      Ok(ranks) => ranks,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<RankDetail> = Vec::new();
    
    for rank in ranks {
      
      let li = RankDetail {
        id: rank.id,
        title: rank.title,
        exp: rank.exp,
        gem: rank.gem,
        multiplier: rank.multiplier
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListRankResponse {
      result: result,
    }))

  }



















  /*************************************** Shop ***************************************
  *
  *
  */

  async fn list_buy(&self, request: Request<ListBuyRequest>, ) -> Result<Response<ListBuyResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    let buys = match shop::Shop::list(0, req.limit.into(), req.offset.into(), &self.pool.clone()).await {
      Ok(buys) => buys,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<BuyDetail> = Vec::new();
    
    for buy in buys {
      
      let li = BuyDetail {
        id: buy.id,
        item_type_id: buy.item_type_id,
        item_id: buy.item_id,
        item_title: buy.item_title,
        user_id: buy.user_id,
        user_nick_name: buy.user_nick_name,
        user_email: buy.user_email,
        payment_id: buy.payment_id,
        price: buy.price
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListBuyResponse {
      result: result,
    }))

  }


  async fn get_buy_count(&self, request: Request<GetBuyCountRequest>, ) -> Result<Response<GetBuyCountResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let count = match shop::Shop::count(&self.pool.clone()).await {
      Ok(result) => result,
      Err(error) => panic!("Error: {}.", error),
    };
    
    Ok(Response::new(GetBuyCountResponse {
      result: Some(BuyCount{
        subscription: count.subscription,
        item: count.item,
      }),
    }))
  }


















  /*************************************** Subscription ***************************************
  *
  *
  */
  async fn add_subscription(&self, request: Request<AddSubscriptionRequest>, ) -> Result<Response<AddSubscriptionResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    let sub = subscription::Subscription {
      id: 0,
      title: req.title.into(),
      subtitle: req.subtitle.into(),
      img_url: req.img_url.into(),
      content: req.content.into(),
      type_id: req.type_id.into(),
      price: req.price.into(),
      quantity: req.quantity.into(),
      one_time_gem: req.one_time_gem.into(),
      one_time_multiplier: req.one_time_multiplier.into(),
      one_time_is_firstonly: req.one_time_is_firstonly.into(),
      daily_gem: req.daily_gem.into(),
      daily_multiplier: req.daily_multiplier.into(),
      status: req.status.into()
    };
    
    let result = match subscription::Subscription::add(sub, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(AddSubscriptionResponse {
      result: result,
    }))

  }


  async fn update_subscription(&self, request: Request<UpdateSubscriptionRequest>, ) -> Result<Response<UpdateSubscriptionResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    let sub = subscription::Subscription {
      id: req.id.into(),
      title: req.title.into(),
      subtitle: req.subtitle.into(),
      img_url: req.img_url.into(),
      content: req.content.into(),
      type_id: req.type_id.into(),
      price: req.price.into(),
      quantity: req.quantity.into(),
      one_time_gem: req.one_time_gem.into(),
      one_time_multiplier: req.one_time_multiplier.into(),
      one_time_is_firstonly: req.one_time_is_firstonly.into(),
      daily_gem: req.daily_gem.into(),
      daily_multiplier: req.daily_multiplier.into(),
      status: req.status.into()
    };
    
    let result = match subscription::Subscription::update(sub, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(UpdateSubscriptionResponse {
      result: result,
    }))

  }


  async fn delete_subscription(&self, request: Request<DeleteSubscriptionRequest>, ) -> Result<Response<DeleteSubscriptionResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    
    let result = match subscription::Subscription::delete(req.id.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(DeleteSubscriptionResponse {
      result: result,
    }))
  }


  async fn list_subscription(&self, request: Request<ListSubscriptionRequest>, ) -> Result<Response<ListSubscriptionResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    
    let subscriptions = match subscription::Subscription::list(req.limit.into(), req.offset.into(), req.search_title.into(), req.status.into(), &self.pool.clone()).await {
      Ok(subscriptions) => subscriptions,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<SubscriptionDetail> = Vec::new();
    
    for sub in subscriptions {
      
      let li = SubscriptionDetail {
        id: sub.id,
        title: sub.title,
        subtitle: sub.subtitle,
        img_url: sub.img_url,
        content: sub.content,
        type_id: sub.type_id,
        price: sub.price,
        quantity: sub.quantity,
        one_time_gem: sub.one_time_gem,
        one_time_multiplier: sub.one_time_multiplier,
        one_time_is_firstonly: sub.one_time_is_firstonly,
        daily_gem: sub.daily_gem,
        daily_multiplier: sub.daily_multiplier,
        status: sub.status
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListSubscriptionResponse {
      result: result,
    }))

  }



  async fn get_subscription_count(&self, request: Request<GetSubscriptionCountRequest>, ) -> Result<Response<GetSubscriptionCountResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let count = match subscription::Subscription::count(&self.pool.clone()).await {
      Ok(result) => result,
      Err(error) => panic!("Error: {}.", error),
    };
    
    Ok(Response::new(GetSubscriptionCountResponse {
      result: Some(SubscriptionCount{
        draft: count.draft,
        published: count.published,
        archived: count.archived
      }),
    }))
  }

  async fn list_subscription_type(&self, request: Request<ListSubscriptionTypeRequest>, ) -> Result<Response<ListSubscriptionTypeResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let sub_types = match subscription::Subscription::list_subscription_type(&self.pool.clone()).await {
      Ok(sub_types) => sub_types,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<SubscriptionTypeDetail> = Vec::new();
    
    for t in sub_types {
      
      let li = SubscriptionTypeDetail {
        id: t.id,
        title: t.title
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListSubscriptionTypeResponse {
      result: result,
    }))

  }



















  /*************************************** Tournament ***************************************
  *
  *
  */
  async fn add_tournament(&self, request: Request<AddTournamentRequest>, ) -> Result<Response<AddTournamentResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();

    let tournament = tournament::Tournament {
      id: 0,
      title: req.title.into(),
      status: req.status.into()
    };
    
    let result = match tournament::Tournament::add(tournament, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(AddTournamentResponse {
      result: result,
    }))

  }
  async fn add_tournament_set(&self, request: Request<AddTournamentSetRequest>, ) -> Result<Response<AddTournamentSetResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();

    let tournament_set = tournament::TournamentSet {
      id: 0,
      title: req.title.into(),
      duration_days: req.duration_days.into(),
      duration_hours: req.duration_hours.into(),
      is_group: req.is_group.into()
    };
    
    let result = match tournament::Tournament::add_set(tournament_set, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(AddTournamentSetResponse {
      result: result,
    }))

  }
  
  async fn add_tournament_set_game_rule(&self, request: Request<AddTournamentSetGameRuleRequest>, ) -> Result<Response<AddTournamentSetGameRuleResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();

    let rule = tournament::TournamentSetGameRule {
      id: 0,
      set_id: req.set_id.into(),
      game_id: req.game_id.into(),
      duration_days: req.duration_days.into(),
      duration_hours: req.duration_hours.into(),
      duration_minutes: req.duration_minutes.into(),
      group_id: req.group_id.into()
    };
    
    let result = match tournament::Tournament::add_set_game_rule(rule, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(AddTournamentSetGameRuleResponse {
      result: result,
    }))

  }


  async fn update_tournament(&self, request: Request<UpdateTournamentRequest>, ) -> Result<Response<UpdateTournamentResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();

    let tournament = tournament::Tournament {
      id: req.id.into(),
      title: req.title.into(),
      status: req.status.into()
    };
    
    let result = match tournament::Tournament::update(tournament, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(UpdateTournamentResponse {
      result: result,
    }))

  }
  async fn update_tournament_set(&self, request: Request<UpdateTournamentSetRequest>, ) -> Result<Response<UpdateTournamentSetResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();

    let tournament_set = tournament::TournamentSet {
      id: req.id.into(),
      title: req.title.into(),
      duration_days: req.duration_days.into(),
      duration_hours: req.duration_hours.into(),
      is_group: req.is_group.into()
    };
    
    let result = match tournament::Tournament::update_set(tournament_set, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(UpdateTournamentSetResponse {
      result: result,
    }))

  }

  async fn update_tournament_set_game_rule(&self, request: Request<UpdateTournamentSetGameRuleRequest>, ) -> Result<Response<UpdateTournamentSetGameRuleResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();

    let rule = tournament::TournamentSetGameRule {
      id: req.id.into(),
      set_id: req.set_id.into(),
      game_id: req.game_id.into(),
      duration_days: req.duration_days.into(),
      duration_hours: req.duration_hours.into(),
      duration_minutes: req.duration_minutes.into(),
      group_id: req.group_id.into()
    };
    
    let result = match tournament::Tournament::update_set_game_rule(rule, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(UpdateTournamentSetGameRuleResponse {
      result: result,
    }))

  }

  async fn delete_tournament(&self, request: Request<DeleteTournamentRequest>, ) -> Result<Response<DeleteTournamentResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let req = request.into_inner();
    
    let result = match tournament::Tournament::delete(req.id.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(DeleteTournamentResponse {
      result: result,
    }))
  }

  async fn delete_tournament_set(&self, request: Request<DeleteTournamentSetRequest>, ) -> Result<Response<DeleteTournamentSetResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let req = request.into_inner();
    
    let result = match tournament::Tournament::delete_set(req.id.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(DeleteTournamentSetResponse {
      result: result,
    }))
  }

  async fn delete_tournament_set_game_rule(&self, request: Request<DeleteTournamentSetGameRuleRequest>, ) -> Result<Response<DeleteTournamentSetGameRuleResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let req = request.into_inner();
    
    let result = match tournament::Tournament::delete_set_game_rule(req.id.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(DeleteTournamentSetGameRuleResponse {
      result: result,
    }))
  }


  async fn list_tournament(&self, request: Request<ListTournamentRequest>, ) -> Result<Response<ListTournamentResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let req = request.into_inner();
    
    let tournaments = match tournament::Tournament::list(req.limit.into(), req.offset.into(), req.search_title.into(), req.status.into(), "".to_string(), &self.pool.clone()).await {
      Ok(tournaments) => tournaments,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<TournamentDetail> = Vec::new();
    
    for tournament in tournaments {
      
      let li = TournamentDetail {
        id: tournament.id,
        title: tournament.title,
        status: tournament.status
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListTournamentResponse {
      result: result,
    }))

  }

  async fn list_tournament_set(&self, request: Request<ListTournamentSetRequest>, ) -> Result<Response<ListTournamentSetResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let req = request.into_inner();
    
    let sets = match tournament::Tournament::list_set(req.limit.into(), req.offset.into(), req.search_title.into(), "".to_string(), &self.pool.clone()).await {
      Ok(sets) => sets,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<TournamentSetDetail> = Vec::new();
    
    for set in sets {
      
      //let seconds_off = tournament.scheduled_off.duration_since(UNIX_EPOCH).unwrap().as_secs();
        
      let li = TournamentSetDetail {
        id: set.id,
        title: set.title,
        duration_days: set.duration_days,
        duration_hours: set.duration_hours,
        is_group: set.is_group
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListTournamentSetResponse {
      result: result,
    }))

  }

  async fn list_tournament_set_game_rule(&self, request: Request<ListTournamentSetGameRuleRequest>, ) -> Result<Response<ListTournamentSetGameRuleResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let req = request.into_inner();
    
    let rules = match tournament::Tournament::list_set_game_rule(req.id.into(), &self.pool.clone()).await {
      Ok(rules) => rules,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<TournamentSetGameRuleDetail> = Vec::new();
    
    for rule in rules {
      
      //let seconds_off = tournament.scheduled_off.duration_since(UNIX_EPOCH).unwrap().as_secs();
        
      let li = TournamentSetGameRuleDetail {
        id: rule.id,
        set_id: rule.set_id,
        game_id: rule.game_id,
        duration_days: rule.duration_days,
        duration_hours: rule.duration_hours,
        duration_minutes: rule.duration_minutes,
        group_id: rule.group_id
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListTournamentSetGameRuleResponse {
      result: result,
    }))

  }

  async fn get_tournament_count(&self, request: Request<GetTournamentCountRequest>, ) -> Result<Response<GetTournamentCountResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let count = match tournament::Tournament::count(&self.pool.clone()).await {
      Ok(result) => result,
      Err(error) => panic!("Error: {}.", error),
    };
    
    Ok(Response::new(GetTournamentCountResponse {
      result: Some(TournamentCount{
        draft: count.draft,
        published: count.published,
        archived: count.archived
      }),
    }))
  }

  async fn get_tournament_set_count(&self, request: Request<GetTournamentSetCountRequest>, ) -> Result<Response<GetTournamentSetCountResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let count = match tournament::Tournament::count_set(&self.pool.clone()).await {
      Ok(result) => result,
      Err(error) => panic!("Error: {}.", error),
    };
    
    Ok(Response::new(GetTournamentSetCountResponse {
      result: Some(TournamentSetCount{
        total: count.total
      }),
    }))
  }


  async fn add_tour_set(&self, request: Request<AddTourSetRequest>, ) -> Result<Response<AddTourSetResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();

    let p = tournament::TourSet {
      id: 0,
      tour_id: req.tour_id.into(),
      set_id: req.set_id.into(),
      set_title: "".to_string(),
      status: 0
    };
    
    let result = match tournament::Tournament::add_tour_set(p, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(AddTourSetResponse {
      result: result,
    }))

  }

  async fn delete_tour_set(&self, request: Request<DeleteTourSetRequest>, ) -> Result<Response<DeleteTourSetResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let req = request.into_inner();
    
    let result = match tournament::Tournament::delete_tour_set(req.id.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(DeleteTourSetResponse {
      result: result,
    }))
  }

  async fn list_tour_set(&self, request: Request<ListTourSetRequest>, ) -> Result<Response<ListTourSetResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let req = request.into_inner();
    
    let tours_sets = match tournament::Tournament::list_tour_set(req.id, &self.pool.clone()).await {
      Ok(tours_sets) => tours_sets,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<TourSetDetail> = Vec::new();
    
    for ts in tours_sets {
      
      let li = TourSetDetail {
        id: ts.id,
        tour_id: ts.tour_id,
        set_id: ts.set_id,
        set_title: ts.set_title,
        status: ts.status
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListTourSetResponse {
      result: result,
    }))
    
  }


















  /*************************************** Winner ***************************************
  *
  *
  */
  async fn update_winner(&self, request: Request<UpdateWinnerRequest>, ) -> Result<Response<UpdateWinnerResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    
    let result = match winner::Winner::update(req.id.into(), req.status.into(), req.ship_tracking.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(UpdateWinnerResponse {
      result: result,
    }))

  }


  async fn list_winner(&self, request: Request<ListWinnerRequest>, ) -> Result<Response<ListWinnerResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;
    
    let req = request.into_inner();
    
    let winners = match winner::Winner::list(req.limit.into(), req.offset.into(), req.search_title.into(), req.status.into(), &self.pool.clone()).await {
      Ok(winners) => winners,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<WinnerDetail> = Vec::new();
    
    for winner in winners {
      
      let created_on = winner.created_on.duration_since(UNIX_EPOCH).unwrap().as_secs();
      let claimed_on = winner.claimed_on.duration_since(UNIX_EPOCH).unwrap().as_secs();

      let li = WinnerDetail {
        id: winner.id,
        prize_id: winner.prize_id,
        prize_title: winner.prize_title,
        prize_img_url: winner.prize_img_url,
        prize_type_id: winner.prize_type_id,
        user_id: winner.user_id,
        user_nick_name: winner.user_nick_name,
        user_avatar_url: winner.user_avatar_url,
        created_on: created_on as i64,
        claimed_on: claimed_on as i64,
        status: winner.status,
        ship_tracking: winner.ship_tracking,
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListWinnerResponse {
      result: result,
    }))

  }


  async fn get_winner_count(&self, request: Request<GetWinnerCountRequest>, ) -> Result<Response<GetWinnerCountResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let count = match winner::Winner::count(&self.pool.clone()).await {
      Ok(result) => result,
      Err(error) => panic!("Error: {}.", error),
    };
    
    Ok(Response::new(GetWinnerCountResponse {
      result: Some(WinnerCount{
        unclaimed: count.unclaimed,
        claimed: count.claimed,
        delivered: count.delivered,
        expired: count.expired
      }),
    }))
  }



  async fn list_log_g(&self, request: Request<ListLogGRequest>, ) -> Result<Response<ListLogGResponse>, Status> {
    let _ = svc::check_is_admin(&request.metadata()).await?;

    let req = request.into_inner();
    
    let log_g = match gplayer::GPlayer::list_log_g(req.user_id, req.limit.into(), req.offset.into(), &self.pool.clone()).await {
      Ok(log_g) => log_g,
      Err(e) => {
        println!("list_log_g not ok {:?}", e);
        return Err(Status::internal(format!("{:?}", e)))
      }
    };
    

    let mut result: Vec<LogGDetail> = Vec::new();
    
    for l in log_g {
      
      let enter_timestamp = l.enter_timestamp.duration_since(UNIX_EPOCH).unwrap().as_secs();
      let leave_timestamp = l.leave_timestamp.duration_since(UNIX_EPOCH).unwrap().as_secs();

      let li = LogGDetail {
        id: l.id,
        user_id: l.user_id,
        prize_id: l.prize_id,
        prize_title: l.prize_title,
        prize_img_url: l.prize_img_url,
        game_id: l.game_id,
        game_title: l.game_title,
        game_img_url: l.game_img_url,
        enter_timestamp: enter_timestamp as i64,
        leave_timestamp: leave_timestamp as i64,
        is_watched_ad: l.is_watched_ad,
        game_score: l.game_score,
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListLogGResponse {
      result: result,
    }))

  }


}
