'use strict';

exports.__esModule = true;
exports.decodeResponse = exports.requestTimestamp = exports.encodeRequest = exports.enctyptSHA256 = exports.localDectyptAES = exports.localEnctyptAES = exports.encryptMD5 = exports.decryptBase64 = exports.encryptBase64 = exports.getTimeStamp = exports.authorization = exports.uuid = exports.enctypeAes = exports.encryptMd5 = exports.utf8Parse = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _cryptoJs = require('crypto-js');

var _cryptoJs2 = _interopRequireDefault(_cryptoJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = '2a4ac92b';
var b = '8217a77a';
var c = '44bf0314';
var d = 'c4e1b101';

var utf8Parse = exports.utf8Parse = function utf8Parse(KeyStr) {
  return _cryptoJs2.default.enc.Utf8.parse(KeyStr);
};
/**
 * md5加密
 * @param  {[type]} prama [description]
 * @return {[type]}       [description]
 */
var encryptMd5 = exports.encryptMd5 = function encryptMd5(prama) {
  return _cryptoJs2.default.MD5(prama).toString();
};

var localKey = utf8Parse(a + b);
var localIv = utf8Parse(c + d);

var enctypeAes = exports.enctypeAes = function enctypeAes(prama, timestamp) {
  // 成产key
  var KeyStr = _cryptoJs2.default.SHA256(timestamp).toString().substring(0, 16);
  var key = utf8Parse(KeyStr);
  // 生产 iv
  var ivStr = _cryptoJs2.default.SHA256(KeyStr + timestamp).toString().substring(0, 16);
  var iv = utf8Parse(ivStr);
  // 加密
  var encryptResult = _cryptoJs2.default.AES.encrypt((0, _stringify2.default)(prama), key, {
    iv: iv,
    mode: _cryptoJs2.default.mode.CBC,
    padding: _cryptoJs2.default.pad.Pkcs7
  });
  return encryptResult.toString();
};

/**
 * 获取请求uuid
 * @return {[type]} [description]
 */
var uuid = exports.uuid = function uuid() {
  var s = [];
  var hexDigits = '0123456789abcdef';
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-';

  var uuid = s.join('');
  return uuid;
};

/**
 * 公共参数
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
var authorization = exports.authorization = function authorization() {
  var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requestTimestamp();
  var au = arguments[1];
  var body = arguments[2];


  var access_token = encryptMd5(timestamp).substring(11, 17).toUpperCase();

  var data = {
    os: 'web',
    version: '1.7',
    timestamp: timestamp,
    access_token: access_token,
    au: au
  };
  if (body) {
    data.cm = encryptMd5(body);
  }
  return data;
};

/**
 * 获取时间戳
 * @returns {string}
 */
var getTimeStamp = exports.getTimeStamp = function getTimeStamp() {
  return Date.now().toString();
};

/**
 * base64转码
 * @param content
 * @private
 */
var encryptBase64 = exports.encryptBase64 = function encryptBase64(content) {
  var str = utf8Parse(content);
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

// 接口加密方法
var encodeRequest = exports.encodeRequest = function encodeRequest(data, timestamp) {
  var aesData = enctypeAes(data, timestamp);
  var baseData = encryptBase64(aesData);
  return baseData;
};

var requestTimestamp = exports.requestTimestamp = function requestTimestamp() {
  return uuid() + '-' + getTimeStamp();
};

// 接口解密
var decodeResponse = exports.decodeResponse = function decodeResponse(data) {
  var baseData = decryptBase64(data);
  // aes 解密
  var aesData = localDectyptAES(baseData);
  return aesData;
};