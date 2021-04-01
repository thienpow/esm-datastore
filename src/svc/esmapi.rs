
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
  ListGameLeaderRuleRequest, ListGameLeaderRuleResponse,
  GameLeaderRuleDetail,
  GetGameCodeRequest, GetGameCodeResponse,
  ListGameRequest, ListGameResponse,
  GameDetail,

  // GPlayer
  LogGEnterRequest, LogGEnterResponse,
  LogGLeaveRequest, LogGLeaveResponse,
  ListLogGRequest, ListLogGResponse,
  LogGDetail,

  //  Invites
  GenerateInviteUrlRequest, GenerateInviteUrlResponse,
  AddInviteRequest, AddInviteResponse,
  ClaimInviteRequest, ClaimInviteResponse,
  ListInvitedByRequest, ListInvitedByResponse,
  InvitedByDetail,

  // Item
  ListItemRequest, ListItemResponse, 
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

  // Subscription
  ListSubscriptionRequest, ListSubscriptionResponse, 
  SubscriptionDetail, 
  ListSubscriptionTypeRequest, ListSubscriptionTypeResponse,
  SubscriptionTypeDetail,

  // Winner
  ListWinnerRequest, ListWinnerResponse, 
  ClaimWinnerRequest, ClaimWinnerResponse,
  WinnerDetail, 

};



pub struct EsmApiServer {
  pub jwk: JwkAuth,
  pub pool: Pool<PostgresConnectionManager<tokio_postgres::NoTls>>,
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
            nick_name: user.nick_name
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
      nick_name: "".to_string()
    };
    
    let result = match user::User::add(user, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(AddUserResponse {
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
      country_code: 0,
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
      nick_name: req.nick_name.into()
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

  
  async fn list_game(&self, request: Request<ListGameRequest>, ) -> Result<Response<ListGameResponse>, Status> {
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    
    let games = match game::Game::list(req.limit.into(), req.offset.into(), "".to_string(), 2, &self.pool.clone()).await {
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
        use_how_many_gems: game.use_how_many_gems,
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListGameResponse {
      result: result,
    }))

  }




















  /*************************************** gplayer ***************************************
  *
  *
  */
  async fn log_g_enter(&self, request: Request<LogGEnterRequest>, ) -> Result<Response<LogGEnterResponse>, Status> {
    let _ = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let now = SystemTime::now();

    //TODO: check the req.secret key see if the key is originate from our system
    let req = request.into_inner();
    let gplayer = gplayer::GPlayer {
      id: 0,
      prize_id: req.prize_id.into(),
      game_id: req.game_id.into(),
      user_id: req.user_id.into(),
      enter_timestamp: now,
      leave_timestamp: now,
      game_score: 0,
      is_watched_ad: req.is_watched_ad.into(),
    };
    

    //TODO: generate a new secret key to reply to user, if user are allowed to play, 
    // if not allowed to play anymore then reply an empty string
    // the generated secret key will then be used during log_leave
    let result = match gplayer::GPlayer::enter(gplayer, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(LogGEnterResponse {
      result: result,
    }))

  }


  async fn log_g_leave(&self, request: Request<LogGLeaveRequest>, ) -> Result<Response<LogGLeaveResponse>, Status> {
    let _ = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;
    
    let now = SystemTime::now();

    //TODO: check if the req.secret is generated during log_enter
    // if yes, then allow recording the game score
    // generated secret key timestamp must not allowed more than 30 minutes
    let req = request.into_inner();
    let gplayer = gplayer::GPlayer {
      id: req.id.into(),
      prize_id: 0,
      game_id: 0,
      user_id: 0,
      enter_timestamp: now,
      leave_timestamp: now,
      game_score: req.game_score.into(),
      is_watched_ad: false,
    };
    
    let result = match gplayer::GPlayer::leave(gplayer, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
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


















  /*************************************** Invites ***************************************
  *
  *
  */
  async fn generate_invite_url(&self, _request: Request<GenerateInviteUrlRequest>, ) -> Result<Response<GenerateInviteUrlResponse>, Status> {
    //TODO
    unimplemented!("TODO!")
  }

  async fn add_invite(&self, request: Request<AddInviteRequest>, ) -> Result<Response<AddInviteResponse>, Status> {
    
    let now = SystemTime::now();

    let req = request.into_inner();
    let invites = invites::Invites {
      id: 0,
      user_id: req.user_id.into(),
      invited_by: req.invited_by.into(),
      invited_date: now,
      is_claimed: false,
      claimed_date: now
    };
    
    let result = match invites::Invites::add(invites, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(AddInviteResponse {
      result: result,
    }))

  }


  async fn claim_invite(&self, request: Request<ClaimInviteRequest>, ) -> Result<Response<ClaimInviteResponse>, Status> {
    
    let req = request.into_inner();
    
    let result = match invites::Invites::claim(req.id.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(ClaimInviteResponse {
      result: result,
    }))

  }


  async fn list_invited_by(&self, request: Request<ListInvitedByRequest>, ) -> Result<Response<ListInvitedByResponse>, Status> {
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    
    let invites = match invites::Invites::list_invited_by(req.invited_by.into(), req.is_claimed.into(), &self.pool.clone()).await {
      Ok(invites) => invites,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<InvitedByDetail> = Vec::new();
    
    for invite in invites {
      
      let invited_date = invite.invited_date.duration_since(UNIX_EPOCH).unwrap().as_secs();
      let claimed_date = invite.claimed_date.duration_since(UNIX_EPOCH).unwrap().as_secs();
        
      let li = InvitedByDetail {
        id: invite.id,
        user_id: invite.user_id,
        invited_by: invite.invited_by,
        invited_date: invited_date as i64,
        is_claimed: invite.is_claimed,
        claimed_date: claimed_date as i64
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
      
      let scheduled_on = prize.scheduled_on.duration_since(UNIX_EPOCH).unwrap().as_secs();

      let li = PrizeDetail {
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
        is_repeat: prize.is_repeat,
        repeated_on: prize.repeated_on,
        status: prize.status,
        status_prize: prize.status_prize,
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
        game_duration_days: prize.game_duration_days,
        game_duration_hours: prize.game_duration_hours,
        game_duration_minutes: prize.game_duration_minutes,
        group_id: prize.group_id
      };
      
      result.push(li);
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
    let _ = svc::check_is_user(&request.metadata(), &self.jwk).await?;
    
    let req = request.into_inner();
    let new_buy = shop::NewBuy {
      id: 0,
      item_type_id: req.item_type_id.into(),
      item_id: req.item_id.into(),
      user_id: req.user_id.into()
    };
    
    let result = match shop::Shop::buy(new_buy, &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(BuyResponse {
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
    
    let winners = match winner::Winner::list(req.limit.into(), req.offset.into(), &self.pool.clone()).await {
      Ok(winners) => winners,
      Err(error) => panic!("Error: {}.", error),
    };
    
    let mut result: Vec<WinnerDetail> = Vec::new();
    
    for winner in winners {
      
      let created_on = winner.created_on.duration_since(UNIX_EPOCH).unwrap().as_secs();
        
      let li = WinnerDetail {
        id: winner.id,
        prize_id: winner.prize_id,
        prize_title: winner.prize_title,
        prize_img_url: winner.prize_img_url,
        user_id: winner.user_id,
        user_nick_name: winner.user_nick_name,
        created_on: created_on as i64,
        status: winner.status,
      };
      
      result.push(li);
    };
    
    Ok(Response::new(ListWinnerResponse {
      result: result,
    }))

  }


  async fn claim_winner(&self, request: Request<ClaimWinnerRequest>, ) -> Result<Response<ClaimWinnerResponse>, Status> {
    let _ = svc::check_is_exact_user(&request.metadata(), &self.jwk).await?;

    let req = request.into_inner();
    
    let result = match winner::Winner::claim(req.id.into(), &self.pool.clone()).await {
      Ok(result) => result.to_string(),
      Err(error) => error.to_string(),
    };
    
    Ok(Response::new(ClaimWinnerResponse {
      result: result,
    }))
  }



}
