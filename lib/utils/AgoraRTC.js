'use strict';

exports.__esModule = true;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _agoraRtcSdk = require('agora-rtc-sdk');

var _agoraRtcSdk2 = _interopRequireDefault(_agoraRtcSdk);

var _agora = require('@/config/agora');

var _api = require('@/api');

var _Logger = require('./Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _message = require('./message');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_agoraRtcSdk2.default.Logger.setLogLevel(_agoraRtcSdk2.default.Logger.NONE);

var RTC = function () {
  function RTC(channel) {
    var streamSubscribedHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    (0, _classCallCheck3.default)(this, RTC);

    if (!_agoraRtcSdk2.default.checkSystemRequirements()) {
      alert('Your browser does not support WebRTC!');
    }
    this.channel = channel;
    this.streamSubscribedHandler = streamSubscribedHandler;
    this.logger = new _Logger2.default('RTC', '#6495ed');
    this.init();
  }

  RTC.prototype.init = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.initRTCPromise = this.initRTC();

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function init() {
      return _ref.apply(this, arguments);
    }

    return init;
  }();

  RTC.prototype.initRTC = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var uid;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.create();

            case 2:
              this.addClientEvent();
              _context2.next = 5;
              return this.join();

            case 5:
              uid = _context2.sent;

              this.log('joind 成功: ', uid);
              this.createStream(uid);

            case 8:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function initRTC() {
      return _ref2.apply(this, arguments);
    }

    return initRTC;
  }();

  RTC.prototype.create = function create() {
    var _this = this;

    return new _promise2.default(function (resolve, rejects) {
      _this.client = _agoraRtcSdk2.default.createClient({ mode: 'live', codec: 'h264' });
      _this.client.init(_agora.appId, resolve, rejects);
    });
  };

  RTC.prototype.join = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var _this2 = this;

      var channel, uid, _ref4, channel_key;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              channel = this.channel;
              uid = 0;
              _context3.next = 4;
              return (0, _api.getVideoToken)({ channel: channel, uid: uid });

            case 4:
              _ref4 = _context3.sent;
              channel_key = _ref4.bean;
              return _context3.abrupt('return', new _promise2.default(function (resolve, rejects) {
                _this2.client.join(channel_key, channel, uid, resolve, rejects);
              }));

            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function join() {
      return _ref3.apply(this, arguments);
    }

    return join;
  }();

  RTC.prototype.createStream = function createStream(uid) {
    var _this3 = this;

    var localStream = _agoraRtcSdk2.default.createStream({
      streamID: uid,
      audio: true,
      video: true,
      screen: false
    });
    this.localStream = localStream;
    localStream.setVideoProfile('240p_3');

    localStream.on('accessAllowed', function () {
      _this3.log('访问麦克风和摄像头成功');
    });

    localStream.on('accessDenied', function () {
      _this3.log('访问麦克风和摄像头失败');
    });

    localStream.init(function () {
      _this3.log('获取媒体成功');
      localStream.play(_agora.customerServiceId || 'customer-service');

      _this3.client.publish(localStream, function (err) {
        _this3.log('\u53D1\u5E03\u672C\u5730\u89C6\u9891\u9519\u8BEF: ' + err);
      });

      _this3.client.on('stream-published', function () {
        _this3.log('发布本地视频成功');
      });
    });
  };

  RTC.prototype.addClientEvent = function addClientEvent() {
    var _this4 = this;

    var channelKey = '';
    var client = this.client;

    client.on('error', function (err) {
      _this4.log('Got error msg:', err.reason);
      if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
        _this4.client.renewChannelKey(channelKey, function () {
          _this4.log('Renew channel key successfully');
        }, function (error) {
          _this4.log('Renew channel key failed: ', error);
        });
      }
    });

    client.on('stream-added', function (_ref5) {
      var stream = _ref5.stream;

      _this4.log('New stream added: ' + stream.getId());
      _this4.log('Subscribe ', stream);
      client.subscribe(stream, function (err) {
        _this4.log('Subscribe stream failed', err);
      });
    });

    client.on('stream-subscribed', function (_ref6) {
      var stream = _ref6.stream;

      _this4.log('Subscribe remote stream successfully: ' + stream.getId());
      stream.play(_agora.clientId || 'client');
      _this4.streamSubscribedHandler(stream);
    });

    client.on('stream-removed', function (_ref7) {
      var stream = _ref7.stream;

      stream.stop();
      (0, _message.errorMessage)('客户已离线');
      _this4.log('Remote stream is removed ' + stream.getId());
    });

    client.on('peer-leave', function (_ref8) {
      var stream = _ref8.stream,
          uid = _ref8.uid;

      if (stream) {
        stream.stop();
        (0, _message.errorMessage)('客户已离线');
        _this4.log(uid + ' leaved from this channel');
      }
    });
  };

  RTC.prototype.close = function () {
    var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var _this5 = this;

      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.initRTCPromise;

            case 2:
              this.localStream.close();
              this.client.leave(function () {
                _this5.log('Leavel channel successfully');
              }, function (err) {
                _this5.log('Leave channel failed: ', err);
              });
              this.client.unpublish(this.localStream, function (err) {
                _this5.log('Unpublish local stream failed ' + err);
              });

            case 5:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function close() {
      return _ref9.apply(this, arguments);
    }

    return close;
  }();

  RTC.prototype.log = function log() {
    this.logger.apply(this, arguments);
  };

  return RTC;
}();

exports.default = RTC;