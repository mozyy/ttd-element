'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messageBoxConfirm = exports.messageBoxAlert = exports.loading = exports.errorMessage = exports.successMessage = undefined;

var _elementUi = require('element-ui');

var duration = 1500;

var messageHandler = function messageHandler(type) {
  return function (message) {
    return (0, _elementUi.Message)({ message: message, duration: duration, type: type });
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

var loadingInstance = {
  close: function close() {}
}; // 加个close函数, 保证调用时不报错

var loading = exports.loading = {
  open: function open() {
    loadingInstance = _elementUi.Loading.service({
      background: 'rgba(0,0,0,0.3)'
    });
  },
  close: function close() {
    loadingInstance.close();
  }
};

// MessageBox, MessageBox.alert, MessageBox.confirm 和 MessageBox.prompt，
var messageBoxAlert = exports.messageBoxAlert = function messageBoxAlert(message) {
  return _elementUi.MessageBox.alert(message);
};
var messageBoxConfirm = exports.messageBoxConfirm = function messageBoxConfirm(message) {
  return _elementUi.MessageBox.confirm(message);
};