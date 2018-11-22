'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postNoLoading = exports.getNoLoading = exports.post = exports.get = exports.setHeaderConfig = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _utils = require('@/utils');

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _env = require('@/env');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = new _utils.Logger('API', '#64C42E');

var METHOD_GET = 1;
var METHOD_POST = 2;
var NO_LOADING = 4;

// TODO:  不要默认header
var headersConfig = {
  // uid: 'hao.yao',
  // time: '20180918105221',
  // code: '484067a87cea095ad797af770ebc3907',
  // otype: 'WeaverOA',
};

var setHeaderConfig = exports.setHeaderConfig = function setHeaderConfig(config) {
  (0, _assign2.default)(headersConfig, config);
};

// 接口请求拦截器
var interceptorsRequest = function interceptorsRequest(config) {
  var _config = config._config,
      headers = config.headers,
      url = config.url,
      data = config.data;


  (0, _assign2.default)(headers, headersConfig);

  var hasLoading = !(_config & NO_LOADING);
  if (hasLoading) {
    _utils.loading.open();
  }
  config.data = _qs2.default.stringify(data); // eslint-disable-line no-param-reassign
  logger('\u4E0A\u884C' + url, data);
  return config;
};

// 接口响应拦截器
var interceptorsResponse = function interceptorsResponse(_ref) {
  var data = _ref.data,
      config = _ref.config;
  var _config = config._config,
      url = config.url;
  var code = data.code,
      msg = data.msg,
      resp = data.data;


  logger('\u4E0B\u884C' + url, data);
  // const isGet = _config & METHOD_GET;
  var isPost = _config & METHOD_POST;
  var hasLoading = !(_config & NO_LOADING);

  if (hasLoading) {
    _utils.loading.close();
  }

  // 提示msg
  if (code !== 0) {
    (0, _utils.errorMessage)(msg);
    throw Error('\u63A5\u53E3' + url + ': ' + msg);
  } else if (isPost) {
    (0, _utils.successMessage)(msg);
  }
  return resp;
};

// 接口axios实例
var request = _axios2.default.create({
  baseURL: _env.requireURL,
  timeout: 10000
});

request.interceptors.request.use(interceptorsRequest);
request.interceptors.response.use(interceptorsResponse, function (err) {
  _utils.loading.close();
  (0, _utils.errorMessage)(err.message);
  throw Error(err);
});

/**
 * 获取类请求, 返回code不为0时, 弹出error的提示
 * @param {string} url 请求地址
 * @param {*} params 请求参数
 */
var get = exports.get = function get(url, params) {
  return request.post(url, params, { _config: METHOD_GET });
};

/**
 * 操作类请求, 返回code不为0时, 弹出error的提示, 返回code为0时, 弹出susscus的提示
 * @param {string} url 请求地址
 * @param {*} params 请求参数
 */
var post = exports.post = function post(url, params) {
  return request.post(url, params, { _config: METHOD_POST });
};

var getNoLoading = exports.getNoLoading = function getNoLoading(url, params) {
  return request.post(url, params, { _config: METHOD_GET | NO_LOADING });
};
var postNoLoading = exports.postNoLoading = function postNoLoading(url, params) {
  return request.post(url, params, { _config: METHOD_POST | NO_LOADING });
};