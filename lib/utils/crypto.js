'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enctyptSHA256 = exports.localDectyptAES = exports.localEnctyptAES = exports.storgeEnctyptAES = exports.encryptMD5 = exports.decryptBase64 = exports.encryptBase64 = exports.getTimeStamp = exports.utf8 = undefined;

var _cryptoJs = require('crypto-js');

var _cryptoJs2 = _interopRequireDefault(_cryptoJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var localKey = _cryptoJs2.default.enc.Utf8.parse('2a4ac92b8217a77a');
var localIv = _cryptoJs2.default.enc.Utf8.parse('44bf0314c4e1b101');

/**
 * 获取时间戳
 * @returns {string}
 * @private
 */

var utf8 = exports.utf8 = function utf8(KeyStr) {
  return _cryptoJs2.default.enc.Utf8.parse(KeyStr);
};

/**
 * 获取时间戳
 * @returns {string}
 */
var getTimeStamp = exports.getTimeStamp = function getTimeStamp() {
  return Date.new().toString();
};

/**
 * base64转码
 * @param content
 * @private
 */
var encryptBase64 = exports.encryptBase64 = function encryptBase64(content) {
  var str = _cryptoJs2.default.enc.Utf8.parse(content);
  var base64 = _cryptoJs2.default.enc.Base64.stringify(str);
  return base64;
};

/**
 * base64解码
 * @param content
 * @returns {string}
 * @private
 */
var decryptBase64 = exports.decryptBase64 = function decryptBase64(content) {
  var words = _cryptoJs2.default.enc.Base64.parse(content);
  var parseStr = words.toString(_cryptoJs2.default.enc.Utf8);
  return parseStr;
};

var encryptMD5 = exports.encryptMD5 = function encryptMD5(content) {
  return _cryptoJs2.default.MD5(content).toString();
};

/**
 * 本地AES加密
 * @param content 需要加密的内容
 * @returns {string}
 * @private
 */
var storgeEnctyptAES = exports.storgeEnctyptAES = function storgeEnctyptAES(content) {
  var encryptResult = _cryptoJs2.default.AES.encrypt(content, localKey, {
    iv: localIv,
    mode: _cryptoJs2.default.mode.CBC,
    padding: _cryptoJs2.default.pad.Pkcs7
  }).toString();
  return encryptResult;
};

var localEnctyptAES = exports.localEnctyptAES = function localEnctyptAES(content) {
  var encryptResult = _cryptoJs2.default.AES.encrypt(content, localKey, {
    iv: localIv,
    mode: _cryptoJs2.default.mode.CBC,
    padding: _cryptoJs2.default.pad.Pkcs7
  }).toString();
  return encryptResult;
};
/**
 * 本地AES解密
 * @param content 需要解密的内容
 * @returns {string}
 * @private
 */
var localDectyptAES = exports.localDectyptAES = function localDectyptAES(content) {
  var bytes = _cryptoJs2.default.AES.decrypt(content.toString(), localKey, {
    iv: localIv,
    mode: _cryptoJs2.default.mode.CBC,
    padding: _cryptoJs2.default.pad.Pkcs7
  });
  return bytes.toString(_cryptoJs2.default.enc.Utf8);
};

var enctyptSHA256 = exports.enctyptSHA256 = function enctyptSHA256(timestamp) {
  var temp = _cryptoJs2.default.SHA256(timestamp).toString();
  return temp.substring(0, 16);
};