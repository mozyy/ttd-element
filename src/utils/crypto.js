import CryptoJs from 'crypto-js';

const a = '2a4ac92b';
const b = '8217a77a';
const c = '44bf0314';
const d = 'c4e1b101';

export const utf8Parse = KeyStr => CryptoJs.enc.Utf8.parse(KeyStr);
/**
 * md5加密
 * @param  {[type]} prama [description]
 * @return {[type]}       [description]
 */
export const encryptMd5 = (prama)=> CryptoJs.MD5(prama).toString();

const localKey = utf8Parse(a + b);
const localIv = utf8Parse(c + d);

export const enctypeAes = (prama, timestamp) => {
  // 成产key
  let KeyStr = CryptoJs.SHA256(timestamp).toString().substring(0, 16);
  let key = utf8Parse(KeyStr);
  // 生产 iv
  let ivStr = CryptoJs.SHA256(KeyStr + timestamp).toString().substring(0, 16);
  let iv = utf8Parse(ivStr);
  // 加密
  let encryptResult = CryptoJs.AES.encrypt(JSON.stringify(prama), key, {
    iv: iv,
    mode: CryptoJs.mode.CBC,
    padding: CryptoJs.pad.Pkcs7
  });
  return encryptResult.toString();
};

/**
 * 获取请求uuid
 * @return {[type]} [description]
 */
export const uuid = ()=> {
  let s = [];
  let hexDigits = '0123456789abcdef';
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-';

  let uuid = s.join('');
  return uuid;
};

/**
 * 公共参数
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export const authorization = (currTimeStamp, au, body) => {
  let data = {};
  data.os = 'web';
  data.version = '1.7';
  data.timestamp = currTimeStamp;
  data.access_token = encryptMd5(currTimeStamp).substring(11, 17).toUpperCase();
  data.cm = encryptMd5(body);
  data.au = au;
  return data;
};

/**
 * 获取时间戳
 * @returns {string}
 */
export const getTimeStamp = () => Date.new().toString();

/**
 * base64转码
 * @param content
 * @private
 */
export const encryptBase64 = (content) => {
  const str = utf8Parse(content);
  const base64 = CryptoJs.enc.Base64.stringify(str);
  return base64;
};

/**
 * base64解码
 * @param content
 * @returns {string}
 * @private
 */
export const decryptBase64 = (content) => {
  const words = CryptoJs.enc.Base64.parse(content);
  const parseStr = words.toString(CryptoJs.enc.Utf8);
  return parseStr;
};

export const encryptMD5 = content => CryptoJs.MD5(content).toString();

/**
 * 本地AES加密
 * @param content 需要加密的内容
 * @returns {string}
 * @private
 */
export const localEnctyptAES = (content) => {
  const encryptResult = CryptoJs.AES.encrypt(content, localKey, {
    iv: localIv,
    mode: CryptoJs.mode.CBC,
    padding: CryptoJs.pad.Pkcs7
  }).toString();
  return encryptResult;
};
/**
 * 本地AES解密
 * @param content 需要解密的内容
 * @returns {string}
 * @private
 */
export const localDectyptAES = (content) => {
  const bytes = CryptoJs.AES.decrypt(content.toString(), localKey, {
    iv: localIv,
    mode: CryptoJs.mode.CBC,
    padding: CryptoJs.pad.Pkcs7
  });
  return bytes.toString(CryptoJs.enc.Utf8);
};

export const enctyptSHA256 = (timestamp) => {
  const temp = CryptoJs.SHA256(timestamp).toString();
  return temp.substring(0, 16);
};

// 接口加密方法
export const encodeRequest = (data, timestamp) => {
  const aesData = enctypeAes(data, timestamp);
  const baseData = encryptBase64(aesData);
  return baseData;
};

export const requestTimestamp = () => `${uuid()}-${getTimeStamp()}`;

// 接口解密
export const decodeResponse = (data) => {
  const baseData = decryptBase64(data);
  // aes 解密
  const aesData = localDectyptAES(baseData);
  return aesData;
};
