import { enctyptAES, dectyptAES } from './crypto';

/**
 * 添加本地local
 * @param name
 * @param data
 * @private
 */
export const addStorage = (name, data, type = 'sessionStorage') => {
  const storage = window[type];
  if (storage) {
    if (data) {
      const localData = enctyptAES(JSON.stringify(data));
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
export const getStorage = (name, type = 'sessionStorage') => {
  const storage = window[type];
  const res = null;
  if (storage) {
    const localStr = storage.getItem(name);
    if (localStr) {
      return JSON.parse(dectyptAES(localStr));
    }
  }
  return res;
};

/**
 * 清除
 * */
export const clearStorage = (name, type = 'sessionStorage') => {
  const storage = window[type];
  if (name) {
    storage.removeItem(name);
  } else {
    storage.clear();
  }
};
