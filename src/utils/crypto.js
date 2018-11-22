import CryptoJs from 'crypto-js';

const localKey = CryptoJs.enc.Utf8.parse('2a4ac92b8217a77a');
const localIv = CryptoJs.enc.Utf8.parse('44bf0314c4e1b101');

/**
 * 获取时间戳
 * @returns {string}
 * @private
 */

export const utf8 = KeyStr => CryptoJs.enc.Utf8.parse(KeyStr);

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
  const str = CryptoJs.enc.Utf8.parse(content);
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
export const storgeEnctyptAES = (content) => {
  const encryptResult = CryptoJs.AES.encrypt(content, localKey, {
    iv: localIv,
    mode: CryptoJs.mode.CBC,
    padding: CryptoJs.pad.Pkcs7
  }).toString();
  return encryptResult;
};

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
