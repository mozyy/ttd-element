'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearStorage = exports.getStorage = exports.addStorage = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _crypto = require('./crypto');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 添加本地local
 * @param name
 * @param data
 * @private
 */
var addStorage = exports.addStorage = function addStorage(name, data) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sessionStorage';

  var storage = window[type];
  if (storage) {
    if (data) {
      var localData = (0, _crypto.enctyptAES)((0, _stringify2.default)(data));
      storage.setItem(name, localData);
    } else {
      storage.removeItem(name);
    }
  }
};

/**
 * 获取本地local
 * @param name
 * @returns {null}
 * @private
 */
var getStorage = exports.getStorage = function getStorage(name) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'sessionStorage';

  var storage = window[type];
  var res = null;
  if (storage) {
    var localStr = storage.getItem(name);
    if (localStr) {
      return JSON.parse((0, _crypto.dectyptAES)(localStr));
    }
  }
  return res;
};

/**
 * 清除
 * */
var clearStorage = exports.clearStorage = function clearStorage(name) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'sessionStorage';

  var storage = window[type];
  if (name) {
    storage.removeItem(name);
  } else {
    storage.clear();
  }
};