'use strict';

exports.__esModule = true;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _ttdElement = require('ttd-element');

var _logo = require('@/assets/img/logo.png');

var _logo2 = _interopRequireDefault(_logo);

var _notice = require('@/assets/media/notice.wav');

var _notice2 = _interopRequireDefault(_notice);

var _notice3 = require('@/assets/media/notice.mp3');

var _notice4 = _interopRequireDefault(_notice3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoticeAudioComponent = _vue2.default.extend({
  render: function render() {
    var h = arguments[0];

    return h(
      'audio',
      { ref: 'audio' },
      [h('source', {
        attrs: { src: _notice2.default, type: 'audio/wav' }
      }), h('source', {
        attrs: { src: _notice4.default, type: 'audio/mpeg' }
      })]
    );
  }
});

var Notice = function () {
  function Notice() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$title = _ref.title,
        title = _ref$title === undefined ? '新邀请提示' : _ref$title,
        _ref$body = _ref.body,
        body = _ref$body === undefined ? '您有新的邀请, 点击查看!' : _ref$body,
        args = (0, _objectWithoutProperties3.default)(_ref, ['title', 'body']);

    (0, _classCallCheck3.default)(this, Notice);

    Notice.checkPermission().then(Notice.checkWindowFouce).then(function () {
      _this.instance = new Notification(title, (0, _extends3.default)({
        body: body,
        icon: _logo2.default,
        // image: icon,
        requireInteraction: true
      }, args));
      _this.instance.onclick = function () {
        window.focus();
        _this.instance.close();
      };
    }, function () {
      _ttdElement.Notification.info({
        title: title,
        message: body,
        duration: 3000
      });
    }).finally(function () {
      Notice.noticeAudio();
    });
  }

  Notice.checkPermission = function checkPermission() {
    return new _promise2.default(function (resolve, rejects) {
      // 先检查浏览器是否支持
      if (!('Notification' in window)) {
        rejects(Error('This browser does not support desktop notification'));
      } else if (Notification.permission === 'granted') {
        // 检查用户是否同意接受通知
        resolve();
      } else if (Notification.permission !== 'denied') {
        // 否则我们需要向用户获取权限
        Notification.requestPermission().then(function (permission) {
          // 如果用户同意，就可以向他们发送通知
          if (permission === 'granted') {
            resolve();
          } else {
            rejects();
          }
        });
      } else {
        rejects();
      }
    });
  };

  Notice.checkWindowFouce = function checkWindowFouce() {
    return new _promise2.default(function (resolve, rejects) {
      // 页面不可见 或 页面没有焦点
      if (document.visibilityState !== 'visible' || !document.hasFocus()) {
        resolve();
      } else {
        rejects();
      }
    });
  };

  Notice.noticeAudio = function noticeAudio() {
    if (!Notice.audioInstance) {
      Notice.audioInstance = new NoticeAudioComponent({
        el: document.createElement('div')
      });
      document.body.appendChild(Notice.audioInstance.$el);
    }
    _vue2.default.nextTick(function () {
      Notice.audioInstance.$refs.audio.currentTime = 0;
      Notice.audioInstance.$refs.audio.play();
    });
  };

  return Notice;
}();

exports.default = Notice;