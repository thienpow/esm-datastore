/**
 * @fileoverview gRPC-Web generated client stub for adminapi.esm
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.adminapi = {};
proto.adminapi.esm = require('./adminapi_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.adminapi.esm.AdminApiClient =
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
proto.adminapi.esm.AdminApiPromiseClient =
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
 *   !proto.adminapi.esm.SignInRequest,
 *   !proto.adminapi.esm.SignInResponse>}
 */
const methodDescriptor_AdminApi_SignIn = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/SignIn',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.SignInRequest,
  proto.adminapi.esm.SignInResponse,
  /**
   * @param {!proto.adminapi.esm.SignInRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.SignInResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.SignInRequest,
 *   !proto.adminapi.esm.SignInResponse>}
 */
const methodInfo_AdminApi_SignIn = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.SignInResponse,
  /**
   * @param {!proto.adminapi.esm.SignInRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.SignInResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.SignInRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.SignInResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.SignInResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.signIn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/SignIn',
      request,
      metadata || {},
      methodDescriptor_AdminApi_SignIn,
      callback);
};


/**
 * @param {!proto.adminapi.esm.SignInRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.SignInResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.signIn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/SignIn',
      request,
      metadata || {},
      methodDescriptor_AdminApi_SignIn);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListStatusTypeRequest,
 *   !proto.adminapi.esm.ListStatusTypeResponse>}
 */
const methodDescriptor_AdminApi_ListStatusType = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListStatusType',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListStatusTypeRequest,
  proto.adminapi.esm.ListStatusTypeResponse,
  /**
   * @param {!proto.adminapi.esm.ListStatusTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListStatusTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListStatusTypeRequest,
 *   !proto.adminapi.esm.ListStatusTypeResponse>}
 */
const methodInfo_AdminApi_ListStatusType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListStatusTypeResponse,
  /**
   * @param {!proto.adminapi.esm.ListStatusTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListStatusTypeResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListStatusTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListStatusTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListStatusTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listStatusType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListStatusType',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListStatusType,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListStatusTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListStatusTypeResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listStatusType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListStatusType',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListStatusType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListUserStatusTypeRequest,
 *   !proto.adminapi.esm.ListUserStatusTypeResponse>}
 */
const methodDescriptor_AdminApi_ListUserStatusType = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListUserStatusType',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListUserStatusTypeRequest,
  proto.adminapi.esm.ListUserStatusTypeResponse,
  /**
   * @param {!proto.adminapi.esm.ListUserStatusTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListUserStatusTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListUserStatusTypeRequest,
 *   !proto.adminapi.esm.ListUserStatusTypeResponse>}
 */
const methodInfo_AdminApi_ListUserStatusType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListUserStatusTypeResponse,
  /**
   * @param {!proto.adminapi.esm.ListUserStatusTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListUserStatusTypeResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListUserStatusTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListUserStatusTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListUserStatusTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listUserStatusType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListUserStatusType',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListUserStatusType,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListUserStatusTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListUserStatusTypeResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listUserStatusType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListUserStatusType',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListUserStatusType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListWinnerStatusTypeRequest,
 *   !proto.adminapi.esm.ListWinnerStatusTypeResponse>}
 */
const methodDescriptor_AdminApi_ListWinnerStatusType = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListWinnerStatusType',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListWinnerStatusTypeRequest,
  proto.adminapi.esm.ListWinnerStatusTypeResponse,
  /**
   * @param {!proto.adminapi.esm.ListWinnerStatusTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListWinnerStatusTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListWinnerStatusTypeRequest,
 *   !proto.adminapi.esm.ListWinnerStatusTypeResponse>}
 */
const methodInfo_AdminApi_ListWinnerStatusType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListWinnerStatusTypeResponse,
  /**
   * @param {!proto.adminapi.esm.ListWinnerStatusTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListWinnerStatusTypeResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListWinnerStatusTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListWinnerStatusTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListWinnerStatusTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listWinnerStatusType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListWinnerStatusType',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListWinnerStatusType,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListWinnerStatusTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListWinnerStatusTypeResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listWinnerStatusType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListWinnerStatusType',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListWinnerStatusType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListWinTypeRequest,
 *   !proto.adminapi.esm.ListWinTypeResponse>}
 */
const methodDescriptor_AdminApi_ListWinType = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListWinType',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListWinTypeRequest,
  proto.adminapi.esm.ListWinTypeResponse,
  /**
   * @param {!proto.adminapi.esm.ListWinTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListWinTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListWinTypeRequest,
 *   !proto.adminapi.esm.ListWinTypeResponse>}
 */
const methodInfo_AdminApi_ListWinType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListWinTypeResponse,
  /**
   * @param {!proto.adminapi.esm.ListWinTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListWinTypeResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListWinTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListWinTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListWinTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listWinType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListWinType',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListWinType,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListWinTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListWinTypeResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listWinType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListWinType',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListWinType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListTimezonesRequest,
 *   !proto.adminapi.esm.ListTimezonesResponse>}
 */
const methodDescriptor_AdminApi_ListTimezones = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListTimezones',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListTimezonesRequest,
  proto.adminapi.esm.ListTimezonesResponse,
  /**
   * @param {!proto.adminapi.esm.ListTimezonesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListTimezonesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListTimezonesRequest,
 *   !proto.adminapi.esm.ListTimezonesResponse>}
 */
const methodInfo_AdminApi_ListTimezones = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListTimezonesResponse,
  /**
   * @param {!proto.adminapi.esm.ListTimezonesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListTimezonesResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListTimezonesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListTimezonesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListTimezonesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listTimezones =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListTimezones',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListTimezones,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListTimezonesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListTimezonesResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listTimezones =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListTimezones',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListTimezones);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.AddUserRequest,
 *   !proto.adminapi.esm.AddUserResponse>}
 */
const methodDescriptor_AdminApi_AddUser = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/AddUser',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.AddUserRequest,
  proto.adminapi.esm.AddUserResponse,
  /**
   * @param {!proto.adminapi.esm.AddUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.AddUserRequest,
 *   !proto.adminapi.esm.AddUserResponse>}
 */
const methodInfo_AdminApi_AddUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.AddUserResponse,
  /**
   * @param {!proto.adminapi.esm.AddUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddUserResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.AddUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.AddUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.AddUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.addUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddUser',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddUser,
      callback);
};


/**
 * @param {!proto.adminapi.esm.AddUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.AddUserResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.addUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddUser',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.UpdateEmailConfirmedRequest,
 *   !proto.adminapi.esm.UpdateEmailConfirmedResponse>}
 */
const methodDescriptor_AdminApi_UpdateEmailConfirmed = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/UpdateEmailConfirmed',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.UpdateEmailConfirmedRequest,
  proto.adminapi.esm.UpdateEmailConfirmedResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateEmailConfirmedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateEmailConfirmedResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.UpdateEmailConfirmedRequest,
 *   !proto.adminapi.esm.UpdateEmailConfirmedResponse>}
 */
const methodInfo_AdminApi_UpdateEmailConfirmed = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.UpdateEmailConfirmedResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateEmailConfirmedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateEmailConfirmedResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.UpdateEmailConfirmedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.UpdateEmailConfirmedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.UpdateEmailConfirmedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.updateEmailConfirmed =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateEmailConfirmed',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateEmailConfirmed,
      callback);
};


/**
 * @param {!proto.adminapi.esm.UpdateEmailConfirmedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.UpdateEmailConfirmedResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.updateEmailConfirmed =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateEmailConfirmed',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateEmailConfirmed);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.UpdateSocialLinkFBRequest,
 *   !proto.adminapi.esm.UpdateSocialLinkFBResponse>}
 */
const methodDescriptor_AdminApi_UpdateSocialLinkFB = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/UpdateSocialLinkFB',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.UpdateSocialLinkFBRequest,
  proto.adminapi.esm.UpdateSocialLinkFBResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateSocialLinkFBRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateSocialLinkFBResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.UpdateSocialLinkFBRequest,
 *   !proto.adminapi.esm.UpdateSocialLinkFBResponse>}
 */
const methodInfo_AdminApi_UpdateSocialLinkFB = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.UpdateSocialLinkFBResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateSocialLinkFBRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateSocialLinkFBResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.UpdateSocialLinkFBRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.UpdateSocialLinkFBResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.UpdateSocialLinkFBResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.updateSocialLinkFB =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateSocialLinkFB',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateSocialLinkFB,
      callback);
};


/**
 * @param {!proto.adminapi.esm.UpdateSocialLinkFBRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.UpdateSocialLinkFBResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.updateSocialLinkFB =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateSocialLinkFB',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateSocialLinkFB);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.UpdateSocialLinkGoogleRequest,
 *   !proto.adminapi.esm.UpdateSocialLinkGoogleResponse>}
 */
const methodDescriptor_AdminApi_UpdateSocialLinkGoogle = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/UpdateSocialLinkGoogle',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.UpdateSocialLinkGoogleRequest,
  proto.adminapi.esm.UpdateSocialLinkGoogleResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateSocialLinkGoogleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateSocialLinkGoogleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.UpdateSocialLinkGoogleRequest,
 *   !proto.adminapi.esm.UpdateSocialLinkGoogleResponse>}
 */
const methodInfo_AdminApi_UpdateSocialLinkGoogle = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.UpdateSocialLinkGoogleResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateSocialLinkGoogleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateSocialLinkGoogleResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.UpdateSocialLinkGoogleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.UpdateSocialLinkGoogleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.UpdateSocialLinkGoogleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.updateSocialLinkGoogle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateSocialLinkGoogle',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateSocialLinkGoogle,
      callback);
};


/**
 * @param {!proto.adminapi.esm.UpdateSocialLinkGoogleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.UpdateSocialLinkGoogleResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.updateSocialLinkGoogle =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateSocialLinkGoogle',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateSocialLinkGoogle);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.UpdateUserStatusGemBalanceRequest,
 *   !proto.adminapi.esm.UpdateUserStatusGemBalanceResponse>}
 */
const methodDescriptor_AdminApi_UpdateUserStatusGemBalance = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/UpdateUserStatusGemBalance',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.UpdateUserStatusGemBalanceRequest,
  proto.adminapi.esm.UpdateUserStatusGemBalanceResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateUserStatusGemBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateUserStatusGemBalanceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.UpdateUserStatusGemBalanceRequest,
 *   !proto.adminapi.esm.UpdateUserStatusGemBalanceResponse>}
 */
const methodInfo_AdminApi_UpdateUserStatusGemBalance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.UpdateUserStatusGemBalanceResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateUserStatusGemBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateUserStatusGemBalanceResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.UpdateUserStatusGemBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.UpdateUserStatusGemBalanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.UpdateUserStatusGemBalanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.updateUserStatusGemBalance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateUserStatusGemBalance',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateUserStatusGemBalance,
      callback);
};


/**
 * @param {!proto.adminapi.esm.UpdateUserStatusGemBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.UpdateUserStatusGemBalanceResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.updateUserStatusGemBalance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateUserStatusGemBalance',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateUserStatusGemBalance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.UpdateAddressRequest,
 *   !proto.adminapi.esm.UpdateAddressResponse>}
 */
const methodDescriptor_AdminApi_UpdateAddress = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/UpdateAddress',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.UpdateAddressRequest,
  proto.adminapi.esm.UpdateAddressResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.UpdateAddressRequest,
 *   !proto.adminapi.esm.UpdateAddressResponse>}
 */
const methodInfo_AdminApi_UpdateAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.UpdateAddressResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateAddressResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.UpdateAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.UpdateAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.UpdateAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.updateAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateAddress',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateAddress,
      callback);
};


/**
 * @param {!proto.adminapi.esm.UpdateAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.UpdateAddressResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.updateAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateAddress',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.UpdateUserSettingsRequest,
 *   !proto.adminapi.esm.UpdateUserSettingsResponse>}
 */
const methodDescriptor_AdminApi_UpdateUserSettings = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/UpdateUserSettings',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.UpdateUserSettingsRequest,
  proto.adminapi.esm.UpdateUserSettingsResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateUserSettingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateUserSettingsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.UpdateUserSettingsRequest,
 *   !proto.adminapi.esm.UpdateUserSettingsResponse>}
 */
const methodInfo_AdminApi_UpdateUserSettings = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.UpdateUserSettingsResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateUserSettingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateUserSettingsResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.UpdateUserSettingsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.UpdateUserSettingsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.UpdateUserSettingsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.updateUserSettings =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateUserSettings',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateUserSettings,
      callback);
};


/**
 * @param {!proto.adminapi.esm.UpdateUserSettingsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.UpdateUserSettingsResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.updateUserSettings =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateUserSettings',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateUserSettings);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ChangePasswordRequest,
 *   !proto.adminapi.esm.ChangePasswordResponse>}
 */
const methodDescriptor_AdminApi_ChangePassword = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ChangePassword',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ChangePasswordRequest,
  proto.adminapi.esm.ChangePasswordResponse,
  /**
   * @param {!proto.adminapi.esm.ChangePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ChangePasswordResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ChangePasswordRequest,
 *   !proto.adminapi.esm.ChangePasswordResponse>}
 */
const methodInfo_AdminApi_ChangePassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ChangePasswordResponse,
  /**
   * @param {!proto.adminapi.esm.ChangePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ChangePasswordResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ChangePasswordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ChangePasswordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.changePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ChangePassword,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ChangePasswordResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.changePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ChangePassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListUserRequest,
 *   !proto.adminapi.esm.ListUserResponse>}
 */
const methodDescriptor_AdminApi_ListUser = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListUser',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListUserRequest,
  proto.adminapi.esm.ListUserResponse,
  /**
   * @param {!proto.adminapi.esm.ListUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListUserRequest,
 *   !proto.adminapi.esm.ListUserResponse>}
 */
const methodInfo_AdminApi_ListUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListUserResponse,
  /**
   * @param {!proto.adminapi.esm.ListUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListUserResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListUser',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListUser,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListUserResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListUser',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.GetUserCountRequest,
 *   !proto.adminapi.esm.GetUserCountResponse>}
 */
const methodDescriptor_AdminApi_GetUserCount = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/GetUserCount',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.GetUserCountRequest,
  proto.adminapi.esm.GetUserCountResponse,
  /**
   * @param {!proto.adminapi.esm.GetUserCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetUserCountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.GetUserCountRequest,
 *   !proto.adminapi.esm.GetUserCountResponse>}
 */
const methodInfo_AdminApi_GetUserCount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.GetUserCountResponse,
  /**
   * @param {!proto.adminapi.esm.GetUserCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetUserCountResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.GetUserCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.GetUserCountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.GetUserCountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.getUserCount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetUserCount',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetUserCount,
      callback);
};


/**
 * @param {!proto.adminapi.esm.GetUserCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.GetUserCountResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.getUserCount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetUserCount',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetUserCount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.GetUserRequest,
 *   !proto.adminapi.esm.GetUserResponse>}
 */
const methodDescriptor_AdminApi_GetUser = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/GetUser',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.GetUserRequest,
  proto.adminapi.esm.GetUserResponse,
  /**
   * @param {!proto.adminapi.esm.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.GetUserRequest,
 *   !proto.adminapi.esm.GetUserResponse>}
 */
const methodInfo_AdminApi_GetUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.GetUserResponse,
  /**
   * @param {!proto.adminapi.esm.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetUserResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.GetUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.GetUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetUser',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetUser,
      callback);
};


/**
 * @param {!proto.adminapi.esm.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.GetUserResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetUser',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.UpdateConfigRequest,
 *   !proto.adminapi.esm.UpdateConfigResponse>}
 */
const methodDescriptor_AdminApi_UpdateConfig = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/UpdateConfig',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.UpdateConfigRequest,
  proto.adminapi.esm.UpdateConfigResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateConfigResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.UpdateConfigRequest,
 *   !proto.adminapi.esm.UpdateConfigResponse>}
 */
const methodInfo_AdminApi_UpdateConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.UpdateConfigResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateConfigResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.UpdateConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.UpdateConfigResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.UpdateConfigResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.updateConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateConfig',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateConfig,
      callback);
};


/**
 * @param {!proto.adminapi.esm.UpdateConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.UpdateConfigResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.updateConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateConfig',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.GetConfigRequest,
 *   !proto.adminapi.esm.GetConfigResponse>}
 */
const methodDescriptor_AdminApi_GetConfig = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/GetConfig',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.GetConfigRequest,
  proto.adminapi.esm.GetConfigResponse,
  /**
   * @param {!proto.adminapi.esm.GetConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetConfigResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.GetConfigRequest,
 *   !proto.adminapi.esm.GetConfigResponse>}
 */
const methodInfo_AdminApi_GetConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.GetConfigResponse,
  /**
   * @param {!proto.adminapi.esm.GetConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetConfigResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.GetConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.GetConfigResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.GetConfigResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.getConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetConfig',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetConfig,
      callback);
};


/**
 * @param {!proto.adminapi.esm.GetConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.GetConfigResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.getConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetConfig',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.AddSpinnerRuleRequest,
 *   !proto.adminapi.esm.AddSpinnerRuleResponse>}
 */
const methodDescriptor_AdminApi_AddSpinnerRule = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/AddSpinnerRule',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.AddSpinnerRuleRequest,
  proto.adminapi.esm.AddSpinnerRuleResponse,
  /**
   * @param {!proto.adminapi.esm.AddSpinnerRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddSpinnerRuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.AddSpinnerRuleRequest,
 *   !proto.adminapi.esm.AddSpinnerRuleResponse>}
 */
const methodInfo_AdminApi_AddSpinnerRule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.AddSpinnerRuleResponse,
  /**
   * @param {!proto.adminapi.esm.AddSpinnerRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddSpinnerRuleResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.AddSpinnerRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.AddSpinnerRuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.AddSpinnerRuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.addSpinnerRule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddSpinnerRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddSpinnerRule,
      callback);
};


/**
 * @param {!proto.adminapi.esm.AddSpinnerRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.AddSpinnerRuleResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.addSpinnerRule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddSpinnerRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddSpinnerRule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.UpdateSpinnerRuleRequest,
 *   !proto.adminapi.esm.UpdateSpinnerRuleResponse>}
 */
const methodDescriptor_AdminApi_UpdateSpinnerRule = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/UpdateSpinnerRule',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.UpdateSpinnerRuleRequest,
  proto.adminapi.esm.UpdateSpinnerRuleResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateSpinnerRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateSpinnerRuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.UpdateSpinnerRuleRequest,
 *   !proto.adminapi.esm.UpdateSpinnerRuleResponse>}
 */
const methodInfo_AdminApi_UpdateSpinnerRule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.UpdateSpinnerRuleResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateSpinnerRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateSpinnerRuleResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.UpdateSpinnerRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.UpdateSpinnerRuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.UpdateSpinnerRuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.updateSpinnerRule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateSpinnerRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateSpinnerRule,
      callback);
};


/**
 * @param {!proto.adminapi.esm.UpdateSpinnerRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.UpdateSpinnerRuleResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.updateSpinnerRule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateSpinnerRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateSpinnerRule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.DeleteSpinnerRuleRequest,
 *   !proto.adminapi.esm.DeleteSpinnerRuleResponse>}
 */
const methodDescriptor_AdminApi_DeleteSpinnerRule = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/DeleteSpinnerRule',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.DeleteSpinnerRuleRequest,
  proto.adminapi.esm.DeleteSpinnerRuleResponse,
  /**
   * @param {!proto.adminapi.esm.DeleteSpinnerRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeleteSpinnerRuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.DeleteSpinnerRuleRequest,
 *   !proto.adminapi.esm.DeleteSpinnerRuleResponse>}
 */
const methodInfo_AdminApi_DeleteSpinnerRule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.DeleteSpinnerRuleResponse,
  /**
   * @param {!proto.adminapi.esm.DeleteSpinnerRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeleteSpinnerRuleResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.DeleteSpinnerRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.DeleteSpinnerRuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.DeleteSpinnerRuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.deleteSpinnerRule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeleteSpinnerRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeleteSpinnerRule,
      callback);
};


/**
 * @param {!proto.adminapi.esm.DeleteSpinnerRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.DeleteSpinnerRuleResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.deleteSpinnerRule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeleteSpinnerRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeleteSpinnerRule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListSpinnerRuleRequest,
 *   !proto.adminapi.esm.ListSpinnerRuleResponse>}
 */
const methodDescriptor_AdminApi_ListSpinnerRule = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListSpinnerRule',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListSpinnerRuleRequest,
  proto.adminapi.esm.ListSpinnerRuleResponse,
  /**
   * @param {!proto.adminapi.esm.ListSpinnerRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListSpinnerRuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListSpinnerRuleRequest,
 *   !proto.adminapi.esm.ListSpinnerRuleResponse>}
 */
const methodInfo_AdminApi_ListSpinnerRule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListSpinnerRuleResponse,
  /**
   * @param {!proto.adminapi.esm.ListSpinnerRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListSpinnerRuleResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListSpinnerRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListSpinnerRuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListSpinnerRuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listSpinnerRule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListSpinnerRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListSpinnerRule,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListSpinnerRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListSpinnerRuleResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listSpinnerRule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListSpinnerRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListSpinnerRule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.AddGameRequest,
 *   !proto.adminapi.esm.AddGameResponse>}
 */
const methodDescriptor_AdminApi_AddGame = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/AddGame',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.AddGameRequest,
  proto.adminapi.esm.AddGameResponse,
  /**
   * @param {!proto.adminapi.esm.AddGameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddGameResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.AddGameRequest,
 *   !proto.adminapi.esm.AddGameResponse>}
 */
const methodInfo_AdminApi_AddGame = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.AddGameResponse,
  /**
   * @param {!proto.adminapi.esm.AddGameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddGameResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.AddGameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.AddGameResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.AddGameResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.addGame =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddGame',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddGame,
      callback);
};


/**
 * @param {!proto.adminapi.esm.AddGameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.AddGameResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.addGame =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddGame',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddGame);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.UpdateGameRequest,
 *   !proto.adminapi.esm.UpdateGameResponse>}
 */
const methodDescriptor_AdminApi_UpdateGame = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/UpdateGame',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.UpdateGameRequest,
  proto.adminapi.esm.UpdateGameResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateGameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateGameResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.UpdateGameRequest,
 *   !proto.adminapi.esm.UpdateGameResponse>}
 */
const methodInfo_AdminApi_UpdateGame = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.UpdateGameResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateGameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateGameResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.UpdateGameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.UpdateGameResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.UpdateGameResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.updateGame =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateGame',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateGame,
      callback);
};


/**
 * @param {!proto.adminapi.esm.UpdateGameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.UpdateGameResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.updateGame =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateGame',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateGame);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.AddGameLeaderRuleRequest,
 *   !proto.adminapi.esm.AddGameLeaderRuleResponse>}
 */
const methodDescriptor_AdminApi_AddGameLeaderRule = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/AddGameLeaderRule',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.AddGameLeaderRuleRequest,
  proto.adminapi.esm.AddGameLeaderRuleResponse,
  /**
   * @param {!proto.adminapi.esm.AddGameLeaderRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddGameLeaderRuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.AddGameLeaderRuleRequest,
 *   !proto.adminapi.esm.AddGameLeaderRuleResponse>}
 */
const methodInfo_AdminApi_AddGameLeaderRule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.AddGameLeaderRuleResponse,
  /**
   * @param {!proto.adminapi.esm.AddGameLeaderRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddGameLeaderRuleResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.AddGameLeaderRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.AddGameLeaderRuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.AddGameLeaderRuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.addGameLeaderRule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddGameLeaderRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddGameLeaderRule,
      callback);
};


/**
 * @param {!proto.adminapi.esm.AddGameLeaderRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.AddGameLeaderRuleResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.addGameLeaderRule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddGameLeaderRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddGameLeaderRule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.UpdateGameLeaderRuleRequest,
 *   !proto.adminapi.esm.UpdateGameLeaderRuleResponse>}
 */
const methodDescriptor_AdminApi_UpdateGameLeaderRule = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/UpdateGameLeaderRule',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.UpdateGameLeaderRuleRequest,
  proto.adminapi.esm.UpdateGameLeaderRuleResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateGameLeaderRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateGameLeaderRuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.UpdateGameLeaderRuleRequest,
 *   !proto.adminapi.esm.UpdateGameLeaderRuleResponse>}
 */
const methodInfo_AdminApi_UpdateGameLeaderRule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.UpdateGameLeaderRuleResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateGameLeaderRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateGameLeaderRuleResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.UpdateGameLeaderRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.UpdateGameLeaderRuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.UpdateGameLeaderRuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.updateGameLeaderRule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateGameLeaderRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateGameLeaderRule,
      callback);
};


/**
 * @param {!proto.adminapi.esm.UpdateGameLeaderRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.UpdateGameLeaderRuleResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.updateGameLeaderRule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateGameLeaderRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateGameLeaderRule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.DeleteGameLeaderRuleRequest,
 *   !proto.adminapi.esm.DeleteGameLeaderRuleResponse>}
 */
const methodDescriptor_AdminApi_DeleteGameLeaderRule = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/DeleteGameLeaderRule',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.DeleteGameLeaderRuleRequest,
  proto.adminapi.esm.DeleteGameLeaderRuleResponse,
  /**
   * @param {!proto.adminapi.esm.DeleteGameLeaderRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeleteGameLeaderRuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.DeleteGameLeaderRuleRequest,
 *   !proto.adminapi.esm.DeleteGameLeaderRuleResponse>}
 */
const methodInfo_AdminApi_DeleteGameLeaderRule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.DeleteGameLeaderRuleResponse,
  /**
   * @param {!proto.adminapi.esm.DeleteGameLeaderRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeleteGameLeaderRuleResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.DeleteGameLeaderRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.DeleteGameLeaderRuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.DeleteGameLeaderRuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.deleteGameLeaderRule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeleteGameLeaderRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeleteGameLeaderRule,
      callback);
};


/**
 * @param {!proto.adminapi.esm.DeleteGameLeaderRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.DeleteGameLeaderRuleResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.deleteGameLeaderRule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeleteGameLeaderRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeleteGameLeaderRule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListGameLeaderRuleRequest,
 *   !proto.adminapi.esm.ListGameLeaderRuleResponse>}
 */
const methodDescriptor_AdminApi_ListGameLeaderRule = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListGameLeaderRule',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListGameLeaderRuleRequest,
  proto.adminapi.esm.ListGameLeaderRuleResponse,
  /**
   * @param {!proto.adminapi.esm.ListGameLeaderRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListGameLeaderRuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListGameLeaderRuleRequest,
 *   !proto.adminapi.esm.ListGameLeaderRuleResponse>}
 */
const methodInfo_AdminApi_ListGameLeaderRule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListGameLeaderRuleResponse,
  /**
   * @param {!proto.adminapi.esm.ListGameLeaderRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListGameLeaderRuleResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListGameLeaderRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListGameLeaderRuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListGameLeaderRuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listGameLeaderRule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListGameLeaderRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListGameLeaderRule,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListGameLeaderRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListGameLeaderRuleResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listGameLeaderRule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListGameLeaderRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListGameLeaderRule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.GetGameCodeRequest,
 *   !proto.adminapi.esm.GetGameCodeResponse>}
 */
const methodDescriptor_AdminApi_GetGameCode = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/GetGameCode',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.GetGameCodeRequest,
  proto.adminapi.esm.GetGameCodeResponse,
  /**
   * @param {!proto.adminapi.esm.GetGameCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetGameCodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.GetGameCodeRequest,
 *   !proto.adminapi.esm.GetGameCodeResponse>}
 */
const methodInfo_AdminApi_GetGameCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.GetGameCodeResponse,
  /**
   * @param {!proto.adminapi.esm.GetGameCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetGameCodeResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.GetGameCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.GetGameCodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.GetGameCodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.getGameCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetGameCode',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetGameCode,
      callback);
};


/**
 * @param {!proto.adminapi.esm.GetGameCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.GetGameCodeResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.getGameCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetGameCode',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetGameCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.DeleteGameRequest,
 *   !proto.adminapi.esm.DeleteGameResponse>}
 */
const methodDescriptor_AdminApi_DeleteGame = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/DeleteGame',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.DeleteGameRequest,
  proto.adminapi.esm.DeleteGameResponse,
  /**
   * @param {!proto.adminapi.esm.DeleteGameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeleteGameResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.DeleteGameRequest,
 *   !proto.adminapi.esm.DeleteGameResponse>}
 */
const methodInfo_AdminApi_DeleteGame = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.DeleteGameResponse,
  /**
   * @param {!proto.adminapi.esm.DeleteGameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeleteGameResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.DeleteGameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.DeleteGameResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.DeleteGameResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.deleteGame =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeleteGame',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeleteGame,
      callback);
};


/**
 * @param {!proto.adminapi.esm.DeleteGameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.DeleteGameResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.deleteGame =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeleteGame',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeleteGame);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListGameRequest,
 *   !proto.adminapi.esm.ListGameResponse>}
 */
const methodDescriptor_AdminApi_ListGame = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListGame',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListGameRequest,
  proto.adminapi.esm.ListGameResponse,
  /**
   * @param {!proto.adminapi.esm.ListGameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListGameResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListGameRequest,
 *   !proto.adminapi.esm.ListGameResponse>}
 */
const methodInfo_AdminApi_ListGame = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListGameResponse,
  /**
   * @param {!proto.adminapi.esm.ListGameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListGameResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListGameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListGameResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListGameResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listGame =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListGame',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListGame,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListGameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListGameResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listGame =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListGame',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListGame);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.GetGameCountRequest,
 *   !proto.adminapi.esm.GetGameCountResponse>}
 */
const methodDescriptor_AdminApi_GetGameCount = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/GetGameCount',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.GetGameCountRequest,
  proto.adminapi.esm.GetGameCountResponse,
  /**
   * @param {!proto.adminapi.esm.GetGameCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetGameCountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.GetGameCountRequest,
 *   !proto.adminapi.esm.GetGameCountResponse>}
 */
const methodInfo_AdminApi_GetGameCount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.GetGameCountResponse,
  /**
   * @param {!proto.adminapi.esm.GetGameCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetGameCountResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.GetGameCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.GetGameCountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.GetGameCountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.getGameCount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetGameCount',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetGameCount,
      callback);
};


/**
 * @param {!proto.adminapi.esm.GetGameCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.GetGameCountResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.getGameCount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetGameCount',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetGameCount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.AddInviteRequest,
 *   !proto.adminapi.esm.AddInviteResponse>}
 */
const methodDescriptor_AdminApi_AddInvite = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/AddInvite',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.AddInviteRequest,
  proto.adminapi.esm.AddInviteResponse,
  /**
   * @param {!proto.adminapi.esm.AddInviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddInviteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.AddInviteRequest,
 *   !proto.adminapi.esm.AddInviteResponse>}
 */
const methodInfo_AdminApi_AddInvite = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.AddInviteResponse,
  /**
   * @param {!proto.adminapi.esm.AddInviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddInviteResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.AddInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.AddInviteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.AddInviteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.addInvite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddInvite',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddInvite,
      callback);
};


/**
 * @param {!proto.adminapi.esm.AddInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.AddInviteResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.addInvite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddInvite',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddInvite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListInvitedByRequest,
 *   !proto.adminapi.esm.ListInvitedByResponse>}
 */
const methodDescriptor_AdminApi_ListInvitedBy = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListInvitedBy',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListInvitedByRequest,
  proto.adminapi.esm.ListInvitedByResponse,
  /**
   * @param {!proto.adminapi.esm.ListInvitedByRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListInvitedByResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListInvitedByRequest,
 *   !proto.adminapi.esm.ListInvitedByResponse>}
 */
const methodInfo_AdminApi_ListInvitedBy = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListInvitedByResponse,
  /**
   * @param {!proto.adminapi.esm.ListInvitedByRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListInvitedByResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListInvitedByRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListInvitedByResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListInvitedByResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listInvitedBy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListInvitedBy',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListInvitedBy,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListInvitedByRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListInvitedByResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listInvitedBy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListInvitedBy',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListInvitedBy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.GetInvitedByCountRequest,
 *   !proto.adminapi.esm.GetInvitedByCountResponse>}
 */
const methodDescriptor_AdminApi_GetInvitedByCount = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/GetInvitedByCount',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.GetInvitedByCountRequest,
  proto.adminapi.esm.GetInvitedByCountResponse,
  /**
   * @param {!proto.adminapi.esm.GetInvitedByCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetInvitedByCountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.GetInvitedByCountRequest,
 *   !proto.adminapi.esm.GetInvitedByCountResponse>}
 */
const methodInfo_AdminApi_GetInvitedByCount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.GetInvitedByCountResponse,
  /**
   * @param {!proto.adminapi.esm.GetInvitedByCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetInvitedByCountResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.GetInvitedByCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.GetInvitedByCountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.GetInvitedByCountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.getInvitedByCount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetInvitedByCount',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetInvitedByCount,
      callback);
};


/**
 * @param {!proto.adminapi.esm.GetInvitedByCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.GetInvitedByCountResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.getInvitedByCount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetInvitedByCount',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetInvitedByCount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.DeleteInviteRequest,
 *   !proto.adminapi.esm.DeleteInviteResponse>}
 */
const methodDescriptor_AdminApi_DeleteInvite = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/DeleteInvite',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.DeleteInviteRequest,
  proto.adminapi.esm.DeleteInviteResponse,
  /**
   * @param {!proto.adminapi.esm.DeleteInviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeleteInviteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.DeleteInviteRequest,
 *   !proto.adminapi.esm.DeleteInviteResponse>}
 */
const methodInfo_AdminApi_DeleteInvite = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.DeleteInviteResponse,
  /**
   * @param {!proto.adminapi.esm.DeleteInviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeleteInviteResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.DeleteInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.DeleteInviteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.DeleteInviteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.deleteInvite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeleteInvite',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeleteInvite,
      callback);
};


/**
 * @param {!proto.adminapi.esm.DeleteInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.DeleteInviteResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.deleteInvite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeleteInvite',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeleteInvite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.AddItemRequest,
 *   !proto.adminapi.esm.AddItemResponse>}
 */
const methodDescriptor_AdminApi_AddItem = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/AddItem',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.AddItemRequest,
  proto.adminapi.esm.AddItemResponse,
  /**
   * @param {!proto.adminapi.esm.AddItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddItemResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.AddItemRequest,
 *   !proto.adminapi.esm.AddItemResponse>}
 */
const methodInfo_AdminApi_AddItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.AddItemResponse,
  /**
   * @param {!proto.adminapi.esm.AddItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddItemResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.AddItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.AddItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.AddItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.addItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddItem',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddItem,
      callback);
};


/**
 * @param {!proto.adminapi.esm.AddItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.AddItemResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.addItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddItem',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.UpdateItemRequest,
 *   !proto.adminapi.esm.UpdateItemResponse>}
 */
const methodDescriptor_AdminApi_UpdateItem = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/UpdateItem',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.UpdateItemRequest,
  proto.adminapi.esm.UpdateItemResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateItemResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.UpdateItemRequest,
 *   !proto.adminapi.esm.UpdateItemResponse>}
 */
const methodInfo_AdminApi_UpdateItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.UpdateItemResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateItemResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.UpdateItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.UpdateItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.UpdateItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.updateItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateItem',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateItem,
      callback);
};


/**
 * @param {!proto.adminapi.esm.UpdateItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.UpdateItemResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.updateItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateItem',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.DeleteItemRequest,
 *   !proto.adminapi.esm.DeleteItemResponse>}
 */
const methodDescriptor_AdminApi_DeleteItem = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/DeleteItem',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.DeleteItemRequest,
  proto.adminapi.esm.DeleteItemResponse,
  /**
   * @param {!proto.adminapi.esm.DeleteItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeleteItemResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.DeleteItemRequest,
 *   !proto.adminapi.esm.DeleteItemResponse>}
 */
const methodInfo_AdminApi_DeleteItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.DeleteItemResponse,
  /**
   * @param {!proto.adminapi.esm.DeleteItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeleteItemResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.DeleteItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.DeleteItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.DeleteItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.deleteItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeleteItem',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeleteItem,
      callback);
};


/**
 * @param {!proto.adminapi.esm.DeleteItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.DeleteItemResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.deleteItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeleteItem',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeleteItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListItemRequest,
 *   !proto.adminapi.esm.ListItemResponse>}
 */
const methodDescriptor_AdminApi_ListItem = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListItem',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListItemRequest,
  proto.adminapi.esm.ListItemResponse,
  /**
   * @param {!proto.adminapi.esm.ListItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListItemResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListItemRequest,
 *   !proto.adminapi.esm.ListItemResponse>}
 */
const methodInfo_AdminApi_ListItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListItemResponse,
  /**
   * @param {!proto.adminapi.esm.ListItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListItemResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListItem',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListItem,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListItemResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListItem',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.GetItemCountRequest,
 *   !proto.adminapi.esm.GetItemCountResponse>}
 */
const methodDescriptor_AdminApi_GetItemCount = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/GetItemCount',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.GetItemCountRequest,
  proto.adminapi.esm.GetItemCountResponse,
  /**
   * @param {!proto.adminapi.esm.GetItemCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetItemCountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.GetItemCountRequest,
 *   !proto.adminapi.esm.GetItemCountResponse>}
 */
const methodInfo_AdminApi_GetItemCount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.GetItemCountResponse,
  /**
   * @param {!proto.adminapi.esm.GetItemCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetItemCountResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.GetItemCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.GetItemCountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.GetItemCountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.getItemCount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetItemCount',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetItemCount,
      callback);
};


/**
 * @param {!proto.adminapi.esm.GetItemCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.GetItemCountResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.getItemCount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetItemCount',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetItemCount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListItemTypeRequest,
 *   !proto.adminapi.esm.ListItemTypeResponse>}
 */
const methodDescriptor_AdminApi_ListItemType = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListItemType',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListItemTypeRequest,
  proto.adminapi.esm.ListItemTypeResponse,
  /**
   * @param {!proto.adminapi.esm.ListItemTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListItemTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListItemTypeRequest,
 *   !proto.adminapi.esm.ListItemTypeResponse>}
 */
const methodInfo_AdminApi_ListItemType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListItemTypeResponse,
  /**
   * @param {!proto.adminapi.esm.ListItemTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListItemTypeResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListItemTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListItemTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListItemTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listItemType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListItemType',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListItemType,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListItemTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListItemTypeResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listItemType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListItemType',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListItemType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.AddPrizeRequest,
 *   !proto.adminapi.esm.AddPrizeResponse>}
 */
const methodDescriptor_AdminApi_AddPrize = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/AddPrize',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.AddPrizeRequest,
  proto.adminapi.esm.AddPrizeResponse,
  /**
   * @param {!proto.adminapi.esm.AddPrizeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddPrizeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.AddPrizeRequest,
 *   !proto.adminapi.esm.AddPrizeResponse>}
 */
const methodInfo_AdminApi_AddPrize = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.AddPrizeResponse,
  /**
   * @param {!proto.adminapi.esm.AddPrizeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddPrizeResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.AddPrizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.AddPrizeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.AddPrizeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.addPrize =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddPrize',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddPrize,
      callback);
};


/**
 * @param {!proto.adminapi.esm.AddPrizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.AddPrizeResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.addPrize =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddPrize',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddPrize);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.UpdatePrizeRequest,
 *   !proto.adminapi.esm.UpdatePrizeResponse>}
 */
const methodDescriptor_AdminApi_UpdatePrize = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/UpdatePrize',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.UpdatePrizeRequest,
  proto.adminapi.esm.UpdatePrizeResponse,
  /**
   * @param {!proto.adminapi.esm.UpdatePrizeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdatePrizeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.UpdatePrizeRequest,
 *   !proto.adminapi.esm.UpdatePrizeResponse>}
 */
const methodInfo_AdminApi_UpdatePrize = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.UpdatePrizeResponse,
  /**
   * @param {!proto.adminapi.esm.UpdatePrizeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdatePrizeResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.UpdatePrizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.UpdatePrizeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.UpdatePrizeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.updatePrize =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdatePrize',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdatePrize,
      callback);
};


/**
 * @param {!proto.adminapi.esm.UpdatePrizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.UpdatePrizeResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.updatePrize =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdatePrize',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdatePrize);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.DeletePrizeRequest,
 *   !proto.adminapi.esm.DeletePrizeResponse>}
 */
const methodDescriptor_AdminApi_DeletePrize = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/DeletePrize',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.DeletePrizeRequest,
  proto.adminapi.esm.DeletePrizeResponse,
  /**
   * @param {!proto.adminapi.esm.DeletePrizeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeletePrizeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.DeletePrizeRequest,
 *   !proto.adminapi.esm.DeletePrizeResponse>}
 */
const methodInfo_AdminApi_DeletePrize = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.DeletePrizeResponse,
  /**
   * @param {!proto.adminapi.esm.DeletePrizeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeletePrizeResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.DeletePrizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.DeletePrizeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.DeletePrizeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.deletePrize =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeletePrize',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeletePrize,
      callback);
};


/**
 * @param {!proto.adminapi.esm.DeletePrizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.DeletePrizeResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.deletePrize =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeletePrize',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeletePrize);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListPrizeRequest,
 *   !proto.adminapi.esm.ListPrizeResponse>}
 */
const methodDescriptor_AdminApi_ListPrize = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListPrize',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListPrizeRequest,
  proto.adminapi.esm.ListPrizeResponse,
  /**
   * @param {!proto.adminapi.esm.ListPrizeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListPrizeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListPrizeRequest,
 *   !proto.adminapi.esm.ListPrizeResponse>}
 */
const methodInfo_AdminApi_ListPrize = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListPrizeResponse,
  /**
   * @param {!proto.adminapi.esm.ListPrizeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListPrizeResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListPrizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListPrizeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListPrizeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listPrize =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListPrize',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListPrize,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListPrizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListPrizeResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listPrize =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListPrize',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListPrize);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.GetPrizeCountRequest,
 *   !proto.adminapi.esm.GetPrizeCountResponse>}
 */
const methodDescriptor_AdminApi_GetPrizeCount = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/GetPrizeCount',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.GetPrizeCountRequest,
  proto.adminapi.esm.GetPrizeCountResponse,
  /**
   * @param {!proto.adminapi.esm.GetPrizeCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetPrizeCountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.GetPrizeCountRequest,
 *   !proto.adminapi.esm.GetPrizeCountResponse>}
 */
const methodInfo_AdminApi_GetPrizeCount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.GetPrizeCountResponse,
  /**
   * @param {!proto.adminapi.esm.GetPrizeCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetPrizeCountResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.GetPrizeCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.GetPrizeCountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.GetPrizeCountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.getPrizeCount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetPrizeCount',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetPrizeCount,
      callback);
};


/**
 * @param {!proto.adminapi.esm.GetPrizeCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.GetPrizeCountResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.getPrizeCount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetPrizeCount',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetPrizeCount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListPrizeTypeRequest,
 *   !proto.adminapi.esm.ListPrizeTypeResponse>}
 */
const methodDescriptor_AdminApi_ListPrizeType = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListPrizeType',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListPrizeTypeRequest,
  proto.adminapi.esm.ListPrizeTypeResponse,
  /**
   * @param {!proto.adminapi.esm.ListPrizeTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListPrizeTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListPrizeTypeRequest,
 *   !proto.adminapi.esm.ListPrizeTypeResponse>}
 */
const methodInfo_AdminApi_ListPrizeType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListPrizeTypeResponse,
  /**
   * @param {!proto.adminapi.esm.ListPrizeTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListPrizeTypeResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListPrizeTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListPrizeTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListPrizeTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listPrizeType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListPrizeType',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListPrizeType,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListPrizeTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListPrizeTypeResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listPrizeType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListPrizeType',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListPrizeType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.AddPrizeTourRequest,
 *   !proto.adminapi.esm.AddPrizeTourResponse>}
 */
const methodDescriptor_AdminApi_AddPrizeTour = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/AddPrizeTour',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.AddPrizeTourRequest,
  proto.adminapi.esm.AddPrizeTourResponse,
  /**
   * @param {!proto.adminapi.esm.AddPrizeTourRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddPrizeTourResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.AddPrizeTourRequest,
 *   !proto.adminapi.esm.AddPrizeTourResponse>}
 */
const methodInfo_AdminApi_AddPrizeTour = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.AddPrizeTourResponse,
  /**
   * @param {!proto.adminapi.esm.AddPrizeTourRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddPrizeTourResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.AddPrizeTourRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.AddPrizeTourResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.AddPrizeTourResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.addPrizeTour =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddPrizeTour',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddPrizeTour,
      callback);
};


/**
 * @param {!proto.adminapi.esm.AddPrizeTourRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.AddPrizeTourResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.addPrizeTour =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddPrizeTour',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddPrizeTour);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.DeletePrizeTourRequest,
 *   !proto.adminapi.esm.DeletePrizeTourResponse>}
 */
const methodDescriptor_AdminApi_DeletePrizeTour = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/DeletePrizeTour',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.DeletePrizeTourRequest,
  proto.adminapi.esm.DeletePrizeTourResponse,
  /**
   * @param {!proto.adminapi.esm.DeletePrizeTourRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeletePrizeTourResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.DeletePrizeTourRequest,
 *   !proto.adminapi.esm.DeletePrizeTourResponse>}
 */
const methodInfo_AdminApi_DeletePrizeTour = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.DeletePrizeTourResponse,
  /**
   * @param {!proto.adminapi.esm.DeletePrizeTourRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeletePrizeTourResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.DeletePrizeTourRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.DeletePrizeTourResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.DeletePrizeTourResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.deletePrizeTour =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeletePrizeTour',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeletePrizeTour,
      callback);
};


/**
 * @param {!proto.adminapi.esm.DeletePrizeTourRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.DeletePrizeTourResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.deletePrizeTour =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeletePrizeTour',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeletePrizeTour);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListPrizeTourRequest,
 *   !proto.adminapi.esm.ListPrizeTourResponse>}
 */
const methodDescriptor_AdminApi_ListPrizeTour = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListPrizeTour',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListPrizeTourRequest,
  proto.adminapi.esm.ListPrizeTourResponse,
  /**
   * @param {!proto.adminapi.esm.ListPrizeTourRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListPrizeTourResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListPrizeTourRequest,
 *   !proto.adminapi.esm.ListPrizeTourResponse>}
 */
const methodInfo_AdminApi_ListPrizeTour = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListPrizeTourResponse,
  /**
   * @param {!proto.adminapi.esm.ListPrizeTourRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListPrizeTourResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListPrizeTourRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListPrizeTourResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListPrizeTourResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listPrizeTour =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListPrizeTour',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListPrizeTour,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListPrizeTourRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListPrizeTourResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listPrizeTour =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListPrizeTour',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListPrizeTour);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.AddRankRequest,
 *   !proto.adminapi.esm.AddRankResponse>}
 */
const methodDescriptor_AdminApi_AddRank = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/AddRank',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.AddRankRequest,
  proto.adminapi.esm.AddRankResponse,
  /**
   * @param {!proto.adminapi.esm.AddRankRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddRankResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.AddRankRequest,
 *   !proto.adminapi.esm.AddRankResponse>}
 */
const methodInfo_AdminApi_AddRank = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.AddRankResponse,
  /**
   * @param {!proto.adminapi.esm.AddRankRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddRankResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.AddRankRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.AddRankResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.AddRankResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.addRank =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddRank',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddRank,
      callback);
};


/**
 * @param {!proto.adminapi.esm.AddRankRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.AddRankResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.addRank =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddRank',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddRank);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.UpdateRankRequest,
 *   !proto.adminapi.esm.UpdateRankResponse>}
 */
const methodDescriptor_AdminApi_UpdateRank = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/UpdateRank',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.UpdateRankRequest,
  proto.adminapi.esm.UpdateRankResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateRankRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateRankResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.UpdateRankRequest,
 *   !proto.adminapi.esm.UpdateRankResponse>}
 */
const methodInfo_AdminApi_UpdateRank = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.UpdateRankResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateRankRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateRankResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.UpdateRankRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.UpdateRankResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.UpdateRankResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.updateRank =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateRank',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateRank,
      callback);
};


/**
 * @param {!proto.adminapi.esm.UpdateRankRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.UpdateRankResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.updateRank =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateRank',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateRank);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.DeleteRankRequest,
 *   !proto.adminapi.esm.DeleteRankResponse>}
 */
const methodDescriptor_AdminApi_DeleteRank = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/DeleteRank',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.DeleteRankRequest,
  proto.adminapi.esm.DeleteRankResponse,
  /**
   * @param {!proto.adminapi.esm.DeleteRankRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeleteRankResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.DeleteRankRequest,
 *   !proto.adminapi.esm.DeleteRankResponse>}
 */
const methodInfo_AdminApi_DeleteRank = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.DeleteRankResponse,
  /**
   * @param {!proto.adminapi.esm.DeleteRankRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeleteRankResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.DeleteRankRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.DeleteRankResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.DeleteRankResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.deleteRank =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeleteRank',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeleteRank,
      callback);
};


/**
 * @param {!proto.adminapi.esm.DeleteRankRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.DeleteRankResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.deleteRank =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeleteRank',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeleteRank);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListRankRequest,
 *   !proto.adminapi.esm.ListRankResponse>}
 */
const methodDescriptor_AdminApi_ListRank = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListRank',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListRankRequest,
  proto.adminapi.esm.ListRankResponse,
  /**
   * @param {!proto.adminapi.esm.ListRankRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListRankResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListRankRequest,
 *   !proto.adminapi.esm.ListRankResponse>}
 */
const methodInfo_AdminApi_ListRank = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListRankResponse,
  /**
   * @param {!proto.adminapi.esm.ListRankRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListRankResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListRankRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListRankResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListRankResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listRank =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListRank',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListRank,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListRankRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListRankResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listRank =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListRank',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListRank);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.BuyRequest,
 *   !proto.adminapi.esm.BuyResponse>}
 */
const methodDescriptor_AdminApi_Buy = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/Buy',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.BuyRequest,
  proto.adminapi.esm.BuyResponse,
  /**
   * @param {!proto.adminapi.esm.BuyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.BuyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.BuyRequest,
 *   !proto.adminapi.esm.BuyResponse>}
 */
const methodInfo_AdminApi_Buy = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.BuyResponse,
  /**
   * @param {!proto.adminapi.esm.BuyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.BuyResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.BuyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.BuyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.BuyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.buy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/Buy',
      request,
      metadata || {},
      methodDescriptor_AdminApi_Buy,
      callback);
};


/**
 * @param {!proto.adminapi.esm.BuyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.BuyResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.buy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/Buy',
      request,
      metadata || {},
      methodDescriptor_AdminApi_Buy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.AddSubscriptionRequest,
 *   !proto.adminapi.esm.AddSubscriptionResponse>}
 */
const methodDescriptor_AdminApi_AddSubscription = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/AddSubscription',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.AddSubscriptionRequest,
  proto.adminapi.esm.AddSubscriptionResponse,
  /**
   * @param {!proto.adminapi.esm.AddSubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddSubscriptionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.AddSubscriptionRequest,
 *   !proto.adminapi.esm.AddSubscriptionResponse>}
 */
const methodInfo_AdminApi_AddSubscription = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.AddSubscriptionResponse,
  /**
   * @param {!proto.adminapi.esm.AddSubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddSubscriptionResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.AddSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.AddSubscriptionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.AddSubscriptionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.addSubscription =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddSubscription',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddSubscription,
      callback);
};


/**
 * @param {!proto.adminapi.esm.AddSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.AddSubscriptionResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.addSubscription =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddSubscription',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddSubscription);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.UpdateSubscriptionRequest,
 *   !proto.adminapi.esm.UpdateSubscriptionResponse>}
 */
const methodDescriptor_AdminApi_UpdateSubscription = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/UpdateSubscription',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.UpdateSubscriptionRequest,
  proto.adminapi.esm.UpdateSubscriptionResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateSubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateSubscriptionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.UpdateSubscriptionRequest,
 *   !proto.adminapi.esm.UpdateSubscriptionResponse>}
 */
const methodInfo_AdminApi_UpdateSubscription = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.UpdateSubscriptionResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateSubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateSubscriptionResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.UpdateSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.UpdateSubscriptionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.UpdateSubscriptionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.updateSubscription =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateSubscription',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateSubscription,
      callback);
};


/**
 * @param {!proto.adminapi.esm.UpdateSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.UpdateSubscriptionResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.updateSubscription =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateSubscription',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateSubscription);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.DeleteSubscriptionRequest,
 *   !proto.adminapi.esm.DeleteSubscriptionResponse>}
 */
const methodDescriptor_AdminApi_DeleteSubscription = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/DeleteSubscription',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.DeleteSubscriptionRequest,
  proto.adminapi.esm.DeleteSubscriptionResponse,
  /**
   * @param {!proto.adminapi.esm.DeleteSubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeleteSubscriptionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.DeleteSubscriptionRequest,
 *   !proto.adminapi.esm.DeleteSubscriptionResponse>}
 */
const methodInfo_AdminApi_DeleteSubscription = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.DeleteSubscriptionResponse,
  /**
   * @param {!proto.adminapi.esm.DeleteSubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeleteSubscriptionResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.DeleteSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.DeleteSubscriptionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.DeleteSubscriptionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.deleteSubscription =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeleteSubscription',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeleteSubscription,
      callback);
};


/**
 * @param {!proto.adminapi.esm.DeleteSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.DeleteSubscriptionResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.deleteSubscription =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeleteSubscription',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeleteSubscription);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListSubscriptionRequest,
 *   !proto.adminapi.esm.ListSubscriptionResponse>}
 */
const methodDescriptor_AdminApi_ListSubscription = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListSubscription',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListSubscriptionRequest,
  proto.adminapi.esm.ListSubscriptionResponse,
  /**
   * @param {!proto.adminapi.esm.ListSubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListSubscriptionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListSubscriptionRequest,
 *   !proto.adminapi.esm.ListSubscriptionResponse>}
 */
const methodInfo_AdminApi_ListSubscription = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListSubscriptionResponse,
  /**
   * @param {!proto.adminapi.esm.ListSubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListSubscriptionResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListSubscriptionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListSubscriptionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listSubscription =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListSubscription',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListSubscription,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListSubscriptionResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listSubscription =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListSubscription',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListSubscription);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.GetSubscriptionCountRequest,
 *   !proto.adminapi.esm.GetSubscriptionCountResponse>}
 */
const methodDescriptor_AdminApi_GetSubscriptionCount = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/GetSubscriptionCount',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.GetSubscriptionCountRequest,
  proto.adminapi.esm.GetSubscriptionCountResponse,
  /**
   * @param {!proto.adminapi.esm.GetSubscriptionCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetSubscriptionCountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.GetSubscriptionCountRequest,
 *   !proto.adminapi.esm.GetSubscriptionCountResponse>}
 */
const methodInfo_AdminApi_GetSubscriptionCount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.GetSubscriptionCountResponse,
  /**
   * @param {!proto.adminapi.esm.GetSubscriptionCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetSubscriptionCountResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.GetSubscriptionCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.GetSubscriptionCountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.GetSubscriptionCountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.getSubscriptionCount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetSubscriptionCount',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetSubscriptionCount,
      callback);
};


/**
 * @param {!proto.adminapi.esm.GetSubscriptionCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.GetSubscriptionCountResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.getSubscriptionCount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetSubscriptionCount',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetSubscriptionCount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListSubscriptionTypeRequest,
 *   !proto.adminapi.esm.ListSubscriptionTypeResponse>}
 */
const methodDescriptor_AdminApi_ListSubscriptionType = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListSubscriptionType',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListSubscriptionTypeRequest,
  proto.adminapi.esm.ListSubscriptionTypeResponse,
  /**
   * @param {!proto.adminapi.esm.ListSubscriptionTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListSubscriptionTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListSubscriptionTypeRequest,
 *   !proto.adminapi.esm.ListSubscriptionTypeResponse>}
 */
const methodInfo_AdminApi_ListSubscriptionType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListSubscriptionTypeResponse,
  /**
   * @param {!proto.adminapi.esm.ListSubscriptionTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListSubscriptionTypeResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListSubscriptionTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListSubscriptionTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListSubscriptionTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listSubscriptionType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListSubscriptionType',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListSubscriptionType,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListSubscriptionTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListSubscriptionTypeResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listSubscriptionType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListSubscriptionType',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListSubscriptionType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.AddTournamentRequest,
 *   !proto.adminapi.esm.AddTournamentResponse>}
 */
const methodDescriptor_AdminApi_AddTournament = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/AddTournament',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.AddTournamentRequest,
  proto.adminapi.esm.AddTournamentResponse,
  /**
   * @param {!proto.adminapi.esm.AddTournamentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddTournamentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.AddTournamentRequest,
 *   !proto.adminapi.esm.AddTournamentResponse>}
 */
const methodInfo_AdminApi_AddTournament = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.AddTournamentResponse,
  /**
   * @param {!proto.adminapi.esm.AddTournamentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddTournamentResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.AddTournamentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.AddTournamentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.AddTournamentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.addTournament =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddTournament',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddTournament,
      callback);
};


/**
 * @param {!proto.adminapi.esm.AddTournamentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.AddTournamentResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.addTournament =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddTournament',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddTournament);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.AddTournamentSetRequest,
 *   !proto.adminapi.esm.AddTournamentSetResponse>}
 */
const methodDescriptor_AdminApi_AddTournamentSet = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/AddTournamentSet',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.AddTournamentSetRequest,
  proto.adminapi.esm.AddTournamentSetResponse,
  /**
   * @param {!proto.adminapi.esm.AddTournamentSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddTournamentSetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.AddTournamentSetRequest,
 *   !proto.adminapi.esm.AddTournamentSetResponse>}
 */
const methodInfo_AdminApi_AddTournamentSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.AddTournamentSetResponse,
  /**
   * @param {!proto.adminapi.esm.AddTournamentSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddTournamentSetResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.AddTournamentSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.AddTournamentSetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.AddTournamentSetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.addTournamentSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddTournamentSet',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddTournamentSet,
      callback);
};


/**
 * @param {!proto.adminapi.esm.AddTournamentSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.AddTournamentSetResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.addTournamentSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddTournamentSet',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddTournamentSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.AddTournamentSetGameRuleRequest,
 *   !proto.adminapi.esm.AddTournamentSetGameRuleResponse>}
 */
const methodDescriptor_AdminApi_AddTournamentSetGameRule = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/AddTournamentSetGameRule',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.AddTournamentSetGameRuleRequest,
  proto.adminapi.esm.AddTournamentSetGameRuleResponse,
  /**
   * @param {!proto.adminapi.esm.AddTournamentSetGameRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddTournamentSetGameRuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.AddTournamentSetGameRuleRequest,
 *   !proto.adminapi.esm.AddTournamentSetGameRuleResponse>}
 */
const methodInfo_AdminApi_AddTournamentSetGameRule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.AddTournamentSetGameRuleResponse,
  /**
   * @param {!proto.adminapi.esm.AddTournamentSetGameRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddTournamentSetGameRuleResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.AddTournamentSetGameRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.AddTournamentSetGameRuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.AddTournamentSetGameRuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.addTournamentSetGameRule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddTournamentSetGameRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddTournamentSetGameRule,
      callback);
};


/**
 * @param {!proto.adminapi.esm.AddTournamentSetGameRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.AddTournamentSetGameRuleResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.addTournamentSetGameRule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddTournamentSetGameRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddTournamentSetGameRule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.UpdateTournamentRequest,
 *   !proto.adminapi.esm.UpdateTournamentResponse>}
 */
const methodDescriptor_AdminApi_UpdateTournament = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/UpdateTournament',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.UpdateTournamentRequest,
  proto.adminapi.esm.UpdateTournamentResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateTournamentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateTournamentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.UpdateTournamentRequest,
 *   !proto.adminapi.esm.UpdateTournamentResponse>}
 */
const methodInfo_AdminApi_UpdateTournament = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.UpdateTournamentResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateTournamentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateTournamentResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.UpdateTournamentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.UpdateTournamentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.UpdateTournamentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.updateTournament =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateTournament',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateTournament,
      callback);
};


/**
 * @param {!proto.adminapi.esm.UpdateTournamentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.UpdateTournamentResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.updateTournament =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateTournament',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateTournament);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.UpdateTournamentSetRequest,
 *   !proto.adminapi.esm.UpdateTournamentSetResponse>}
 */
const methodDescriptor_AdminApi_UpdateTournamentSet = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/UpdateTournamentSet',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.UpdateTournamentSetRequest,
  proto.adminapi.esm.UpdateTournamentSetResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateTournamentSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateTournamentSetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.UpdateTournamentSetRequest,
 *   !proto.adminapi.esm.UpdateTournamentSetResponse>}
 */
const methodInfo_AdminApi_UpdateTournamentSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.UpdateTournamentSetResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateTournamentSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateTournamentSetResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.UpdateTournamentSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.UpdateTournamentSetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.UpdateTournamentSetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.updateTournamentSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateTournamentSet',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateTournamentSet,
      callback);
};


/**
 * @param {!proto.adminapi.esm.UpdateTournamentSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.UpdateTournamentSetResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.updateTournamentSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateTournamentSet',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateTournamentSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.UpdateTournamentSetGameRuleRequest,
 *   !proto.adminapi.esm.UpdateTournamentSetGameRuleResponse>}
 */
const methodDescriptor_AdminApi_UpdateTournamentSetGameRule = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/UpdateTournamentSetGameRule',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.UpdateTournamentSetGameRuleRequest,
  proto.adminapi.esm.UpdateTournamentSetGameRuleResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateTournamentSetGameRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateTournamentSetGameRuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.UpdateTournamentSetGameRuleRequest,
 *   !proto.adminapi.esm.UpdateTournamentSetGameRuleResponse>}
 */
const methodInfo_AdminApi_UpdateTournamentSetGameRule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.UpdateTournamentSetGameRuleResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateTournamentSetGameRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateTournamentSetGameRuleResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.UpdateTournamentSetGameRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.UpdateTournamentSetGameRuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.UpdateTournamentSetGameRuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.updateTournamentSetGameRule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateTournamentSetGameRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateTournamentSetGameRule,
      callback);
};


/**
 * @param {!proto.adminapi.esm.UpdateTournamentSetGameRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.UpdateTournamentSetGameRuleResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.updateTournamentSetGameRule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateTournamentSetGameRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateTournamentSetGameRule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.DeleteTournamentRequest,
 *   !proto.adminapi.esm.DeleteTournamentResponse>}
 */
const methodDescriptor_AdminApi_DeleteTournament = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/DeleteTournament',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.DeleteTournamentRequest,
  proto.adminapi.esm.DeleteTournamentResponse,
  /**
   * @param {!proto.adminapi.esm.DeleteTournamentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeleteTournamentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.DeleteTournamentRequest,
 *   !proto.adminapi.esm.DeleteTournamentResponse>}
 */
const methodInfo_AdminApi_DeleteTournament = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.DeleteTournamentResponse,
  /**
   * @param {!proto.adminapi.esm.DeleteTournamentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeleteTournamentResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.DeleteTournamentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.DeleteTournamentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.DeleteTournamentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.deleteTournament =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeleteTournament',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeleteTournament,
      callback);
};


/**
 * @param {!proto.adminapi.esm.DeleteTournamentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.DeleteTournamentResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.deleteTournament =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeleteTournament',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeleteTournament);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.DeleteTournamentSetRequest,
 *   !proto.adminapi.esm.DeleteTournamentSetResponse>}
 */
const methodDescriptor_AdminApi_DeleteTournamentSet = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/DeleteTournamentSet',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.DeleteTournamentSetRequest,
  proto.adminapi.esm.DeleteTournamentSetResponse,
  /**
   * @param {!proto.adminapi.esm.DeleteTournamentSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeleteTournamentSetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.DeleteTournamentSetRequest,
 *   !proto.adminapi.esm.DeleteTournamentSetResponse>}
 */
const methodInfo_AdminApi_DeleteTournamentSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.DeleteTournamentSetResponse,
  /**
   * @param {!proto.adminapi.esm.DeleteTournamentSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeleteTournamentSetResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.DeleteTournamentSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.DeleteTournamentSetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.DeleteTournamentSetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.deleteTournamentSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeleteTournamentSet',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeleteTournamentSet,
      callback);
};


/**
 * @param {!proto.adminapi.esm.DeleteTournamentSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.DeleteTournamentSetResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.deleteTournamentSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeleteTournamentSet',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeleteTournamentSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.DeleteTournamentSetGameRuleRequest,
 *   !proto.adminapi.esm.DeleteTournamentSetGameRuleResponse>}
 */
const methodDescriptor_AdminApi_DeleteTournamentSetGameRule = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/DeleteTournamentSetGameRule',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.DeleteTournamentSetGameRuleRequest,
  proto.adminapi.esm.DeleteTournamentSetGameRuleResponse,
  /**
   * @param {!proto.adminapi.esm.DeleteTournamentSetGameRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeleteTournamentSetGameRuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.DeleteTournamentSetGameRuleRequest,
 *   !proto.adminapi.esm.DeleteTournamentSetGameRuleResponse>}
 */
const methodInfo_AdminApi_DeleteTournamentSetGameRule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.DeleteTournamentSetGameRuleResponse,
  /**
   * @param {!proto.adminapi.esm.DeleteTournamentSetGameRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeleteTournamentSetGameRuleResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.DeleteTournamentSetGameRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.DeleteTournamentSetGameRuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.DeleteTournamentSetGameRuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.deleteTournamentSetGameRule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeleteTournamentSetGameRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeleteTournamentSetGameRule,
      callback);
};


/**
 * @param {!proto.adminapi.esm.DeleteTournamentSetGameRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.DeleteTournamentSetGameRuleResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.deleteTournamentSetGameRule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeleteTournamentSetGameRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeleteTournamentSetGameRule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListTournamentRequest,
 *   !proto.adminapi.esm.ListTournamentResponse>}
 */
const methodDescriptor_AdminApi_ListTournament = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListTournament',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListTournamentRequest,
  proto.adminapi.esm.ListTournamentResponse,
  /**
   * @param {!proto.adminapi.esm.ListTournamentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListTournamentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListTournamentRequest,
 *   !proto.adminapi.esm.ListTournamentResponse>}
 */
const methodInfo_AdminApi_ListTournament = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListTournamentResponse,
  /**
   * @param {!proto.adminapi.esm.ListTournamentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListTournamentResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListTournamentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListTournamentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListTournamentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listTournament =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListTournament',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListTournament,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListTournamentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListTournamentResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listTournament =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListTournament',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListTournament);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListTournamentSetRequest,
 *   !proto.adminapi.esm.ListTournamentSetResponse>}
 */
const methodDescriptor_AdminApi_ListTournamentSet = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListTournamentSet',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListTournamentSetRequest,
  proto.adminapi.esm.ListTournamentSetResponse,
  /**
   * @param {!proto.adminapi.esm.ListTournamentSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListTournamentSetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListTournamentSetRequest,
 *   !proto.adminapi.esm.ListTournamentSetResponse>}
 */
const methodInfo_AdminApi_ListTournamentSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListTournamentSetResponse,
  /**
   * @param {!proto.adminapi.esm.ListTournamentSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListTournamentSetResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListTournamentSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListTournamentSetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListTournamentSetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listTournamentSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListTournamentSet',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListTournamentSet,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListTournamentSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListTournamentSetResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listTournamentSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListTournamentSet',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListTournamentSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListTournamentSetGameRuleRequest,
 *   !proto.adminapi.esm.ListTournamentSetGameRuleResponse>}
 */
const methodDescriptor_AdminApi_ListTournamentSetGameRule = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListTournamentSetGameRule',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListTournamentSetGameRuleRequest,
  proto.adminapi.esm.ListTournamentSetGameRuleResponse,
  /**
   * @param {!proto.adminapi.esm.ListTournamentSetGameRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListTournamentSetGameRuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListTournamentSetGameRuleRequest,
 *   !proto.adminapi.esm.ListTournamentSetGameRuleResponse>}
 */
const methodInfo_AdminApi_ListTournamentSetGameRule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListTournamentSetGameRuleResponse,
  /**
   * @param {!proto.adminapi.esm.ListTournamentSetGameRuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListTournamentSetGameRuleResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListTournamentSetGameRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListTournamentSetGameRuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListTournamentSetGameRuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listTournamentSetGameRule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListTournamentSetGameRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListTournamentSetGameRule,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListTournamentSetGameRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListTournamentSetGameRuleResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listTournamentSetGameRule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListTournamentSetGameRule',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListTournamentSetGameRule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.GetTournamentCountRequest,
 *   !proto.adminapi.esm.GetTournamentCountResponse>}
 */
const methodDescriptor_AdminApi_GetTournamentCount = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/GetTournamentCount',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.GetTournamentCountRequest,
  proto.adminapi.esm.GetTournamentCountResponse,
  /**
   * @param {!proto.adminapi.esm.GetTournamentCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetTournamentCountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.GetTournamentCountRequest,
 *   !proto.adminapi.esm.GetTournamentCountResponse>}
 */
const methodInfo_AdminApi_GetTournamentCount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.GetTournamentCountResponse,
  /**
   * @param {!proto.adminapi.esm.GetTournamentCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetTournamentCountResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.GetTournamentCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.GetTournamentCountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.GetTournamentCountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.getTournamentCount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetTournamentCount',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetTournamentCount,
      callback);
};


/**
 * @param {!proto.adminapi.esm.GetTournamentCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.GetTournamentCountResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.getTournamentCount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetTournamentCount',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetTournamentCount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.GetTournamentSetCountRequest,
 *   !proto.adminapi.esm.GetTournamentSetCountResponse>}
 */
const methodDescriptor_AdminApi_GetTournamentSetCount = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/GetTournamentSetCount',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.GetTournamentSetCountRequest,
  proto.adminapi.esm.GetTournamentSetCountResponse,
  /**
   * @param {!proto.adminapi.esm.GetTournamentSetCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetTournamentSetCountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.GetTournamentSetCountRequest,
 *   !proto.adminapi.esm.GetTournamentSetCountResponse>}
 */
const methodInfo_AdminApi_GetTournamentSetCount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.GetTournamentSetCountResponse,
  /**
   * @param {!proto.adminapi.esm.GetTournamentSetCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetTournamentSetCountResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.GetTournamentSetCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.GetTournamentSetCountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.GetTournamentSetCountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.getTournamentSetCount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetTournamentSetCount',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetTournamentSetCount,
      callback);
};


/**
 * @param {!proto.adminapi.esm.GetTournamentSetCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.GetTournamentSetCountResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.getTournamentSetCount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetTournamentSetCount',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetTournamentSetCount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.AddTourSetRequest,
 *   !proto.adminapi.esm.AddTourSetResponse>}
 */
const methodDescriptor_AdminApi_AddTourSet = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/AddTourSet',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.AddTourSetRequest,
  proto.adminapi.esm.AddTourSetResponse,
  /**
   * @param {!proto.adminapi.esm.AddTourSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddTourSetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.AddTourSetRequest,
 *   !proto.adminapi.esm.AddTourSetResponse>}
 */
const methodInfo_AdminApi_AddTourSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.AddTourSetResponse,
  /**
   * @param {!proto.adminapi.esm.AddTourSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.AddTourSetResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.AddTourSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.AddTourSetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.AddTourSetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.addTourSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddTourSet',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddTourSet,
      callback);
};


/**
 * @param {!proto.adminapi.esm.AddTourSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.AddTourSetResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.addTourSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/AddTourSet',
      request,
      metadata || {},
      methodDescriptor_AdminApi_AddTourSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.DeleteTourSetRequest,
 *   !proto.adminapi.esm.DeleteTourSetResponse>}
 */
const methodDescriptor_AdminApi_DeleteTourSet = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/DeleteTourSet',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.DeleteTourSetRequest,
  proto.adminapi.esm.DeleteTourSetResponse,
  /**
   * @param {!proto.adminapi.esm.DeleteTourSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeleteTourSetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.DeleteTourSetRequest,
 *   !proto.adminapi.esm.DeleteTourSetResponse>}
 */
const methodInfo_AdminApi_DeleteTourSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.DeleteTourSetResponse,
  /**
   * @param {!proto.adminapi.esm.DeleteTourSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.DeleteTourSetResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.DeleteTourSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.DeleteTourSetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.DeleteTourSetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.deleteTourSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeleteTourSet',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeleteTourSet,
      callback);
};


/**
 * @param {!proto.adminapi.esm.DeleteTourSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.DeleteTourSetResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.deleteTourSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/DeleteTourSet',
      request,
      metadata || {},
      methodDescriptor_AdminApi_DeleteTourSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListTourSetRequest,
 *   !proto.adminapi.esm.ListTourSetResponse>}
 */
const methodDescriptor_AdminApi_ListTourSet = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListTourSet',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListTourSetRequest,
  proto.adminapi.esm.ListTourSetResponse,
  /**
   * @param {!proto.adminapi.esm.ListTourSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListTourSetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListTourSetRequest,
 *   !proto.adminapi.esm.ListTourSetResponse>}
 */
const methodInfo_AdminApi_ListTourSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListTourSetResponse,
  /**
   * @param {!proto.adminapi.esm.ListTourSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListTourSetResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListTourSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListTourSetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListTourSetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listTourSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListTourSet',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListTourSet,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListTourSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListTourSetResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listTourSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListTourSet',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListTourSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.UpdateWinnerRequest,
 *   !proto.adminapi.esm.UpdateWinnerResponse>}
 */
const methodDescriptor_AdminApi_UpdateWinner = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/UpdateWinner',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.UpdateWinnerRequest,
  proto.adminapi.esm.UpdateWinnerResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateWinnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateWinnerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.UpdateWinnerRequest,
 *   !proto.adminapi.esm.UpdateWinnerResponse>}
 */
const methodInfo_AdminApi_UpdateWinner = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.UpdateWinnerResponse,
  /**
   * @param {!proto.adminapi.esm.UpdateWinnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.UpdateWinnerResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.UpdateWinnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.UpdateWinnerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.UpdateWinnerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.updateWinner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateWinner',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateWinner,
      callback);
};


/**
 * @param {!proto.adminapi.esm.UpdateWinnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.UpdateWinnerResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.updateWinner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/UpdateWinner',
      request,
      metadata || {},
      methodDescriptor_AdminApi_UpdateWinner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListWinnerRequest,
 *   !proto.adminapi.esm.ListWinnerResponse>}
 */
const methodDescriptor_AdminApi_ListWinner = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListWinner',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListWinnerRequest,
  proto.adminapi.esm.ListWinnerResponse,
  /**
   * @param {!proto.adminapi.esm.ListWinnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListWinnerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListWinnerRequest,
 *   !proto.adminapi.esm.ListWinnerResponse>}
 */
const methodInfo_AdminApi_ListWinner = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListWinnerResponse,
  /**
   * @param {!proto.adminapi.esm.ListWinnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListWinnerResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListWinnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListWinnerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListWinnerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listWinner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListWinner',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListWinner,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListWinnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListWinnerResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listWinner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListWinner',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListWinner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.GetWinnerCountRequest,
 *   !proto.adminapi.esm.GetWinnerCountResponse>}
 */
const methodDescriptor_AdminApi_GetWinnerCount = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/GetWinnerCount',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.GetWinnerCountRequest,
  proto.adminapi.esm.GetWinnerCountResponse,
  /**
   * @param {!proto.adminapi.esm.GetWinnerCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetWinnerCountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.GetWinnerCountRequest,
 *   !proto.adminapi.esm.GetWinnerCountResponse>}
 */
const methodInfo_AdminApi_GetWinnerCount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.GetWinnerCountResponse,
  /**
   * @param {!proto.adminapi.esm.GetWinnerCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.GetWinnerCountResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.GetWinnerCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.GetWinnerCountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.GetWinnerCountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.getWinnerCount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetWinnerCount',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetWinnerCount,
      callback);
};


/**
 * @param {!proto.adminapi.esm.GetWinnerCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.GetWinnerCountResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.getWinnerCount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/GetWinnerCount',
      request,
      metadata || {},
      methodDescriptor_AdminApi_GetWinnerCount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.adminapi.esm.ListLogGRequest,
 *   !proto.adminapi.esm.ListLogGResponse>}
 */
const methodDescriptor_AdminApi_ListLogG = new grpc.web.MethodDescriptor(
  '/adminapi.esm.AdminApi/ListLogG',
  grpc.web.MethodType.UNARY,
  proto.adminapi.esm.ListLogGRequest,
  proto.adminapi.esm.ListLogGResponse,
  /**
   * @param {!proto.adminapi.esm.ListLogGRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListLogGResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.adminapi.esm.ListLogGRequest,
 *   !proto.adminapi.esm.ListLogGResponse>}
 */
const methodInfo_AdminApi_ListLogG = new grpc.web.AbstractClientBase.MethodInfo(
  proto.adminapi.esm.ListLogGResponse,
  /**
   * @param {!proto.adminapi.esm.ListLogGRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.adminapi.esm.ListLogGResponse.deserializeBinary
);


/**
 * @param {!proto.adminapi.esm.ListLogGRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.adminapi.esm.ListLogGResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.adminapi.esm.ListLogGResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.adminapi.esm.AdminApiClient.prototype.listLogG =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListLogG',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListLogG,
      callback);
};


/**
 * @param {!proto.adminapi.esm.ListLogGRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.adminapi.esm.ListLogGResponse>}
 *     Promise that resolves to the response
 */
proto.adminapi.esm.AdminApiPromiseClient.prototype.listLogG =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/adminapi.esm.AdminApi/ListLogG',
      request,
      metadata || {},
      methodDescriptor_AdminApi_ListLogG);
};


module.exports = proto.adminapi.esm;

