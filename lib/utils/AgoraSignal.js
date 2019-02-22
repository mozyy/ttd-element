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

var _agoraSignalingSdk = require('agora-signaling-sdk');

var _agoraSignalingSdk2 = _interopRequireDefault(_agoraSignalingSdk);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _agora = require('@/config/agora');

var _api = require('@/api');

var _Logger = require('./Logger');

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Signal = function () {
  function Signal(account, onReceiveMessageFn) {
    var onSignalOut = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    (0, _classCallCheck3.default)(this, Signal);

    this.logger = new _Logger2.default('信令', 'blue');
    this.signal = new _agoraSignalingSdk2.default(_agora.appId);

    this.sessionEmitter = new _events2.default();
    this.channelEmitter = new _events2.default();
    this.account = account;
    this.onReceiveMessageFn = onReceiveMessageFn;
    this.onSignalOut = onSignalOut;
    this.init();
  }

  Signal.prototype.init = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.receiveMessagePromise = this.initReceiveMessage();

            case 2:
              _context.next = 4;
              return this.channelMessagePromise = this.initChannelMessage();

            case 4:
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

  Signal.prototype.initReceiveMessage = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var _this = this;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.login();

            case 2:
              this.onReceiveMessage();
              // 增加心跳检测信令登录情况
              this.loginTimer = setInterval(function () {
                if (_this.getStatus() === 0) {
                  clearInterval(_this.loginTimer);
                  _this.init();
                }
              }, _agora.signalInterval || 5000);

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function initReceiveMessage() {
      return _ref2.apply(this, arguments);
    }

    return initReceiveMessage;
  }();

  Signal.prototype.initChannelMessage = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.join();

            case 2:
              this.onChannelMessage();

            case 3:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function initChannelMessage() {
      return _ref3.apply(this, arguments);
    }

    return initChannelMessage;
  }();

  Signal.prototype.login = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var _this2 = this;

      var account, _ref5, token;

      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              account = this.account;
              _context4.next = 3;
              return (0, _api.getSignalToken)({ account: account });

            case 3:
              _ref5 = _context4.sent;
              token = _ref5.bean;
              return _context4.abrupt('return', new _promise2.default(function (resolve, reject) {
                // const token = '_no_need_token';
                _this2.log('token: ' + token);
                _this2.log('\u5E10\u53F7: ' + account);
                _this2.session = _this2.signal.login(account, token);
                ['onLoginSuccess', 'onError', 'onLoginFailed', 'onLogout', 'onMessageInstantReceive', 'onInviteReceived'].forEach(function (event) {
                  _this2.session[event] = function () {
                    var _sessionEmitter;

                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                      args[_key] = arguments[_key];
                    }

                    (_sessionEmitter = _this2.sessionEmitter).emit.apply(_sessionEmitter, [event].concat(args));
                  };
                });
                // Promise.then
                _this2.sessionEmitter.once('onLoginSuccess', function (uid) {
                  _this2.uid = uid;
                  _this2.log('\u767B\u5F55\u6210\u529F, uid: ' + uid);
                  resolve(uid);
                });
                // Promise.catch
                _this2.sessionEmitter.once('onLoginFailed', function () {
                  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                  }

                  _this2.log.apply(_this2, ['登录失败: '].concat(args));
                  reject(Error(args));
                });
                _this2.sessionEmitter.on('onLogout', function () {
                  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                    args[_key3] = arguments[_key3];
                  }

                  _this2.onSignalOut(args);
                  clearInterval(_this2.loginTimer);
                  _this2.log.apply(_this2, ['退出登录'].concat(args));
                });
              }));

            case 6:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function login() {
      return _ref4.apply(this, arguments);
    }

    return login;
  }();

  Signal.prototype.logout = function logout() {
    var _this3 = this;

    return new _promise2.default(function (resolve) {
      _this3.session.logout();
      _this3.sessionEmitter.once('onLogout', function () {
        _this3.log('登出成功');
        resolve.apply(undefined, arguments);
      });
    });
  };

  Signal.prototype.getStatus = function getStatus() {
    if (this.session) {
      return this.session.getStatus();
    }
    return 0;
  };

  Signal.prototype.onReceiveMessage = function onReceiveMessage() {
    var _this4 = this;

    this.sessionEmitter.on('onMessageInstantReceive', function (account, uid, msg) {
      // 接收点对点消息回调设置
      _this4.log('\u63A5\u6536\u70B9\u5BF9\u70B9\u6D88\u606F\u6210\u529F, \u5E10\u53F7: ' + account + ', \u6D88\u606F: ' + msg);
      var msgObj = {};
      try {
        msgObj = JSON.parse(msg);
      } catch (err) {
        _this4.log(err);
      }
      // 过滤掉10分钟前的信令
      if (!msgObj.timestamp || Date.now() - msgObj.timestamp < 1000 * 60 * 10) {
        _this4.onReceiveMessageFn(msgObj);
      }
    });
  };

  Signal.prototype.onChannelMessage = function onChannelMessage() {
    var _this5 = this;

    this.channelEmitter.on('onMessageChannelReceive', function (account, uid, msg) {
      // 接收频道消息回调设置
      _this5.log('\u63A5\u6536\u9891\u9053\u6D88\u606F\u6210\u529F, \u5E10\u53F7: ' + account + ', \u6D88\u606F: ' + msg);
    });
  };

  Signal.prototype.join = function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      var _this6 = this;

      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.receiveMessagePromise;

            case 2:
              return _context5.abrupt('return', new _promise2.default(function (resolve, reject) {
                _this6.channel = _this6.session.channelJoin(_this6.account);
                // Proxy callback on channel to channelEmitter
                ['onChannelJoined', 'onChannelJoinFailed', 'onChannelLeaved', 'onChannelUserJoined', 'onChannelUserLeaved', 'onChannelUserList', 'onChannelAttrUpdated', 'onMessageChannelReceive'].forEach(function (event) {
                  _this6.channel[event] = function () {
                    var _channelEmitter;

                    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                      args[_key4] = arguments[_key4];
                    }

                    (_channelEmitter = _this6.channelEmitter).emit.apply(_channelEmitter, [event].concat(args));
                  };
                });
                // Promise.then
                _this6.channelEmitter.once('onChannelJoined', function () {
                  resolve.apply(undefined, arguments);
                });
                // Promise.catch
                _this6.channelEmitter.once('onChannelJoinFailed', function () {
                  _this6.channelEmitter.removeAllListeners();
                  reject(Error.apply(undefined, arguments));
                });
              }));

            case 3:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function join() {
      return _ref6.apply(this, arguments);
    }

    return join;
  }();

  Signal.prototype.leave = function () {
    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
      var _this7 = this;

      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.channelMessagePromise;

            case 2:
              return _context6.abrupt('return', new _promise2.default(function (resolve) {
                _this7.channel.channelLeave();
                _this7.channelEmitter.once('onChannelLeaved', function () {
                  for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                    args[_key5] = arguments[_key5];
                  }

                  _this7.log.apply(_this7, ['退出频道: '].concat(args));
                  _this7.channelEmitter.removeAllListeners();
                  resolve.apply(undefined, args);
                });
              }));

            case 3:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function leave() {
      return _ref7.apply(this, arguments);
    }

    return leave;
  }();

  Signal.prototype.sendMessage = function () {
    var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(peerAccount, text) {
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.receiveMessagePromise;

            case 2:
              this.session.messageInstantSend(String(peerAccount), text); // 苹果频道号为字符串

            case 3:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function sendMessage(_x2, _x3) {
      return _ref8.apply(this, arguments);
    }

    return sendMessage;
  }();

  Signal.prototype.broadcastMessage = function () {
    var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(text) {
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this.channelMessagePromise;

            case 2:
              this.channel.messageChannelSend(text);

            case 3:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function broadcastMessage(_x4) {
      return _ref9.apply(this, arguments);
    }

    return broadcastMessage;
  }();

  Signal.prototype.channelInviteUser2 = function () {
    var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(channel, account) {
      var _this8 = this;

      return _regenerator2.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return this.receiveMessagePromise;

            case 2:
              return _context9.abrupt('return', new _promise2.default(function (resolve, reject) {
                var call = _this8.session.channelInviteUser2(String(channel), String(account), '');
                call.onInviteAcceptedByPeer = resolve; // 成功
                call.onInviteRefusedByPeer = reject; // 拒绝
                call.onInviteFailed = reject; // 失败
              }));

            case 3:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function channelInviteUser2(_x5, _x6) {
      return _ref10.apply(this, arguments);
    }

    return channelInviteUser2;
  }();

  Signal.prototype.log = function log() {
    this.logger.apply(this, arguments);
  };

  return Signal;
}();

exports.default = Signal;