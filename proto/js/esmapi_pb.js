// source: esmapi.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.api.esm.AddInviteRequest', null, global);
goog.exportSymbol('proto.api.esm.AddInviteResponse', null, global);
goog.exportSymbol('proto.api.esm.AddUserRequest', null, global);
goog.exportSymbol('proto.api.esm.AddUserResponse', null, global);
goog.exportSymbol('proto.api.esm.BuyDetail', null, global);
goog.exportSymbol('proto.api.esm.BuyRequest', null, global);
goog.exportSymbol('proto.api.esm.BuyResponse', null, global);
goog.exportSymbol('proto.api.esm.ChangePasswordRequest', null, global);
goog.exportSymbol('proto.api.esm.ChangePasswordResponse', null, global);
goog.exportSymbol('proto.api.esm.ClaimWinnerRequest', null, global);
goog.exportSymbol('proto.api.esm.ClaimWinnerResponse', null, global);
goog.exportSymbol('proto.api.esm.ConfigDetail', null, global);
goog.exportSymbol('proto.api.esm.GameBasicDetail', null, global);
goog.exportSymbol('proto.api.esm.GameLeaderRuleDetail', null, global);
goog.exportSymbol('proto.api.esm.GetActiveSubscriptionRequest', null, global);
goog.exportSymbol('proto.api.esm.GetActiveSubscriptionResponse', null, global);
goog.exportSymbol('proto.api.esm.GetConfigRequest', null, global);
goog.exportSymbol('proto.api.esm.GetConfigResponse', null, global);
goog.exportSymbol('proto.api.esm.GetCurrentPlayerRankRequest', null, global);
goog.exportSymbol('proto.api.esm.GetCurrentPlayerRankResponse', null, global);
goog.exportSymbol('proto.api.esm.GetGameCodeRequest', null, global);
goog.exportSymbol('proto.api.esm.GetGameCodeResponse', null, global);
goog.exportSymbol('proto.api.esm.GetGameDetailRequest', null, global);
goog.exportSymbol('proto.api.esm.GetGameDetailResponse', null, global);
goog.exportSymbol('proto.api.esm.GetInvitedByCountRequest', null, global);
goog.exportSymbol('proto.api.esm.GetInvitedByCountResponse', null, global);
goog.exportSymbol('proto.api.esm.GetItemCountRequest', null, global);
goog.exportSymbol('proto.api.esm.GetItemCountResponse', null, global);
goog.exportSymbol('proto.api.esm.GetPlayerRequest', null, global);
goog.exportSymbol('proto.api.esm.GetPlayerResponse', null, global);
goog.exportSymbol('proto.api.esm.GetPrizeDetailRequest', null, global);
goog.exportSymbol('proto.api.esm.GetPrizeDetailResponse', null, global);
goog.exportSymbol('proto.api.esm.GetPrizeTicketPoolRequest', null, global);
goog.exportSymbol('proto.api.esm.GetPrizeTicketPoolResponse', null, global);
goog.exportSymbol('proto.api.esm.GetPrizeTicketsCollectedRequest', null, global);
goog.exportSymbol('proto.api.esm.GetPrizeTicketsCollectedResponse', null, global);
goog.exportSymbol('proto.api.esm.GetSpinAvailableRequest', null, global);
goog.exportSymbol('proto.api.esm.GetSpinAvailableResponse', null, global);
goog.exportSymbol('proto.api.esm.GetSubscriptionCountRequest', null, global);
goog.exportSymbol('proto.api.esm.GetSubscriptionCountResponse', null, global);
goog.exportSymbol('proto.api.esm.GetTotalTicketsSinceRequest', null, global);
goog.exportSymbol('proto.api.esm.GetTotalTicketsSinceResponse', null, global);
goog.exportSymbol('proto.api.esm.InvitedByDetail', null, global);
goog.exportSymbol('proto.api.esm.ItemCount', null, global);
goog.exportSymbol('proto.api.esm.ItemDetail', null, global);
goog.exportSymbol('proto.api.esm.ItemTypeDetail', null, global);
goog.exportSymbol('proto.api.esm.LeaderboardDetail', null, global);
goog.exportSymbol('proto.api.esm.LeaderboardHistoryDetail', null, global);
goog.exportSymbol('proto.api.esm.ListBuyRequest', null, global);
goog.exportSymbol('proto.api.esm.ListBuyResponse', null, global);
goog.exportSymbol('proto.api.esm.ListGameLeaderRuleRequest', null, global);
goog.exportSymbol('proto.api.esm.ListGameLeaderRuleResponse', null, global);
goog.exportSymbol('proto.api.esm.ListInvitedByRequest', null, global);
goog.exportSymbol('proto.api.esm.ListInvitedByResponse', null, global);
goog.exportSymbol('proto.api.esm.ListItemRequest', null, global);
goog.exportSymbol('proto.api.esm.ListItemResponse', null, global);
goog.exportSymbol('proto.api.esm.ListItemTypeRequest', null, global);
goog.exportSymbol('proto.api.esm.ListItemTypeResponse', null, global);
goog.exportSymbol('proto.api.esm.ListLeaderboardHistoryRequest', null, global);
goog.exportSymbol('proto.api.esm.ListLeaderboardHistoryResponse', null, global);
goog.exportSymbol('proto.api.esm.ListLeaderboardRequest', null, global);
goog.exportSymbol('proto.api.esm.ListLeaderboardResponse', null, global);
goog.exportSymbol('proto.api.esm.ListLogGRequest', null, global);
goog.exportSymbol('proto.api.esm.ListLogGResponse', null, global);
goog.exportSymbol('proto.api.esm.ListPlayerHighscoreRequest', null, global);
goog.exportSymbol('proto.api.esm.ListPlayerHighscoreResponse', null, global);
goog.exportSymbol('proto.api.esm.ListPrizeRequest', null, global);
goog.exportSymbol('proto.api.esm.ListPrizeResponse', null, global);
goog.exportSymbol('proto.api.esm.ListRankRequest', null, global);
goog.exportSymbol('proto.api.esm.ListRankResponse', null, global);
goog.exportSymbol('proto.api.esm.ListSpinnerRuleRequest', null, global);
goog.exportSymbol('proto.api.esm.ListSpinnerRuleResponse', null, global);
goog.exportSymbol('proto.api.esm.ListStatusTypeRequest', null, global);
goog.exportSymbol('proto.api.esm.ListStatusTypeResponse', null, global);
goog.exportSymbol('proto.api.esm.ListSubscriptionRequest', null, global);
goog.exportSymbol('proto.api.esm.ListSubscriptionResponse', null, global);
goog.exportSymbol('proto.api.esm.ListSubscriptionTypeRequest', null, global);
goog.exportSymbol('proto.api.esm.ListSubscriptionTypeResponse', null, global);
goog.exportSymbol('proto.api.esm.ListTimezonesRequest', null, global);
goog.exportSymbol('proto.api.esm.ListTimezonesResponse', null, global);
goog.exportSymbol('proto.api.esm.ListWinTypeRequest', null, global);
goog.exportSymbol('proto.api.esm.ListWinTypeResponse', null, global);
goog.exportSymbol('proto.api.esm.ListWinnerClaimedRequest', null, global);
goog.exportSymbol('proto.api.esm.ListWinnerClaimedResponse', null, global);
goog.exportSymbol('proto.api.esm.ListWinnerRecentRequest', null, global);
goog.exportSymbol('proto.api.esm.ListWinnerRecentResponse', null, global);
goog.exportSymbol('proto.api.esm.ListWinnerRequest', null, global);
goog.exportSymbol('proto.api.esm.ListWinnerResponse', null, global);
goog.exportSymbol('proto.api.esm.ListWinnerUnclaimedRequest', null, global);
goog.exportSymbol('proto.api.esm.ListWinnerUnclaimedResponse', null, global);
goog.exportSymbol('proto.api.esm.LogGDetail', null, global);
goog.exportSymbol('proto.api.esm.LogGEnterRequest', null, global);
goog.exportSymbol('proto.api.esm.LogGEnterResponse', null, global);
goog.exportSymbol('proto.api.esm.LogGLeaveRequest', null, global);
goog.exportSymbol('proto.api.esm.LogGLeaveResponse', null, global);
goog.exportSymbol('proto.api.esm.LogSEnterRequest', null, global);
goog.exportSymbol('proto.api.esm.LogSEnterResponse', null, global);
goog.exportSymbol('proto.api.esm.LogSExtraRequest', null, global);
goog.exportSymbol('proto.api.esm.LogSExtraResponse', null, global);
goog.exportSymbol('proto.api.esm.LogSLeaveRequest', null, global);
goog.exportSymbol('proto.api.esm.LogSLeaveResponse', null, global);
goog.exportSymbol('proto.api.esm.PlayerDetail', null, global);
goog.exportSymbol('proto.api.esm.PrizeBasicDetail', null, global);
goog.exportSymbol('proto.api.esm.PrizeDetail', null, global);
goog.exportSymbol('proto.api.esm.RankDetail', null, global);
goog.exportSymbol('proto.api.esm.SignInRequest', null, global);
goog.exportSymbol('proto.api.esm.SignInResponse', null, global);
goog.exportSymbol('proto.api.esm.SpinnerRuleDetail', null, global);
goog.exportSymbol('proto.api.esm.StatusTypeDetail', null, global);
goog.exportSymbol('proto.api.esm.SubscriptionCount', null, global);
goog.exportSymbol('proto.api.esm.SubscriptionDetail', null, global);
goog.exportSymbol('proto.api.esm.SubscriptionTypeDetail', null, global);
goog.exportSymbol('proto.api.esm.TimezonesDetail', null, global);
goog.exportSymbol('proto.api.esm.UpdateAddressRequest', null, global);
goog.exportSymbol('proto.api.esm.UpdateAddressResponse', null, global);
goog.exportSymbol('proto.api.esm.UpdateMsgTokenRequest', null, global);
goog.exportSymbol('proto.api.esm.UpdateMsgTokenResponse', null, global);
goog.exportSymbol('proto.api.esm.UpdateSocialLinkFBRequest', null, global);
goog.exportSymbol('proto.api.esm.UpdateSocialLinkFBResponse', null, global);
goog.exportSymbol('proto.api.esm.UpdateSocialLinkGoogleRequest', null, global);
goog.exportSymbol('proto.api.esm.UpdateSocialLinkGoogleResponse', null, global);
goog.exportSymbol('proto.api.esm.UpdateUserSettingsRequest', null, global);
goog.exportSymbol('proto.api.esm.UpdateUserSettingsResponse', null, global);
goog.exportSymbol('proto.api.esm.UpdateUserStatusRequest', null, global);
goog.exportSymbol('proto.api.esm.UpdateUserStatusResponse', null, global);
goog.exportSymbol('proto.api.esm.UserDetail', null, global);
goog.exportSymbol('proto.api.esm.WinTypeDetail', null, global);
goog.exportSymbol('proto.api.esm.WinnerDetail', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListStatusTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ListStatusTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListStatusTypeRequest.displayName = 'proto.api.esm.ListStatusTypeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListStatusTypeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.esm.ListStatusTypeResponse.repeatedFields_, null);
};
goog.inherits(proto.api.esm.ListStatusTypeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListStatusTypeResponse.displayName = 'proto.api.esm.ListStatusTypeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.StatusTypeDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.StatusTypeDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.StatusTypeDetail.displayName = 'proto.api.esm.StatusTypeDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListWinTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ListWinTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListWinTypeRequest.displayName = 'proto.api.esm.ListWinTypeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListWinTypeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.esm.ListWinTypeResponse.repeatedFields_, null);
};
goog.inherits(proto.api.esm.ListWinTypeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListWinTypeResponse.displayName = 'proto.api.esm.ListWinTypeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.WinTypeDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.WinTypeDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.WinTypeDetail.displayName = 'proto.api.esm.WinTypeDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListTimezonesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ListTimezonesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListTimezonesRequest.displayName = 'proto.api.esm.ListTimezonesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListTimezonesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.esm.ListTimezonesResponse.repeatedFields_, null);
};
goog.inherits(proto.api.esm.ListTimezonesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListTimezonesResponse.displayName = 'proto.api.esm.ListTimezonesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.TimezonesDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.TimezonesDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.TimezonesDetail.displayName = 'proto.api.esm.TimezonesDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.SignInRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.SignInRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.SignInRequest.displayName = 'proto.api.esm.SignInRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.SignInResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.SignInResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.SignInResponse.displayName = 'proto.api.esm.SignInResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.AddUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.AddUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.AddUserRequest.displayName = 'proto.api.esm.AddUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.AddUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.AddUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.AddUserResponse.displayName = 'proto.api.esm.AddUserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.UpdateMsgTokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.UpdateMsgTokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.UpdateMsgTokenRequest.displayName = 'proto.api.esm.UpdateMsgTokenRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.UpdateMsgTokenResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.UpdateMsgTokenResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.UpdateMsgTokenResponse.displayName = 'proto.api.esm.UpdateMsgTokenResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.UpdateSocialLinkFBRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.UpdateSocialLinkFBRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.UpdateSocialLinkFBRequest.displayName = 'proto.api.esm.UpdateSocialLinkFBRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.UpdateSocialLinkFBResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.UpdateSocialLinkFBResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.UpdateSocialLinkFBResponse.displayName = 'proto.api.esm.UpdateSocialLinkFBResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.UpdateSocialLinkGoogleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.UpdateSocialLinkGoogleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.UpdateSocialLinkGoogleRequest.displayName = 'proto.api.esm.UpdateSocialLinkGoogleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.UpdateSocialLinkGoogleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.UpdateSocialLinkGoogleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.UpdateSocialLinkGoogleResponse.displayName = 'proto.api.esm.UpdateSocialLinkGoogleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.UpdateUserStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.UpdateUserStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.UpdateUserStatusRequest.displayName = 'proto.api.esm.UpdateUserStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.UpdateUserStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.UpdateUserStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.UpdateUserStatusResponse.displayName = 'proto.api.esm.UpdateUserStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.UpdateAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.UpdateAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.UpdateAddressRequest.displayName = 'proto.api.esm.UpdateAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.UpdateAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.UpdateAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.UpdateAddressResponse.displayName = 'proto.api.esm.UpdateAddressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.UpdateUserSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.UpdateUserSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.UpdateUserSettingsRequest.displayName = 'proto.api.esm.UpdateUserSettingsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.UpdateUserSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.UpdateUserSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.UpdateUserSettingsResponse.displayName = 'proto.api.esm.UpdateUserSettingsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ChangePasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ChangePasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ChangePasswordRequest.displayName = 'proto.api.esm.ChangePasswordRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ChangePasswordResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ChangePasswordResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ChangePasswordResponse.displayName = 'proto.api.esm.ChangePasswordResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.UserDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.UserDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.UserDetail.displayName = 'proto.api.esm.UserDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.PlayerDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.PlayerDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.PlayerDetail.displayName = 'proto.api.esm.PlayerDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetPlayerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetPlayerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetPlayerRequest.displayName = 'proto.api.esm.GetPlayerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetPlayerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetPlayerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetPlayerResponse.displayName = 'proto.api.esm.GetPlayerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.PrizeBasicDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.PrizeBasicDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.PrizeBasicDetail.displayName = 'proto.api.esm.PrizeBasicDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetPrizeDetailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetPrizeDetailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetPrizeDetailRequest.displayName = 'proto.api.esm.GetPrizeDetailRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetPrizeDetailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetPrizeDetailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetPrizeDetailResponse.displayName = 'proto.api.esm.GetPrizeDetailResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetTotalTicketsSinceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetTotalTicketsSinceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetTotalTicketsSinceRequest.displayName = 'proto.api.esm.GetTotalTicketsSinceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetTotalTicketsSinceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetTotalTicketsSinceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetTotalTicketsSinceResponse.displayName = 'proto.api.esm.GetTotalTicketsSinceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GameBasicDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GameBasicDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GameBasicDetail.displayName = 'proto.api.esm.GameBasicDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetGameDetailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetGameDetailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetGameDetailRequest.displayName = 'proto.api.esm.GetGameDetailRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetGameDetailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetGameDetailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetGameDetailResponse.displayName = 'proto.api.esm.GetGameDetailResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetConfigRequest.displayName = 'proto.api.esm.GetConfigRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetConfigResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetConfigResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetConfigResponse.displayName = 'proto.api.esm.GetConfigResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ConfigDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ConfigDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ConfigDetail.displayName = 'proto.api.esm.ConfigDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListSpinnerRuleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ListSpinnerRuleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListSpinnerRuleRequest.displayName = 'proto.api.esm.ListSpinnerRuleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListSpinnerRuleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.esm.ListSpinnerRuleResponse.repeatedFields_, null);
};
goog.inherits(proto.api.esm.ListSpinnerRuleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListSpinnerRuleResponse.displayName = 'proto.api.esm.ListSpinnerRuleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.SpinnerRuleDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.SpinnerRuleDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.SpinnerRuleDetail.displayName = 'proto.api.esm.SpinnerRuleDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListGameLeaderRuleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ListGameLeaderRuleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListGameLeaderRuleRequest.displayName = 'proto.api.esm.ListGameLeaderRuleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListGameLeaderRuleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.esm.ListGameLeaderRuleResponse.repeatedFields_, null);
};
goog.inherits(proto.api.esm.ListGameLeaderRuleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListGameLeaderRuleResponse.displayName = 'proto.api.esm.ListGameLeaderRuleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GameLeaderRuleDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GameLeaderRuleDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GameLeaderRuleDetail.displayName = 'proto.api.esm.GameLeaderRuleDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetGameCodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetGameCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetGameCodeRequest.displayName = 'proto.api.esm.GetGameCodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetGameCodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetGameCodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetGameCodeResponse.displayName = 'proto.api.esm.GetGameCodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.LogGEnterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.LogGEnterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.LogGEnterRequest.displayName = 'proto.api.esm.LogGEnterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.LogGEnterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.LogGEnterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.LogGEnterResponse.displayName = 'proto.api.esm.LogGEnterResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.LogGLeaveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.LogGLeaveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.LogGLeaveRequest.displayName = 'proto.api.esm.LogGLeaveRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.LogGLeaveResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.LogGLeaveResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.LogGLeaveResponse.displayName = 'proto.api.esm.LogGLeaveResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListLogGRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ListLogGRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListLogGRequest.displayName = 'proto.api.esm.ListLogGRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListLogGResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.esm.ListLogGResponse.repeatedFields_, null);
};
goog.inherits(proto.api.esm.ListLogGResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListLogGResponse.displayName = 'proto.api.esm.ListLogGResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListLeaderboardHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ListLeaderboardHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListLeaderboardHistoryRequest.displayName = 'proto.api.esm.ListLeaderboardHistoryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListLeaderboardHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.esm.ListLeaderboardHistoryResponse.repeatedFields_, null);
};
goog.inherits(proto.api.esm.ListLeaderboardHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListLeaderboardHistoryResponse.displayName = 'proto.api.esm.ListLeaderboardHistoryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.LeaderboardHistoryDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.LeaderboardHistoryDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.LeaderboardHistoryDetail.displayName = 'proto.api.esm.LeaderboardHistoryDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListLeaderboardRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ListLeaderboardRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListLeaderboardRequest.displayName = 'proto.api.esm.ListLeaderboardRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListLeaderboardResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.esm.ListLeaderboardResponse.repeatedFields_, null);
};
goog.inherits(proto.api.esm.ListLeaderboardResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListLeaderboardResponse.displayName = 'proto.api.esm.ListLeaderboardResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.LeaderboardDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.LeaderboardDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.LeaderboardDetail.displayName = 'proto.api.esm.LeaderboardDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetCurrentPlayerRankRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetCurrentPlayerRankRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetCurrentPlayerRankRequest.displayName = 'proto.api.esm.GetCurrentPlayerRankRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetCurrentPlayerRankResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetCurrentPlayerRankResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetCurrentPlayerRankResponse.displayName = 'proto.api.esm.GetCurrentPlayerRankResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListPlayerHighscoreRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ListPlayerHighscoreRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListPlayerHighscoreRequest.displayName = 'proto.api.esm.ListPlayerHighscoreRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListPlayerHighscoreResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.esm.ListPlayerHighscoreResponse.repeatedFields_, null);
};
goog.inherits(proto.api.esm.ListPlayerHighscoreResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListPlayerHighscoreResponse.displayName = 'proto.api.esm.ListPlayerHighscoreResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.LogGDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.LogGDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.LogGDetail.displayName = 'proto.api.esm.LogGDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetSpinAvailableRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetSpinAvailableRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetSpinAvailableRequest.displayName = 'proto.api.esm.GetSpinAvailableRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetSpinAvailableResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetSpinAvailableResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetSpinAvailableResponse.displayName = 'proto.api.esm.GetSpinAvailableResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.LogSExtraRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.LogSExtraRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.LogSExtraRequest.displayName = 'proto.api.esm.LogSExtraRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.LogSExtraResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.LogSExtraResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.LogSExtraResponse.displayName = 'proto.api.esm.LogSExtraResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.LogSEnterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.LogSEnterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.LogSEnterRequest.displayName = 'proto.api.esm.LogSEnterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.LogSEnterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.LogSEnterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.LogSEnterResponse.displayName = 'proto.api.esm.LogSEnterResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.LogSLeaveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.LogSLeaveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.LogSLeaveRequest.displayName = 'proto.api.esm.LogSLeaveRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.LogSLeaveResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.LogSLeaveResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.LogSLeaveResponse.displayName = 'proto.api.esm.LogSLeaveResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.AddInviteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.AddInviteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.AddInviteRequest.displayName = 'proto.api.esm.AddInviteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.AddInviteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.AddInviteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.AddInviteResponse.displayName = 'proto.api.esm.AddInviteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListInvitedByRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ListInvitedByRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListInvitedByRequest.displayName = 'proto.api.esm.ListInvitedByRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListInvitedByResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.esm.ListInvitedByResponse.repeatedFields_, null);
};
goog.inherits(proto.api.esm.ListInvitedByResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListInvitedByResponse.displayName = 'proto.api.esm.ListInvitedByResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.InvitedByDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.InvitedByDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.InvitedByDetail.displayName = 'proto.api.esm.InvitedByDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetInvitedByCountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetInvitedByCountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetInvitedByCountRequest.displayName = 'proto.api.esm.GetInvitedByCountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetInvitedByCountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetInvitedByCountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetInvitedByCountResponse.displayName = 'proto.api.esm.GetInvitedByCountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListItemRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ListItemRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListItemRequest.displayName = 'proto.api.esm.ListItemRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListItemResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.esm.ListItemResponse.repeatedFields_, null);
};
goog.inherits(proto.api.esm.ListItemResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListItemResponse.displayName = 'proto.api.esm.ListItemResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ItemDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ItemDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ItemDetail.displayName = 'proto.api.esm.ItemDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetItemCountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetItemCountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetItemCountRequest.displayName = 'proto.api.esm.GetItemCountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetItemCountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetItemCountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetItemCountResponse.displayName = 'proto.api.esm.GetItemCountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ItemCount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ItemCount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ItemCount.displayName = 'proto.api.esm.ItemCount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListItemTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ListItemTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListItemTypeRequest.displayName = 'proto.api.esm.ListItemTypeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListItemTypeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.esm.ListItemTypeResponse.repeatedFields_, null);
};
goog.inherits(proto.api.esm.ListItemTypeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListItemTypeResponse.displayName = 'proto.api.esm.ListItemTypeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ItemTypeDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ItemTypeDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ItemTypeDetail.displayName = 'proto.api.esm.ItemTypeDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetPrizeTicketPoolRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetPrizeTicketPoolRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetPrizeTicketPoolRequest.displayName = 'proto.api.esm.GetPrizeTicketPoolRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetPrizeTicketPoolResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetPrizeTicketPoolResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetPrizeTicketPoolResponse.displayName = 'proto.api.esm.GetPrizeTicketPoolResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetPrizeTicketsCollectedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetPrizeTicketsCollectedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetPrizeTicketsCollectedRequest.displayName = 'proto.api.esm.GetPrizeTicketsCollectedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetPrizeTicketsCollectedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetPrizeTicketsCollectedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetPrizeTicketsCollectedResponse.displayName = 'proto.api.esm.GetPrizeTicketsCollectedResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListPrizeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ListPrizeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListPrizeRequest.displayName = 'proto.api.esm.ListPrizeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListPrizeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.esm.ListPrizeResponse.repeatedFields_, null);
};
goog.inherits(proto.api.esm.ListPrizeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListPrizeResponse.displayName = 'proto.api.esm.ListPrizeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.PrizeDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.esm.PrizeDetail.repeatedFields_, null);
};
goog.inherits(proto.api.esm.PrizeDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.PrizeDetail.displayName = 'proto.api.esm.PrizeDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListRankRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ListRankRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListRankRequest.displayName = 'proto.api.esm.ListRankRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListRankResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.esm.ListRankResponse.repeatedFields_, null);
};
goog.inherits(proto.api.esm.ListRankResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListRankResponse.displayName = 'proto.api.esm.ListRankResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.RankDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.RankDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.RankDetail.displayName = 'proto.api.esm.RankDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.BuyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.BuyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.BuyRequest.displayName = 'proto.api.esm.BuyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.BuyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.BuyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.BuyResponse.displayName = 'proto.api.esm.BuyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListBuyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ListBuyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListBuyRequest.displayName = 'proto.api.esm.ListBuyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListBuyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.esm.ListBuyResponse.repeatedFields_, null);
};
goog.inherits(proto.api.esm.ListBuyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListBuyResponse.displayName = 'proto.api.esm.ListBuyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.BuyDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.BuyDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.BuyDetail.displayName = 'proto.api.esm.BuyDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetActiveSubscriptionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetActiveSubscriptionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetActiveSubscriptionRequest.displayName = 'proto.api.esm.GetActiveSubscriptionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetActiveSubscriptionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetActiveSubscriptionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetActiveSubscriptionResponse.displayName = 'proto.api.esm.GetActiveSubscriptionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListSubscriptionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ListSubscriptionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListSubscriptionRequest.displayName = 'proto.api.esm.ListSubscriptionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListSubscriptionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.esm.ListSubscriptionResponse.repeatedFields_, null);
};
goog.inherits(proto.api.esm.ListSubscriptionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListSubscriptionResponse.displayName = 'proto.api.esm.ListSubscriptionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.SubscriptionDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.SubscriptionDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.SubscriptionDetail.displayName = 'proto.api.esm.SubscriptionDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetSubscriptionCountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetSubscriptionCountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetSubscriptionCountRequest.displayName = 'proto.api.esm.GetSubscriptionCountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.GetSubscriptionCountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.GetSubscriptionCountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.GetSubscriptionCountResponse.displayName = 'proto.api.esm.GetSubscriptionCountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.SubscriptionCount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.SubscriptionCount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.SubscriptionCount.displayName = 'proto.api.esm.SubscriptionCount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListSubscriptionTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ListSubscriptionTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListSubscriptionTypeRequest.displayName = 'proto.api.esm.ListSubscriptionTypeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListSubscriptionTypeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.esm.ListSubscriptionTypeResponse.repeatedFields_, null);
};
goog.inherits(proto.api.esm.ListSubscriptionTypeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListSubscriptionTypeResponse.displayName = 'proto.api.esm.ListSubscriptionTypeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.SubscriptionTypeDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.SubscriptionTypeDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.SubscriptionTypeDetail.displayName = 'proto.api.esm.SubscriptionTypeDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ClaimWinnerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ClaimWinnerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ClaimWinnerRequest.displayName = 'proto.api.esm.ClaimWinnerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ClaimWinnerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ClaimWinnerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ClaimWinnerResponse.displayName = 'proto.api.esm.ClaimWinnerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListWinnerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ListWinnerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListWinnerRequest.displayName = 'proto.api.esm.ListWinnerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListWinnerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.esm.ListWinnerResponse.repeatedFields_, null);
};
goog.inherits(proto.api.esm.ListWinnerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListWinnerResponse.displayName = 'proto.api.esm.ListWinnerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListWinnerRecentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ListWinnerRecentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListWinnerRecentRequest.displayName = 'proto.api.esm.ListWinnerRecentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListWinnerRecentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.esm.ListWinnerRecentResponse.repeatedFields_, null);
};
goog.inherits(proto.api.esm.ListWinnerRecentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListWinnerRecentResponse.displayName = 'proto.api.esm.ListWinnerRecentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListWinnerUnclaimedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ListWinnerUnclaimedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListWinnerUnclaimedRequest.displayName = 'proto.api.esm.ListWinnerUnclaimedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListWinnerUnclaimedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.esm.ListWinnerUnclaimedResponse.repeatedFields_, null);
};
goog.inherits(proto.api.esm.ListWinnerUnclaimedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListWinnerUnclaimedResponse.displayName = 'proto.api.esm.ListWinnerUnclaimedResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListWinnerClaimedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.ListWinnerClaimedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListWinnerClaimedRequest.displayName = 'proto.api.esm.ListWinnerClaimedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.ListWinnerClaimedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.esm.ListWinnerClaimedResponse.repeatedFields_, null);
};
goog.inherits(proto.api.esm.ListWinnerClaimedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.ListWinnerClaimedResponse.displayName = 'proto.api.esm.ListWinnerClaimedResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.esm.WinnerDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.esm.WinnerDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.esm.WinnerDetail.displayName = 'proto.api.esm.WinnerDetail';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListStatusTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListStatusTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListStatusTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListStatusTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListStatusTypeRequest}
 */
proto.api.esm.ListStatusTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListStatusTypeRequest;
  return proto.api.esm.ListStatusTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListStatusTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListStatusTypeRequest}
 */
proto.api.esm.ListStatusTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListStatusTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListStatusTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListStatusTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListStatusTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.esm.ListStatusTypeResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListStatusTypeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListStatusTypeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListStatusTypeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListStatusTypeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.esm.StatusTypeDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListStatusTypeResponse}
 */
proto.api.esm.ListStatusTypeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListStatusTypeResponse;
  return proto.api.esm.ListStatusTypeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListStatusTypeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListStatusTypeResponse}
 */
proto.api.esm.ListStatusTypeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.StatusTypeDetail;
      reader.readMessage(value,proto.api.esm.StatusTypeDetail.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListStatusTypeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListStatusTypeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListStatusTypeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListStatusTypeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.esm.StatusTypeDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StatusTypeDetail result = 1;
 * @return {!Array<!proto.api.esm.StatusTypeDetail>}
 */
proto.api.esm.ListStatusTypeResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.api.esm.StatusTypeDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.esm.StatusTypeDetail, 1));
};


/**
 * @param {!Array<!proto.api.esm.StatusTypeDetail>} value
 * @return {!proto.api.esm.ListStatusTypeResponse} returns this
*/
proto.api.esm.ListStatusTypeResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.esm.StatusTypeDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.esm.StatusTypeDetail}
 */
proto.api.esm.ListStatusTypeResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.esm.StatusTypeDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.esm.ListStatusTypeResponse} returns this
 */
proto.api.esm.ListStatusTypeResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.StatusTypeDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.StatusTypeDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.StatusTypeDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.StatusTypeDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.StatusTypeDetail}
 */
proto.api.esm.StatusTypeDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.StatusTypeDetail;
  return proto.api.esm.StatusTypeDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.StatusTypeDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.StatusTypeDetail}
 */
proto.api.esm.StatusTypeDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.StatusTypeDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.StatusTypeDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.StatusTypeDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.StatusTypeDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.api.esm.StatusTypeDetail.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.StatusTypeDetail} returns this
 */
proto.api.esm.StatusTypeDetail.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.api.esm.StatusTypeDetail.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.StatusTypeDetail} returns this
 */
proto.api.esm.StatusTypeDetail.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListWinTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListWinTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListWinTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListWinTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListWinTypeRequest}
 */
proto.api.esm.ListWinTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListWinTypeRequest;
  return proto.api.esm.ListWinTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListWinTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListWinTypeRequest}
 */
proto.api.esm.ListWinTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListWinTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListWinTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListWinTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListWinTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.esm.ListWinTypeResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListWinTypeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListWinTypeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListWinTypeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListWinTypeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.esm.WinTypeDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListWinTypeResponse}
 */
proto.api.esm.ListWinTypeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListWinTypeResponse;
  return proto.api.esm.ListWinTypeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListWinTypeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListWinTypeResponse}
 */
proto.api.esm.ListWinTypeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.WinTypeDetail;
      reader.readMessage(value,proto.api.esm.WinTypeDetail.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListWinTypeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListWinTypeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListWinTypeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListWinTypeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.esm.WinTypeDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WinTypeDetail result = 1;
 * @return {!Array<!proto.api.esm.WinTypeDetail>}
 */
proto.api.esm.ListWinTypeResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.api.esm.WinTypeDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.esm.WinTypeDetail, 1));
};


/**
 * @param {!Array<!proto.api.esm.WinTypeDetail>} value
 * @return {!proto.api.esm.ListWinTypeResponse} returns this
*/
proto.api.esm.ListWinTypeResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.esm.WinTypeDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.esm.WinTypeDetail}
 */
proto.api.esm.ListWinTypeResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.esm.WinTypeDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.esm.ListWinTypeResponse} returns this
 */
proto.api.esm.ListWinTypeResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.WinTypeDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.WinTypeDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.WinTypeDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.WinTypeDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.WinTypeDetail}
 */
proto.api.esm.WinTypeDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.WinTypeDetail;
  return proto.api.esm.WinTypeDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.WinTypeDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.WinTypeDetail}
 */
proto.api.esm.WinTypeDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.WinTypeDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.WinTypeDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.WinTypeDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.WinTypeDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.api.esm.WinTypeDetail.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.WinTypeDetail} returns this
 */
proto.api.esm.WinTypeDetail.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.api.esm.WinTypeDetail.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.WinTypeDetail} returns this
 */
proto.api.esm.WinTypeDetail.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListTimezonesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListTimezonesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListTimezonesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListTimezonesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListTimezonesRequest}
 */
proto.api.esm.ListTimezonesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListTimezonesRequest;
  return proto.api.esm.ListTimezonesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListTimezonesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListTimezonesRequest}
 */
proto.api.esm.ListTimezonesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListTimezonesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListTimezonesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListTimezonesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListTimezonesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.esm.ListTimezonesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListTimezonesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListTimezonesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListTimezonesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListTimezonesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.esm.TimezonesDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListTimezonesResponse}
 */
proto.api.esm.ListTimezonesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListTimezonesResponse;
  return proto.api.esm.ListTimezonesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListTimezonesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListTimezonesResponse}
 */
proto.api.esm.ListTimezonesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.TimezonesDetail;
      reader.readMessage(value,proto.api.esm.TimezonesDetail.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListTimezonesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListTimezonesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListTimezonesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListTimezonesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.esm.TimezonesDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TimezonesDetail result = 1;
 * @return {!Array<!proto.api.esm.TimezonesDetail>}
 */
proto.api.esm.ListTimezonesResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.api.esm.TimezonesDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.esm.TimezonesDetail, 1));
};


/**
 * @param {!Array<!proto.api.esm.TimezonesDetail>} value
 * @return {!proto.api.esm.ListTimezonesResponse} returns this
*/
proto.api.esm.ListTimezonesResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.esm.TimezonesDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.esm.TimezonesDetail}
 */
proto.api.esm.ListTimezonesResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.esm.TimezonesDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.esm.ListTimezonesResponse} returns this
 */
proto.api.esm.ListTimezonesResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.TimezonesDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.TimezonesDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.TimezonesDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.TimezonesDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    stext: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ltext: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.TimezonesDetail}
 */
proto.api.esm.TimezonesDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.TimezonesDetail;
  return proto.api.esm.TimezonesDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.TimezonesDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.TimezonesDetail}
 */
proto.api.esm.TimezonesDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStext(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLtext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.TimezonesDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.TimezonesDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.TimezonesDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.TimezonesDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getStext();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLtext();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.api.esm.TimezonesDetail.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.TimezonesDetail} returns this
 */
proto.api.esm.TimezonesDetail.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double offset = 2;
 * @return {number}
 */
proto.api.esm.TimezonesDetail.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.TimezonesDetail} returns this
 */
proto.api.esm.TimezonesDetail.prototype.setOffset = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string stext = 3;
 * @return {string}
 */
proto.api.esm.TimezonesDetail.prototype.getStext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.TimezonesDetail} returns this
 */
proto.api.esm.TimezonesDetail.prototype.setStext = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ltext = 4;
 * @return {string}
 */
proto.api.esm.TimezonesDetail.prototype.getLtext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.TimezonesDetail} returns this
 */
proto.api.esm.TimezonesDetail.prototype.setLtext = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.SignInRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.SignInRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.SignInRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.SignInRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    idToken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    username: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.SignInRequest}
 */
proto.api.esm.SignInRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.SignInRequest;
  return proto.api.esm.SignInRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.SignInRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.SignInRequest}
 */
proto.api.esm.SignInRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.SignInRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.SignInRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.SignInRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.SignInRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id_token = 1;
 * @return {string}
 */
proto.api.esm.SignInRequest.prototype.getIdToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.SignInRequest} returns this
 */
proto.api.esm.SignInRequest.prototype.setIdToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.api.esm.SignInRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.SignInRequest} returns this
 */
proto.api.esm.SignInRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.SignInResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.SignInResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.SignInResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.SignInResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && proto.api.esm.UserDetail.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.SignInResponse}
 */
proto.api.esm.SignInResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.SignInResponse;
  return proto.api.esm.SignInResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.SignInResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.SignInResponse}
 */
proto.api.esm.SignInResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.UserDetail;
      reader.readMessage(value,proto.api.esm.UserDetail.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.SignInResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.SignInResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.SignInResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.SignInResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.esm.UserDetail.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserDetail result = 1;
 * @return {?proto.api.esm.UserDetail}
 */
proto.api.esm.SignInResponse.prototype.getResult = function() {
  return /** @type{?proto.api.esm.UserDetail} */ (
    jspb.Message.getWrapperField(this, proto.api.esm.UserDetail, 1));
};


/**
 * @param {?proto.api.esm.UserDetail|undefined} value
 * @return {!proto.api.esm.SignInResponse} returns this
*/
proto.api.esm.SignInResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.esm.SignInResponse} returns this
 */
proto.api.esm.SignInResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.esm.SignInResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.AddUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.AddUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.AddUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.AddUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 4, ""),
    firstname: jspb.Message.getFieldWithDefault(msg, 5, ""),
    lastname: jspb.Message.getFieldWithDefault(msg, 6, ""),
    socialLinkFb: jspb.Message.getFieldWithDefault(msg, 7, ""),
    socialLinkGoogle: jspb.Message.getFieldWithDefault(msg, 8, ""),
    avatarUrl: jspb.Message.getFieldWithDefault(msg, 9, ""),
    idToken: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.AddUserRequest}
 */
proto.api.esm.AddUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.AddUserRequest;
  return proto.api.esm.AddUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.AddUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.AddUserRequest}
 */
proto.api.esm.AddUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstname(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastname(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSocialLinkFb(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSocialLinkGoogle(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarUrl(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.AddUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.AddUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.AddUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.AddUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFirstname();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLastname();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSocialLinkFb();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSocialLinkGoogle();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getAvatarUrl();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getIdToken();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.api.esm.AddUserRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.AddUserRequest} returns this
 */
proto.api.esm.AddUserRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.api.esm.AddUserRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.AddUserRequest} returns this
 */
proto.api.esm.AddUserRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.api.esm.AddUserRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.AddUserRequest} returns this
 */
proto.api.esm.AddUserRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string phone = 4;
 * @return {string}
 */
proto.api.esm.AddUserRequest.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.AddUserRequest} returns this
 */
proto.api.esm.AddUserRequest.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string firstname = 5;
 * @return {string}
 */
proto.api.esm.AddUserRequest.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.AddUserRequest} returns this
 */
proto.api.esm.AddUserRequest.prototype.setFirstname = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string lastname = 6;
 * @return {string}
 */
proto.api.esm.AddUserRequest.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.AddUserRequest} returns this
 */
proto.api.esm.AddUserRequest.prototype.setLastname = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string social_link_fb = 7;
 * @return {string}
 */
proto.api.esm.AddUserRequest.prototype.getSocialLinkFb = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.AddUserRequest} returns this
 */
proto.api.esm.AddUserRequest.prototype.setSocialLinkFb = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string social_link_google = 8;
 * @return {string}
 */
proto.api.esm.AddUserRequest.prototype.getSocialLinkGoogle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.AddUserRequest} returns this
 */
proto.api.esm.AddUserRequest.prototype.setSocialLinkGoogle = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string avatar_url = 9;
 * @return {string}
 */
proto.api.esm.AddUserRequest.prototype.getAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.AddUserRequest} returns this
 */
proto.api.esm.AddUserRequest.prototype.setAvatarUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string id_token = 10;
 * @return {string}
 */
proto.api.esm.AddUserRequest.prototype.getIdToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.AddUserRequest} returns this
 */
proto.api.esm.AddUserRequest.prototype.setIdToken = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.AddUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.AddUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.AddUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.AddUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.AddUserResponse}
 */
proto.api.esm.AddUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.AddUserResponse;
  return proto.api.esm.AddUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.AddUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.AddUserResponse}
 */
proto.api.esm.AddUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.AddUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.AddUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.AddUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.AddUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.api.esm.AddUserResponse.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.AddUserResponse} returns this
 */
proto.api.esm.AddUserResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.UpdateMsgTokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.UpdateMsgTokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.UpdateMsgTokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateMsgTokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.UpdateMsgTokenRequest}
 */
proto.api.esm.UpdateMsgTokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.UpdateMsgTokenRequest;
  return proto.api.esm.UpdateMsgTokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.UpdateMsgTokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.UpdateMsgTokenRequest}
 */
proto.api.esm.UpdateMsgTokenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.UpdateMsgTokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.UpdateMsgTokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.UpdateMsgTokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateMsgTokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.UpdateMsgTokenRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.UpdateMsgTokenRequest} returns this
 */
proto.api.esm.UpdateMsgTokenRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.api.esm.UpdateMsgTokenRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UpdateMsgTokenRequest} returns this
 */
proto.api.esm.UpdateMsgTokenRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.UpdateMsgTokenResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.UpdateMsgTokenResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.UpdateMsgTokenResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateMsgTokenResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.UpdateMsgTokenResponse}
 */
proto.api.esm.UpdateMsgTokenResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.UpdateMsgTokenResponse;
  return proto.api.esm.UpdateMsgTokenResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.UpdateMsgTokenResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.UpdateMsgTokenResponse}
 */
proto.api.esm.UpdateMsgTokenResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.UpdateMsgTokenResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.UpdateMsgTokenResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.UpdateMsgTokenResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateMsgTokenResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.api.esm.UpdateMsgTokenResponse.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UpdateMsgTokenResponse} returns this
 */
proto.api.esm.UpdateMsgTokenResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.UpdateSocialLinkFBRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.UpdateSocialLinkFBRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.UpdateSocialLinkFBRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateSocialLinkFBRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    fbId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.UpdateSocialLinkFBRequest}
 */
proto.api.esm.UpdateSocialLinkFBRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.UpdateSocialLinkFBRequest;
  return proto.api.esm.UpdateSocialLinkFBRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.UpdateSocialLinkFBRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.UpdateSocialLinkFBRequest}
 */
proto.api.esm.UpdateSocialLinkFBRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFbId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.UpdateSocialLinkFBRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.UpdateSocialLinkFBRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.UpdateSocialLinkFBRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateSocialLinkFBRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFbId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.UpdateSocialLinkFBRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.UpdateSocialLinkFBRequest} returns this
 */
proto.api.esm.UpdateSocialLinkFBRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string fb_id = 2;
 * @return {string}
 */
proto.api.esm.UpdateSocialLinkFBRequest.prototype.getFbId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UpdateSocialLinkFBRequest} returns this
 */
proto.api.esm.UpdateSocialLinkFBRequest.prototype.setFbId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.UpdateSocialLinkFBResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.UpdateSocialLinkFBResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.UpdateSocialLinkFBResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateSocialLinkFBResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.UpdateSocialLinkFBResponse}
 */
proto.api.esm.UpdateSocialLinkFBResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.UpdateSocialLinkFBResponse;
  return proto.api.esm.UpdateSocialLinkFBResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.UpdateSocialLinkFBResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.UpdateSocialLinkFBResponse}
 */
proto.api.esm.UpdateSocialLinkFBResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.UpdateSocialLinkFBResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.UpdateSocialLinkFBResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.UpdateSocialLinkFBResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateSocialLinkFBResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.api.esm.UpdateSocialLinkFBResponse.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UpdateSocialLinkFBResponse} returns this
 */
proto.api.esm.UpdateSocialLinkFBResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.UpdateSocialLinkGoogleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.UpdateSocialLinkGoogleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.UpdateSocialLinkGoogleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateSocialLinkGoogleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    googleId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.UpdateSocialLinkGoogleRequest}
 */
proto.api.esm.UpdateSocialLinkGoogleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.UpdateSocialLinkGoogleRequest;
  return proto.api.esm.UpdateSocialLinkGoogleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.UpdateSocialLinkGoogleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.UpdateSocialLinkGoogleRequest}
 */
proto.api.esm.UpdateSocialLinkGoogleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoogleId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.UpdateSocialLinkGoogleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.UpdateSocialLinkGoogleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.UpdateSocialLinkGoogleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateSocialLinkGoogleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getGoogleId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.UpdateSocialLinkGoogleRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.UpdateSocialLinkGoogleRequest} returns this
 */
proto.api.esm.UpdateSocialLinkGoogleRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string google_id = 2;
 * @return {string}
 */
proto.api.esm.UpdateSocialLinkGoogleRequest.prototype.getGoogleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UpdateSocialLinkGoogleRequest} returns this
 */
proto.api.esm.UpdateSocialLinkGoogleRequest.prototype.setGoogleId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.UpdateSocialLinkGoogleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.UpdateSocialLinkGoogleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.UpdateSocialLinkGoogleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateSocialLinkGoogleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.UpdateSocialLinkGoogleResponse}
 */
proto.api.esm.UpdateSocialLinkGoogleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.UpdateSocialLinkGoogleResponse;
  return proto.api.esm.UpdateSocialLinkGoogleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.UpdateSocialLinkGoogleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.UpdateSocialLinkGoogleResponse}
 */
proto.api.esm.UpdateSocialLinkGoogleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.UpdateSocialLinkGoogleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.UpdateSocialLinkGoogleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.UpdateSocialLinkGoogleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateSocialLinkGoogleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.api.esm.UpdateSocialLinkGoogleResponse.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UpdateSocialLinkGoogleResponse} returns this
 */
proto.api.esm.UpdateSocialLinkGoogleResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.UpdateUserStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.UpdateUserStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.UpdateUserStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateUserStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.UpdateUserStatusRequest}
 */
proto.api.esm.UpdateUserStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.UpdateUserStatusRequest;
  return proto.api.esm.UpdateUserStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.UpdateUserStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.UpdateUserStatusRequest}
 */
proto.api.esm.UpdateUserStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.UpdateUserStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.UpdateUserStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.UpdateUserStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateUserStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.UpdateUserStatusRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.UpdateUserStatusRequest} returns this
 */
proto.api.esm.UpdateUserStatusRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 status = 2;
 * @return {number}
 */
proto.api.esm.UpdateUserStatusRequest.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.UpdateUserStatusRequest} returns this
 */
proto.api.esm.UpdateUserStatusRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.UpdateUserStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.UpdateUserStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.UpdateUserStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateUserStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.UpdateUserStatusResponse}
 */
proto.api.esm.UpdateUserStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.UpdateUserStatusResponse;
  return proto.api.esm.UpdateUserStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.UpdateUserStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.UpdateUserStatusResponse}
 */
proto.api.esm.UpdateUserStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.UpdateUserStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.UpdateUserStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.UpdateUserStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateUserStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.api.esm.UpdateUserStatusResponse.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UpdateUserStatusResponse} returns this
 */
proto.api.esm.UpdateUserStatusResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.UpdateAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.UpdateAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.UpdateAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    fullName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, ""),
    city: jspb.Message.getFieldWithDefault(msg, 4, ""),
    state: jspb.Message.getFieldWithDefault(msg, 5, ""),
    zipCode: jspb.Message.getFieldWithDefault(msg, 6, ""),
    country: jspb.Message.getFieldWithDefault(msg, 7, ""),
    countryCode: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.UpdateAddressRequest}
 */
proto.api.esm.UpdateAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.UpdateAddressRequest;
  return proto.api.esm.UpdateAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.UpdateAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.UpdateAddressRequest}
 */
proto.api.esm.UpdateAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFullName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setZipCode(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCountryCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.UpdateAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.UpdateAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.UpdateAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFullName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getZipCode();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCountryCode();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.UpdateAddressRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.UpdateAddressRequest} returns this
 */
proto.api.esm.UpdateAddressRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string full_name = 2;
 * @return {string}
 */
proto.api.esm.UpdateAddressRequest.prototype.getFullName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UpdateAddressRequest} returns this
 */
proto.api.esm.UpdateAddressRequest.prototype.setFullName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.api.esm.UpdateAddressRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UpdateAddressRequest} returns this
 */
proto.api.esm.UpdateAddressRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string city = 4;
 * @return {string}
 */
proto.api.esm.UpdateAddressRequest.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UpdateAddressRequest} returns this
 */
proto.api.esm.UpdateAddressRequest.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string state = 5;
 * @return {string}
 */
proto.api.esm.UpdateAddressRequest.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UpdateAddressRequest} returns this
 */
proto.api.esm.UpdateAddressRequest.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string zip_code = 6;
 * @return {string}
 */
proto.api.esm.UpdateAddressRequest.prototype.getZipCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UpdateAddressRequest} returns this
 */
proto.api.esm.UpdateAddressRequest.prototype.setZipCode = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string country = 7;
 * @return {string}
 */
proto.api.esm.UpdateAddressRequest.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UpdateAddressRequest} returns this
 */
proto.api.esm.UpdateAddressRequest.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int32 country_code = 8;
 * @return {number}
 */
proto.api.esm.UpdateAddressRequest.prototype.getCountryCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.UpdateAddressRequest} returns this
 */
proto.api.esm.UpdateAddressRequest.prototype.setCountryCode = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.UpdateAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.UpdateAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.UpdateAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.UpdateAddressResponse}
 */
proto.api.esm.UpdateAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.UpdateAddressResponse;
  return proto.api.esm.UpdateAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.UpdateAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.UpdateAddressResponse}
 */
proto.api.esm.UpdateAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.UpdateAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.UpdateAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.UpdateAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.api.esm.UpdateAddressResponse.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UpdateAddressResponse} returns this
 */
proto.api.esm.UpdateAddressResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.UpdateUserSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.UpdateUserSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.UpdateUserSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateUserSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isNotifyAllowed: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    isNotifyNewReward: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    isNotifyNewTournament: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    isNotifyTourEnding: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    nickName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    avatarUrl: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.UpdateUserSettingsRequest}
 */
proto.api.esm.UpdateUserSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.UpdateUserSettingsRequest;
  return proto.api.esm.UpdateUserSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.UpdateUserSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.UpdateUserSettingsRequest}
 */
proto.api.esm.UpdateUserSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsNotifyAllowed(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsNotifyNewReward(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsNotifyNewTournament(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsNotifyTourEnding(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.UpdateUserSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.UpdateUserSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.UpdateUserSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateUserSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIsNotifyAllowed();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getIsNotifyNewReward();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIsNotifyNewTournament();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIsNotifyTourEnding();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getNickName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAvatarUrl();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.UpdateUserSettingsRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.UpdateUserSettingsRequest} returns this
 */
proto.api.esm.UpdateUserSettingsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool is_notify_allowed = 2;
 * @return {boolean}
 */
proto.api.esm.UpdateUserSettingsRequest.prototype.getIsNotifyAllowed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.esm.UpdateUserSettingsRequest} returns this
 */
proto.api.esm.UpdateUserSettingsRequest.prototype.setIsNotifyAllowed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool is_notify_new_reward = 3;
 * @return {boolean}
 */
proto.api.esm.UpdateUserSettingsRequest.prototype.getIsNotifyNewReward = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.esm.UpdateUserSettingsRequest} returns this
 */
proto.api.esm.UpdateUserSettingsRequest.prototype.setIsNotifyNewReward = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool is_notify_new_tournament = 4;
 * @return {boolean}
 */
proto.api.esm.UpdateUserSettingsRequest.prototype.getIsNotifyNewTournament = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.esm.UpdateUserSettingsRequest} returns this
 */
proto.api.esm.UpdateUserSettingsRequest.prototype.setIsNotifyNewTournament = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool is_notify_tour_ending = 5;
 * @return {boolean}
 */
proto.api.esm.UpdateUserSettingsRequest.prototype.getIsNotifyTourEnding = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.esm.UpdateUserSettingsRequest} returns this
 */
proto.api.esm.UpdateUserSettingsRequest.prototype.setIsNotifyTourEnding = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string nick_name = 6;
 * @return {string}
 */
proto.api.esm.UpdateUserSettingsRequest.prototype.getNickName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UpdateUserSettingsRequest} returns this
 */
proto.api.esm.UpdateUserSettingsRequest.prototype.setNickName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string avatar_url = 7;
 * @return {string}
 */
proto.api.esm.UpdateUserSettingsRequest.prototype.getAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UpdateUserSettingsRequest} returns this
 */
proto.api.esm.UpdateUserSettingsRequest.prototype.setAvatarUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.UpdateUserSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.UpdateUserSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.UpdateUserSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateUserSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.UpdateUserSettingsResponse}
 */
proto.api.esm.UpdateUserSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.UpdateUserSettingsResponse;
  return proto.api.esm.UpdateUserSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.UpdateUserSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.UpdateUserSettingsResponse}
 */
proto.api.esm.UpdateUserSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.UpdateUserSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.UpdateUserSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.UpdateUserSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UpdateUserSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.api.esm.UpdateUserSettingsResponse.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UpdateUserSettingsResponse} returns this
 */
proto.api.esm.UpdateUserSettingsResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ChangePasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ChangePasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ChangePasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ChangePasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    oldPassword: jspb.Message.getFieldWithDefault(msg, 2, ""),
    newPassword: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ChangePasswordRequest}
 */
proto.api.esm.ChangePasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ChangePasswordRequest;
  return proto.api.esm.ChangePasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ChangePasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ChangePasswordRequest}
 */
proto.api.esm.ChangePasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldPassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ChangePasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ChangePasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ChangePasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ChangePasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOldPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNewPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.api.esm.ChangePasswordRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.ChangePasswordRequest} returns this
 */
proto.api.esm.ChangePasswordRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string old_password = 2;
 * @return {string}
 */
proto.api.esm.ChangePasswordRequest.prototype.getOldPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.ChangePasswordRequest} returns this
 */
proto.api.esm.ChangePasswordRequest.prototype.setOldPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string new_password = 3;
 * @return {string}
 */
proto.api.esm.ChangePasswordRequest.prototype.getNewPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.ChangePasswordRequest} returns this
 */
proto.api.esm.ChangePasswordRequest.prototype.setNewPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ChangePasswordResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ChangePasswordResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ChangePasswordResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ChangePasswordResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ChangePasswordResponse}
 */
proto.api.esm.ChangePasswordResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ChangePasswordResponse;
  return proto.api.esm.ChangePasswordResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ChangePasswordResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ChangePasswordResponse}
 */
proto.api.esm.ChangePasswordResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ChangePasswordResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ChangePasswordResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ChangePasswordResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ChangePasswordResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.api.esm.ChangePasswordResponse.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.ChangePasswordResponse} returns this
 */
proto.api.esm.ChangePasswordResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.UserDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.UserDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.UserDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UserDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    username: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 4, ""),
    firstname: jspb.Message.getFieldWithDefault(msg, 5, ""),
    lastname: jspb.Message.getFieldWithDefault(msg, 6, ""),
    createdOn: jspb.Message.getFieldWithDefault(msg, 7, 0),
    lastLogin: jspb.Message.getFieldWithDefault(msg, 8, 0),
    roleId: jspb.Message.getFieldWithDefault(msg, 9, 0),
    status: jspb.Message.getFieldWithDefault(msg, 10, 0),
    gemBalance: jspb.Message.getFieldWithDefault(msg, 11, 0),
    socialLinkFb: jspb.Message.getFieldWithDefault(msg, 12, ""),
    socialLinkGoogle: jspb.Message.getFieldWithDefault(msg, 13, ""),
    avatarUrl: jspb.Message.getFieldWithDefault(msg, 14, ""),
    exp: jspb.Message.getFieldWithDefault(msg, 15, 0),
    fullName: jspb.Message.getFieldWithDefault(msg, 16, ""),
    address: jspb.Message.getFieldWithDefault(msg, 17, ""),
    city: jspb.Message.getFieldWithDefault(msg, 18, ""),
    state: jspb.Message.getFieldWithDefault(msg, 19, ""),
    zipCode: jspb.Message.getFieldWithDefault(msg, 20, ""),
    country: jspb.Message.getFieldWithDefault(msg, 21, ""),
    countryCode: jspb.Message.getFieldWithDefault(msg, 22, 0),
    isNotifyAllowed: jspb.Message.getBooleanFieldWithDefault(msg, 23, false),
    isNotifyNewReward: jspb.Message.getBooleanFieldWithDefault(msg, 24, false),
    isNotifyNewTournament: jspb.Message.getBooleanFieldWithDefault(msg, 25, false),
    isNotifyTourEnding: jspb.Message.getBooleanFieldWithDefault(msg, 26, false),
    nickName: jspb.Message.getFieldWithDefault(msg, 27, ""),
    msgToken: jspb.Message.getFieldWithDefault(msg, 28, ""),
    subscriptionId: jspb.Message.getFieldWithDefault(msg, 29, 0),
    stripeSubId: jspb.Message.getFieldWithDefault(msg, 30, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.UserDetail}
 */
proto.api.esm.UserDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.UserDetail;
  return proto.api.esm.UserDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.UserDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.UserDetail}
 */
proto.api.esm.UserDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstname(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastname(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedOn(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastLogin(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleId(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGemBalance(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setSocialLinkFb(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setSocialLinkGoogle(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarUrl(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExp(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setFullName(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setZipCode(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCountryCode(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsNotifyAllowed(value);
      break;
    case 24:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsNotifyNewReward(value);
      break;
    case 25:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsNotifyNewTournament(value);
      break;
    case 26:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsNotifyTourEnding(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickName(value);
      break;
    case 28:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgToken(value);
      break;
    case 29:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSubscriptionId(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setStripeSubId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.UserDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.UserDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.UserDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.UserDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFirstname();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLastname();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCreatedOn();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getLastLogin();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getRoleId();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getGemBalance();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getSocialLinkFb();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getSocialLinkGoogle();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getAvatarUrl();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getExp();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getFullName();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getZipCode();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getCountryCode();
  if (f !== 0) {
    writer.writeInt32(
      22,
      f
    );
  }
  f = message.getIsNotifyAllowed();
  if (f) {
    writer.writeBool(
      23,
      f
    );
  }
  f = message.getIsNotifyNewReward();
  if (f) {
    writer.writeBool(
      24,
      f
    );
  }
  f = message.getIsNotifyNewTournament();
  if (f) {
    writer.writeBool(
      25,
      f
    );
  }
  f = message.getIsNotifyTourEnding();
  if (f) {
    writer.writeBool(
      26,
      f
    );
  }
  f = message.getNickName();
  if (f.length > 0) {
    writer.writeString(
      27,
      f
    );
  }
  f = message.getMsgToken();
  if (f.length > 0) {
    writer.writeString(
      28,
      f
    );
  }
  f = message.getSubscriptionId();
  if (f !== 0) {
    writer.writeInt64(
      29,
      f
    );
  }
  f = message.getStripeSubId();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.UserDetail.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.api.esm.UserDetail.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.api.esm.UserDetail.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string phone = 4;
 * @return {string}
 */
proto.api.esm.UserDetail.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string firstname = 5;
 * @return {string}
 */
proto.api.esm.UserDetail.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setFirstname = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string lastname = 6;
 * @return {string}
 */
proto.api.esm.UserDetail.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setLastname = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 created_on = 7;
 * @return {number}
 */
proto.api.esm.UserDetail.prototype.getCreatedOn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setCreatedOn = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 last_login = 8;
 * @return {number}
 */
proto.api.esm.UserDetail.prototype.getLastLogin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setLastLogin = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 role_id = 9;
 * @return {number}
 */
proto.api.esm.UserDetail.prototype.getRoleId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setRoleId = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 status = 10;
 * @return {number}
 */
proto.api.esm.UserDetail.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 gem_balance = 11;
 * @return {number}
 */
proto.api.esm.UserDetail.prototype.getGemBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setGemBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string social_link_fb = 12;
 * @return {string}
 */
proto.api.esm.UserDetail.prototype.getSocialLinkFb = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setSocialLinkFb = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string social_link_google = 13;
 * @return {string}
 */
proto.api.esm.UserDetail.prototype.getSocialLinkGoogle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setSocialLinkGoogle = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string avatar_url = 14;
 * @return {string}
 */
proto.api.esm.UserDetail.prototype.getAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setAvatarUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional int32 exp = 15;
 * @return {number}
 */
proto.api.esm.UserDetail.prototype.getExp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setExp = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional string full_name = 16;
 * @return {string}
 */
proto.api.esm.UserDetail.prototype.getFullName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setFullName = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string address = 17;
 * @return {string}
 */
proto.api.esm.UserDetail.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string city = 18;
 * @return {string}
 */
proto.api.esm.UserDetail.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string state = 19;
 * @return {string}
 */
proto.api.esm.UserDetail.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string zip_code = 20;
 * @return {string}
 */
proto.api.esm.UserDetail.prototype.getZipCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setZipCode = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string country = 21;
 * @return {string}
 */
proto.api.esm.UserDetail.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional int32 country_code = 22;
 * @return {number}
 */
proto.api.esm.UserDetail.prototype.getCountryCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setCountryCode = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * optional bool is_notify_allowed = 23;
 * @return {boolean}
 */
proto.api.esm.UserDetail.prototype.getIsNotifyAllowed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setIsNotifyAllowed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 23, value);
};


/**
 * optional bool is_notify_new_reward = 24;
 * @return {boolean}
 */
proto.api.esm.UserDetail.prototype.getIsNotifyNewReward = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 24, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setIsNotifyNewReward = function(value) {
  return jspb.Message.setProto3BooleanField(this, 24, value);
};


/**
 * optional bool is_notify_new_tournament = 25;
 * @return {boolean}
 */
proto.api.esm.UserDetail.prototype.getIsNotifyNewTournament = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 25, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setIsNotifyNewTournament = function(value) {
  return jspb.Message.setProto3BooleanField(this, 25, value);
};


/**
 * optional bool is_notify_tour_ending = 26;
 * @return {boolean}
 */
proto.api.esm.UserDetail.prototype.getIsNotifyTourEnding = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 26, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setIsNotifyTourEnding = function(value) {
  return jspb.Message.setProto3BooleanField(this, 26, value);
};


/**
 * optional string nick_name = 27;
 * @return {string}
 */
proto.api.esm.UserDetail.prototype.getNickName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setNickName = function(value) {
  return jspb.Message.setProto3StringField(this, 27, value);
};


/**
 * optional string msg_token = 28;
 * @return {string}
 */
proto.api.esm.UserDetail.prototype.getMsgToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 28, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setMsgToken = function(value) {
  return jspb.Message.setProto3StringField(this, 28, value);
};


/**
 * optional int64 subscription_id = 29;
 * @return {number}
 */
proto.api.esm.UserDetail.prototype.getSubscriptionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 29, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setSubscriptionId = function(value) {
  return jspb.Message.setProto3IntField(this, 29, value);
};


/**
 * optional string stripe_sub_id = 30;
 * @return {string}
 */
proto.api.esm.UserDetail.prototype.getStripeSubId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.UserDetail} returns this
 */
proto.api.esm.UserDetail.prototype.setStripeSubId = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.PlayerDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.PlayerDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.PlayerDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.PlayerDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nickName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    avatarUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
    exp: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.PlayerDetail}
 */
proto.api.esm.PlayerDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.PlayerDetail;
  return proto.api.esm.PlayerDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.PlayerDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.PlayerDetail}
 */
proto.api.esm.PlayerDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarUrl(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.PlayerDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.PlayerDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.PlayerDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.PlayerDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNickName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAvatarUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExp();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.PlayerDetail.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PlayerDetail} returns this
 */
proto.api.esm.PlayerDetail.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string nick_name = 2;
 * @return {string}
 */
proto.api.esm.PlayerDetail.prototype.getNickName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.PlayerDetail} returns this
 */
proto.api.esm.PlayerDetail.prototype.setNickName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string avatar_url = 3;
 * @return {string}
 */
proto.api.esm.PlayerDetail.prototype.getAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.PlayerDetail} returns this
 */
proto.api.esm.PlayerDetail.prototype.setAvatarUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 exp = 4;
 * @return {number}
 */
proto.api.esm.PlayerDetail.prototype.getExp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PlayerDetail} returns this
 */
proto.api.esm.PlayerDetail.prototype.setExp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetPlayerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetPlayerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetPlayerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetPlayerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetPlayerRequest}
 */
proto.api.esm.GetPlayerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetPlayerRequest;
  return proto.api.esm.GetPlayerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetPlayerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetPlayerRequest}
 */
proto.api.esm.GetPlayerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetPlayerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetPlayerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetPlayerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetPlayerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.GetPlayerRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GetPlayerRequest} returns this
 */
proto.api.esm.GetPlayerRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetPlayerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetPlayerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetPlayerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetPlayerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && proto.api.esm.PlayerDetail.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetPlayerResponse}
 */
proto.api.esm.GetPlayerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetPlayerResponse;
  return proto.api.esm.GetPlayerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetPlayerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetPlayerResponse}
 */
proto.api.esm.GetPlayerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.PlayerDetail;
      reader.readMessage(value,proto.api.esm.PlayerDetail.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetPlayerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetPlayerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetPlayerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetPlayerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.esm.PlayerDetail.serializeBinaryToWriter
    );
  }
};


/**
 * optional PlayerDetail result = 1;
 * @return {?proto.api.esm.PlayerDetail}
 */
proto.api.esm.GetPlayerResponse.prototype.getResult = function() {
  return /** @type{?proto.api.esm.PlayerDetail} */ (
    jspb.Message.getWrapperField(this, proto.api.esm.PlayerDetail, 1));
};


/**
 * @param {?proto.api.esm.PlayerDetail|undefined} value
 * @return {!proto.api.esm.GetPlayerResponse} returns this
*/
proto.api.esm.GetPlayerResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.esm.GetPlayerResponse} returns this
 */
proto.api.esm.GetPlayerResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.esm.GetPlayerResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.PrizeBasicDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.PrizeBasicDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.PrizeBasicDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.PrizeBasicDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    imgUrl: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.PrizeBasicDetail}
 */
proto.api.esm.PrizeBasicDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.PrizeBasicDetail;
  return proto.api.esm.PrizeBasicDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.PrizeBasicDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.PrizeBasicDetail}
 */
proto.api.esm.PrizeBasicDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setImgUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.PrizeBasicDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.PrizeBasicDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.PrizeBasicDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.PrizeBasicDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getImgUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.PrizeBasicDetail.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeBasicDetail} returns this
 */
proto.api.esm.PrizeBasicDetail.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.api.esm.PrizeBasicDetail.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.PrizeBasicDetail} returns this
 */
proto.api.esm.PrizeBasicDetail.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string img_url = 3;
 * @return {string}
 */
proto.api.esm.PrizeBasicDetail.prototype.getImgUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.PrizeBasicDetail} returns this
 */
proto.api.esm.PrizeBasicDetail.prototype.setImgUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetPrizeDetailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetPrizeDetailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetPrizeDetailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetPrizeDetailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetPrizeDetailRequest}
 */
proto.api.esm.GetPrizeDetailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetPrizeDetailRequest;
  return proto.api.esm.GetPrizeDetailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetPrizeDetailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetPrizeDetailRequest}
 */
proto.api.esm.GetPrizeDetailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetPrizeDetailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetPrizeDetailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetPrizeDetailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetPrizeDetailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.GetPrizeDetailRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GetPrizeDetailRequest} returns this
 */
proto.api.esm.GetPrizeDetailRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetPrizeDetailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetPrizeDetailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetPrizeDetailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetPrizeDetailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && proto.api.esm.PrizeBasicDetail.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetPrizeDetailResponse}
 */
proto.api.esm.GetPrizeDetailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetPrizeDetailResponse;
  return proto.api.esm.GetPrizeDetailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetPrizeDetailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetPrizeDetailResponse}
 */
proto.api.esm.GetPrizeDetailResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.PrizeBasicDetail;
      reader.readMessage(value,proto.api.esm.PrizeBasicDetail.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetPrizeDetailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetPrizeDetailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetPrizeDetailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetPrizeDetailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.esm.PrizeBasicDetail.serializeBinaryToWriter
    );
  }
};


/**
 * optional PrizeBasicDetail result = 1;
 * @return {?proto.api.esm.PrizeBasicDetail}
 */
proto.api.esm.GetPrizeDetailResponse.prototype.getResult = function() {
  return /** @type{?proto.api.esm.PrizeBasicDetail} */ (
    jspb.Message.getWrapperField(this, proto.api.esm.PrizeBasicDetail, 1));
};


/**
 * @param {?proto.api.esm.PrizeBasicDetail|undefined} value
 * @return {!proto.api.esm.GetPrizeDetailResponse} returns this
*/
proto.api.esm.GetPrizeDetailResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.esm.GetPrizeDetailResponse} returns this
 */
proto.api.esm.GetPrizeDetailResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.esm.GetPrizeDetailResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetTotalTicketsSinceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetTotalTicketsSinceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetTotalTicketsSinceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetTotalTicketsSinceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    scheduledOn: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetTotalTicketsSinceRequest}
 */
proto.api.esm.GetTotalTicketsSinceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetTotalTicketsSinceRequest;
  return proto.api.esm.GetTotalTicketsSinceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetTotalTicketsSinceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetTotalTicketsSinceRequest}
 */
proto.api.esm.GetTotalTicketsSinceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScheduledOn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetTotalTicketsSinceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetTotalTicketsSinceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetTotalTicketsSinceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetTotalTicketsSinceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getScheduledOn();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 user_id = 1;
 * @return {number}
 */
proto.api.esm.GetTotalTicketsSinceRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GetTotalTicketsSinceRequest} returns this
 */
proto.api.esm.GetTotalTicketsSinceRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 scheduled_on = 2;
 * @return {number}
 */
proto.api.esm.GetTotalTicketsSinceRequest.prototype.getScheduledOn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GetTotalTicketsSinceRequest} returns this
 */
proto.api.esm.GetTotalTicketsSinceRequest.prototype.setScheduledOn = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetTotalTicketsSinceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetTotalTicketsSinceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetTotalTicketsSinceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetTotalTicketsSinceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tickets: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetTotalTicketsSinceResponse}
 */
proto.api.esm.GetTotalTicketsSinceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetTotalTicketsSinceResponse;
  return proto.api.esm.GetTotalTicketsSinceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetTotalTicketsSinceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetTotalTicketsSinceResponse}
 */
proto.api.esm.GetTotalTicketsSinceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTickets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetTotalTicketsSinceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetTotalTicketsSinceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetTotalTicketsSinceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetTotalTicketsSinceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTickets();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 tickets = 1;
 * @return {number}
 */
proto.api.esm.GetTotalTicketsSinceResponse.prototype.getTickets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GetTotalTicketsSinceResponse} returns this
 */
proto.api.esm.GetTotalTicketsSinceResponse.prototype.setTickets = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GameBasicDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GameBasicDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GameBasicDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GameBasicDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    imgUrl: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GameBasicDetail}
 */
proto.api.esm.GameBasicDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GameBasicDetail;
  return proto.api.esm.GameBasicDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GameBasicDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GameBasicDetail}
 */
proto.api.esm.GameBasicDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setImgUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GameBasicDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GameBasicDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GameBasicDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GameBasicDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getImgUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.GameBasicDetail.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GameBasicDetail} returns this
 */
proto.api.esm.GameBasicDetail.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.api.esm.GameBasicDetail.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.GameBasicDetail} returns this
 */
proto.api.esm.GameBasicDetail.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string img_url = 3;
 * @return {string}
 */
proto.api.esm.GameBasicDetail.prototype.getImgUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.GameBasicDetail} returns this
 */
proto.api.esm.GameBasicDetail.prototype.setImgUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetGameDetailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetGameDetailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetGameDetailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetGameDetailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetGameDetailRequest}
 */
proto.api.esm.GetGameDetailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetGameDetailRequest;
  return proto.api.esm.GetGameDetailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetGameDetailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetGameDetailRequest}
 */
proto.api.esm.GetGameDetailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetGameDetailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetGameDetailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetGameDetailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetGameDetailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.GetGameDetailRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GetGameDetailRequest} returns this
 */
proto.api.esm.GetGameDetailRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetGameDetailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetGameDetailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetGameDetailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetGameDetailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && proto.api.esm.GameBasicDetail.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetGameDetailResponse}
 */
proto.api.esm.GetGameDetailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetGameDetailResponse;
  return proto.api.esm.GetGameDetailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetGameDetailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetGameDetailResponse}
 */
proto.api.esm.GetGameDetailResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.GameBasicDetail;
      reader.readMessage(value,proto.api.esm.GameBasicDetail.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetGameDetailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetGameDetailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetGameDetailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetGameDetailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.esm.GameBasicDetail.serializeBinaryToWriter
    );
  }
};


/**
 * optional GameBasicDetail result = 1;
 * @return {?proto.api.esm.GameBasicDetail}
 */
proto.api.esm.GetGameDetailResponse.prototype.getResult = function() {
  return /** @type{?proto.api.esm.GameBasicDetail} */ (
    jspb.Message.getWrapperField(this, proto.api.esm.GameBasicDetail, 1));
};


/**
 * @param {?proto.api.esm.GameBasicDetail|undefined} value
 * @return {!proto.api.esm.GetGameDetailResponse} returns this
*/
proto.api.esm.GetGameDetailResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.esm.GetGameDetailResponse} returns this
 */
proto.api.esm.GetGameDetailResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.esm.GetGameDetailResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetConfigRequest}
 */
proto.api.esm.GetConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetConfigRequest;
  return proto.api.esm.GetConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetConfigRequest}
 */
proto.api.esm.GetConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetConfigResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetConfigResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetConfigResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetConfigResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && proto.api.esm.ConfigDetail.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetConfigResponse}
 */
proto.api.esm.GetConfigResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetConfigResponse;
  return proto.api.esm.GetConfigResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetConfigResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetConfigResponse}
 */
proto.api.esm.GetConfigResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.ConfigDetail;
      reader.readMessage(value,proto.api.esm.ConfigDetail.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetConfigResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetConfigResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetConfigResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetConfigResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.esm.ConfigDetail.serializeBinaryToWriter
    );
  }
};


/**
 * optional ConfigDetail result = 1;
 * @return {?proto.api.esm.ConfigDetail}
 */
proto.api.esm.GetConfigResponse.prototype.getResult = function() {
  return /** @type{?proto.api.esm.ConfigDetail} */ (
    jspb.Message.getWrapperField(this, proto.api.esm.ConfigDetail, 1));
};


/**
 * @param {?proto.api.esm.ConfigDetail|undefined} value
 * @return {!proto.api.esm.GetConfigResponse} returns this
*/
proto.api.esm.GetConfigResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.esm.GetConfigResponse} returns this
 */
proto.api.esm.GetConfigResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.esm.GetConfigResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ConfigDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ConfigDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ConfigDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ConfigDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    invites: jspb.Message.getFieldWithDefault(msg, 1, 0),
    gamesPerAd: jspb.Message.getFieldWithDefault(msg, 2, 0),
    daysToClaim: jspb.Message.getFieldWithDefault(msg, 3, 0),
    freespinPerDay: jspb.Message.getFieldWithDefault(msg, 4, 0),
    gemsPerSpins1: jspb.Message.getFieldWithDefault(msg, 5, 0),
    adsPerSpins1: jspb.Message.getFieldWithDefault(msg, 6, 0),
    gemsPerSpins2: jspb.Message.getFieldWithDefault(msg, 7, 0),
    adsPerSpins2: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ConfigDetail}
 */
proto.api.esm.ConfigDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ConfigDetail;
  return proto.api.esm.ConfigDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ConfigDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ConfigDetail}
 */
proto.api.esm.ConfigDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInvites(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGamesPerAd(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDaysToClaim(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFreespinPerDay(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGemsPerSpins1(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAdsPerSpins1(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGemsPerSpins2(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAdsPerSpins2(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ConfigDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ConfigDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ConfigDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ConfigDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvites();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getGamesPerAd();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getDaysToClaim();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getFreespinPerDay();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getGemsPerSpins1();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getAdsPerSpins1();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getGemsPerSpins2();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getAdsPerSpins2();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
};


/**
 * optional int32 invites = 1;
 * @return {number}
 */
proto.api.esm.ConfigDetail.prototype.getInvites = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ConfigDetail} returns this
 */
proto.api.esm.ConfigDetail.prototype.setInvites = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 games_per_ad = 2;
 * @return {number}
 */
proto.api.esm.ConfigDetail.prototype.getGamesPerAd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ConfigDetail} returns this
 */
proto.api.esm.ConfigDetail.prototype.setGamesPerAd = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 days_to_claim = 3;
 * @return {number}
 */
proto.api.esm.ConfigDetail.prototype.getDaysToClaim = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ConfigDetail} returns this
 */
proto.api.esm.ConfigDetail.prototype.setDaysToClaim = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 freespin_per_day = 4;
 * @return {number}
 */
proto.api.esm.ConfigDetail.prototype.getFreespinPerDay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ConfigDetail} returns this
 */
proto.api.esm.ConfigDetail.prototype.setFreespinPerDay = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 gems_per_spins_1 = 5;
 * @return {number}
 */
proto.api.esm.ConfigDetail.prototype.getGemsPerSpins1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ConfigDetail} returns this
 */
proto.api.esm.ConfigDetail.prototype.setGemsPerSpins1 = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 ads_per_spins_1 = 6;
 * @return {number}
 */
proto.api.esm.ConfigDetail.prototype.getAdsPerSpins1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ConfigDetail} returns this
 */
proto.api.esm.ConfigDetail.prototype.setAdsPerSpins1 = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 gems_per_spins_2 = 7;
 * @return {number}
 */
proto.api.esm.ConfigDetail.prototype.getGemsPerSpins2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ConfigDetail} returns this
 */
proto.api.esm.ConfigDetail.prototype.setGemsPerSpins2 = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 ads_per_spins_2 = 8;
 * @return {number}
 */
proto.api.esm.ConfigDetail.prototype.getAdsPerSpins2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ConfigDetail} returns this
 */
proto.api.esm.ConfigDetail.prototype.setAdsPerSpins2 = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListSpinnerRuleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListSpinnerRuleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListSpinnerRuleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListSpinnerRuleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListSpinnerRuleRequest}
 */
proto.api.esm.ListSpinnerRuleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListSpinnerRuleRequest;
  return proto.api.esm.ListSpinnerRuleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListSpinnerRuleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListSpinnerRuleRequest}
 */
proto.api.esm.ListSpinnerRuleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListSpinnerRuleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListSpinnerRuleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListSpinnerRuleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListSpinnerRuleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.esm.ListSpinnerRuleResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListSpinnerRuleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListSpinnerRuleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListSpinnerRuleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListSpinnerRuleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.esm.SpinnerRuleDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListSpinnerRuleResponse}
 */
proto.api.esm.ListSpinnerRuleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListSpinnerRuleResponse;
  return proto.api.esm.ListSpinnerRuleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListSpinnerRuleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListSpinnerRuleResponse}
 */
proto.api.esm.ListSpinnerRuleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.SpinnerRuleDetail;
      reader.readMessage(value,proto.api.esm.SpinnerRuleDetail.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListSpinnerRuleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListSpinnerRuleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListSpinnerRuleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListSpinnerRuleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.esm.SpinnerRuleDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SpinnerRuleDetail result = 1;
 * @return {!Array<!proto.api.esm.SpinnerRuleDetail>}
 */
proto.api.esm.ListSpinnerRuleResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.api.esm.SpinnerRuleDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.esm.SpinnerRuleDetail, 1));
};


/**
 * @param {!Array<!proto.api.esm.SpinnerRuleDetail>} value
 * @return {!proto.api.esm.ListSpinnerRuleResponse} returns this
*/
proto.api.esm.ListSpinnerRuleResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.esm.SpinnerRuleDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.esm.SpinnerRuleDetail}
 */
proto.api.esm.ListSpinnerRuleResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.esm.SpinnerRuleDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.esm.ListSpinnerRuleResponse} returns this
 */
proto.api.esm.ListSpinnerRuleResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.SpinnerRuleDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.SpinnerRuleDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.SpinnerRuleDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.SpinnerRuleDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    probability: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    win: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    typeId: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.SpinnerRuleDetail}
 */
proto.api.esm.SpinnerRuleDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.SpinnerRuleDetail;
  return proto.api.esm.SpinnerRuleDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.SpinnerRuleDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.SpinnerRuleDetail}
 */
proto.api.esm.SpinnerRuleDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setProbability(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWin(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTypeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.SpinnerRuleDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.SpinnerRuleDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.SpinnerRuleDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.SpinnerRuleDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getProbability();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getWin();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getTypeId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.api.esm.SpinnerRuleDetail.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.SpinnerRuleDetail} returns this
 */
proto.api.esm.SpinnerRuleDetail.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double probability = 2;
 * @return {number}
 */
proto.api.esm.SpinnerRuleDetail.prototype.getProbability = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.SpinnerRuleDetail} returns this
 */
proto.api.esm.SpinnerRuleDetail.prototype.setProbability = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double win = 3;
 * @return {number}
 */
proto.api.esm.SpinnerRuleDetail.prototype.getWin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.SpinnerRuleDetail} returns this
 */
proto.api.esm.SpinnerRuleDetail.prototype.setWin = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional int32 type_id = 4;
 * @return {number}
 */
proto.api.esm.SpinnerRuleDetail.prototype.getTypeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.SpinnerRuleDetail} returns this
 */
proto.api.esm.SpinnerRuleDetail.prototype.setTypeId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListGameLeaderRuleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListGameLeaderRuleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListGameLeaderRuleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListGameLeaderRuleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    gameId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListGameLeaderRuleRequest}
 */
proto.api.esm.ListGameLeaderRuleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListGameLeaderRuleRequest;
  return proto.api.esm.ListGameLeaderRuleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListGameLeaderRuleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListGameLeaderRuleRequest}
 */
proto.api.esm.ListGameLeaderRuleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGameId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListGameLeaderRuleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListGameLeaderRuleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListGameLeaderRuleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListGameLeaderRuleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGameId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 game_id = 1;
 * @return {number}
 */
proto.api.esm.ListGameLeaderRuleRequest.prototype.getGameId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListGameLeaderRuleRequest} returns this
 */
proto.api.esm.ListGameLeaderRuleRequest.prototype.setGameId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.esm.ListGameLeaderRuleResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListGameLeaderRuleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListGameLeaderRuleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListGameLeaderRuleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListGameLeaderRuleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.esm.GameLeaderRuleDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListGameLeaderRuleResponse}
 */
proto.api.esm.ListGameLeaderRuleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListGameLeaderRuleResponse;
  return proto.api.esm.ListGameLeaderRuleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListGameLeaderRuleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListGameLeaderRuleResponse}
 */
proto.api.esm.ListGameLeaderRuleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.GameLeaderRuleDetail;
      reader.readMessage(value,proto.api.esm.GameLeaderRuleDetail.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListGameLeaderRuleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListGameLeaderRuleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListGameLeaderRuleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListGameLeaderRuleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.esm.GameLeaderRuleDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GameLeaderRuleDetail result = 1;
 * @return {!Array<!proto.api.esm.GameLeaderRuleDetail>}
 */
proto.api.esm.ListGameLeaderRuleResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.api.esm.GameLeaderRuleDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.esm.GameLeaderRuleDetail, 1));
};


/**
 * @param {!Array<!proto.api.esm.GameLeaderRuleDetail>} value
 * @return {!proto.api.esm.ListGameLeaderRuleResponse} returns this
*/
proto.api.esm.ListGameLeaderRuleResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.esm.GameLeaderRuleDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.esm.GameLeaderRuleDetail}
 */
proto.api.esm.ListGameLeaderRuleResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.esm.GameLeaderRuleDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.esm.ListGameLeaderRuleResponse} returns this
 */
proto.api.esm.ListGameLeaderRuleResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GameLeaderRuleDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GameLeaderRuleDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GameLeaderRuleDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GameLeaderRuleDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    gameId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rankFrom: jspb.Message.getFieldWithDefault(msg, 2, 0),
    rankTo: jspb.Message.getFieldWithDefault(msg, 3, 0),
    tickets: jspb.Message.getFieldWithDefault(msg, 4, 0),
    exp: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GameLeaderRuleDetail}
 */
proto.api.esm.GameLeaderRuleDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GameLeaderRuleDetail;
  return proto.api.esm.GameLeaderRuleDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GameLeaderRuleDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GameLeaderRuleDetail}
 */
proto.api.esm.GameLeaderRuleDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGameId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRankFrom(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRankTo(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTickets(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GameLeaderRuleDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GameLeaderRuleDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GameLeaderRuleDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GameLeaderRuleDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGameId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRankFrom();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getRankTo();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTickets();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getExp();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional int64 game_id = 1;
 * @return {number}
 */
proto.api.esm.GameLeaderRuleDetail.prototype.getGameId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GameLeaderRuleDetail} returns this
 */
proto.api.esm.GameLeaderRuleDetail.prototype.setGameId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 rank_from = 2;
 * @return {number}
 */
proto.api.esm.GameLeaderRuleDetail.prototype.getRankFrom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GameLeaderRuleDetail} returns this
 */
proto.api.esm.GameLeaderRuleDetail.prototype.setRankFrom = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 rank_to = 3;
 * @return {number}
 */
proto.api.esm.GameLeaderRuleDetail.prototype.getRankTo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GameLeaderRuleDetail} returns this
 */
proto.api.esm.GameLeaderRuleDetail.prototype.setRankTo = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 tickets = 4;
 * @return {number}
 */
proto.api.esm.GameLeaderRuleDetail.prototype.getTickets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GameLeaderRuleDetail} returns this
 */
proto.api.esm.GameLeaderRuleDetail.prototype.setTickets = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 exp = 5;
 * @return {number}
 */
proto.api.esm.GameLeaderRuleDetail.prototype.getExp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GameLeaderRuleDetail} returns this
 */
proto.api.esm.GameLeaderRuleDetail.prototype.setExp = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetGameCodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetGameCodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetGameCodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetGameCodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetGameCodeRequest}
 */
proto.api.esm.GetGameCodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetGameCodeRequest;
  return proto.api.esm.GetGameCodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetGameCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetGameCodeRequest}
 */
proto.api.esm.GetGameCodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetGameCodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetGameCodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetGameCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetGameCodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.GetGameCodeRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GetGameCodeRequest} returns this
 */
proto.api.esm.GetGameCodeRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetGameCodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetGameCodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetGameCodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetGameCodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetGameCodeResponse}
 */
proto.api.esm.GetGameCodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetGameCodeResponse;
  return proto.api.esm.GetGameCodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetGameCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetGameCodeResponse}
 */
proto.api.esm.GetGameCodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetGameCodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetGameCodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetGameCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetGameCodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.api.esm.GetGameCodeResponse.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.GetGameCodeResponse} returns this
 */
proto.api.esm.GetGameCodeResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.LogGEnterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.LogGEnterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.LogGEnterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LogGEnterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    secret: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    prizeId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    gameId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    isWatchedAd: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    isUsedGem: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.LogGEnterRequest}
 */
proto.api.esm.LogGEnterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.LogGEnterRequest;
  return proto.api.esm.LogGEnterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.LogGEnterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.LogGEnterRequest}
 */
proto.api.esm.LogGEnterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecret(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPrizeId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGameId(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsWatchedAd(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsUsedGem(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.LogGEnterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.LogGEnterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.LogGEnterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LogGEnterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecret();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPrizeId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getGameId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getIsWatchedAd();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIsUsedGem();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string secret = 1;
 * @return {string}
 */
proto.api.esm.LogGEnterRequest.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.LogGEnterRequest} returns this
 */
proto.api.esm.LogGEnterRequest.prototype.setSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 user_id = 2;
 * @return {number}
 */
proto.api.esm.LogGEnterRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogGEnterRequest} returns this
 */
proto.api.esm.LogGEnterRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 prize_id = 3;
 * @return {number}
 */
proto.api.esm.LogGEnterRequest.prototype.getPrizeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogGEnterRequest} returns this
 */
proto.api.esm.LogGEnterRequest.prototype.setPrizeId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 game_id = 4;
 * @return {number}
 */
proto.api.esm.LogGEnterRequest.prototype.getGameId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogGEnterRequest} returns this
 */
proto.api.esm.LogGEnterRequest.prototype.setGameId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool is_watched_ad = 5;
 * @return {boolean}
 */
proto.api.esm.LogGEnterRequest.prototype.getIsWatchedAd = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.esm.LogGEnterRequest} returns this
 */
proto.api.esm.LogGEnterRequest.prototype.setIsWatchedAd = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool is_used_gem = 6;
 * @return {boolean}
 */
proto.api.esm.LogGEnterRequest.prototype.getIsUsedGem = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.esm.LogGEnterRequest} returns this
 */
proto.api.esm.LogGEnterRequest.prototype.setIsUsedGem = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.LogGEnterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.LogGEnterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.LogGEnterResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LogGEnterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.LogGEnterResponse}
 */
proto.api.esm.LogGEnterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.LogGEnterResponse;
  return proto.api.esm.LogGEnterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.LogGEnterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.LogGEnterResponse}
 */
proto.api.esm.LogGEnterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.LogGEnterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.LogGEnterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.LogGEnterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LogGEnterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.api.esm.LogGEnterResponse.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.LogGEnterResponse} returns this
 */
proto.api.esm.LogGEnterResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.LogGLeaveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.LogGLeaveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.LogGLeaveRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LogGLeaveRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    secret: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    gameScore: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.LogGLeaveRequest}
 */
proto.api.esm.LogGLeaveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.LogGLeaveRequest;
  return proto.api.esm.LogGLeaveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.LogGLeaveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.LogGLeaveRequest}
 */
proto.api.esm.LogGLeaveRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecret(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGameScore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.LogGLeaveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.LogGLeaveRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.LogGLeaveRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LogGLeaveRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecret();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getGameScore();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string secret = 1;
 * @return {string}
 */
proto.api.esm.LogGLeaveRequest.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.LogGLeaveRequest} returns this
 */
proto.api.esm.LogGLeaveRequest.prototype.setSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 id = 2;
 * @return {number}
 */
proto.api.esm.LogGLeaveRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogGLeaveRequest} returns this
 */
proto.api.esm.LogGLeaveRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 user_id = 3;
 * @return {number}
 */
proto.api.esm.LogGLeaveRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogGLeaveRequest} returns this
 */
proto.api.esm.LogGLeaveRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 game_score = 4;
 * @return {number}
 */
proto.api.esm.LogGLeaveRequest.prototype.getGameScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogGLeaveRequest} returns this
 */
proto.api.esm.LogGLeaveRequest.prototype.setGameScore = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.LogGLeaveResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.LogGLeaveResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.LogGLeaveResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LogGLeaveResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.LogGLeaveResponse}
 */
proto.api.esm.LogGLeaveResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.LogGLeaveResponse;
  return proto.api.esm.LogGLeaveResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.LogGLeaveResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.LogGLeaveResponse}
 */
proto.api.esm.LogGLeaveResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.LogGLeaveResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.LogGLeaveResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.LogGLeaveResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LogGLeaveResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.api.esm.LogGLeaveResponse.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.LogGLeaveResponse} returns this
 */
proto.api.esm.LogGLeaveResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListLogGRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListLogGRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListLogGRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListLogGRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListLogGRequest}
 */
proto.api.esm.ListLogGRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListLogGRequest;
  return proto.api.esm.ListLogGRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListLogGRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListLogGRequest}
 */
proto.api.esm.ListLogGRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListLogGRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListLogGRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListLogGRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListLogGRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 user_id = 1;
 * @return {number}
 */
proto.api.esm.ListLogGRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListLogGRequest} returns this
 */
proto.api.esm.ListLogGRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 limit = 2;
 * @return {number}
 */
proto.api.esm.ListLogGRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListLogGRequest} returns this
 */
proto.api.esm.ListLogGRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 offset = 3;
 * @return {number}
 */
proto.api.esm.ListLogGRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListLogGRequest} returns this
 */
proto.api.esm.ListLogGRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.esm.ListLogGResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListLogGResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListLogGResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListLogGResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListLogGResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.esm.LogGDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListLogGResponse}
 */
proto.api.esm.ListLogGResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListLogGResponse;
  return proto.api.esm.ListLogGResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListLogGResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListLogGResponse}
 */
proto.api.esm.ListLogGResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.LogGDetail;
      reader.readMessage(value,proto.api.esm.LogGDetail.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListLogGResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListLogGResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListLogGResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListLogGResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.esm.LogGDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LogGDetail result = 1;
 * @return {!Array<!proto.api.esm.LogGDetail>}
 */
proto.api.esm.ListLogGResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.api.esm.LogGDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.esm.LogGDetail, 1));
};


/**
 * @param {!Array<!proto.api.esm.LogGDetail>} value
 * @return {!proto.api.esm.ListLogGResponse} returns this
*/
proto.api.esm.ListLogGResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.esm.LogGDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.esm.LogGDetail}
 */
proto.api.esm.ListLogGResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.esm.LogGDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.esm.ListLogGResponse} returns this
 */
proto.api.esm.ListLogGResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListLeaderboardHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListLeaderboardHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListLeaderboardHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListLeaderboardHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cgId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListLeaderboardHistoryRequest}
 */
proto.api.esm.ListLeaderboardHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListLeaderboardHistoryRequest;
  return proto.api.esm.ListLeaderboardHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListLeaderboardHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListLeaderboardHistoryRequest}
 */
proto.api.esm.ListLeaderboardHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCgId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListLeaderboardHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListLeaderboardHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListLeaderboardHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListLeaderboardHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCgId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 cg_id = 1;
 * @return {number}
 */
proto.api.esm.ListLeaderboardHistoryRequest.prototype.getCgId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListLeaderboardHistoryRequest} returns this
 */
proto.api.esm.ListLeaderboardHistoryRequest.prototype.setCgId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 limit = 2;
 * @return {number}
 */
proto.api.esm.ListLeaderboardHistoryRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListLeaderboardHistoryRequest} returns this
 */
proto.api.esm.ListLeaderboardHistoryRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 offset = 3;
 * @return {number}
 */
proto.api.esm.ListLeaderboardHistoryRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListLeaderboardHistoryRequest} returns this
 */
proto.api.esm.ListLeaderboardHistoryRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.esm.ListLeaderboardHistoryResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListLeaderboardHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListLeaderboardHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListLeaderboardHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListLeaderboardHistoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.esm.LeaderboardHistoryDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListLeaderboardHistoryResponse}
 */
proto.api.esm.ListLeaderboardHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListLeaderboardHistoryResponse;
  return proto.api.esm.ListLeaderboardHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListLeaderboardHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListLeaderboardHistoryResponse}
 */
proto.api.esm.ListLeaderboardHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.LeaderboardHistoryDetail;
      reader.readMessage(value,proto.api.esm.LeaderboardHistoryDetail.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListLeaderboardHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListLeaderboardHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListLeaderboardHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListLeaderboardHistoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.esm.LeaderboardHistoryDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LeaderboardHistoryDetail result = 1;
 * @return {!Array<!proto.api.esm.LeaderboardHistoryDetail>}
 */
proto.api.esm.ListLeaderboardHistoryResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.api.esm.LeaderboardHistoryDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.esm.LeaderboardHistoryDetail, 1));
};


/**
 * @param {!Array<!proto.api.esm.LeaderboardHistoryDetail>} value
 * @return {!proto.api.esm.ListLeaderboardHistoryResponse} returns this
*/
proto.api.esm.ListLeaderboardHistoryResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.esm.LeaderboardHistoryDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.esm.LeaderboardHistoryDetail}
 */
proto.api.esm.ListLeaderboardHistoryResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.esm.LeaderboardHistoryDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.esm.ListLeaderboardHistoryResponse} returns this
 */
proto.api.esm.ListLeaderboardHistoryResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.LeaderboardHistoryDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.LeaderboardHistoryDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.LeaderboardHistoryDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LeaderboardHistoryDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    rank: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    nickName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    avatarUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    exp: jspb.Message.getFieldWithDefault(msg, 5, 0),
    gameScore: jspb.Message.getFieldWithDefault(msg, 6, 0),
    tickets: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.LeaderboardHistoryDetail}
 */
proto.api.esm.LeaderboardHistoryDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.LeaderboardHistoryDetail;
  return proto.api.esm.LeaderboardHistoryDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.LeaderboardHistoryDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.LeaderboardHistoryDetail}
 */
proto.api.esm.LeaderboardHistoryDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRank(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarUrl(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExp(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGameScore(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTickets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.LeaderboardHistoryDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.LeaderboardHistoryDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.LeaderboardHistoryDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LeaderboardHistoryDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRank();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getNickName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAvatarUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getExp();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getGameScore();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getTickets();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional int32 rank = 1;
 * @return {number}
 */
proto.api.esm.LeaderboardHistoryDetail.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LeaderboardHistoryDetail} returns this
 */
proto.api.esm.LeaderboardHistoryDetail.prototype.setRank = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 user_id = 2;
 * @return {number}
 */
proto.api.esm.LeaderboardHistoryDetail.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LeaderboardHistoryDetail} returns this
 */
proto.api.esm.LeaderboardHistoryDetail.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string nick_name = 3;
 * @return {string}
 */
proto.api.esm.LeaderboardHistoryDetail.prototype.getNickName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.LeaderboardHistoryDetail} returns this
 */
proto.api.esm.LeaderboardHistoryDetail.prototype.setNickName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string avatar_url = 4;
 * @return {string}
 */
proto.api.esm.LeaderboardHistoryDetail.prototype.getAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.LeaderboardHistoryDetail} returns this
 */
proto.api.esm.LeaderboardHistoryDetail.prototype.setAvatarUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 exp = 5;
 * @return {number}
 */
proto.api.esm.LeaderboardHistoryDetail.prototype.getExp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LeaderboardHistoryDetail} returns this
 */
proto.api.esm.LeaderboardHistoryDetail.prototype.setExp = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 game_score = 6;
 * @return {number}
 */
proto.api.esm.LeaderboardHistoryDetail.prototype.getGameScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LeaderboardHistoryDetail} returns this
 */
proto.api.esm.LeaderboardHistoryDetail.prototype.setGameScore = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 tickets = 7;
 * @return {number}
 */
proto.api.esm.LeaderboardHistoryDetail.prototype.getTickets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LeaderboardHistoryDetail} returns this
 */
proto.api.esm.LeaderboardHistoryDetail.prototype.setTickets = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListLeaderboardRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListLeaderboardRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListLeaderboardRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListLeaderboardRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    gameId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    prizeId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListLeaderboardRequest}
 */
proto.api.esm.ListLeaderboardRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListLeaderboardRequest;
  return proto.api.esm.ListLeaderboardRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListLeaderboardRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListLeaderboardRequest}
 */
proto.api.esm.ListLeaderboardRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGameId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPrizeId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListLeaderboardRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListLeaderboardRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListLeaderboardRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListLeaderboardRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGameId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPrizeId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int64 game_id = 1;
 * @return {number}
 */
proto.api.esm.ListLeaderboardRequest.prototype.getGameId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListLeaderboardRequest} returns this
 */
proto.api.esm.ListLeaderboardRequest.prototype.setGameId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 prize_id = 2;
 * @return {number}
 */
proto.api.esm.ListLeaderboardRequest.prototype.getPrizeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListLeaderboardRequest} returns this
 */
proto.api.esm.ListLeaderboardRequest.prototype.setPrizeId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 limit = 3;
 * @return {number}
 */
proto.api.esm.ListLeaderboardRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListLeaderboardRequest} returns this
 */
proto.api.esm.ListLeaderboardRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 offset = 4;
 * @return {number}
 */
proto.api.esm.ListLeaderboardRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListLeaderboardRequest} returns this
 */
proto.api.esm.ListLeaderboardRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.esm.ListLeaderboardResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListLeaderboardResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListLeaderboardResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListLeaderboardResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListLeaderboardResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.esm.LeaderboardDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListLeaderboardResponse}
 */
proto.api.esm.ListLeaderboardResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListLeaderboardResponse;
  return proto.api.esm.ListLeaderboardResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListLeaderboardResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListLeaderboardResponse}
 */
proto.api.esm.ListLeaderboardResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.LeaderboardDetail;
      reader.readMessage(value,proto.api.esm.LeaderboardDetail.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListLeaderboardResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListLeaderboardResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListLeaderboardResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListLeaderboardResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.esm.LeaderboardDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LeaderboardDetail result = 1;
 * @return {!Array<!proto.api.esm.LeaderboardDetail>}
 */
proto.api.esm.ListLeaderboardResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.api.esm.LeaderboardDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.esm.LeaderboardDetail, 1));
};


/**
 * @param {!Array<!proto.api.esm.LeaderboardDetail>} value
 * @return {!proto.api.esm.ListLeaderboardResponse} returns this
*/
proto.api.esm.ListLeaderboardResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.esm.LeaderboardDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.esm.LeaderboardDetail}
 */
proto.api.esm.ListLeaderboardResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.esm.LeaderboardDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.esm.ListLeaderboardResponse} returns this
 */
proto.api.esm.ListLeaderboardResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.LeaderboardDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.LeaderboardDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.LeaderboardDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LeaderboardDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nickName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    avatarUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
    exp: jspb.Message.getFieldWithDefault(msg, 4, 0),
    gameScore: jspb.Message.getFieldWithDefault(msg, 5, 0),
    leaveTimestamp: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.LeaderboardDetail}
 */
proto.api.esm.LeaderboardDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.LeaderboardDetail;
  return proto.api.esm.LeaderboardDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.LeaderboardDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.LeaderboardDetail}
 */
proto.api.esm.LeaderboardDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarUrl(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExp(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGameScore(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLeaveTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.LeaderboardDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.LeaderboardDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.LeaderboardDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LeaderboardDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNickName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAvatarUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExp();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getGameScore();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getLeaveTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional int64 user_id = 1;
 * @return {number}
 */
proto.api.esm.LeaderboardDetail.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LeaderboardDetail} returns this
 */
proto.api.esm.LeaderboardDetail.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string nick_name = 2;
 * @return {string}
 */
proto.api.esm.LeaderboardDetail.prototype.getNickName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.LeaderboardDetail} returns this
 */
proto.api.esm.LeaderboardDetail.prototype.setNickName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string avatar_url = 3;
 * @return {string}
 */
proto.api.esm.LeaderboardDetail.prototype.getAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.LeaderboardDetail} returns this
 */
proto.api.esm.LeaderboardDetail.prototype.setAvatarUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 exp = 4;
 * @return {number}
 */
proto.api.esm.LeaderboardDetail.prototype.getExp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LeaderboardDetail} returns this
 */
proto.api.esm.LeaderboardDetail.prototype.setExp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 game_score = 5;
 * @return {number}
 */
proto.api.esm.LeaderboardDetail.prototype.getGameScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LeaderboardDetail} returns this
 */
proto.api.esm.LeaderboardDetail.prototype.setGameScore = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 leave_timestamp = 6;
 * @return {number}
 */
proto.api.esm.LeaderboardDetail.prototype.getLeaveTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LeaderboardDetail} returns this
 */
proto.api.esm.LeaderboardDetail.prototype.setLeaveTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetCurrentPlayerRankRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetCurrentPlayerRankRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetCurrentPlayerRankRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetCurrentPlayerRankRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    gameId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    prizeId: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetCurrentPlayerRankRequest}
 */
proto.api.esm.GetCurrentPlayerRankRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetCurrentPlayerRankRequest;
  return proto.api.esm.GetCurrentPlayerRankRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetCurrentPlayerRankRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetCurrentPlayerRankRequest}
 */
proto.api.esm.GetCurrentPlayerRankRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGameId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPrizeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetCurrentPlayerRankRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetCurrentPlayerRankRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetCurrentPlayerRankRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetCurrentPlayerRankRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getGameId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPrizeId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 user_id = 1;
 * @return {number}
 */
proto.api.esm.GetCurrentPlayerRankRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GetCurrentPlayerRankRequest} returns this
 */
proto.api.esm.GetCurrentPlayerRankRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 game_id = 2;
 * @return {number}
 */
proto.api.esm.GetCurrentPlayerRankRequest.prototype.getGameId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GetCurrentPlayerRankRequest} returns this
 */
proto.api.esm.GetCurrentPlayerRankRequest.prototype.setGameId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 prize_id = 3;
 * @return {number}
 */
proto.api.esm.GetCurrentPlayerRankRequest.prototype.getPrizeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GetCurrentPlayerRankRequest} returns this
 */
proto.api.esm.GetCurrentPlayerRankRequest.prototype.setPrizeId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetCurrentPlayerRankResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetCurrentPlayerRankResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetCurrentPlayerRankResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetCurrentPlayerRankResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetCurrentPlayerRankResponse}
 */
proto.api.esm.GetCurrentPlayerRankResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetCurrentPlayerRankResponse;
  return proto.api.esm.GetCurrentPlayerRankResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetCurrentPlayerRankResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetCurrentPlayerRankResponse}
 */
proto.api.esm.GetCurrentPlayerRankResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetCurrentPlayerRankResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetCurrentPlayerRankResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetCurrentPlayerRankResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetCurrentPlayerRankResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 result = 1;
 * @return {number}
 */
proto.api.esm.GetCurrentPlayerRankResponse.prototype.getResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GetCurrentPlayerRankResponse} returns this
 */
proto.api.esm.GetCurrentPlayerRankResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListPlayerHighscoreRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListPlayerHighscoreRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListPlayerHighscoreRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListPlayerHighscoreRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListPlayerHighscoreRequest}
 */
proto.api.esm.ListPlayerHighscoreRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListPlayerHighscoreRequest;
  return proto.api.esm.ListPlayerHighscoreRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListPlayerHighscoreRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListPlayerHighscoreRequest}
 */
proto.api.esm.ListPlayerHighscoreRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPlayerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListPlayerHighscoreRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListPlayerHighscoreRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListPlayerHighscoreRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListPlayerHighscoreRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 player_id = 1;
 * @return {number}
 */
proto.api.esm.ListPlayerHighscoreRequest.prototype.getPlayerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListPlayerHighscoreRequest} returns this
 */
proto.api.esm.ListPlayerHighscoreRequest.prototype.setPlayerId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.esm.ListPlayerHighscoreResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListPlayerHighscoreResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListPlayerHighscoreResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListPlayerHighscoreResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListPlayerHighscoreResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.esm.LogGDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListPlayerHighscoreResponse}
 */
proto.api.esm.ListPlayerHighscoreResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListPlayerHighscoreResponse;
  return proto.api.esm.ListPlayerHighscoreResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListPlayerHighscoreResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListPlayerHighscoreResponse}
 */
proto.api.esm.ListPlayerHighscoreResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.LogGDetail;
      reader.readMessage(value,proto.api.esm.LogGDetail.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListPlayerHighscoreResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListPlayerHighscoreResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListPlayerHighscoreResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListPlayerHighscoreResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.esm.LogGDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LogGDetail result = 1;
 * @return {!Array<!proto.api.esm.LogGDetail>}
 */
proto.api.esm.ListPlayerHighscoreResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.api.esm.LogGDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.esm.LogGDetail, 1));
};


/**
 * @param {!Array<!proto.api.esm.LogGDetail>} value
 * @return {!proto.api.esm.ListPlayerHighscoreResponse} returns this
*/
proto.api.esm.ListPlayerHighscoreResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.esm.LogGDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.esm.LogGDetail}
 */
proto.api.esm.ListPlayerHighscoreResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.esm.LogGDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.esm.ListPlayerHighscoreResponse} returns this
 */
proto.api.esm.ListPlayerHighscoreResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.LogGDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.LogGDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.LogGDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LogGDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    nickName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    avatarUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    prizeId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    prizeTitle: jspb.Message.getFieldWithDefault(msg, 6, ""),
    prizeImgUrl: jspb.Message.getFieldWithDefault(msg, 7, ""),
    typeId: jspb.Message.getFieldWithDefault(msg, 8, 0),
    gameId: jspb.Message.getFieldWithDefault(msg, 9, 0),
    gameTitle: jspb.Message.getFieldWithDefault(msg, 10, ""),
    gameImgUrl: jspb.Message.getFieldWithDefault(msg, 11, ""),
    enterTimestamp: jspb.Message.getFieldWithDefault(msg, 12, 0),
    leaveTimestamp: jspb.Message.getFieldWithDefault(msg, 13, 0),
    isWatchedAd: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    isUsedGem: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    gameScore: jspb.Message.getFieldWithDefault(msg, 16, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.LogGDetail}
 */
proto.api.esm.LogGDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.LogGDetail;
  return proto.api.esm.LogGDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.LogGDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.LogGDetail}
 */
proto.api.esm.LogGDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarUrl(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPrizeId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrizeTitle(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrizeImgUrl(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTypeId(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGameId(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setGameTitle(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setGameImgUrl(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEnterTimestamp(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLeaveTimestamp(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsWatchedAd(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsUsedGem(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGameScore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.LogGDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.LogGDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.LogGDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LogGDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getNickName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAvatarUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPrizeId();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getPrizeTitle();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPrizeImgUrl();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTypeId();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getGameId();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getGameTitle();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getGameImgUrl();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getEnterTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getLeaveTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getIsWatchedAd();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getIsUsedGem();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getGameScore();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.LogGDetail.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogGDetail} returns this
 */
proto.api.esm.LogGDetail.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 user_id = 2;
 * @return {number}
 */
proto.api.esm.LogGDetail.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogGDetail} returns this
 */
proto.api.esm.LogGDetail.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string nick_name = 3;
 * @return {string}
 */
proto.api.esm.LogGDetail.prototype.getNickName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.LogGDetail} returns this
 */
proto.api.esm.LogGDetail.prototype.setNickName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string avatar_url = 4;
 * @return {string}
 */
proto.api.esm.LogGDetail.prototype.getAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.LogGDetail} returns this
 */
proto.api.esm.LogGDetail.prototype.setAvatarUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 prize_id = 5;
 * @return {number}
 */
proto.api.esm.LogGDetail.prototype.getPrizeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogGDetail} returns this
 */
proto.api.esm.LogGDetail.prototype.setPrizeId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string prize_title = 6;
 * @return {string}
 */
proto.api.esm.LogGDetail.prototype.getPrizeTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.LogGDetail} returns this
 */
proto.api.esm.LogGDetail.prototype.setPrizeTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string prize_img_url = 7;
 * @return {string}
 */
proto.api.esm.LogGDetail.prototype.getPrizeImgUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.LogGDetail} returns this
 */
proto.api.esm.LogGDetail.prototype.setPrizeImgUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int32 type_id = 8;
 * @return {number}
 */
proto.api.esm.LogGDetail.prototype.getTypeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogGDetail} returns this
 */
proto.api.esm.LogGDetail.prototype.setTypeId = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 game_id = 9;
 * @return {number}
 */
proto.api.esm.LogGDetail.prototype.getGameId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogGDetail} returns this
 */
proto.api.esm.LogGDetail.prototype.setGameId = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string game_title = 10;
 * @return {string}
 */
proto.api.esm.LogGDetail.prototype.getGameTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.LogGDetail} returns this
 */
proto.api.esm.LogGDetail.prototype.setGameTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string game_img_url = 11;
 * @return {string}
 */
proto.api.esm.LogGDetail.prototype.getGameImgUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.LogGDetail} returns this
 */
proto.api.esm.LogGDetail.prototype.setGameImgUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int64 enter_timestamp = 12;
 * @return {number}
 */
proto.api.esm.LogGDetail.prototype.getEnterTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogGDetail} returns this
 */
proto.api.esm.LogGDetail.prototype.setEnterTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 leave_timestamp = 13;
 * @return {number}
 */
proto.api.esm.LogGDetail.prototype.getLeaveTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogGDetail} returns this
 */
proto.api.esm.LogGDetail.prototype.setLeaveTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional bool is_watched_ad = 14;
 * @return {boolean}
 */
proto.api.esm.LogGDetail.prototype.getIsWatchedAd = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.esm.LogGDetail} returns this
 */
proto.api.esm.LogGDetail.prototype.setIsWatchedAd = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional bool is_used_gem = 15;
 * @return {boolean}
 */
proto.api.esm.LogGDetail.prototype.getIsUsedGem = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.esm.LogGDetail} returns this
 */
proto.api.esm.LogGDetail.prototype.setIsUsedGem = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional int32 game_score = 16;
 * @return {number}
 */
proto.api.esm.LogGDetail.prototype.getGameScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogGDetail} returns this
 */
proto.api.esm.LogGDetail.prototype.setGameScore = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetSpinAvailableRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetSpinAvailableRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetSpinAvailableRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetSpinAvailableRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetSpinAvailableRequest}
 */
proto.api.esm.GetSpinAvailableRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetSpinAvailableRequest;
  return proto.api.esm.GetSpinAvailableRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetSpinAvailableRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetSpinAvailableRequest}
 */
proto.api.esm.GetSpinAvailableRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetSpinAvailableRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetSpinAvailableRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetSpinAvailableRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetSpinAvailableRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 user_id = 1;
 * @return {number}
 */
proto.api.esm.GetSpinAvailableRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GetSpinAvailableRequest} returns this
 */
proto.api.esm.GetSpinAvailableRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetSpinAvailableResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetSpinAvailableResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetSpinAvailableResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetSpinAvailableResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetSpinAvailableResponse}
 */
proto.api.esm.GetSpinAvailableResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetSpinAvailableResponse;
  return proto.api.esm.GetSpinAvailableResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetSpinAvailableResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetSpinAvailableResponse}
 */
proto.api.esm.GetSpinAvailableResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetSpinAvailableResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetSpinAvailableResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetSpinAvailableResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetSpinAvailableResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 result = 1;
 * @return {number}
 */
proto.api.esm.GetSpinAvailableResponse.prototype.getResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GetSpinAvailableResponse} returns this
 */
proto.api.esm.GetSpinAvailableResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.LogSExtraRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.LogSExtraRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.LogSExtraRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LogSExtraRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isGemOrAd: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.LogSExtraRequest}
 */
proto.api.esm.LogSExtraRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.LogSExtraRequest;
  return proto.api.esm.LogSExtraRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.LogSExtraRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.LogSExtraRequest}
 */
proto.api.esm.LogSExtraRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsGemOrAd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.LogSExtraRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.LogSExtraRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.LogSExtraRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LogSExtraRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIsGemOrAd();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int64 user_id = 1;
 * @return {number}
 */
proto.api.esm.LogSExtraRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogSExtraRequest} returns this
 */
proto.api.esm.LogSExtraRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool is_gem_or_ad = 2;
 * @return {boolean}
 */
proto.api.esm.LogSExtraRequest.prototype.getIsGemOrAd = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.esm.LogSExtraRequest} returns this
 */
proto.api.esm.LogSExtraRequest.prototype.setIsGemOrAd = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.LogSExtraResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.LogSExtraResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.LogSExtraResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LogSExtraResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.LogSExtraResponse}
 */
proto.api.esm.LogSExtraResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.LogSExtraResponse;
  return proto.api.esm.LogSExtraResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.LogSExtraResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.LogSExtraResponse}
 */
proto.api.esm.LogSExtraResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.LogSExtraResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.LogSExtraResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.LogSExtraResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LogSExtraResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 result = 1;
 * @return {number}
 */
proto.api.esm.LogSExtraResponse.prototype.getResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogSExtraResponse} returns this
 */
proto.api.esm.LogSExtraResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.LogSEnterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.LogSEnterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.LogSEnterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LogSEnterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    prizeId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.LogSEnterRequest}
 */
proto.api.esm.LogSEnterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.LogSEnterRequest;
  return proto.api.esm.LogSEnterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.LogSEnterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.LogSEnterRequest}
 */
proto.api.esm.LogSEnterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPrizeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.LogSEnterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.LogSEnterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.LogSEnterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LogSEnterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPrizeId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 user_id = 1;
 * @return {number}
 */
proto.api.esm.LogSEnterRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogSEnterRequest} returns this
 */
proto.api.esm.LogSEnterRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 prize_id = 2;
 * @return {number}
 */
proto.api.esm.LogSEnterRequest.prototype.getPrizeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogSEnterRequest} returns this
 */
proto.api.esm.LogSEnterRequest.prototype.setPrizeId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.LogSEnterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.LogSEnterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.LogSEnterResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LogSEnterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.LogSEnterResponse}
 */
proto.api.esm.LogSEnterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.LogSEnterResponse;
  return proto.api.esm.LogSEnterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.LogSEnterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.LogSEnterResponse}
 */
proto.api.esm.LogSEnterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.LogSEnterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.LogSEnterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.LogSEnterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LogSEnterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 result = 1;
 * @return {number}
 */
proto.api.esm.LogSEnterResponse.prototype.getResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogSEnterResponse} returns this
 */
proto.api.esm.LogSEnterResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.LogSLeaveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.LogSLeaveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.LogSLeaveRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LogSLeaveRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    winType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    winAmount: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.LogSLeaveRequest}
 */
proto.api.esm.LogSLeaveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.LogSLeaveRequest;
  return proto.api.esm.LogSLeaveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.LogSLeaveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.LogSLeaveRequest}
 */
proto.api.esm.LogSLeaveRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWinType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWinAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.LogSLeaveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.LogSLeaveRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.LogSLeaveRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LogSLeaveRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getWinType();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getWinAmount();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.LogSLeaveRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogSLeaveRequest} returns this
 */
proto.api.esm.LogSLeaveRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 user_id = 2;
 * @return {number}
 */
proto.api.esm.LogSLeaveRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogSLeaveRequest} returns this
 */
proto.api.esm.LogSLeaveRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 win_type = 3;
 * @return {number}
 */
proto.api.esm.LogSLeaveRequest.prototype.getWinType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogSLeaveRequest} returns this
 */
proto.api.esm.LogSLeaveRequest.prototype.setWinType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 win_amount = 4;
 * @return {number}
 */
proto.api.esm.LogSLeaveRequest.prototype.getWinAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.LogSLeaveRequest} returns this
 */
proto.api.esm.LogSLeaveRequest.prototype.setWinAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.LogSLeaveResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.LogSLeaveResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.LogSLeaveResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LogSLeaveResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.LogSLeaveResponse}
 */
proto.api.esm.LogSLeaveResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.LogSLeaveResponse;
  return proto.api.esm.LogSLeaveResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.LogSLeaveResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.LogSLeaveResponse}
 */
proto.api.esm.LogSLeaveResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.LogSLeaveResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.LogSLeaveResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.LogSLeaveResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.LogSLeaveResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.api.esm.LogSLeaveResponse.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.LogSLeaveResponse} returns this
 */
proto.api.esm.LogSLeaveResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.AddInviteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.AddInviteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.AddInviteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.AddInviteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    invitedBy: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.AddInviteRequest}
 */
proto.api.esm.AddInviteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.AddInviteRequest;
  return proto.api.esm.AddInviteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.AddInviteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.AddInviteRequest}
 */
proto.api.esm.AddInviteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInvitedBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.AddInviteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.AddInviteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.AddInviteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.AddInviteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getInvitedBy();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 user_id = 1;
 * @return {number}
 */
proto.api.esm.AddInviteRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.AddInviteRequest} returns this
 */
proto.api.esm.AddInviteRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 invited_by = 2;
 * @return {number}
 */
proto.api.esm.AddInviteRequest.prototype.getInvitedBy = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.AddInviteRequest} returns this
 */
proto.api.esm.AddInviteRequest.prototype.setInvitedBy = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.AddInviteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.AddInviteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.AddInviteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.AddInviteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.AddInviteResponse}
 */
proto.api.esm.AddInviteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.AddInviteResponse;
  return proto.api.esm.AddInviteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.AddInviteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.AddInviteResponse}
 */
proto.api.esm.AddInviteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.AddInviteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.AddInviteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.AddInviteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.AddInviteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.api.esm.AddInviteResponse.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.AddInviteResponse} returns this
 */
proto.api.esm.AddInviteResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListInvitedByRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListInvitedByRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListInvitedByRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListInvitedByRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    invitedBy: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListInvitedByRequest}
 */
proto.api.esm.ListInvitedByRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListInvitedByRequest;
  return proto.api.esm.ListInvitedByRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListInvitedByRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListInvitedByRequest}
 */
proto.api.esm.ListInvitedByRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInvitedBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListInvitedByRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListInvitedByRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListInvitedByRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListInvitedByRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvitedBy();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 invited_by = 1;
 * @return {number}
 */
proto.api.esm.ListInvitedByRequest.prototype.getInvitedBy = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListInvitedByRequest} returns this
 */
proto.api.esm.ListInvitedByRequest.prototype.setInvitedBy = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.esm.ListInvitedByResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListInvitedByResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListInvitedByResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListInvitedByResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListInvitedByResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.esm.InvitedByDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListInvitedByResponse}
 */
proto.api.esm.ListInvitedByResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListInvitedByResponse;
  return proto.api.esm.ListInvitedByResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListInvitedByResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListInvitedByResponse}
 */
proto.api.esm.ListInvitedByResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.InvitedByDetail;
      reader.readMessage(value,proto.api.esm.InvitedByDetail.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListInvitedByResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListInvitedByResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListInvitedByResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListInvitedByResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.esm.InvitedByDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated InvitedByDetail result = 1;
 * @return {!Array<!proto.api.esm.InvitedByDetail>}
 */
proto.api.esm.ListInvitedByResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.api.esm.InvitedByDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.esm.InvitedByDetail, 1));
};


/**
 * @param {!Array<!proto.api.esm.InvitedByDetail>} value
 * @return {!proto.api.esm.ListInvitedByResponse} returns this
*/
proto.api.esm.ListInvitedByResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.esm.InvitedByDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.esm.InvitedByDetail}
 */
proto.api.esm.ListInvitedByResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.esm.InvitedByDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.esm.ListInvitedByResponse} returns this
 */
proto.api.esm.ListInvitedByResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.InvitedByDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.InvitedByDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.InvitedByDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.InvitedByDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    invitedBy: jspb.Message.getFieldWithDefault(msg, 3, 0),
    invitedDate: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.InvitedByDetail}
 */
proto.api.esm.InvitedByDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.InvitedByDetail;
  return proto.api.esm.InvitedByDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.InvitedByDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.InvitedByDetail}
 */
proto.api.esm.InvitedByDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInvitedBy(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInvitedDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.InvitedByDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.InvitedByDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.InvitedByDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.InvitedByDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getInvitedBy();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getInvitedDate();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.InvitedByDetail.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.InvitedByDetail} returns this
 */
proto.api.esm.InvitedByDetail.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 user_id = 2;
 * @return {number}
 */
proto.api.esm.InvitedByDetail.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.InvitedByDetail} returns this
 */
proto.api.esm.InvitedByDetail.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 invited_by = 3;
 * @return {number}
 */
proto.api.esm.InvitedByDetail.prototype.getInvitedBy = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.InvitedByDetail} returns this
 */
proto.api.esm.InvitedByDetail.prototype.setInvitedBy = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 invited_date = 4;
 * @return {number}
 */
proto.api.esm.InvitedByDetail.prototype.getInvitedDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.InvitedByDetail} returns this
 */
proto.api.esm.InvitedByDetail.prototype.setInvitedDate = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetInvitedByCountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetInvitedByCountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetInvitedByCountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetInvitedByCountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    invitedBy: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetInvitedByCountRequest}
 */
proto.api.esm.GetInvitedByCountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetInvitedByCountRequest;
  return proto.api.esm.GetInvitedByCountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetInvitedByCountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetInvitedByCountRequest}
 */
proto.api.esm.GetInvitedByCountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInvitedBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetInvitedByCountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetInvitedByCountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetInvitedByCountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetInvitedByCountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvitedBy();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 invited_by = 1;
 * @return {number}
 */
proto.api.esm.GetInvitedByCountRequest.prototype.getInvitedBy = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GetInvitedByCountRequest} returns this
 */
proto.api.esm.GetInvitedByCountRequest.prototype.setInvitedBy = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetInvitedByCountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetInvitedByCountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetInvitedByCountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetInvitedByCountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetInvitedByCountResponse}
 */
proto.api.esm.GetInvitedByCountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetInvitedByCountResponse;
  return proto.api.esm.GetInvitedByCountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetInvitedByCountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetInvitedByCountResponse}
 */
proto.api.esm.GetInvitedByCountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetInvitedByCountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetInvitedByCountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetInvitedByCountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetInvitedByCountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.api.esm.GetInvitedByCountResponse.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.GetInvitedByCountResponse} returns this
 */
proto.api.esm.GetInvitedByCountResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListItemRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListItemRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListItemRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListItemRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListItemRequest}
 */
proto.api.esm.ListItemRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListItemRequest;
  return proto.api.esm.ListItemRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListItemRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListItemRequest}
 */
proto.api.esm.ListItemRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListItemRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListItemRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListItemRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListItemRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 limit = 1;
 * @return {number}
 */
proto.api.esm.ListItemRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListItemRequest} returns this
 */
proto.api.esm.ListItemRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 offset = 2;
 * @return {number}
 */
proto.api.esm.ListItemRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListItemRequest} returns this
 */
proto.api.esm.ListItemRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.esm.ListItemResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListItemResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListItemResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListItemResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListItemResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.esm.ItemDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListItemResponse}
 */
proto.api.esm.ListItemResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListItemResponse;
  return proto.api.esm.ListItemResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListItemResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListItemResponse}
 */
proto.api.esm.ListItemResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.ItemDetail;
      reader.readMessage(value,proto.api.esm.ItemDetail.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListItemResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListItemResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListItemResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListItemResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.esm.ItemDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ItemDetail result = 1;
 * @return {!Array<!proto.api.esm.ItemDetail>}
 */
proto.api.esm.ListItemResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.api.esm.ItemDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.esm.ItemDetail, 1));
};


/**
 * @param {!Array<!proto.api.esm.ItemDetail>} value
 * @return {!proto.api.esm.ListItemResponse} returns this
*/
proto.api.esm.ListItemResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.esm.ItemDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.esm.ItemDetail}
 */
proto.api.esm.ListItemResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.esm.ItemDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.esm.ListItemResponse} returns this
 */
proto.api.esm.ListItemResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ItemDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ItemDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ItemDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ItemDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    subtitle: jspb.Message.getFieldWithDefault(msg, 3, ""),
    content: jspb.Message.getFieldWithDefault(msg, 4, ""),
    imgUrl: jspb.Message.getFieldWithDefault(msg, 5, ""),
    typeId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    quantity: jspb.Message.getFieldWithDefault(msg, 8, 0),
    status: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ItemDetail}
 */
proto.api.esm.ItemDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ItemDetail;
  return proto.api.esm.ItemDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ItemDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ItemDetail}
 */
proto.api.esm.ItemDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubtitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setImgUrl(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTypeId(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ItemDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ItemDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ItemDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ItemDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSubtitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getImgUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTypeId();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.ItemDetail.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ItemDetail} returns this
 */
proto.api.esm.ItemDetail.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.api.esm.ItemDetail.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.ItemDetail} returns this
 */
proto.api.esm.ItemDetail.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string subtitle = 3;
 * @return {string}
 */
proto.api.esm.ItemDetail.prototype.getSubtitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.ItemDetail} returns this
 */
proto.api.esm.ItemDetail.prototype.setSubtitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.api.esm.ItemDetail.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.ItemDetail} returns this
 */
proto.api.esm.ItemDetail.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string img_url = 5;
 * @return {string}
 */
proto.api.esm.ItemDetail.prototype.getImgUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.ItemDetail} returns this
 */
proto.api.esm.ItemDetail.prototype.setImgUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 type_id = 6;
 * @return {number}
 */
proto.api.esm.ItemDetail.prototype.getTypeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ItemDetail} returns this
 */
proto.api.esm.ItemDetail.prototype.setTypeId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional double price = 7;
 * @return {number}
 */
proto.api.esm.ItemDetail.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ItemDetail} returns this
 */
proto.api.esm.ItemDetail.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional int32 quantity = 8;
 * @return {number}
 */
proto.api.esm.ItemDetail.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ItemDetail} returns this
 */
proto.api.esm.ItemDetail.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 status = 9;
 * @return {number}
 */
proto.api.esm.ItemDetail.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ItemDetail} returns this
 */
proto.api.esm.ItemDetail.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetItemCountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetItemCountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetItemCountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetItemCountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetItemCountRequest}
 */
proto.api.esm.GetItemCountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetItemCountRequest;
  return proto.api.esm.GetItemCountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetItemCountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetItemCountRequest}
 */
proto.api.esm.GetItemCountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetItemCountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetItemCountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetItemCountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetItemCountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetItemCountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetItemCountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetItemCountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetItemCountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && proto.api.esm.ItemCount.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetItemCountResponse}
 */
proto.api.esm.GetItemCountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetItemCountResponse;
  return proto.api.esm.GetItemCountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetItemCountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetItemCountResponse}
 */
proto.api.esm.GetItemCountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.ItemCount;
      reader.readMessage(value,proto.api.esm.ItemCount.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetItemCountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetItemCountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetItemCountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetItemCountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.esm.ItemCount.serializeBinaryToWriter
    );
  }
};


/**
 * optional ItemCount result = 1;
 * @return {?proto.api.esm.ItemCount}
 */
proto.api.esm.GetItemCountResponse.prototype.getResult = function() {
  return /** @type{?proto.api.esm.ItemCount} */ (
    jspb.Message.getWrapperField(this, proto.api.esm.ItemCount, 1));
};


/**
 * @param {?proto.api.esm.ItemCount|undefined} value
 * @return {!proto.api.esm.GetItemCountResponse} returns this
*/
proto.api.esm.GetItemCountResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.esm.GetItemCountResponse} returns this
 */
proto.api.esm.GetItemCountResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.esm.GetItemCountResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ItemCount.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ItemCount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ItemCount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ItemCount.toObject = function(includeInstance, msg) {
  var f, obj = {
    draft: jspb.Message.getFieldWithDefault(msg, 1, 0),
    published: jspb.Message.getFieldWithDefault(msg, 2, 0),
    archived: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ItemCount}
 */
proto.api.esm.ItemCount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ItemCount;
  return proto.api.esm.ItemCount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ItemCount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ItemCount}
 */
proto.api.esm.ItemCount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDraft(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPublished(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setArchived(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ItemCount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ItemCount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ItemCount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ItemCount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDraft();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPublished();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getArchived();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 draft = 1;
 * @return {number}
 */
proto.api.esm.ItemCount.prototype.getDraft = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ItemCount} returns this
 */
proto.api.esm.ItemCount.prototype.setDraft = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 published = 2;
 * @return {number}
 */
proto.api.esm.ItemCount.prototype.getPublished = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ItemCount} returns this
 */
proto.api.esm.ItemCount.prototype.setPublished = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 archived = 3;
 * @return {number}
 */
proto.api.esm.ItemCount.prototype.getArchived = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ItemCount} returns this
 */
proto.api.esm.ItemCount.prototype.setArchived = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListItemTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListItemTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListItemTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListItemTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListItemTypeRequest}
 */
proto.api.esm.ListItemTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListItemTypeRequest;
  return proto.api.esm.ListItemTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListItemTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListItemTypeRequest}
 */
proto.api.esm.ListItemTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListItemTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListItemTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListItemTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListItemTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.esm.ListItemTypeResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListItemTypeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListItemTypeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListItemTypeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListItemTypeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.esm.ItemTypeDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListItemTypeResponse}
 */
proto.api.esm.ListItemTypeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListItemTypeResponse;
  return proto.api.esm.ListItemTypeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListItemTypeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListItemTypeResponse}
 */
proto.api.esm.ListItemTypeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.ItemTypeDetail;
      reader.readMessage(value,proto.api.esm.ItemTypeDetail.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListItemTypeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListItemTypeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListItemTypeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListItemTypeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.esm.ItemTypeDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ItemTypeDetail result = 1;
 * @return {!Array<!proto.api.esm.ItemTypeDetail>}
 */
proto.api.esm.ListItemTypeResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.api.esm.ItemTypeDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.esm.ItemTypeDetail, 1));
};


/**
 * @param {!Array<!proto.api.esm.ItemTypeDetail>} value
 * @return {!proto.api.esm.ListItemTypeResponse} returns this
*/
proto.api.esm.ListItemTypeResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.esm.ItemTypeDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.esm.ItemTypeDetail}
 */
proto.api.esm.ListItemTypeResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.esm.ItemTypeDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.esm.ListItemTypeResponse} returns this
 */
proto.api.esm.ListItemTypeResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ItemTypeDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ItemTypeDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ItemTypeDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ItemTypeDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ItemTypeDetail}
 */
proto.api.esm.ItemTypeDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ItemTypeDetail;
  return proto.api.esm.ItemTypeDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ItemTypeDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ItemTypeDetail}
 */
proto.api.esm.ItemTypeDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ItemTypeDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ItemTypeDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ItemTypeDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ItemTypeDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.api.esm.ItemTypeDetail.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ItemTypeDetail} returns this
 */
proto.api.esm.ItemTypeDetail.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.api.esm.ItemTypeDetail.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.ItemTypeDetail} returns this
 */
proto.api.esm.ItemTypeDetail.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetPrizeTicketPoolRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetPrizeTicketPoolRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetPrizeTicketPoolRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetPrizeTicketPoolRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    prizeId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetPrizeTicketPoolRequest}
 */
proto.api.esm.GetPrizeTicketPoolRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetPrizeTicketPoolRequest;
  return proto.api.esm.GetPrizeTicketPoolRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetPrizeTicketPoolRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetPrizeTicketPoolRequest}
 */
proto.api.esm.GetPrizeTicketPoolRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPrizeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetPrizeTicketPoolRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetPrizeTicketPoolRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetPrizeTicketPoolRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetPrizeTicketPoolRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPrizeId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 user_id = 1;
 * @return {number}
 */
proto.api.esm.GetPrizeTicketPoolRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GetPrizeTicketPoolRequest} returns this
 */
proto.api.esm.GetPrizeTicketPoolRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 prize_id = 2;
 * @return {number}
 */
proto.api.esm.GetPrizeTicketPoolRequest.prototype.getPrizeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GetPrizeTicketPoolRequest} returns this
 */
proto.api.esm.GetPrizeTicketPoolRequest.prototype.setPrizeId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetPrizeTicketPoolResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetPrizeTicketPoolResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetPrizeTicketPoolResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetPrizeTicketPoolResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tickets: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetPrizeTicketPoolResponse}
 */
proto.api.esm.GetPrizeTicketPoolResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetPrizeTicketPoolResponse;
  return proto.api.esm.GetPrizeTicketPoolResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetPrizeTicketPoolResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetPrizeTicketPoolResponse}
 */
proto.api.esm.GetPrizeTicketPoolResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTickets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetPrizeTicketPoolResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetPrizeTicketPoolResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetPrizeTicketPoolResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetPrizeTicketPoolResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTickets();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 tickets = 1;
 * @return {number}
 */
proto.api.esm.GetPrizeTicketPoolResponse.prototype.getTickets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GetPrizeTicketPoolResponse} returns this
 */
proto.api.esm.GetPrizeTicketPoolResponse.prototype.setTickets = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetPrizeTicketsCollectedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetPrizeTicketsCollectedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetPrizeTicketsCollectedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetPrizeTicketsCollectedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    prizeId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetPrizeTicketsCollectedRequest}
 */
proto.api.esm.GetPrizeTicketsCollectedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetPrizeTicketsCollectedRequest;
  return proto.api.esm.GetPrizeTicketsCollectedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetPrizeTicketsCollectedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetPrizeTicketsCollectedRequest}
 */
proto.api.esm.GetPrizeTicketsCollectedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPrizeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetPrizeTicketsCollectedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetPrizeTicketsCollectedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetPrizeTicketsCollectedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetPrizeTicketsCollectedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrizeId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 prize_id = 1;
 * @return {number}
 */
proto.api.esm.GetPrizeTicketsCollectedRequest.prototype.getPrizeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GetPrizeTicketsCollectedRequest} returns this
 */
proto.api.esm.GetPrizeTicketsCollectedRequest.prototype.setPrizeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetPrizeTicketsCollectedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetPrizeTicketsCollectedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetPrizeTicketsCollectedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetPrizeTicketsCollectedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tickets: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetPrizeTicketsCollectedResponse}
 */
proto.api.esm.GetPrizeTicketsCollectedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetPrizeTicketsCollectedResponse;
  return proto.api.esm.GetPrizeTicketsCollectedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetPrizeTicketsCollectedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetPrizeTicketsCollectedResponse}
 */
proto.api.esm.GetPrizeTicketsCollectedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTickets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetPrizeTicketsCollectedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetPrizeTicketsCollectedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetPrizeTicketsCollectedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetPrizeTicketsCollectedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTickets();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 tickets = 1;
 * @return {number}
 */
proto.api.esm.GetPrizeTicketsCollectedResponse.prototype.getTickets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GetPrizeTicketsCollectedResponse} returns this
 */
proto.api.esm.GetPrizeTicketsCollectedResponse.prototype.setTickets = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListPrizeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListPrizeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListPrizeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListPrizeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListPrizeRequest}
 */
proto.api.esm.ListPrizeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListPrizeRequest;
  return proto.api.esm.ListPrizeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListPrizeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListPrizeRequest}
 */
proto.api.esm.ListPrizeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListPrizeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListPrizeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListPrizeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListPrizeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.esm.ListPrizeResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListPrizeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListPrizeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListPrizeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListPrizeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.esm.PrizeDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListPrizeResponse}
 */
proto.api.esm.ListPrizeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListPrizeResponse;
  return proto.api.esm.ListPrizeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListPrizeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListPrizeResponse}
 */
proto.api.esm.ListPrizeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.PrizeDetail;
      reader.readMessage(value,proto.api.esm.PrizeDetail.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListPrizeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListPrizeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListPrizeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListPrizeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.esm.PrizeDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PrizeDetail result = 1;
 * @return {!Array<!proto.api.esm.PrizeDetail>}
 */
proto.api.esm.ListPrizeResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.api.esm.PrizeDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.esm.PrizeDetail, 1));
};


/**
 * @param {!Array<!proto.api.esm.PrizeDetail>} value
 * @return {!proto.api.esm.ListPrizeResponse} returns this
*/
proto.api.esm.ListPrizeResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.esm.PrizeDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.esm.PrizeDetail}
 */
proto.api.esm.ListPrizeResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.esm.PrizeDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.esm.ListPrizeResponse} returns this
 */
proto.api.esm.ListPrizeResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.esm.PrizeDetail.repeatedFields_ = [15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.PrizeDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.PrizeDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.PrizeDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.PrizeDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    currentGameId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    prizeId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    prizeTitle: jspb.Message.getFieldWithDefault(msg, 3, ""),
    prizeSubtitle: jspb.Message.getFieldWithDefault(msg, 4, ""),
    prizeImgUrl: jspb.Message.getFieldWithDefault(msg, 5, ""),
    prizeContent: jspb.Message.getFieldWithDefault(msg, 6, ""),
    prizeDurationDays: jspb.Message.getFieldWithDefault(msg, 7, 0),
    prizeDurationHours: jspb.Message.getFieldWithDefault(msg, 8, 0),
    typeId: jspb.Message.getFieldWithDefault(msg, 9, 0),
    ticketsRequired: jspb.Message.getFieldWithDefault(msg, 10, 0),
    timezone: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    scheduledOn: jspb.Message.getFieldWithDefault(msg, 12, 0),
    scheduledOff: jspb.Message.getFieldWithDefault(msg, 13, 0),
    isRepeat: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    repeatedOnList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    status: jspb.Message.getFieldWithDefault(msg, 16, 0),
    statusProgress: jspb.Message.getFieldWithDefault(msg, 17, 0),
    ticketsCollected: jspb.Message.getFieldWithDefault(msg, 18, 0),
    tourId: jspb.Message.getFieldWithDefault(msg, 19, 0),
    tourTitle: jspb.Message.getFieldWithDefault(msg, 20, ""),
    setId: jspb.Message.getFieldWithDefault(msg, 21, 0),
    setTitle: jspb.Message.getFieldWithDefault(msg, 22, ""),
    gameId: jspb.Message.getFieldWithDefault(msg, 23, 0),
    gameTitle: jspb.Message.getFieldWithDefault(msg, 24, ""),
    gameSubtitle: jspb.Message.getFieldWithDefault(msg, 25, ""),
    gameImgUrl: jspb.Message.getFieldWithDefault(msg, 26, ""),
    gameContent: jspb.Message.getFieldWithDefault(msg, 27, ""),
    scoreRule: jspb.Message.getFieldWithDefault(msg, 28, 0),
    watchAdGetTickets: jspb.Message.getFieldWithDefault(msg, 29, 0),
    watchAdGetExp: jspb.Message.getFieldWithDefault(msg, 30, 0),
    useGemGetTickets: jspb.Message.getFieldWithDefault(msg, 31, 0),
    useGemGetExp: jspb.Message.getFieldWithDefault(msg, 32, 0),
    useHowManyGems: jspb.Message.getFieldWithDefault(msg, 33, 0),
    tsgId: jspb.Message.getFieldWithDefault(msg, 34, 0),
    gameDurationDays: jspb.Message.getFieldWithDefault(msg, 35, 0),
    gameDurationHours: jspb.Message.getFieldWithDefault(msg, 36, 0),
    gameDurationMinutes: jspb.Message.getFieldWithDefault(msg, 37, 0),
    groupId: jspb.Message.getFieldWithDefault(msg, 38, 0),
    startTimestamp: jspb.Message.getFieldWithDefault(msg, 39, 0),
    endTimestamp: jspb.Message.getFieldWithDefault(msg, 40, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.PrizeDetail}
 */
proto.api.esm.PrizeDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.PrizeDetail;
  return proto.api.esm.PrizeDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.PrizeDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.PrizeDetail}
 */
proto.api.esm.PrizeDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurrentGameId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPrizeId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrizeTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrizeSubtitle(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrizeImgUrl(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrizeContent(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrizeDurationDays(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrizeDurationHours(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTypeId(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTicketsRequired(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimezone(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScheduledOn(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScheduledOff(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRepeat(value);
      break;
    case 15:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt32());
      msg.setRepeatedOnList(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatusProgress(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTicketsCollected(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTourId(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setTourTitle(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSetId(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setSetTitle(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGameId(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setGameTitle(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setGameSubtitle(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setGameImgUrl(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.setGameContent(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScoreRule(value);
      break;
    case 29:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWatchAdGetTickets(value);
      break;
    case 30:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWatchAdGetExp(value);
      break;
    case 31:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUseGemGetTickets(value);
      break;
    case 32:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUseGemGetExp(value);
      break;
    case 33:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUseHowManyGems(value);
      break;
    case 34:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTsgId(value);
      break;
    case 35:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGameDurationDays(value);
      break;
    case 36:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGameDurationHours(value);
      break;
    case 37:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGameDurationMinutes(value);
      break;
    case 38:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGroupId(value);
      break;
    case 39:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartTimestamp(value);
      break;
    case 40:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.PrizeDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.PrizeDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.PrizeDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.PrizeDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrentGameId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPrizeId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPrizeTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPrizeSubtitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPrizeImgUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPrizeContent();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPrizeDurationDays();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getPrizeDurationHours();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getTypeId();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getTicketsRequired();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getTimezone();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getScheduledOn();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getScheduledOff();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getIsRepeat();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getRepeatedOnList();
  if (f.length > 0) {
    writer.writePackedInt32(
      15,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = message.getStatusProgress();
  if (f !== 0) {
    writer.writeInt32(
      17,
      f
    );
  }
  f = message.getTicketsCollected();
  if (f !== 0) {
    writer.writeInt64(
      18,
      f
    );
  }
  f = message.getTourId();
  if (f !== 0) {
    writer.writeInt64(
      19,
      f
    );
  }
  f = message.getTourTitle();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getSetId();
  if (f !== 0) {
    writer.writeInt64(
      21,
      f
    );
  }
  f = message.getSetTitle();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getGameId();
  if (f !== 0) {
    writer.writeInt64(
      23,
      f
    );
  }
  f = message.getGameTitle();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getGameSubtitle();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getGameImgUrl();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getGameContent();
  if (f.length > 0) {
    writer.writeString(
      27,
      f
    );
  }
  f = message.getScoreRule();
  if (f !== 0) {
    writer.writeInt32(
      28,
      f
    );
  }
  f = message.getWatchAdGetTickets();
  if (f !== 0) {
    writer.writeInt32(
      29,
      f
    );
  }
  f = message.getWatchAdGetExp();
  if (f !== 0) {
    writer.writeInt32(
      30,
      f
    );
  }
  f = message.getUseGemGetTickets();
  if (f !== 0) {
    writer.writeInt32(
      31,
      f
    );
  }
  f = message.getUseGemGetExp();
  if (f !== 0) {
    writer.writeInt32(
      32,
      f
    );
  }
  f = message.getUseHowManyGems();
  if (f !== 0) {
    writer.writeInt32(
      33,
      f
    );
  }
  f = message.getTsgId();
  if (f !== 0) {
    writer.writeInt64(
      34,
      f
    );
  }
  f = message.getGameDurationDays();
  if (f !== 0) {
    writer.writeInt32(
      35,
      f
    );
  }
  f = message.getGameDurationHours();
  if (f !== 0) {
    writer.writeInt32(
      36,
      f
    );
  }
  f = message.getGameDurationMinutes();
  if (f !== 0) {
    writer.writeInt32(
      37,
      f
    );
  }
  f = message.getGroupId();
  if (f !== 0) {
    writer.writeInt32(
      38,
      f
    );
  }
  f = message.getStartTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      39,
      f
    );
  }
  f = message.getEndTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      40,
      f
    );
  }
};


/**
 * optional int64 current_game_id = 1;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getCurrentGameId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setCurrentGameId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 prize_id = 2;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getPrizeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setPrizeId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string prize_title = 3;
 * @return {string}
 */
proto.api.esm.PrizeDetail.prototype.getPrizeTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setPrizeTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string prize_subtitle = 4;
 * @return {string}
 */
proto.api.esm.PrizeDetail.prototype.getPrizeSubtitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setPrizeSubtitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string prize_img_url = 5;
 * @return {string}
 */
proto.api.esm.PrizeDetail.prototype.getPrizeImgUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setPrizeImgUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string prize_content = 6;
 * @return {string}
 */
proto.api.esm.PrizeDetail.prototype.getPrizeContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setPrizeContent = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 prize_duration_days = 7;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getPrizeDurationDays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setPrizeDurationDays = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 prize_duration_hours = 8;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getPrizeDurationHours = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setPrizeDurationHours = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 type_id = 9;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getTypeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setTypeId = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 tickets_required = 10;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getTicketsRequired = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setTicketsRequired = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional double timezone = 11;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getTimezone = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional int64 scheduled_on = 12;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getScheduledOn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setScheduledOn = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 scheduled_off = 13;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getScheduledOff = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setScheduledOff = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional bool is_repeat = 14;
 * @return {boolean}
 */
proto.api.esm.PrizeDetail.prototype.getIsRepeat = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setIsRepeat = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * repeated int32 repeated_on = 15;
 * @return {!Array<number>}
 */
proto.api.esm.PrizeDetail.prototype.getRepeatedOnList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setRepeatedOnList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.addRepeatedOn = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.clearRepeatedOnList = function() {
  return this.setRepeatedOnList([]);
};


/**
 * optional int32 status = 16;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional int32 status_progress = 17;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getStatusProgress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setStatusProgress = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional int64 tickets_collected = 18;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getTicketsCollected = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setTicketsCollected = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional int64 tour_id = 19;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getTourId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setTourId = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional string tour_title = 20;
 * @return {string}
 */
proto.api.esm.PrizeDetail.prototype.getTourTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setTourTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional int64 set_id = 21;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getSetId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setSetId = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional string set_title = 22;
 * @return {string}
 */
proto.api.esm.PrizeDetail.prototype.getSetTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setSetTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional int64 game_id = 23;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getGameId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setGameId = function(value) {
  return jspb.Message.setProto3IntField(this, 23, value);
};


/**
 * optional string game_title = 24;
 * @return {string}
 */
proto.api.esm.PrizeDetail.prototype.getGameTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setGameTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional string game_subtitle = 25;
 * @return {string}
 */
proto.api.esm.PrizeDetail.prototype.getGameSubtitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setGameSubtitle = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional string game_img_url = 26;
 * @return {string}
 */
proto.api.esm.PrizeDetail.prototype.getGameImgUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setGameImgUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional string game_content = 27;
 * @return {string}
 */
proto.api.esm.PrizeDetail.prototype.getGameContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setGameContent = function(value) {
  return jspb.Message.setProto3StringField(this, 27, value);
};


/**
 * optional int32 score_rule = 28;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getScoreRule = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setScoreRule = function(value) {
  return jspb.Message.setProto3IntField(this, 28, value);
};


/**
 * optional int32 watch_ad_get_tickets = 29;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getWatchAdGetTickets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 29, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setWatchAdGetTickets = function(value) {
  return jspb.Message.setProto3IntField(this, 29, value);
};


/**
 * optional int32 watch_ad_get_exp = 30;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getWatchAdGetExp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 30, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setWatchAdGetExp = function(value) {
  return jspb.Message.setProto3IntField(this, 30, value);
};


/**
 * optional int32 use_gem_get_tickets = 31;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getUseGemGetTickets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setUseGemGetTickets = function(value) {
  return jspb.Message.setProto3IntField(this, 31, value);
};


/**
 * optional int32 use_gem_get_exp = 32;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getUseGemGetExp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 32, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setUseGemGetExp = function(value) {
  return jspb.Message.setProto3IntField(this, 32, value);
};


/**
 * optional int32 use_how_many_gems = 33;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getUseHowManyGems = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 33, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setUseHowManyGems = function(value) {
  return jspb.Message.setProto3IntField(this, 33, value);
};


/**
 * optional int64 tsg_id = 34;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getTsgId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 34, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setTsgId = function(value) {
  return jspb.Message.setProto3IntField(this, 34, value);
};


/**
 * optional int32 game_duration_days = 35;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getGameDurationDays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 35, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setGameDurationDays = function(value) {
  return jspb.Message.setProto3IntField(this, 35, value);
};


/**
 * optional int32 game_duration_hours = 36;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getGameDurationHours = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 36, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setGameDurationHours = function(value) {
  return jspb.Message.setProto3IntField(this, 36, value);
};


/**
 * optional int32 game_duration_minutes = 37;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getGameDurationMinutes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 37, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setGameDurationMinutes = function(value) {
  return jspb.Message.setProto3IntField(this, 37, value);
};


/**
 * optional int32 group_id = 38;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getGroupId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 38, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setGroupId = function(value) {
  return jspb.Message.setProto3IntField(this, 38, value);
};


/**
 * optional int64 start_timestamp = 39;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getStartTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 39, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setStartTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 39, value);
};


/**
 * optional int64 end_timestamp = 40;
 * @return {number}
 */
proto.api.esm.PrizeDetail.prototype.getEndTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 40, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.PrizeDetail} returns this
 */
proto.api.esm.PrizeDetail.prototype.setEndTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 40, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListRankRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListRankRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListRankRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListRankRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListRankRequest}
 */
proto.api.esm.ListRankRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListRankRequest;
  return proto.api.esm.ListRankRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListRankRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListRankRequest}
 */
proto.api.esm.ListRankRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListRankRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListRankRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListRankRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListRankRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.esm.ListRankResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListRankResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListRankResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListRankResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListRankResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.esm.RankDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListRankResponse}
 */
proto.api.esm.ListRankResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListRankResponse;
  return proto.api.esm.ListRankResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListRankResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListRankResponse}
 */
proto.api.esm.ListRankResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.RankDetail;
      reader.readMessage(value,proto.api.esm.RankDetail.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListRankResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListRankResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListRankResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListRankResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.esm.RankDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RankDetail result = 1;
 * @return {!Array<!proto.api.esm.RankDetail>}
 */
proto.api.esm.ListRankResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.api.esm.RankDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.esm.RankDetail, 1));
};


/**
 * @param {!Array<!proto.api.esm.RankDetail>} value
 * @return {!proto.api.esm.ListRankResponse} returns this
*/
proto.api.esm.ListRankResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.esm.RankDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.esm.RankDetail}
 */
proto.api.esm.ListRankResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.esm.RankDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.esm.ListRankResponse} returns this
 */
proto.api.esm.ListRankResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.RankDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.RankDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.RankDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.RankDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    exp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    gem: jspb.Message.getFieldWithDefault(msg, 4, 0),
    multiplier: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.RankDetail}
 */
proto.api.esm.RankDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.RankDetail;
  return proto.api.esm.RankDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.RankDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.RankDetail}
 */
proto.api.esm.RankDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGem(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMultiplier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.RankDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.RankDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.RankDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.RankDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExp();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getGem();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getMultiplier();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.RankDetail.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.RankDetail} returns this
 */
proto.api.esm.RankDetail.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.api.esm.RankDetail.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.RankDetail} returns this
 */
proto.api.esm.RankDetail.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 exp = 3;
 * @return {number}
 */
proto.api.esm.RankDetail.prototype.getExp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.RankDetail} returns this
 */
proto.api.esm.RankDetail.prototype.setExp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 gem = 4;
 * @return {number}
 */
proto.api.esm.RankDetail.prototype.getGem = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.RankDetail} returns this
 */
proto.api.esm.RankDetail.prototype.setGem = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double multiplier = 5;
 * @return {number}
 */
proto.api.esm.RankDetail.prototype.getMultiplier = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.RankDetail} returns this
 */
proto.api.esm.RankDetail.prototype.setMultiplier = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.BuyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.BuyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.BuyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.BuyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    secret: jspb.Message.getFieldWithDefault(msg, 1, ""),
    itemTypeId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    itemId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    paymentId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    subId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.BuyRequest}
 */
proto.api.esm.BuyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.BuyRequest;
  return proto.api.esm.BuyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.BuyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.BuyRequest}
 */
proto.api.esm.BuyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecret(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setItemTypeId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setItemId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubId(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.BuyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.BuyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.BuyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.BuyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecret();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getItemTypeId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getItemId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getPaymentId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSubId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
};


/**
 * optional string secret = 1;
 * @return {string}
 */
proto.api.esm.BuyRequest.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.BuyRequest} returns this
 */
proto.api.esm.BuyRequest.prototype.setSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 item_type_id = 2;
 * @return {number}
 */
proto.api.esm.BuyRequest.prototype.getItemTypeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.BuyRequest} returns this
 */
proto.api.esm.BuyRequest.prototype.setItemTypeId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 item_id = 3;
 * @return {number}
 */
proto.api.esm.BuyRequest.prototype.getItemId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.BuyRequest} returns this
 */
proto.api.esm.BuyRequest.prototype.setItemId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 user_id = 4;
 * @return {number}
 */
proto.api.esm.BuyRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.BuyRequest} returns this
 */
proto.api.esm.BuyRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string payment_id = 5;
 * @return {string}
 */
proto.api.esm.BuyRequest.prototype.getPaymentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.BuyRequest} returns this
 */
proto.api.esm.BuyRequest.prototype.setPaymentId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string sub_id = 6;
 * @return {string}
 */
proto.api.esm.BuyRequest.prototype.getSubId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.BuyRequest} returns this
 */
proto.api.esm.BuyRequest.prototype.setSubId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional double price = 7;
 * @return {number}
 */
proto.api.esm.BuyRequest.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.BuyRequest} returns this
 */
proto.api.esm.BuyRequest.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.BuyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.BuyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.BuyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.BuyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.BuyResponse}
 */
proto.api.esm.BuyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.BuyResponse;
  return proto.api.esm.BuyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.BuyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.BuyResponse}
 */
proto.api.esm.BuyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.BuyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.BuyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.BuyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.BuyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.api.esm.BuyResponse.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.BuyResponse} returns this
 */
proto.api.esm.BuyResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListBuyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListBuyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListBuyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListBuyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListBuyRequest}
 */
proto.api.esm.ListBuyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListBuyRequest;
  return proto.api.esm.ListBuyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListBuyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListBuyRequest}
 */
proto.api.esm.ListBuyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListBuyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListBuyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListBuyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListBuyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 user_id = 1;
 * @return {number}
 */
proto.api.esm.ListBuyRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListBuyRequest} returns this
 */
proto.api.esm.ListBuyRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 limit = 2;
 * @return {number}
 */
proto.api.esm.ListBuyRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListBuyRequest} returns this
 */
proto.api.esm.ListBuyRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 offset = 3;
 * @return {number}
 */
proto.api.esm.ListBuyRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListBuyRequest} returns this
 */
proto.api.esm.ListBuyRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.esm.ListBuyResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListBuyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListBuyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListBuyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListBuyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.esm.BuyDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListBuyResponse}
 */
proto.api.esm.ListBuyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListBuyResponse;
  return proto.api.esm.ListBuyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListBuyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListBuyResponse}
 */
proto.api.esm.ListBuyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.BuyDetail;
      reader.readMessage(value,proto.api.esm.BuyDetail.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListBuyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListBuyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListBuyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListBuyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.esm.BuyDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BuyDetail result = 1;
 * @return {!Array<!proto.api.esm.BuyDetail>}
 */
proto.api.esm.ListBuyResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.api.esm.BuyDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.esm.BuyDetail, 1));
};


/**
 * @param {!Array<!proto.api.esm.BuyDetail>} value
 * @return {!proto.api.esm.ListBuyResponse} returns this
*/
proto.api.esm.ListBuyResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.esm.BuyDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.esm.BuyDetail}
 */
proto.api.esm.ListBuyResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.esm.BuyDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.esm.ListBuyResponse} returns this
 */
proto.api.esm.ListBuyResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.BuyDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.BuyDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.BuyDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.BuyDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    itemTypeId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    itemId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    itemTitle: jspb.Message.getFieldWithDefault(msg, 4, ""),
    paymentId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    subId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    createdOn: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.BuyDetail}
 */
proto.api.esm.BuyDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.BuyDetail;
  return proto.api.esm.BuyDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.BuyDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.BuyDetail}
 */
proto.api.esm.BuyDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setItemTypeId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setItemId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setItemTitle(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubId(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedOn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.BuyDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.BuyDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.BuyDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.BuyDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getItemTypeId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getItemId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getItemTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPaymentId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSubId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getCreatedOn();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.BuyDetail.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.BuyDetail} returns this
 */
proto.api.esm.BuyDetail.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 item_type_id = 2;
 * @return {number}
 */
proto.api.esm.BuyDetail.prototype.getItemTypeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.BuyDetail} returns this
 */
proto.api.esm.BuyDetail.prototype.setItemTypeId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 item_id = 3;
 * @return {number}
 */
proto.api.esm.BuyDetail.prototype.getItemId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.BuyDetail} returns this
 */
proto.api.esm.BuyDetail.prototype.setItemId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string item_title = 4;
 * @return {string}
 */
proto.api.esm.BuyDetail.prototype.getItemTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.BuyDetail} returns this
 */
proto.api.esm.BuyDetail.prototype.setItemTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string payment_id = 5;
 * @return {string}
 */
proto.api.esm.BuyDetail.prototype.getPaymentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.BuyDetail} returns this
 */
proto.api.esm.BuyDetail.prototype.setPaymentId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string sub_id = 6;
 * @return {string}
 */
proto.api.esm.BuyDetail.prototype.getSubId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.BuyDetail} returns this
 */
proto.api.esm.BuyDetail.prototype.setSubId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional double price = 7;
 * @return {number}
 */
proto.api.esm.BuyDetail.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.BuyDetail} returns this
 */
proto.api.esm.BuyDetail.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional int64 created_on = 8;
 * @return {number}
 */
proto.api.esm.BuyDetail.prototype.getCreatedOn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.BuyDetail} returns this
 */
proto.api.esm.BuyDetail.prototype.setCreatedOn = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetActiveSubscriptionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetActiveSubscriptionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetActiveSubscriptionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetActiveSubscriptionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetActiveSubscriptionRequest}
 */
proto.api.esm.GetActiveSubscriptionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetActiveSubscriptionRequest;
  return proto.api.esm.GetActiveSubscriptionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetActiveSubscriptionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetActiveSubscriptionRequest}
 */
proto.api.esm.GetActiveSubscriptionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetActiveSubscriptionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetActiveSubscriptionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetActiveSubscriptionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetActiveSubscriptionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 user_id = 1;
 * @return {number}
 */
proto.api.esm.GetActiveSubscriptionRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.GetActiveSubscriptionRequest} returns this
 */
proto.api.esm.GetActiveSubscriptionRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetActiveSubscriptionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetActiveSubscriptionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetActiveSubscriptionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetActiveSubscriptionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && proto.api.esm.BuyDetail.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetActiveSubscriptionResponse}
 */
proto.api.esm.GetActiveSubscriptionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetActiveSubscriptionResponse;
  return proto.api.esm.GetActiveSubscriptionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetActiveSubscriptionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetActiveSubscriptionResponse}
 */
proto.api.esm.GetActiveSubscriptionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.BuyDetail;
      reader.readMessage(value,proto.api.esm.BuyDetail.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetActiveSubscriptionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetActiveSubscriptionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetActiveSubscriptionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetActiveSubscriptionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.esm.BuyDetail.serializeBinaryToWriter
    );
  }
};


/**
 * optional BuyDetail result = 1;
 * @return {?proto.api.esm.BuyDetail}
 */
proto.api.esm.GetActiveSubscriptionResponse.prototype.getResult = function() {
  return /** @type{?proto.api.esm.BuyDetail} */ (
    jspb.Message.getWrapperField(this, proto.api.esm.BuyDetail, 1));
};


/**
 * @param {?proto.api.esm.BuyDetail|undefined} value
 * @return {!proto.api.esm.GetActiveSubscriptionResponse} returns this
*/
proto.api.esm.GetActiveSubscriptionResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.esm.GetActiveSubscriptionResponse} returns this
 */
proto.api.esm.GetActiveSubscriptionResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.esm.GetActiveSubscriptionResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListSubscriptionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListSubscriptionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListSubscriptionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListSubscriptionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListSubscriptionRequest}
 */
proto.api.esm.ListSubscriptionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListSubscriptionRequest;
  return proto.api.esm.ListSubscriptionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListSubscriptionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListSubscriptionRequest}
 */
proto.api.esm.ListSubscriptionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListSubscriptionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListSubscriptionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListSubscriptionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListSubscriptionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 limit = 1;
 * @return {number}
 */
proto.api.esm.ListSubscriptionRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListSubscriptionRequest} returns this
 */
proto.api.esm.ListSubscriptionRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 offset = 2;
 * @return {number}
 */
proto.api.esm.ListSubscriptionRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListSubscriptionRequest} returns this
 */
proto.api.esm.ListSubscriptionRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.esm.ListSubscriptionResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListSubscriptionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListSubscriptionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListSubscriptionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListSubscriptionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.esm.SubscriptionDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListSubscriptionResponse}
 */
proto.api.esm.ListSubscriptionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListSubscriptionResponse;
  return proto.api.esm.ListSubscriptionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListSubscriptionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListSubscriptionResponse}
 */
proto.api.esm.ListSubscriptionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.SubscriptionDetail;
      reader.readMessage(value,proto.api.esm.SubscriptionDetail.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListSubscriptionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListSubscriptionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListSubscriptionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListSubscriptionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.esm.SubscriptionDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SubscriptionDetail result = 1;
 * @return {!Array<!proto.api.esm.SubscriptionDetail>}
 */
proto.api.esm.ListSubscriptionResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.api.esm.SubscriptionDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.esm.SubscriptionDetail, 1));
};


/**
 * @param {!Array<!proto.api.esm.SubscriptionDetail>} value
 * @return {!proto.api.esm.ListSubscriptionResponse} returns this
*/
proto.api.esm.ListSubscriptionResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.esm.SubscriptionDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.esm.SubscriptionDetail}
 */
proto.api.esm.ListSubscriptionResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.esm.SubscriptionDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.esm.ListSubscriptionResponse} returns this
 */
proto.api.esm.ListSubscriptionResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.SubscriptionDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.SubscriptionDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.SubscriptionDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.SubscriptionDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    subtitle: jspb.Message.getFieldWithDefault(msg, 3, ""),
    content: jspb.Message.getFieldWithDefault(msg, 4, ""),
    imgUrl: jspb.Message.getFieldWithDefault(msg, 5, ""),
    typeId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    quantity: jspb.Message.getFieldWithDefault(msg, 8, 0),
    oneTimeGem: jspb.Message.getFieldWithDefault(msg, 9, 0),
    oneTimeMultiplier: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    oneTimeIsFirstonly: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    dailyGem: jspb.Message.getFieldWithDefault(msg, 12, 0),
    dailyMultiplier: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    status: jspb.Message.getFieldWithDefault(msg, 14, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.SubscriptionDetail}
 */
proto.api.esm.SubscriptionDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.SubscriptionDetail;
  return proto.api.esm.SubscriptionDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.SubscriptionDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.SubscriptionDetail}
 */
proto.api.esm.SubscriptionDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubtitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setImgUrl(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTypeId(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOneTimeGem(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOneTimeMultiplier(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOneTimeIsFirstonly(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDailyGem(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDailyMultiplier(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.SubscriptionDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.SubscriptionDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.SubscriptionDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.SubscriptionDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSubtitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getImgUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTypeId();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getOneTimeGem();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getOneTimeMultiplier();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getOneTimeIsFirstonly();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getDailyGem();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getDailyMultiplier();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.SubscriptionDetail.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.SubscriptionDetail} returns this
 */
proto.api.esm.SubscriptionDetail.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.api.esm.SubscriptionDetail.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.SubscriptionDetail} returns this
 */
proto.api.esm.SubscriptionDetail.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string subtitle = 3;
 * @return {string}
 */
proto.api.esm.SubscriptionDetail.prototype.getSubtitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.SubscriptionDetail} returns this
 */
proto.api.esm.SubscriptionDetail.prototype.setSubtitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.api.esm.SubscriptionDetail.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.SubscriptionDetail} returns this
 */
proto.api.esm.SubscriptionDetail.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string img_url = 5;
 * @return {string}
 */
proto.api.esm.SubscriptionDetail.prototype.getImgUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.SubscriptionDetail} returns this
 */
proto.api.esm.SubscriptionDetail.prototype.setImgUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 type_id = 6;
 * @return {number}
 */
proto.api.esm.SubscriptionDetail.prototype.getTypeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.SubscriptionDetail} returns this
 */
proto.api.esm.SubscriptionDetail.prototype.setTypeId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional double price = 7;
 * @return {number}
 */
proto.api.esm.SubscriptionDetail.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.SubscriptionDetail} returns this
 */
proto.api.esm.SubscriptionDetail.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional int32 quantity = 8;
 * @return {number}
 */
proto.api.esm.SubscriptionDetail.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.SubscriptionDetail} returns this
 */
proto.api.esm.SubscriptionDetail.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 one_time_gem = 9;
 * @return {number}
 */
proto.api.esm.SubscriptionDetail.prototype.getOneTimeGem = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.SubscriptionDetail} returns this
 */
proto.api.esm.SubscriptionDetail.prototype.setOneTimeGem = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional double one_time_multiplier = 10;
 * @return {number}
 */
proto.api.esm.SubscriptionDetail.prototype.getOneTimeMultiplier = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.SubscriptionDetail} returns this
 */
proto.api.esm.SubscriptionDetail.prototype.setOneTimeMultiplier = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional bool one_time_is_firstonly = 11;
 * @return {boolean}
 */
proto.api.esm.SubscriptionDetail.prototype.getOneTimeIsFirstonly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.esm.SubscriptionDetail} returns this
 */
proto.api.esm.SubscriptionDetail.prototype.setOneTimeIsFirstonly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional int32 daily_gem = 12;
 * @return {number}
 */
proto.api.esm.SubscriptionDetail.prototype.getDailyGem = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.SubscriptionDetail} returns this
 */
proto.api.esm.SubscriptionDetail.prototype.setDailyGem = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional double daily_multiplier = 13;
 * @return {number}
 */
proto.api.esm.SubscriptionDetail.prototype.getDailyMultiplier = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.SubscriptionDetail} returns this
 */
proto.api.esm.SubscriptionDetail.prototype.setDailyMultiplier = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional int32 status = 14;
 * @return {number}
 */
proto.api.esm.SubscriptionDetail.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.SubscriptionDetail} returns this
 */
proto.api.esm.SubscriptionDetail.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetSubscriptionCountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetSubscriptionCountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetSubscriptionCountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetSubscriptionCountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetSubscriptionCountRequest}
 */
proto.api.esm.GetSubscriptionCountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetSubscriptionCountRequest;
  return proto.api.esm.GetSubscriptionCountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetSubscriptionCountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetSubscriptionCountRequest}
 */
proto.api.esm.GetSubscriptionCountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetSubscriptionCountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetSubscriptionCountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetSubscriptionCountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetSubscriptionCountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.GetSubscriptionCountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.GetSubscriptionCountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.GetSubscriptionCountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetSubscriptionCountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && proto.api.esm.SubscriptionCount.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.GetSubscriptionCountResponse}
 */
proto.api.esm.GetSubscriptionCountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.GetSubscriptionCountResponse;
  return proto.api.esm.GetSubscriptionCountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.GetSubscriptionCountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.GetSubscriptionCountResponse}
 */
proto.api.esm.GetSubscriptionCountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.SubscriptionCount;
      reader.readMessage(value,proto.api.esm.SubscriptionCount.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.GetSubscriptionCountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.GetSubscriptionCountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.GetSubscriptionCountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.GetSubscriptionCountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.esm.SubscriptionCount.serializeBinaryToWriter
    );
  }
};


/**
 * optional SubscriptionCount result = 1;
 * @return {?proto.api.esm.SubscriptionCount}
 */
proto.api.esm.GetSubscriptionCountResponse.prototype.getResult = function() {
  return /** @type{?proto.api.esm.SubscriptionCount} */ (
    jspb.Message.getWrapperField(this, proto.api.esm.SubscriptionCount, 1));
};


/**
 * @param {?proto.api.esm.SubscriptionCount|undefined} value
 * @return {!proto.api.esm.GetSubscriptionCountResponse} returns this
*/
proto.api.esm.GetSubscriptionCountResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.esm.GetSubscriptionCountResponse} returns this
 */
proto.api.esm.GetSubscriptionCountResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.esm.GetSubscriptionCountResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.SubscriptionCount.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.SubscriptionCount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.SubscriptionCount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.SubscriptionCount.toObject = function(includeInstance, msg) {
  var f, obj = {
    draft: jspb.Message.getFieldWithDefault(msg, 1, 0),
    published: jspb.Message.getFieldWithDefault(msg, 2, 0),
    archived: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.SubscriptionCount}
 */
proto.api.esm.SubscriptionCount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.SubscriptionCount;
  return proto.api.esm.SubscriptionCount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.SubscriptionCount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.SubscriptionCount}
 */
proto.api.esm.SubscriptionCount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDraft(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPublished(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setArchived(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.SubscriptionCount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.SubscriptionCount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.SubscriptionCount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.SubscriptionCount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDraft();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPublished();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getArchived();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 draft = 1;
 * @return {number}
 */
proto.api.esm.SubscriptionCount.prototype.getDraft = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.SubscriptionCount} returns this
 */
proto.api.esm.SubscriptionCount.prototype.setDraft = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 published = 2;
 * @return {number}
 */
proto.api.esm.SubscriptionCount.prototype.getPublished = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.SubscriptionCount} returns this
 */
proto.api.esm.SubscriptionCount.prototype.setPublished = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 archived = 3;
 * @return {number}
 */
proto.api.esm.SubscriptionCount.prototype.getArchived = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.SubscriptionCount} returns this
 */
proto.api.esm.SubscriptionCount.prototype.setArchived = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListSubscriptionTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListSubscriptionTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListSubscriptionTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListSubscriptionTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListSubscriptionTypeRequest}
 */
proto.api.esm.ListSubscriptionTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListSubscriptionTypeRequest;
  return proto.api.esm.ListSubscriptionTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListSubscriptionTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListSubscriptionTypeRequest}
 */
proto.api.esm.ListSubscriptionTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListSubscriptionTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListSubscriptionTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListSubscriptionTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListSubscriptionTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.esm.ListSubscriptionTypeResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListSubscriptionTypeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListSubscriptionTypeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListSubscriptionTypeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListSubscriptionTypeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.esm.SubscriptionTypeDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListSubscriptionTypeResponse}
 */
proto.api.esm.ListSubscriptionTypeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListSubscriptionTypeResponse;
  return proto.api.esm.ListSubscriptionTypeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListSubscriptionTypeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListSubscriptionTypeResponse}
 */
proto.api.esm.ListSubscriptionTypeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.SubscriptionTypeDetail;
      reader.readMessage(value,proto.api.esm.SubscriptionTypeDetail.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListSubscriptionTypeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListSubscriptionTypeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListSubscriptionTypeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListSubscriptionTypeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.esm.SubscriptionTypeDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SubscriptionTypeDetail result = 1;
 * @return {!Array<!proto.api.esm.SubscriptionTypeDetail>}
 */
proto.api.esm.ListSubscriptionTypeResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.api.esm.SubscriptionTypeDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.esm.SubscriptionTypeDetail, 1));
};


/**
 * @param {!Array<!proto.api.esm.SubscriptionTypeDetail>} value
 * @return {!proto.api.esm.ListSubscriptionTypeResponse} returns this
*/
proto.api.esm.ListSubscriptionTypeResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.esm.SubscriptionTypeDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.esm.SubscriptionTypeDetail}
 */
proto.api.esm.ListSubscriptionTypeResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.esm.SubscriptionTypeDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.esm.ListSubscriptionTypeResponse} returns this
 */
proto.api.esm.ListSubscriptionTypeResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.SubscriptionTypeDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.SubscriptionTypeDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.SubscriptionTypeDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.SubscriptionTypeDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.SubscriptionTypeDetail}
 */
proto.api.esm.SubscriptionTypeDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.SubscriptionTypeDetail;
  return proto.api.esm.SubscriptionTypeDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.SubscriptionTypeDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.SubscriptionTypeDetail}
 */
proto.api.esm.SubscriptionTypeDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.SubscriptionTypeDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.SubscriptionTypeDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.SubscriptionTypeDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.SubscriptionTypeDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.api.esm.SubscriptionTypeDetail.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.SubscriptionTypeDetail} returns this
 */
proto.api.esm.SubscriptionTypeDetail.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.api.esm.SubscriptionTypeDetail.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.SubscriptionTypeDetail} returns this
 */
proto.api.esm.SubscriptionTypeDetail.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ClaimWinnerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ClaimWinnerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ClaimWinnerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ClaimWinnerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ClaimWinnerRequest}
 */
proto.api.esm.ClaimWinnerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ClaimWinnerRequest;
  return proto.api.esm.ClaimWinnerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ClaimWinnerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ClaimWinnerRequest}
 */
proto.api.esm.ClaimWinnerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ClaimWinnerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ClaimWinnerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ClaimWinnerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ClaimWinnerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.ClaimWinnerRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ClaimWinnerRequest} returns this
 */
proto.api.esm.ClaimWinnerRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 user_id = 2;
 * @return {number}
 */
proto.api.esm.ClaimWinnerRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ClaimWinnerRequest} returns this
 */
proto.api.esm.ClaimWinnerRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ClaimWinnerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ClaimWinnerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ClaimWinnerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ClaimWinnerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ClaimWinnerResponse}
 */
proto.api.esm.ClaimWinnerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ClaimWinnerResponse;
  return proto.api.esm.ClaimWinnerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ClaimWinnerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ClaimWinnerResponse}
 */
proto.api.esm.ClaimWinnerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ClaimWinnerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ClaimWinnerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ClaimWinnerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ClaimWinnerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.api.esm.ClaimWinnerResponse.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.ClaimWinnerResponse} returns this
 */
proto.api.esm.ClaimWinnerResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListWinnerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListWinnerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListWinnerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListWinnerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListWinnerRequest}
 */
proto.api.esm.ListWinnerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListWinnerRequest;
  return proto.api.esm.ListWinnerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListWinnerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListWinnerRequest}
 */
proto.api.esm.ListWinnerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListWinnerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListWinnerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListWinnerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListWinnerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 limit = 1;
 * @return {number}
 */
proto.api.esm.ListWinnerRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListWinnerRequest} returns this
 */
proto.api.esm.ListWinnerRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 offset = 2;
 * @return {number}
 */
proto.api.esm.ListWinnerRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListWinnerRequest} returns this
 */
proto.api.esm.ListWinnerRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.esm.ListWinnerResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListWinnerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListWinnerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListWinnerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListWinnerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.esm.WinnerDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListWinnerResponse}
 */
proto.api.esm.ListWinnerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListWinnerResponse;
  return proto.api.esm.ListWinnerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListWinnerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListWinnerResponse}
 */
proto.api.esm.ListWinnerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.WinnerDetail;
      reader.readMessage(value,proto.api.esm.WinnerDetail.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListWinnerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListWinnerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListWinnerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListWinnerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.esm.WinnerDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WinnerDetail result = 1;
 * @return {!Array<!proto.api.esm.WinnerDetail>}
 */
proto.api.esm.ListWinnerResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.api.esm.WinnerDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.esm.WinnerDetail, 1));
};


/**
 * @param {!Array<!proto.api.esm.WinnerDetail>} value
 * @return {!proto.api.esm.ListWinnerResponse} returns this
*/
proto.api.esm.ListWinnerResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.esm.WinnerDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.esm.WinnerDetail}
 */
proto.api.esm.ListWinnerResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.esm.WinnerDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.esm.ListWinnerResponse} returns this
 */
proto.api.esm.ListWinnerResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListWinnerRecentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListWinnerRecentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListWinnerRecentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListWinnerRecentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListWinnerRecentRequest}
 */
proto.api.esm.ListWinnerRecentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListWinnerRecentRequest;
  return proto.api.esm.ListWinnerRecentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListWinnerRecentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListWinnerRecentRequest}
 */
proto.api.esm.ListWinnerRecentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListWinnerRecentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListWinnerRecentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListWinnerRecentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListWinnerRecentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.esm.ListWinnerRecentResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListWinnerRecentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListWinnerRecentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListWinnerRecentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListWinnerRecentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.esm.WinnerDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListWinnerRecentResponse}
 */
proto.api.esm.ListWinnerRecentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListWinnerRecentResponse;
  return proto.api.esm.ListWinnerRecentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListWinnerRecentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListWinnerRecentResponse}
 */
proto.api.esm.ListWinnerRecentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.WinnerDetail;
      reader.readMessage(value,proto.api.esm.WinnerDetail.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListWinnerRecentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListWinnerRecentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListWinnerRecentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListWinnerRecentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.esm.WinnerDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WinnerDetail result = 1;
 * @return {!Array<!proto.api.esm.WinnerDetail>}
 */
proto.api.esm.ListWinnerRecentResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.api.esm.WinnerDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.esm.WinnerDetail, 1));
};


/**
 * @param {!Array<!proto.api.esm.WinnerDetail>} value
 * @return {!proto.api.esm.ListWinnerRecentResponse} returns this
*/
proto.api.esm.ListWinnerRecentResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.esm.WinnerDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.esm.WinnerDetail}
 */
proto.api.esm.ListWinnerRecentResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.esm.WinnerDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.esm.ListWinnerRecentResponse} returns this
 */
proto.api.esm.ListWinnerRecentResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListWinnerUnclaimedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListWinnerUnclaimedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListWinnerUnclaimedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListWinnerUnclaimedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListWinnerUnclaimedRequest}
 */
proto.api.esm.ListWinnerUnclaimedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListWinnerUnclaimedRequest;
  return proto.api.esm.ListWinnerUnclaimedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListWinnerUnclaimedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListWinnerUnclaimedRequest}
 */
proto.api.esm.ListWinnerUnclaimedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListWinnerUnclaimedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListWinnerUnclaimedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListWinnerUnclaimedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListWinnerUnclaimedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 user_id = 1;
 * @return {number}
 */
proto.api.esm.ListWinnerUnclaimedRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListWinnerUnclaimedRequest} returns this
 */
proto.api.esm.ListWinnerUnclaimedRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.esm.ListWinnerUnclaimedResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListWinnerUnclaimedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListWinnerUnclaimedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListWinnerUnclaimedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListWinnerUnclaimedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.esm.WinnerDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListWinnerUnclaimedResponse}
 */
proto.api.esm.ListWinnerUnclaimedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListWinnerUnclaimedResponse;
  return proto.api.esm.ListWinnerUnclaimedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListWinnerUnclaimedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListWinnerUnclaimedResponse}
 */
proto.api.esm.ListWinnerUnclaimedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.WinnerDetail;
      reader.readMessage(value,proto.api.esm.WinnerDetail.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListWinnerUnclaimedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListWinnerUnclaimedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListWinnerUnclaimedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListWinnerUnclaimedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.esm.WinnerDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WinnerDetail result = 1;
 * @return {!Array<!proto.api.esm.WinnerDetail>}
 */
proto.api.esm.ListWinnerUnclaimedResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.api.esm.WinnerDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.esm.WinnerDetail, 1));
};


/**
 * @param {!Array<!proto.api.esm.WinnerDetail>} value
 * @return {!proto.api.esm.ListWinnerUnclaimedResponse} returns this
*/
proto.api.esm.ListWinnerUnclaimedResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.esm.WinnerDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.esm.WinnerDetail}
 */
proto.api.esm.ListWinnerUnclaimedResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.esm.WinnerDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.esm.ListWinnerUnclaimedResponse} returns this
 */
proto.api.esm.ListWinnerUnclaimedResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListWinnerClaimedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListWinnerClaimedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListWinnerClaimedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListWinnerClaimedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListWinnerClaimedRequest}
 */
proto.api.esm.ListWinnerClaimedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListWinnerClaimedRequest;
  return proto.api.esm.ListWinnerClaimedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListWinnerClaimedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListWinnerClaimedRequest}
 */
proto.api.esm.ListWinnerClaimedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListWinnerClaimedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListWinnerClaimedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListWinnerClaimedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListWinnerClaimedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 user_id = 1;
 * @return {number}
 */
proto.api.esm.ListWinnerClaimedRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.ListWinnerClaimedRequest} returns this
 */
proto.api.esm.ListWinnerClaimedRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.esm.ListWinnerClaimedResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.ListWinnerClaimedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.ListWinnerClaimedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.ListWinnerClaimedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListWinnerClaimedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.esm.WinnerDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.ListWinnerClaimedResponse}
 */
proto.api.esm.ListWinnerClaimedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.ListWinnerClaimedResponse;
  return proto.api.esm.ListWinnerClaimedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.ListWinnerClaimedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.ListWinnerClaimedResponse}
 */
proto.api.esm.ListWinnerClaimedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.esm.WinnerDetail;
      reader.readMessage(value,proto.api.esm.WinnerDetail.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.ListWinnerClaimedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.ListWinnerClaimedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.ListWinnerClaimedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.ListWinnerClaimedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.esm.WinnerDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WinnerDetail result = 1;
 * @return {!Array<!proto.api.esm.WinnerDetail>}
 */
proto.api.esm.ListWinnerClaimedResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.api.esm.WinnerDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.esm.WinnerDetail, 1));
};


/**
 * @param {!Array<!proto.api.esm.WinnerDetail>} value
 * @return {!proto.api.esm.ListWinnerClaimedResponse} returns this
*/
proto.api.esm.ListWinnerClaimedResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.esm.WinnerDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.esm.WinnerDetail}
 */
proto.api.esm.ListWinnerClaimedResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.esm.WinnerDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.esm.ListWinnerClaimedResponse} returns this
 */
proto.api.esm.ListWinnerClaimedResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.esm.WinnerDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.esm.WinnerDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.esm.WinnerDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.WinnerDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    prizeId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    prizeTitle: jspb.Message.getFieldWithDefault(msg, 3, ""),
    prizeImgUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    prizeTypeId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    userNickName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    userAvatarUrl: jspb.Message.getFieldWithDefault(msg, 8, ""),
    createdOn: jspb.Message.getFieldWithDefault(msg, 9, 0),
    claimedOn: jspb.Message.getFieldWithDefault(msg, 10, 0),
    status: jspb.Message.getFieldWithDefault(msg, 11, 0),
    shipTracking: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.esm.WinnerDetail}
 */
proto.api.esm.WinnerDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.esm.WinnerDetail;
  return proto.api.esm.WinnerDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.esm.WinnerDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.esm.WinnerDetail}
 */
proto.api.esm.WinnerDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPrizeId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrizeTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrizeImgUrl(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrizeTypeId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserNickName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserAvatarUrl(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedOn(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setClaimedOn(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setShipTracking(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.esm.WinnerDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.esm.WinnerDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.esm.WinnerDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.esm.WinnerDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPrizeId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPrizeTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPrizeImgUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPrizeTypeId();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getUserNickName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getUserAvatarUrl();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCreatedOn();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getClaimedOn();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getShipTracking();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.esm.WinnerDetail.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.WinnerDetail} returns this
 */
proto.api.esm.WinnerDetail.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 prize_id = 2;
 * @return {number}
 */
proto.api.esm.WinnerDetail.prototype.getPrizeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.WinnerDetail} returns this
 */
proto.api.esm.WinnerDetail.prototype.setPrizeId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string prize_title = 3;
 * @return {string}
 */
proto.api.esm.WinnerDetail.prototype.getPrizeTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.WinnerDetail} returns this
 */
proto.api.esm.WinnerDetail.prototype.setPrizeTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string prize_img_url = 4;
 * @return {string}
 */
proto.api.esm.WinnerDetail.prototype.getPrizeImgUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.WinnerDetail} returns this
 */
proto.api.esm.WinnerDetail.prototype.setPrizeImgUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 prize_type_id = 5;
 * @return {number}
 */
proto.api.esm.WinnerDetail.prototype.getPrizeTypeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.WinnerDetail} returns this
 */
proto.api.esm.WinnerDetail.prototype.setPrizeTypeId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 user_id = 6;
 * @return {number}
 */
proto.api.esm.WinnerDetail.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.WinnerDetail} returns this
 */
proto.api.esm.WinnerDetail.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string user_nick_name = 7;
 * @return {string}
 */
proto.api.esm.WinnerDetail.prototype.getUserNickName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.WinnerDetail} returns this
 */
proto.api.esm.WinnerDetail.prototype.setUserNickName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string user_avatar_url = 8;
 * @return {string}
 */
proto.api.esm.WinnerDetail.prototype.getUserAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.WinnerDetail} returns this
 */
proto.api.esm.WinnerDetail.prototype.setUserAvatarUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 created_on = 9;
 * @return {number}
 */
proto.api.esm.WinnerDetail.prototype.getCreatedOn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.WinnerDetail} returns this
 */
proto.api.esm.WinnerDetail.prototype.setCreatedOn = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 claimed_on = 10;
 * @return {number}
 */
proto.api.esm.WinnerDetail.prototype.getClaimedOn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.WinnerDetail} returns this
 */
proto.api.esm.WinnerDetail.prototype.setClaimedOn = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 status = 11;
 * @return {number}
 */
proto.api.esm.WinnerDetail.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.esm.WinnerDetail} returns this
 */
proto.api.esm.WinnerDetail.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string ship_tracking = 12;
 * @return {string}
 */
proto.api.esm.WinnerDetail.prototype.getShipTracking = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.esm.WinnerDetail} returns this
 */
proto.api.esm.WinnerDetail.prototype.setShipTracking = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


goog.object.extend(exports, proto.api.esm);
