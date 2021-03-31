/**
 * @fileoverview gRPC-Web generated client stub for api.esm
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.api = {};
proto.api.esm = require('./esmapi_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.esm.EsmApiClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.esm.EsmApiPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.ListStatusTypeRequest,
 *   !proto.api.esm.ListStatusTypeResponse>}
 */
const methodDescriptor_EsmApi_ListStatusType = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/ListStatusType',
  grpc.web.MethodType.UNARY,
  proto.api.esm.ListStatusTypeRequest,
  proto.api.esm.ListStatusTypeResponse,
  /**
   * @param {!proto.api.esm.ListStatusTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListStatusTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.ListStatusTypeRequest,
 *   !proto.api.esm.ListStatusTypeResponse>}
 */
const methodInfo_EsmApi_ListStatusType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.ListStatusTypeResponse,
  /**
   * @param {!proto.api.esm.ListStatusTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListStatusTypeResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.ListStatusTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.ListStatusTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.ListStatusTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.listStatusType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/ListStatusType',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListStatusType,
      callback);
};


/**
 * @param {!proto.api.esm.ListStatusTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.ListStatusTypeResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.listStatusType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/ListStatusType',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListStatusType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.ListWinTypeRequest,
 *   !proto.api.esm.ListWinTypeResponse>}
 */
const methodDescriptor_EsmApi_ListWinType = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/ListWinType',
  grpc.web.MethodType.UNARY,
  proto.api.esm.ListWinTypeRequest,
  proto.api.esm.ListWinTypeResponse,
  /**
   * @param {!proto.api.esm.ListWinTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListWinTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.ListWinTypeRequest,
 *   !proto.api.esm.ListWinTypeResponse>}
 */
const methodInfo_EsmApi_ListWinType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.ListWinTypeResponse,
  /**
   * @param {!proto.api.esm.ListWinTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListWinTypeResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.ListWinTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.ListWinTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.ListWinTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.listWinType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/ListWinType',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListWinType,
      callback);
};


/**
 * @param {!proto.api.esm.ListWinTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.ListWinTypeResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.listWinType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/ListWinType',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListWinType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.ListTimezonesRequest,
 *   !proto.api.esm.ListTimezonesResponse>}
 */
const methodDescriptor_EsmApi_ListTimezones = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/ListTimezones',
  grpc.web.MethodType.UNARY,
  proto.api.esm.ListTimezonesRequest,
  proto.api.esm.ListTimezonesResponse,
  /**
   * @param {!proto.api.esm.ListTimezonesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListTimezonesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.ListTimezonesRequest,
 *   !proto.api.esm.ListTimezonesResponse>}
 */
const methodInfo_EsmApi_ListTimezones = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.ListTimezonesResponse,
  /**
   * @param {!proto.api.esm.ListTimezonesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListTimezonesResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.ListTimezonesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.ListTimezonesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.ListTimezonesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.listTimezones =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/ListTimezones',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListTimezones,
      callback);
};


/**
 * @param {!proto.api.esm.ListTimezonesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.ListTimezonesResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.listTimezones =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/ListTimezones',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListTimezones);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.SignInRequest,
 *   !proto.api.esm.SignInResponse>}
 */
const methodDescriptor_EsmApi_SignIn = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/SignIn',
  grpc.web.MethodType.UNARY,
  proto.api.esm.SignInRequest,
  proto.api.esm.SignInResponse,
  /**
   * @param {!proto.api.esm.SignInRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.SignInResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.SignInRequest,
 *   !proto.api.esm.SignInResponse>}
 */
const methodInfo_EsmApi_SignIn = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.SignInResponse,
  /**
   * @param {!proto.api.esm.SignInRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.SignInResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.SignInRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.SignInResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.SignInResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.signIn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/SignIn',
      request,
      metadata || {},
      methodDescriptor_EsmApi_SignIn,
      callback);
};


/**
 * @param {!proto.api.esm.SignInRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.SignInResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.signIn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/SignIn',
      request,
      metadata || {},
      methodDescriptor_EsmApi_SignIn);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.AddUserRequest,
 *   !proto.api.esm.AddUserResponse>}
 */
const methodDescriptor_EsmApi_AddUser = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/AddUser',
  grpc.web.MethodType.UNARY,
  proto.api.esm.AddUserRequest,
  proto.api.esm.AddUserResponse,
  /**
   * @param {!proto.api.esm.AddUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.AddUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.AddUserRequest,
 *   !proto.api.esm.AddUserResponse>}
 */
const methodInfo_EsmApi_AddUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.AddUserResponse,
  /**
   * @param {!proto.api.esm.AddUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.AddUserResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.AddUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.AddUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.AddUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.addUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/AddUser',
      request,
      metadata || {},
      methodDescriptor_EsmApi_AddUser,
      callback);
};


/**
 * @param {!proto.api.esm.AddUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.AddUserResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.addUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/AddUser',
      request,
      metadata || {},
      methodDescriptor_EsmApi_AddUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.UpdateSocialLinkFBRequest,
 *   !proto.api.esm.UpdateSocialLinkFBResponse>}
 */
const methodDescriptor_EsmApi_UpdateSocialLinkFB = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/UpdateSocialLinkFB',
  grpc.web.MethodType.UNARY,
  proto.api.esm.UpdateSocialLinkFBRequest,
  proto.api.esm.UpdateSocialLinkFBResponse,
  /**
   * @param {!proto.api.esm.UpdateSocialLinkFBRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.UpdateSocialLinkFBResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.UpdateSocialLinkFBRequest,
 *   !proto.api.esm.UpdateSocialLinkFBResponse>}
 */
const methodInfo_EsmApi_UpdateSocialLinkFB = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.UpdateSocialLinkFBResponse,
  /**
   * @param {!proto.api.esm.UpdateSocialLinkFBRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.UpdateSocialLinkFBResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.UpdateSocialLinkFBRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.UpdateSocialLinkFBResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.UpdateSocialLinkFBResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.updateSocialLinkFB =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/UpdateSocialLinkFB',
      request,
      metadata || {},
      methodDescriptor_EsmApi_UpdateSocialLinkFB,
      callback);
};


/**
 * @param {!proto.api.esm.UpdateSocialLinkFBRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.UpdateSocialLinkFBResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.updateSocialLinkFB =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/UpdateSocialLinkFB',
      request,
      metadata || {},
      methodDescriptor_EsmApi_UpdateSocialLinkFB);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.UpdateSocialLinkGoogleRequest,
 *   !proto.api.esm.UpdateSocialLinkGoogleResponse>}
 */
const methodDescriptor_EsmApi_UpdateSocialLinkGoogle = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/UpdateSocialLinkGoogle',
  grpc.web.MethodType.UNARY,
  proto.api.esm.UpdateSocialLinkGoogleRequest,
  proto.api.esm.UpdateSocialLinkGoogleResponse,
  /**
   * @param {!proto.api.esm.UpdateSocialLinkGoogleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.UpdateSocialLinkGoogleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.UpdateSocialLinkGoogleRequest,
 *   !proto.api.esm.UpdateSocialLinkGoogleResponse>}
 */
const methodInfo_EsmApi_UpdateSocialLinkGoogle = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.UpdateSocialLinkGoogleResponse,
  /**
   * @param {!proto.api.esm.UpdateSocialLinkGoogleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.UpdateSocialLinkGoogleResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.UpdateSocialLinkGoogleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.UpdateSocialLinkGoogleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.UpdateSocialLinkGoogleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.updateSocialLinkGoogle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/UpdateSocialLinkGoogle',
      request,
      metadata || {},
      methodDescriptor_EsmApi_UpdateSocialLinkGoogle,
      callback);
};


/**
 * @param {!proto.api.esm.UpdateSocialLinkGoogleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.UpdateSocialLinkGoogleResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.updateSocialLinkGoogle =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/UpdateSocialLinkGoogle',
      request,
      metadata || {},
      methodDescriptor_EsmApi_UpdateSocialLinkGoogle);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.UpdateAddressRequest,
 *   !proto.api.esm.UpdateAddressResponse>}
 */
const methodDescriptor_EsmApi_UpdateAddress = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/UpdateAddress',
  grpc.web.MethodType.UNARY,
  proto.api.esm.UpdateAddressRequest,
  proto.api.esm.UpdateAddressResponse,
  /**
   * @param {!proto.api.esm.UpdateAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.UpdateAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.UpdateAddressRequest,
 *   !proto.api.esm.UpdateAddressResponse>}
 */
const methodInfo_EsmApi_UpdateAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.UpdateAddressResponse,
  /**
   * @param {!proto.api.esm.UpdateAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.UpdateAddressResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.UpdateAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.UpdateAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.UpdateAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.updateAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/UpdateAddress',
      request,
      metadata || {},
      methodDescriptor_EsmApi_UpdateAddress,
      callback);
};


/**
 * @param {!proto.api.esm.UpdateAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.UpdateAddressResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.updateAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/UpdateAddress',
      request,
      metadata || {},
      methodDescriptor_EsmApi_UpdateAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.UpdateUserSettingsRequest,
 *   !proto.api.esm.UpdateUserSettingsResponse>}
 */
const methodDescriptor_EsmApi_UpdateUserSettings = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/UpdateUserSettings',
  grpc.web.MethodType.UNARY,
  proto.api.esm.UpdateUserSettingsRequest,
  proto.api.esm.UpdateUserSettingsResponse,
  /**
   * @param {!proto.api.esm.UpdateUserSettingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.UpdateUserSettingsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.UpdateUserSettingsRequest,
 *   !proto.api.esm.UpdateUserSettingsResponse>}
 */
const methodInfo_EsmApi_UpdateUserSettings = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.UpdateUserSettingsResponse,
  /**
   * @param {!proto.api.esm.UpdateUserSettingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.UpdateUserSettingsResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.UpdateUserSettingsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.UpdateUserSettingsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.UpdateUserSettingsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.updateUserSettings =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/UpdateUserSettings',
      request,
      metadata || {},
      methodDescriptor_EsmApi_UpdateUserSettings,
      callback);
};


/**
 * @param {!proto.api.esm.UpdateUserSettingsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.UpdateUserSettingsResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.updateUserSettings =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/UpdateUserSettings',
      request,
      metadata || {},
      methodDescriptor_EsmApi_UpdateUserSettings);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.ChangePasswordRequest,
 *   !proto.api.esm.ChangePasswordResponse>}
 */
const methodDescriptor_EsmApi_ChangePassword = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/ChangePassword',
  grpc.web.MethodType.UNARY,
  proto.api.esm.ChangePasswordRequest,
  proto.api.esm.ChangePasswordResponse,
  /**
   * @param {!proto.api.esm.ChangePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ChangePasswordResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.ChangePasswordRequest,
 *   !proto.api.esm.ChangePasswordResponse>}
 */
const methodInfo_EsmApi_ChangePassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.ChangePasswordResponse,
  /**
   * @param {!proto.api.esm.ChangePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ChangePasswordResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.ChangePasswordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.ChangePasswordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.changePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ChangePassword,
      callback);
};


/**
 * @param {!proto.api.esm.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.ChangePasswordResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.changePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ChangePassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.GetConfigRequest,
 *   !proto.api.esm.GetConfigResponse>}
 */
const methodDescriptor_EsmApi_GetConfig = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/GetConfig',
  grpc.web.MethodType.UNARY,
  proto.api.esm.GetConfigRequest,
  proto.api.esm.GetConfigResponse,
  /**
   * @param {!proto.api.esm.GetConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.GetConfigResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.GetConfigRequest,
 *   !proto.api.esm.GetConfigResponse>}
 */
const methodInfo_EsmApi_GetConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.GetConfigResponse,
  /**
   * @param {!proto.api.esm.GetConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.GetConfigResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.GetConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.GetConfigResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.GetConfigResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.getConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/GetConfig',
      request,
      metadata || {},
      methodDescriptor_EsmApi_GetConfig,
      callback);
};


/**
 * @param {!proto.api.esm.GetConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.GetConfigResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.getConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/GetConfig',
      request,
      metadata || {},
      methodDescriptor_EsmApi_GetConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.ListSpinnerRuleRequest,
 *   !proto.api.esm.ListSpinnerRuleResponse>}
 */
const methodDescriptor_EsmApi_ListSpinnerRule = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/ListSpinnerRule',
  grpc.web.MethodType.UNARY,
  proto.api.esm.ListSpinnerRuleRequest,
  proto.api.esm.ListSpinnerRuleResponse,
  /**
   * @param {!proto.api.esm.ListSpinnerRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListSpinnerRuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.ListSpinnerRuleRequest,
 *   !proto.api.esm.ListSpinnerRuleResponse>}
 */
const methodInfo_EsmApi_ListSpinnerRule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.ListSpinnerRuleResponse,
  /**
   * @param {!proto.api.esm.ListSpinnerRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListSpinnerRuleResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.ListSpinnerRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.ListSpinnerRuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.ListSpinnerRuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.listSpinnerRule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/ListSpinnerRule',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListSpinnerRule,
      callback);
};


/**
 * @param {!proto.api.esm.ListSpinnerRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.ListSpinnerRuleResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.listSpinnerRule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/ListSpinnerRule',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListSpinnerRule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.ListGameLeaderRuleRequest,
 *   !proto.api.esm.ListGameLeaderRuleResponse>}
 */
const methodDescriptor_EsmApi_ListGameLeaderRule = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/ListGameLeaderRule',
  grpc.web.MethodType.UNARY,
  proto.api.esm.ListGameLeaderRuleRequest,
  proto.api.esm.ListGameLeaderRuleResponse,
  /**
   * @param {!proto.api.esm.ListGameLeaderRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListGameLeaderRuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.ListGameLeaderRuleRequest,
 *   !proto.api.esm.ListGameLeaderRuleResponse>}
 */
const methodInfo_EsmApi_ListGameLeaderRule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.ListGameLeaderRuleResponse,
  /**
   * @param {!proto.api.esm.ListGameLeaderRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListGameLeaderRuleResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.ListGameLeaderRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.ListGameLeaderRuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.ListGameLeaderRuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.listGameLeaderRule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/ListGameLeaderRule',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListGameLeaderRule,
      callback);
};


/**
 * @param {!proto.api.esm.ListGameLeaderRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.ListGameLeaderRuleResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.listGameLeaderRule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/ListGameLeaderRule',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListGameLeaderRule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.GetGameCodeRequest,
 *   !proto.api.esm.GetGameCodeResponse>}
 */
const methodDescriptor_EsmApi_GetGameCode = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/GetGameCode',
  grpc.web.MethodType.UNARY,
  proto.api.esm.GetGameCodeRequest,
  proto.api.esm.GetGameCodeResponse,
  /**
   * @param {!proto.api.esm.GetGameCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.GetGameCodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.GetGameCodeRequest,
 *   !proto.api.esm.GetGameCodeResponse>}
 */
const methodInfo_EsmApi_GetGameCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.GetGameCodeResponse,
  /**
   * @param {!proto.api.esm.GetGameCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.GetGameCodeResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.GetGameCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.GetGameCodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.GetGameCodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.getGameCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/GetGameCode',
      request,
      metadata || {},
      methodDescriptor_EsmApi_GetGameCode,
      callback);
};


/**
 * @param {!proto.api.esm.GetGameCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.GetGameCodeResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.getGameCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/GetGameCode',
      request,
      metadata || {},
      methodDescriptor_EsmApi_GetGameCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.ListGameRequest,
 *   !proto.api.esm.ListGameResponse>}
 */
const methodDescriptor_EsmApi_ListGame = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/ListGame',
  grpc.web.MethodType.UNARY,
  proto.api.esm.ListGameRequest,
  proto.api.esm.ListGameResponse,
  /**
   * @param {!proto.api.esm.ListGameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListGameResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.ListGameRequest,
 *   !proto.api.esm.ListGameResponse>}
 */
const methodInfo_EsmApi_ListGame = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.ListGameResponse,
  /**
   * @param {!proto.api.esm.ListGameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListGameResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.ListGameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.ListGameResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.ListGameResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.listGame =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/ListGame',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListGame,
      callback);
};


/**
 * @param {!proto.api.esm.ListGameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.ListGameResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.listGame =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/ListGame',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListGame);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.LogGEnterRequest,
 *   !proto.api.esm.LogGEnterResponse>}
 */
const methodDescriptor_EsmApi_LogGEnter = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/LogGEnter',
  grpc.web.MethodType.UNARY,
  proto.api.esm.LogGEnterRequest,
  proto.api.esm.LogGEnterResponse,
  /**
   * @param {!proto.api.esm.LogGEnterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.LogGEnterResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.LogGEnterRequest,
 *   !proto.api.esm.LogGEnterResponse>}
 */
const methodInfo_EsmApi_LogGEnter = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.LogGEnterResponse,
  /**
   * @param {!proto.api.esm.LogGEnterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.LogGEnterResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.LogGEnterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.LogGEnterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.LogGEnterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.logGEnter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/LogGEnter',
      request,
      metadata || {},
      methodDescriptor_EsmApi_LogGEnter,
      callback);
};


/**
 * @param {!proto.api.esm.LogGEnterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.LogGEnterResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.logGEnter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/LogGEnter',
      request,
      metadata || {},
      methodDescriptor_EsmApi_LogGEnter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.LogGLeaveRequest,
 *   !proto.api.esm.LogGLeaveResponse>}
 */
const methodDescriptor_EsmApi_LogGLeave = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/LogGLeave',
  grpc.web.MethodType.UNARY,
  proto.api.esm.LogGLeaveRequest,
  proto.api.esm.LogGLeaveResponse,
  /**
   * @param {!proto.api.esm.LogGLeaveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.LogGLeaveResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.LogGLeaveRequest,
 *   !proto.api.esm.LogGLeaveResponse>}
 */
const methodInfo_EsmApi_LogGLeave = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.LogGLeaveResponse,
  /**
   * @param {!proto.api.esm.LogGLeaveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.LogGLeaveResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.LogGLeaveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.LogGLeaveResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.LogGLeaveResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.logGLeave =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/LogGLeave',
      request,
      metadata || {},
      methodDescriptor_EsmApi_LogGLeave,
      callback);
};


/**
 * @param {!proto.api.esm.LogGLeaveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.LogGLeaveResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.logGLeave =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/LogGLeave',
      request,
      metadata || {},
      methodDescriptor_EsmApi_LogGLeave);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.ListLogGRequest,
 *   !proto.api.esm.ListLogGResponse>}
 */
const methodDescriptor_EsmApi_ListLogG = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/ListLogG',
  grpc.web.MethodType.UNARY,
  proto.api.esm.ListLogGRequest,
  proto.api.esm.ListLogGResponse,
  /**
   * @param {!proto.api.esm.ListLogGRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListLogGResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.ListLogGRequest,
 *   !proto.api.esm.ListLogGResponse>}
 */
const methodInfo_EsmApi_ListLogG = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.ListLogGResponse,
  /**
   * @param {!proto.api.esm.ListLogGRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListLogGResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.ListLogGRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.ListLogGResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.ListLogGResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.listLogG =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/ListLogG',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListLogG,
      callback);
};


/**
 * @param {!proto.api.esm.ListLogGRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.ListLogGResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.listLogG =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/ListLogG',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListLogG);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.GenerateInviteUrlRequest,
 *   !proto.api.esm.GenerateInviteUrlResponse>}
 */
const methodDescriptor_EsmApi_GenerateInviteURL = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/GenerateInviteURL',
  grpc.web.MethodType.UNARY,
  proto.api.esm.GenerateInviteUrlRequest,
  proto.api.esm.GenerateInviteUrlResponse,
  /**
   * @param {!proto.api.esm.GenerateInviteUrlRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.GenerateInviteUrlResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.GenerateInviteUrlRequest,
 *   !proto.api.esm.GenerateInviteUrlResponse>}
 */
const methodInfo_EsmApi_GenerateInviteURL = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.GenerateInviteUrlResponse,
  /**
   * @param {!proto.api.esm.GenerateInviteUrlRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.GenerateInviteUrlResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.GenerateInviteUrlRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.GenerateInviteUrlResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.GenerateInviteUrlResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.generateInviteURL =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/GenerateInviteURL',
      request,
      metadata || {},
      methodDescriptor_EsmApi_GenerateInviteURL,
      callback);
};


/**
 * @param {!proto.api.esm.GenerateInviteUrlRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.GenerateInviteUrlResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.generateInviteURL =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/GenerateInviteURL',
      request,
      metadata || {},
      methodDescriptor_EsmApi_GenerateInviteURL);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.AddInviteRequest,
 *   !proto.api.esm.AddInviteResponse>}
 */
const methodDescriptor_EsmApi_AddInvite = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/AddInvite',
  grpc.web.MethodType.UNARY,
  proto.api.esm.AddInviteRequest,
  proto.api.esm.AddInviteResponse,
  /**
   * @param {!proto.api.esm.AddInviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.AddInviteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.AddInviteRequest,
 *   !proto.api.esm.AddInviteResponse>}
 */
const methodInfo_EsmApi_AddInvite = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.AddInviteResponse,
  /**
   * @param {!proto.api.esm.AddInviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.AddInviteResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.AddInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.AddInviteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.AddInviteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.addInvite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/AddInvite',
      request,
      metadata || {},
      methodDescriptor_EsmApi_AddInvite,
      callback);
};


/**
 * @param {!proto.api.esm.AddInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.AddInviteResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.addInvite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/AddInvite',
      request,
      metadata || {},
      methodDescriptor_EsmApi_AddInvite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.ClaimInviteRequest,
 *   !proto.api.esm.ClaimInviteResponse>}
 */
const methodDescriptor_EsmApi_ClaimInvite = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/ClaimInvite',
  grpc.web.MethodType.UNARY,
  proto.api.esm.ClaimInviteRequest,
  proto.api.esm.ClaimInviteResponse,
  /**
   * @param {!proto.api.esm.ClaimInviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ClaimInviteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.ClaimInviteRequest,
 *   !proto.api.esm.ClaimInviteResponse>}
 */
const methodInfo_EsmApi_ClaimInvite = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.ClaimInviteResponse,
  /**
   * @param {!proto.api.esm.ClaimInviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ClaimInviteResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.ClaimInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.ClaimInviteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.ClaimInviteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.claimInvite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/ClaimInvite',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ClaimInvite,
      callback);
};


/**
 * @param {!proto.api.esm.ClaimInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.ClaimInviteResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.claimInvite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/ClaimInvite',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ClaimInvite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.ListInvitedByRequest,
 *   !proto.api.esm.ListInvitedByResponse>}
 */
const methodDescriptor_EsmApi_ListInvitedBy = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/ListInvitedBy',
  grpc.web.MethodType.UNARY,
  proto.api.esm.ListInvitedByRequest,
  proto.api.esm.ListInvitedByResponse,
  /**
   * @param {!proto.api.esm.ListInvitedByRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListInvitedByResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.ListInvitedByRequest,
 *   !proto.api.esm.ListInvitedByResponse>}
 */
const methodInfo_EsmApi_ListInvitedBy = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.ListInvitedByResponse,
  /**
   * @param {!proto.api.esm.ListInvitedByRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListInvitedByResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.ListInvitedByRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.ListInvitedByResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.ListInvitedByResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.listInvitedBy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/ListInvitedBy',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListInvitedBy,
      callback);
};


/**
 * @param {!proto.api.esm.ListInvitedByRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.ListInvitedByResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.listInvitedBy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/ListInvitedBy',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListInvitedBy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.ListItemRequest,
 *   !proto.api.esm.ListItemResponse>}
 */
const methodDescriptor_EsmApi_ListItem = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/ListItem',
  grpc.web.MethodType.UNARY,
  proto.api.esm.ListItemRequest,
  proto.api.esm.ListItemResponse,
  /**
   * @param {!proto.api.esm.ListItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListItemResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.ListItemRequest,
 *   !proto.api.esm.ListItemResponse>}
 */
const methodInfo_EsmApi_ListItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.ListItemResponse,
  /**
   * @param {!proto.api.esm.ListItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListItemResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.ListItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.ListItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.ListItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.listItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/ListItem',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListItem,
      callback);
};


/**
 * @param {!proto.api.esm.ListItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.ListItemResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.listItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/ListItem',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.ListItemTypeRequest,
 *   !proto.api.esm.ListItemTypeResponse>}
 */
const methodDescriptor_EsmApi_ListItemType = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/ListItemType',
  grpc.web.MethodType.UNARY,
  proto.api.esm.ListItemTypeRequest,
  proto.api.esm.ListItemTypeResponse,
  /**
   * @param {!proto.api.esm.ListItemTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListItemTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.ListItemTypeRequest,
 *   !proto.api.esm.ListItemTypeResponse>}
 */
const methodInfo_EsmApi_ListItemType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.ListItemTypeResponse,
  /**
   * @param {!proto.api.esm.ListItemTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListItemTypeResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.ListItemTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.ListItemTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.ListItemTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.listItemType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/ListItemType',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListItemType,
      callback);
};


/**
 * @param {!proto.api.esm.ListItemTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.ListItemTypeResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.listItemType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/ListItemType',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListItemType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.ListPrizeRequest,
 *   !proto.api.esm.ListPrizeResponse>}
 */
const methodDescriptor_EsmApi_ListPrize = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/ListPrize',
  grpc.web.MethodType.UNARY,
  proto.api.esm.ListPrizeRequest,
  proto.api.esm.ListPrizeResponse,
  /**
   * @param {!proto.api.esm.ListPrizeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListPrizeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.ListPrizeRequest,
 *   !proto.api.esm.ListPrizeResponse>}
 */
const methodInfo_EsmApi_ListPrize = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.ListPrizeResponse,
  /**
   * @param {!proto.api.esm.ListPrizeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListPrizeResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.ListPrizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.ListPrizeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.ListPrizeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.listPrize =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/ListPrize',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListPrize,
      callback);
};


/**
 * @param {!proto.api.esm.ListPrizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.ListPrizeResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.listPrize =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/ListPrize',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListPrize);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.ListRankRequest,
 *   !proto.api.esm.ListRankResponse>}
 */
const methodDescriptor_EsmApi_ListRank = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/ListRank',
  grpc.web.MethodType.UNARY,
  proto.api.esm.ListRankRequest,
  proto.api.esm.ListRankResponse,
  /**
   * @param {!proto.api.esm.ListRankRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListRankResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.ListRankRequest,
 *   !proto.api.esm.ListRankResponse>}
 */
const methodInfo_EsmApi_ListRank = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.ListRankResponse,
  /**
   * @param {!proto.api.esm.ListRankRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListRankResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.ListRankRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.ListRankResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.ListRankResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.listRank =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/ListRank',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListRank,
      callback);
};


/**
 * @param {!proto.api.esm.ListRankRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.ListRankResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.listRank =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/ListRank',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListRank);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.BuyRequest,
 *   !proto.api.esm.BuyResponse>}
 */
const methodDescriptor_EsmApi_Buy = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/Buy',
  grpc.web.MethodType.UNARY,
  proto.api.esm.BuyRequest,
  proto.api.esm.BuyResponse,
  /**
   * @param {!proto.api.esm.BuyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.BuyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.BuyRequest,
 *   !proto.api.esm.BuyResponse>}
 */
const methodInfo_EsmApi_Buy = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.BuyResponse,
  /**
   * @param {!proto.api.esm.BuyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.BuyResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.BuyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.BuyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.BuyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.buy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/Buy',
      request,
      metadata || {},
      methodDescriptor_EsmApi_Buy,
      callback);
};


/**
 * @param {!proto.api.esm.BuyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.BuyResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.buy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/Buy',
      request,
      metadata || {},
      methodDescriptor_EsmApi_Buy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.ListSubscriptionRequest,
 *   !proto.api.esm.ListSubscriptionResponse>}
 */
const methodDescriptor_EsmApi_ListSubscription = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/ListSubscription',
  grpc.web.MethodType.UNARY,
  proto.api.esm.ListSubscriptionRequest,
  proto.api.esm.ListSubscriptionResponse,
  /**
   * @param {!proto.api.esm.ListSubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListSubscriptionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.ListSubscriptionRequest,
 *   !proto.api.esm.ListSubscriptionResponse>}
 */
const methodInfo_EsmApi_ListSubscription = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.ListSubscriptionResponse,
  /**
   * @param {!proto.api.esm.ListSubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListSubscriptionResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.ListSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.ListSubscriptionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.ListSubscriptionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.listSubscription =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/ListSubscription',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListSubscription,
      callback);
};


/**
 * @param {!proto.api.esm.ListSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.ListSubscriptionResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.listSubscription =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/ListSubscription',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListSubscription);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.ListSubscriptionTypeRequest,
 *   !proto.api.esm.ListSubscriptionTypeResponse>}
 */
const methodDescriptor_EsmApi_ListSubscriptionType = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/ListSubscriptionType',
  grpc.web.MethodType.UNARY,
  proto.api.esm.ListSubscriptionTypeRequest,
  proto.api.esm.ListSubscriptionTypeResponse,
  /**
   * @param {!proto.api.esm.ListSubscriptionTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListSubscriptionTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.ListSubscriptionTypeRequest,
 *   !proto.api.esm.ListSubscriptionTypeResponse>}
 */
const methodInfo_EsmApi_ListSubscriptionType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.ListSubscriptionTypeResponse,
  /**
   * @param {!proto.api.esm.ListSubscriptionTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListSubscriptionTypeResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.ListSubscriptionTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.ListSubscriptionTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.ListSubscriptionTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.listSubscriptionType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/ListSubscriptionType',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListSubscriptionType,
      callback);
};


/**
 * @param {!proto.api.esm.ListSubscriptionTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.ListSubscriptionTypeResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.listSubscriptionType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/ListSubscriptionType',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListSubscriptionType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.ListWinnerRequest,
 *   !proto.api.esm.ListWinnerResponse>}
 */
const methodDescriptor_EsmApi_ListWinner = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/ListWinner',
  grpc.web.MethodType.UNARY,
  proto.api.esm.ListWinnerRequest,
  proto.api.esm.ListWinnerResponse,
  /**
   * @param {!proto.api.esm.ListWinnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListWinnerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.ListWinnerRequest,
 *   !proto.api.esm.ListWinnerResponse>}
 */
const methodInfo_EsmApi_ListWinner = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.ListWinnerResponse,
  /**
   * @param {!proto.api.esm.ListWinnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ListWinnerResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.ListWinnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.ListWinnerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.ListWinnerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.listWinner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/ListWinner',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListWinner,
      callback);
};


/**
 * @param {!proto.api.esm.ListWinnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.ListWinnerResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.listWinner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/ListWinner',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ListWinner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.esm.ClaimWinnerRequest,
 *   !proto.api.esm.ClaimWinnerResponse>}
 */
const methodDescriptor_EsmApi_ClaimWinner = new grpc.web.MethodDescriptor(
  '/api.esm.EsmApi/ClaimWinner',
  grpc.web.MethodType.UNARY,
  proto.api.esm.ClaimWinnerRequest,
  proto.api.esm.ClaimWinnerResponse,
  /**
   * @param {!proto.api.esm.ClaimWinnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ClaimWinnerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.esm.ClaimWinnerRequest,
 *   !proto.api.esm.ClaimWinnerResponse>}
 */
const methodInfo_EsmApi_ClaimWinner = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.esm.ClaimWinnerResponse,
  /**
   * @param {!proto.api.esm.ClaimWinnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.esm.ClaimWinnerResponse.deserializeBinary
);


/**
 * @param {!proto.api.esm.ClaimWinnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.esm.ClaimWinnerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.esm.ClaimWinnerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.esm.EsmApiClient.prototype.claimWinner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.esm.EsmApi/ClaimWinner',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ClaimWinner,
      callback);
};


/**
 * @param {!proto.api.esm.ClaimWinnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.esm.ClaimWinnerResponse>}
 *     Promise that resolves to the response
 */
proto.api.esm.EsmApiPromiseClient.prototype.claimWinner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.esm.EsmApi/ClaimWinner',
      request,
      metadata || {},
      methodDescriptor_EsmApi_ClaimWinner);
};


module.exports = proto.api.esm;

