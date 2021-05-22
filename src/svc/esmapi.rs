
pub mod esmapi_proto {
  tonic::include_proto!("api.esm");
}
//use core::time::Duration;
use std::time::{SystemTime, UNIX_EPOCH};

use tonic::{Request, Response, Status};
use tokio_postgres;
use bb8::{Pool};
use bb8_postgres::PostgresConnectionManager;


use crate::jwk::{
  JwkAuth,
};

use esm_db::{models::*};

use crate::cryptic;
use crate::svc;
use esmapi_proto::{

  // Common 
  ListStatusTypeRequest,  ListStatusTypeResponse,
  StatusTypeDetail,
  ListWinTypeRequest, ListWinTypeResponse,
  WinTypeDetail,
  ListTimezonesRequest,  ListTimezonesResponse,
  TimezonesDetail,
  // User
  SignInRequest, SignInResponse,
  AddUserRequest, AddUserResponse,
  UpdateMsgTokenRequest, UpdateMsgTokenResponse,
  UpdateSocialLinkFbRequest, UpdateSocialLinkFbResponse,
  UpdateSocialLinkGoogleRequest, UpdateSocialLinkGoogleResponse,
  UpdateAddressRequest, UpdateAddressResponse,
  UpdateUserSettingsRequest, UpdateUserSettingsResponse,
  ChangePasswordRequest, ChangePasswordResponse,
  UserDetail, 

  //Config
  GetConfigRequest, GetConfigResponse,
  ConfigDetail,
  ListSpinnerRuleRequest, ListSpinnerRuleResponse,
  SpinnerRuleDetail,
  // Game
  GetGameRulesRequest, GetGameRulesResponse,
  GameRulesDetail,
  ListGameLeaderRuleRequest, ListGameLeaderRuleResponse,
  GameLeaderRuleDetail,
  GetGameCodeRequest, GetGameCodeResponse,

  // GPlayer
  GetSpinAvailableRequest, GetSpinAvailableResponse,
  LogSEnterRequest, LogSEnterResponse,
  LogSLeaveRequest, LogSLeaveResponse,
  LogGEnterRequest, LogGEnterResponse,
  LogGLeaveRequest, LogGLeaveResponse,
  ListLogGRequest, ListLogGResponse,
  ListLogGByGameRequest, ListLogGByGameResponse,
  LogGDetail,

  //  Invites
  AddInviteRequest, AddInviteResponse,
  ListInvitedByRequest, ListInvitedByResponse,
  InvitedByDetail,

  // Item
  ListItemRequest, ListItemResponse, 
  GetItemCountRequest, GetItemCountResponse,
  ItemDetail, 
  ListItemTypeRequest, ListItemTypeResponse,
  ItemTypeDetail,

  // Prize
  ListPrizeRequest, ListPrizeResponse, 
  PrizeDetail, 

  // Rank
  ListRankRequest, ListRankResponse,
  RankDetail,

  // Shop
  BuyRequest, BuyResponse,
  ListBuyRequest, ListBuyResponse,
  BuyDetail,

  // Subscription
  ListSubscriptionRequest, ListSubscriptionResponse, 
  GetSubscriptionCountRequest, GetSubscriptionCountResponse,
  SubscriptionDetail, 
  ListSubscriptionTypeRequest, ListSubscriptionTypeResponse,
  SubscriptionTypeDetail,

  // Winner
  ListWinnerRequest, ListWinnerResponse, 
  ListWinnerRecentRequest, ListWinnerRecentResponse, 
  ListWinnerUnclaimedRequest, ListWinnerUnclaimedResponse, 
  ListWinnerClaimedRequest, ListWinnerClaimedResponse, 
  ClaimWinnerRequest, ClaimWinnerResponse,
  WinnerDetail, 

  ItemCount, SubscriptionCount
};



pub struct EsmApiServer {
  pub jwk: JwkAuth,
  pub pool: Pool<PostgresConnectionManager<tokio_postgres::NoTls>>,
  pub server_timezone: u64,
}


#[tonic::async_trait]
impl esmapi_proto::esm_api_server::EsmApi for EsmApiServer {
















  /*************************************** Common ***************************************
  *
  *
  */

  async fn list_status_type(&self, request: Request<ListStatusTypeRequest>, ) -> Result<Response<ListStatusTypeResponse>, Status> {
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;

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

  async fn list_win_type(&self, request: Request<ListWinTypeRequest>, ) -> Result<Response<ListWinTypeResponse>, Status> {
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;

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
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;

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
    
    let _ = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();

    match user::User::sign_in(req.username.into(), &self.pool.clone()).await {
      Ok(user) => {
      
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
            msg_token: user.msg_token
          }),
        }))
      },
      Err(e) => Err(Status::internal(format!("{:?}", e)))
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


  async fn update_msg_token(&self, request: Request<UpdateMsgTokenRequest>, ) -> Result<Response<UpdateMsgTokenResponse>, Status> {
   
    let uid = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    let user_id: i64 = req.id.into();
    svc::verify_exact_match(uid, user_id, &self.pool.clone()).await?;

    let _ = match svc::notify("System Notification", "Your Message Token is Updated", &req.token).await {
      Ok(_) => {},
      Err(error) => panic!("Error: {}.", error),
    };
    
    let result = match user::User::update_msg_token(user_id, req.token.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(UpdateMsgTokenResponse {
      result: result,
    }))

  }

  async fn update_social_link_fb(&self, request: Request<UpdateSocialLinkFbRequest>, ) -> Result<Response<UpdateSocialLinkFbResponse>, Status> {
    
    let uid = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    let user_id: i64 = req.id.into();
    svc::verify_exact_match(uid, user_id, &self.pool.clone()).await?;
    
    let result = match user::User::update_social_link_fb(user_id, req.fb_id.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(UpdateSocialLinkFbResponse {
      result: result,
    }))

  }

  async fn update_social_link_google(&self, request: Request<UpdateSocialLinkGoogleRequest>, ) -> Result<Response<UpdateSocialLinkGoogleResponse>, Status> {
    
    let uid = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    let user_id: i64 = req.id.into();
    svc::verify_exact_match(uid, user_id, &self.pool.clone()).await?;
    
    let result = match user::User::update_social_link_google(user_id, req.google_id.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(UpdateSocialLinkGoogleResponse {
      result: result,
    }))

  }

  async fn update_address(&self, request: Request<UpdateAddressRequest>, ) -> Result<Response<UpdateAddressResponse>, Status> {
    
    let uid = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    let user_id: i64 = req.id.into();
    svc::verify_exact_match(uid, user_id, &self.pool.clone()).await?;

    let address = user::Address {
      id: user_id,
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
    
    let uid = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    let user_id: i64 = req.id.into();
    svc::verify_exact_match(uid, user_id, &self.pool.clone()).await?;

    let settings = user::Settings {
      id: user_id,
      is_notify_allowed: req.is_notify_allowed.into(),
      is_notify_new_reward: req.is_notify_new_reward.into(),
      is_notify_new_tournament: req.is_notify_new_tournament.into(),
      is_notify_tour_ending: req.is_notify_tour_ending.into(),
      nick_name: req.nick_name.into(),
      avatar_url: req.avatar_url.into(),
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
    let _ = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

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




















  /*************************************** Config ***************************************
  *
  *
  */
  async fn get_config(&self, request: Request<GetConfigRequest>, ) -> Result<Response<GetConfigResponse>, Status> {
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;

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








  async fn list_spinner_rule(&self, request: Request<ListSpinnerRuleRequest>, ) -> Result<Response<ListSpinnerRuleResponse>, Status> {
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;
  
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
  async fn list_game_leader_rule(&self, request: Request<ListGameLeaderRuleRequest>, ) -> Result<Response<ListGameLeaderRuleResponse>, Status> {
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;

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
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    
    let result = match game::Game::get_game_code(req.id.into(), &self.pool.clone()).await {
      Ok(result) => result,
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(GetGameCodeResponse {
      result: result,
    }))
  }

  async fn get_game_rules(&self, request: Request<GetGameRulesRequest>, ) -> Result<Response<GetGameRulesResponse>, Status> {
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    
    match game::Game::get_game_rules(req.game_id.into(), &self.pool.clone()).await {
      Ok(result) => Ok(Response::new(GetGameRulesResponse {
        result: Some(GameRulesDetail{
          score_rule: result.score_rule,
          watch_ad_get_tickets: result.watch_ad_get_tickets,
          watch_ad_get_exp: result.watch_ad_get_exp,
          use_gem_get_tickets: result.use_gem_get_tickets,
          use_gem_get_exp: result.use_gem_get_exp,
          use_how_many_gems: result.use_how_many_gems
        }),
      })),
      Err(e) => Err(Status::internal(format!("Error: get_game_rules! {}", e.to_string())))
    }
    
    
  }

  

















  /*************************************** gplayer ***************************************
  *
  *
  */
  async fn log_g_enter(&self, request: Request<LogGEnterRequest>, ) -> Result<Response<LogGEnterResponse>, Status> {
    
    let uid = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    let user_id: i64 = req.user_id.into();
    let game_id: i64 = req.game_id.into();
    let is_watched_ad: bool = req.is_watched_ad.into();
    let is_used_gem: bool = req.is_used_gem.into();
    
    svc::verify_exact_match(uid, user_id, &self.pool.clone()).await?;

    let now = SystemTime::now();
    
    //TODO: check the req.secret key see if the key is originate from our system
    
    let gplayer = gplayer::GPlayer {
      id: 0,
      prize_id: req.prize_id.into(),
      game_id: game_id,
      user_id: user_id,
      enter_timestamp: now,
      leave_timestamp: now,
      game_score: 0,
      is_watched_ad: is_watched_ad,
      is_used_gem: is_used_gem,
    };
    

    //TODO: generate a new secret key to reply to user, if user are allowed to play, 
    // if not allowed to play anymore then reply an empty string
    // the generated secret key will then be used during log_leave
    let result = match gplayer::GPlayer::enter(gplayer, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => panic!("Error: {}.", error),
    };
    
    Ok(Response::new(LogGEnterResponse {
      result: result,
    }))

  }


  async fn log_g_leave(&self, request: Request<LogGLeaveRequest>, ) -> Result<Response<LogGLeaveResponse>, Status> {
    
    let uid = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    let id: i64 = req.id.into();
    let user_id: i64 = req.user_id.into();
    svc::verify_exact_match(uid, user_id, &self.pool.clone()).await?;

    let now = SystemTime::now();

    //TODO: check if the req.secret is generated during log_enter
    // if yes, then allow recording the game score
    // generated secret key timestamp must not allowed more than 30 minutes
    
    let gplayer = gplayer::GPlayer {
      id: id,
      prize_id: 0,
      game_id: 0,
      user_id: user_id,
      enter_timestamp: now,
      leave_timestamp: now,
      game_score: req.game_score.into(),
      is_watched_ad: false,
      is_used_gem: false,
    };
    
    let result = match gplayer::GPlayer::leave(gplayer, &self.pool.clone()).await {
      Ok(result) => { 

        //check if used gem or watched ad
        match gplayer::GPlayer::get_log_g(id, &self.pool.clone()).await {
          Ok(log) => {

            let prize_id = log.prize_id;
            let game_id = log.game_id;
            let is_watched_ad = log.is_watched_ad;
            let is_used_gem =  log.is_used_gem;
            let game_score = log.game_score;

            if is_watched_ad || is_used_gem {

              let user = match user::User::get(user_id, &self.pool.clone()).await {
                Ok(user) => user,
                Err(error) => panic!("Error: {}.", error),
              };

              match game::Game::get_game_rules(game_id, &self.pool.clone()).await {
                Ok(game_rules) => {
                  let multiplier: f32 = game_score as f32 / game_rules.score_rule as f32;
                  let mut reward_tickets: i32 = 0;
                  let mut reward_exp: i32 = user.exp;
                  
                  //check from watch_ad_get_tickets, watch_ad_get_exp, find out watch ad can get how many tickets/exp
                  if is_watched_ad {
                    
                    reward_tickets = (reward_tickets as f32 + multiplier * game_rules.watch_ad_get_tickets as f32) as i32;
                    reward_exp = (reward_exp as f32 + multiplier * game_rules.watch_ad_get_exp as f32) as i32;
                  }
        
                  //check from use_gem_get_tickets, use_gem_get_exp, find out use gem can get how many tickets/exp
                  if is_used_gem {
                          
                    //deduct a gem first
                    let new_gem_balance: i64 = user.gem_balance - 1 as i64;
                    match user::User::update_status_gem_balance(user_id, user.status, new_gem_balance, &self.pool.clone()).await {
                      Ok(_) => {
        
                        match svc::notify("You spent a Gem!", format!("You spent a gem to play, Your Gem Balance is Updated to {}", new_gem_balance).as_str(), &user.msg_token).await {
                          Ok(_) => "1",
                          Err(error) => panic!("Error: {}.", error),
                        };
                        
                      },
                      Err(error) => panic!("Error: {}.", error),
                    }

                    //after deducted gem, reward the tickets/exp
                    reward_tickets = (reward_tickets as f32 + multiplier * game_rules.use_gem_get_tickets as f32) as i32;
                    reward_exp = (reward_exp as f32 + multiplier * game_rules.use_gem_get_exp as f32) as i32;

                  }

                  //update the user's exp
                  match user::User::update_exp(user_id, reward_exp, &self.pool.clone()).await {
                    Ok(_) => {

                      //log into prize_pool, win_from = 2
                      match prize::Prize::log_prize_pool(prize_id, user_id, game_id, 2, reward_tickets, &self.pool.clone()).await {
                        Ok(_) => {
                          //do something here?
                          
                          ()
                        },
                        Err(error) => panic!("Error: {}.", error),
                      }
                      ()
                    },
                    Err(error) => panic!("Error: {}.", error),
                  }

                  ()
                },
                Err(error) => panic!("Error: {}.", error),
              };
            }
          },
          Err(error) => panic!("Error: {}.", error),
        }
        
        result.to_string()
      },
      Err(error) => error.to_string(),
    };
    
    

    Ok(Response::new(LogGLeaveResponse {
      result: result,
    }))

  }

  async fn list_log_g(&self, request: Request<ListLogGRequest>, ) -> Result<Response<ListLogGResponse>, Status> {
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;

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
        nick_name: l.nick_name,
        avatar_url: l.avatar_url,
        prize_id: l.prize_id,
        prize_title: l.prize_title,
        prize_img_url: l.prize_img_url,
        type_id: l.type_id,
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

  async fn list_log_g_by_game(&self, request: Request<ListLogGByGameRequest>, ) -> Result<Response<ListLogGByGameResponse>, Status> {
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    
    let log_g = match gplayer::GPlayer::list_log_g_by_game(req.game_id, req.prize_id, &self.pool.clone()).await {
      Ok(log_g) => log_g,
      Err(e) => {
        println!("list_log_g_by_game not ok {:?}", e);
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
        nick_name: l.nick_name,
        avatar_url: l.avatar_url,
        prize_id: l.prize_id,
        prize_title: l.prize_title,
        prize_img_url: l.prize_img_url,
        type_id: l.type_id,
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
    
    Ok(Response::new(ListLogGByGameResponse {
      result: result,
    }))

  }

  async fn get_spin_available(&self, request: Request<GetSpinAvailableRequest>, ) -> Result<Response<GetSpinAvailableResponse>, Status> {
    
    let uid = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    let user_id: i64 = req.user_id.into();
    svc::verify_exact_match(uid, user_id, &self.pool.clone()).await?;

    
    match gplayer::GPlayer::check_spin_available(user_id, &self.pool.clone()).await {
      Ok(spin_available) => {

        Ok(Response::new(GetSpinAvailableResponse {
          result: spin_available
        }))
      },
      Err(e) => Err(Status::internal(format!("Error: get_spin_available failed! {}", e.to_string())))
    }
  }

  
  async fn log_s_enter(&self, request: Request<LogSEnterRequest>, ) -> Result<Response<LogSEnterResponse>, Status> {
    
    let uid = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    let user_id: i64 = req.user_id.into();
    let prize_id: i64 = req.prize_id.into();
    svc::verify_exact_match(uid, user_id, &self.pool.clone()).await?;
    
    let now = SystemTime::now();
    

    match gplayer::GPlayer::check_spin_available(user_id, &self.pool.clone()).await {
      Ok(spin_available) => {

        if spin_available > 0 {

          let spin_detail = gplayer::LogSDetail {
            id: 0,
            user_id: user_id,
            prize_id: prize_id,
            win_type: 0,
            win_amount: 0,
            enter_timestamp: now,
            leave_timestamp: now,
          };
          
          return match gplayer::GPlayer::spin_enter(spin_detail, &self.pool.clone()).await {
            Ok(id) => {
              Ok(Response::new(LogSEnterResponse {
                result: id
              }))
            },
            Err(e) => Err(Status::internal(format!("Error: log_s_enter ==> spin_enter failed! {}", e.to_string())))
          }
        } else {
          return Err(Status::internal(format!("No more spin available.  You are not suppose to call this.")))
        }
        
      },
      Err(e) => Err(Status::internal(format!("Error: log_s_enter ==> check_spin_available failed! {}", e.to_string())))
    }
    

  }
  
  async fn log_s_leave(&self, request: Request<LogSLeaveRequest>, ) -> Result<Response<LogSLeaveResponse>, Status> {
    
    let uid = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    let id: i64 = req.id.into();
    let user_id: i64 = req.user_id.into();
    let win_type: i32 = req.win_type.into();
    let win_amount: i32 = req.win_amount.into();
    svc::verify_exact_match(uid, user_id, &self.pool.clone()).await?;
    
    let now = SystemTime::now();
    

    let spin_detail = gplayer::LogSDetail {
      id: id,
      user_id: user_id,
      prize_id: 0,
      win_type: win_type,
      win_amount:  win_amount,
      enter_timestamp: now,
      leave_timestamp: now,
    };
    
    match gplayer::GPlayer::spin_leave(spin_detail, &self.pool.clone()).await {
      Ok(result) => {

        //if win_type=ticket=1 then log into prize_pool here, game_id=0, win_from=1
        if win_type == 1 {

          let prize_id: i64 = match gplayer::GPlayer::get_spin_prize_id(id, &self.pool.clone()).await {
            Ok(prize_id) => prize_id,
            Err(error) => panic!("Error: {}.", error),
          };
  
          match prize::Prize::log_prize_pool(prize_id, user_id, 0, 1, win_amount, &self.pool.clone()).await {
            Ok(_) => {
              //do something here?
              
              ()
            },
            Err(error) => panic!("Error: {}.", error),
          }
        }
        

        Ok(Response::new(LogSLeaveResponse {
          result: result.to_string()
        }))
      },
      Err(e) => Err(Status::internal(format!("Error: log_s_leave ==> spin_leave failed! {}", e.to_string())))
    }
    

  }

















  /*************************************** Invites ***************************************
  *
  *
  */
  async fn add_invite(&self, request: Request<AddInviteRequest>, ) -> Result<Response<AddInviteResponse>, Status> {
    
    let uid = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    let user_id: i64 = req.user_id.into();
    svc::verify_exact_match(uid, user_id, &self.pool.clone()).await?;
    
    let now = SystemTime::now();

    let invited_by = req.invited_by.into();
    let invites = invites::Invites {
      id: 0,
      user_id: user_id,
      invited_by: invited_by,
      invited_date: now
    };
    
    let result = match invites::Invites::add(invites, &self.pool.clone()).await {
      Ok(result) => {
        match config::Config::get(&self.pool.clone()).await {
          Ok(conf) => {
            let gems_per_invite = conf.invites;


            match user::User::get(invited_by, &self.pool.clone()).await {
              Ok(user) => {

                let new_gem_balance: i64 = user.gem_balance + gems_per_invite as i64;
                match user::User::update_status_gem_balance(invited_by, user.status, new_gem_balance, &self.pool.clone()).await {
                  Ok(_) => {

                    match svc::notify("You got a Gem reward!", format!("Your invited friend has just joined! As a reward, Your Gem Balance is Updated to {}", new_gem_balance).as_str(), &user.msg_token).await {
                      Ok(_) => {},
                      Err(error) => panic!("Error: {}.", error),
                    };
                    
                    
                  },
                  Err(error) => panic!("Error: {}.", error),
                }

              },
              Err(error) => panic!("Error: {}.", error),
            }

          },
          Err(error) => panic!("Error: {}.", error),
        };
        result.to_string()
      },
      Err(error) => panic!("Error: {}.", error),
    };
    
    Ok(Response::new(AddInviteResponse {
      result: result,
    }))

  }
  

  async fn list_invited_by(&self, request: Request<ListInvitedByRequest>, ) -> Result<Response<ListInvitedByResponse>, Status> {
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;

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


















  /*************************************** Item ***************************************
  *
  *
  */
  async fn list_item(&self, request: Request<ListItemRequest>, ) -> Result<Response<ListItemResponse>, Status> {
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    
    let items = match item::Item::list(req.limit.into(), req.offset.into(), "".to_string(), 2, &self.pool.clone()).await {
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
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;
    
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
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;

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
  async fn list_prize(&self, request: Request<ListPrizeRequest>, ) -> Result<Response<ListPrizeResponse>, Status> {
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;
    
    //let req = request.into_inner();
    
    let prizes = match prize::Prize::list_active(&self.pool.clone()).await {
      Ok(prizes) => prizes,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<PrizeDetail> = Vec::new();
    
    for prize in prizes {
      
      let start_timestamp = prize.start_timestamp.duration_since(UNIX_EPOCH).unwrap().as_secs();
      let end_timestamp = prize.end_timestamp.duration_since(UNIX_EPOCH).unwrap().as_secs();

      let scheduled_on = prize.scheduled_on.duration_since(UNIX_EPOCH).unwrap().as_secs();
      let scheduled_off = prize.scheduled_off.duration_since(UNIX_EPOCH).unwrap().as_secs();
      let timezone_seconds = prize.timezone * (3600 as f64);

      let adjusted_now = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs() - (self.server_timezone * 3600) + (timezone_seconds as u64);

      let li = PrizeDetail {
        current_game_id: prize.current_game_id,
        prize_id: prize.prize_id,
        prize_title: prize.prize_title,
        prize_subtitle: prize.prize_subtitle,
        prize_img_url: prize.prize_img_url,
        prize_content: prize.prize_content,
        prize_duration_days: prize.prize_duration_days,
        prize_duration_hours: prize.prize_duration_hours,
        type_id: prize.type_id,
        tickets_required: prize.tickets_required,
        timezone: prize.timezone,
        scheduled_on: scheduled_on as i64,
        scheduled_off: scheduled_off as i64,
        is_repeat: prize.is_repeat,
        repeated_on: prize.repeated_on,
        status: prize.status,
        status_progress: prize.status_progress,
        tickets_collected: prize.tickets_collected,
        tour_id: prize.tour_id,
        tour_title: prize.tour_title,
        set_id: prize.set_id,
        set_title: prize.set_title,
        game_id: prize.game_id,
        game_title: prize.game_title,
        game_subtitle: prize.game_subtitle,
        game_img_url: prize.game_img_url,
        game_content: prize.game_content,
        tsg_id: prize.tsg_id,
        game_duration_days: prize.game_duration_days,
        game_duration_hours: prize.game_duration_hours,
        game_duration_minutes: prize.game_duration_minutes,
        group_id: prize.group_id,
        start_timestamp: start_timestamp as i64,
        end_timestamp: end_timestamp as i64,
      };
      
      //type_id 1=Featured, 2=Premium
      if prize.type_id == 1 || prize.type_id == 2 {
        
        //For Featured and Premium prize, need to check if the tickets_collected is smaller than tickets_required, then only allow to list
        if prize.tickets_collected <= prize.tickets_required {
          result.push(li);
        }

      //type_id 3=Time Sensitive, 4=Automated Entry
      } else if prize.type_id == 3 || prize.type_id == 4 {

        //if it's Prize 3 or 4, we need to check if now is greater than or equal to scheduled_on, meaning it's started.
        if scheduled_on <= adjusted_now {

          // if is_repeat, meaning need to always show, because it never end.
          if prize.is_repeat {
            result.push(li);
          } else {

            // if not repeat, then we need to check if it's still within the duration.
            if scheduled_off >= adjusted_now {
              result.push(li);
            }
          }
          
        }
      }
      
      
    };
    
    Ok(Response::new(ListPrizeResponse {
      result: result,
    }))
    
  }



















  /*************************************** Rank ***************************************
  *
  *
  */
  async fn list_rank(&self, request: Request<ListRankRequest>, ) -> Result<Response<ListRankResponse>, Status> {
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;
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
  async fn buy(&self, request: Request<BuyRequest>, ) -> Result<Response<BuyResponse>, Status> {
    
    let uid = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    let user_id: i64 = req.user_id.into();
    svc::verify_exact_match(uid, user_id, &self.pool.clone()).await?;
    
    let now = SystemTime::now();

    let item_id = req.item_id.into();
    if item_id == 0 {
      panic!("Error: item_id should not be 0.");
    }

    let new_buy = shop::NewBuy {
      id: 0,
      item_type_id: req.item_type_id.into(),
      item_id: item_id,
      item_title: "".to_string(),
      user_id: user_id,
      user_nick_name: "".to_string(),
      user_email: "".to_string(),
      payment_id: req.payment_id.into(),
      sub_id: req.sub_id.into(),
      price: req.price.into(),
      created_on: now
    };
    
    let result = match shop::Shop::buy(new_buy, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(BuyResponse {
      result: result,
    }))

  }


  async fn list_buy(&self, request: Request<ListBuyRequest>, ) -> Result<Response<ListBuyResponse>, Status> {
    
    let uid = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    let user_id: i64 = req.user_id.into();
    svc::verify_exact_match(uid, user_id, &self.pool.clone()).await?;


    let buys = match shop::Shop::list(user_id, req.limit.into(), req.offset.into(), &self.pool.clone()).await {
      Ok(buys) => buys,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<BuyDetail> = Vec::new();
    
    for buy in buys {
      
      let created_on = buy.created_on.duration_since(UNIX_EPOCH).unwrap().as_secs();

      let li = BuyDetail {
        id: buy.id,
        item_type_id: buy.item_type_id,
        item_id: buy.item_id,
        item_title: buy.item_title,
        payment_id: buy.payment_id,
        sub_id: buy.sub_id,
        price: buy.price,
        created_on: created_on as i64
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListBuyResponse {
      result: result,
    }))

  }

  


















  /*************************************** Subscription ***************************************
  *
  *
  */
  async fn list_subscription(&self, request: Request<ListSubscriptionRequest>, ) -> Result<Response<ListSubscriptionResponse>, Status> {
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    
    let subscriptions = match subscription::Subscription::list(req.limit.into(), req.offset.into(), "".to_string(), 2, &self.pool.clone()).await {
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
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;
    
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
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;

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


















  /*************************************** Winner ***************************************
  *
  *
  */
  async fn list_winner(&self, request: Request<ListWinnerRequest>, ) -> Result<Response<ListWinnerResponse>, Status> {
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;
    
    let req = request.into_inner();
    
    let winners = match winner::Winner::list(req.limit.into(), req.offset.into(), "".to_string(), 0 as i32, &self.pool.clone()).await {
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

  async fn list_winner_recent(&self, request: Request<ListWinnerRecentRequest>, ) -> Result<Response<ListWinnerRecentResponse>, Status> {
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;
    
    let winners = match winner::Winner::list_recent(&self.pool.clone()).await {
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
    
    Ok(Response::new(ListWinnerRecentResponse {
      result: result,
    }))

  }

  async fn list_winner_unclaimed(&self, request: Request<ListWinnerUnclaimedRequest>, ) -> Result<Response<ListWinnerUnclaimedResponse>, Status> {
    
    let uid = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    let user_id: i64 = req.user_id.into();
    svc::verify_exact_match(uid, user_id, &self.pool.clone()).await?;
    
    
    let winners = match winner::Winner::list_unclaimed(user_id, &self.pool.clone()).await {
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
    
    Ok(Response::new(ListWinnerUnclaimedResponse {
      result: result,
    }))

  }

  async fn list_winner_claimed(&self, request: Request<ListWinnerClaimedRequest>, ) -> Result<Response<ListWinnerClaimedResponse>, Status> {
    
    let uid = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    let user_id: i64 = req.user_id.into();
    svc::verify_exact_match(uid, user_id, &self.pool.clone()).await?;
    
    
    let winners = match winner::Winner::list_claimed(user_id, &self.pool.clone()).await {
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
    
    Ok(Response::new(ListWinnerClaimedResponse {
      result: result,
    }))

  }



  async fn claim_winner(&self, request: Request<ClaimWinnerRequest>, ) -> Result<Response<ClaimWinnerResponse>, Status> {
    let uid = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    let user_id: i64 = req.user_id.into();
    svc::verify_exact_match(uid, user_id, &self.pool.clone()).await?;

    let result = match winner::Winner::claim(req.id.into(), user_id, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(ClaimWinnerResponse {
      result: result,
    }))
  }



}
