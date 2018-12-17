'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _message = require('./message');

var _Logger = require('./Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _crypto = require('./crypto');

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = new _Logger2.default('API', '#64C42E');

var METHOD_GET = 1;
var METHOD_POST = 2;
var NO_LOADING = 4;

/**
 * Request
 * @param option {baseURL, crypto, request, response, toLogin}
 */

var Request = function () {

  /**
   * Request
   * @param option {baseURL, crypto, request, response, toLogin}
   */
  function Request(option) {
    (0, _classCallCheck3.default)(this, Request);

    (0, _assign2.default)(this, option);
  }

  (0, _createClass3.default)(Request, [{
    key: 'init',
    value: function init() {
      var _this = this;

      // 接口请求拦截器
      var interceptorsRequest = function interceptorsRequest(config) {
        var _config2 = config,
            _config = _config2._config,
            url = _config2.url,
            headers = _config2.headers;

        var data = config.data;

        var hasLoading = !(_config & NO_LOADING);
        if (hasLoading) {
          _message.loading.open();
        }
        if (typeof _this.request === 'function') {
          config = _this.request(config);
        }
        logger('\u4E0A\u884C' + url, data);

        // 是否加密
        if (_this.crypto) {
          var timestamp = (0, _crypto.requestTimestamp)();
          var body = (0, _crypto.encodeRequest)(data, timestamp);
          data = { body: body };
          (0, _assign2.default)(headers, (0, _crypto.authorization)(timestamp, '', body));
        }
        config.data = _qs2.default.stringify(data);
        return config;
      };

      // 接口响应拦截器
      var interceptorsResponse = function interceptorsResponse(_ref) {
        var data = _ref.data,
            config = _ref.config;
        var _config = config._config,
            url = config.url;

        // 是否被加密

        if (_this.crypto) {
          data = (0, _crypto.decodeResponse)(data);
        }
        var _data = data,
            code = _data.code,
            msg = _data.msg,
            resp = _data.data;


        logger('\u4E0B\u884C' + url, data);
        // const isGet = _config & METHOD_GET;
        var isPost = _config & METHOD_POST;
        var hasLoading = !(_config & NO_LOADING);

        if (hasLoading) {
          _message.loading.close();
        }

        // 提示msg
        if (code !== 0) {
          (0, _message.errorMessage)(msg);
          // 登要登录
          if (code === 1000) {
            _this.toLogin();
          }
          throw Error('\u63A5\u53E3' + url + ': ' + msg);
        } else if (isPost) {
          (0, _message.successMessage)(msg);
        }
        // list为null时默认[]
        if (resp.isArray === 2 && resp.list === null) {
          resp.list = [];
        }
        return resp;
      };

      // 接口axios实例
      var request = _axios2.default.create({
        baseURL: this.baseURL,
        timeout: 10000
      });

      request.interceptors.request.use(interceptorsRequest);
      request.interceptors.response.use(interceptorsResponse, function (err) {
        _message.loading.close();
        (0, _message.errorMessage)(err.message);
        throw Error(err);
      });

      /**
       * 获取类请求, 返回code不为0时, 弹出error的提示
       * @param {string} url 请求地址
       * @param {*} params 请求参数
       */
      var get = function get(url, params) {
        return request.post(url, params, { _config: METHOD_GET });
      };

      /**
       * 操作类请求, 返回code不为0时, 弹出error的提示, 返回code为0时, 弹出susscus的提示
       * @param {string} url 请求地址
       * @param {*} params 请求参数
       */
      var post = function post(url, params) {
        return request.post(url, params, { _config: METHOD_POST });
      };

      var getNoLoading = function getNoLoading(url, params) {
        return request.post(url, params, { _config: METHOD_GET | NO_LOADING });
      };
      var postNoLoading = function postNoLoading(url, params) {
        return request.post(url, params, { _config: METHOD_POST | NO_LOADING });
      };

      return {
        request: request,
        get: get,
        post: post,
        getNoLoading: getNoLoading,
        postNoLoading: postNoLoading
      };
    }
  }]);
  return Request;
}();

exports.default = Request;