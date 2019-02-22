'use strict';

exports.__esModule = true;
exports.messageBoxConfirm = exports.messageBoxAlert = exports.loading = exports.warnMessage = exports.errorMessage = exports.successMessage = undefined;

var _message = require('ttd-element/lib/message');

var _message2 = _interopRequireDefault(_message);

var _loading = require('ttd-element/lib/loading');

var _loading2 = _interopRequireDefault(_loading);

var _messageBox = require('ttd-element/lib/message-box');

var _messageBox2 = _interopRequireDefault(_messageBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var duration = 1500;

var messageHandler = function messageHandler(type) {
  return function (message) {
    return (0, _message2.default)({ message: message, duration: duration, type: type });
  };
};

/**
 * 成功消息
 * @param {string} message
 */
var successMessage = exports.successMessage = function successMessage(message) {
  return messageHandler('success')(message);
};

/**
 * 错误消息
 * @param {string} message
 */
var errorMessage = exports.errorMessage = function errorMessage(message) {
  return messageHandler('error')(message);
};

/**
 * 错误消息
 * @param {string} message
 */
var warnMessage = exports.warnMessage = function warnMessage(message) {
  return messageHandler('warning')(message);
};

var loadingInstance = {
  close: function close() {}
}; // 加个close函数, 保证调用时不报错

var loading = exports.loading = {
  open: function open() {
    loadingInstance = _loading2.default.service({
      background: 'rgba(0,0,0,0.3)'
    });
  },
  close: function close() {
    loadingInstance.close();
  }
};

// MessageBox, MessageBox.alert, MessageBox.confirm 和 MessageBox.prompt，
var messageBoxAlert = exports.messageBoxAlert = function messageBoxAlert(message) {
  return _messageBox2.default.alert(message);
};
var messageBoxConfirm = exports.messageBoxConfirm = function messageBoxConfirm(message) {
  return _messageBox2.default.confirm(message);
};