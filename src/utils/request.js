import axios from 'axios';
import { Logger, successMessage, errorMessage, loading } from '@/utils';
import qs from 'qs';

import { requireURL } from '@/env';

const logger = new Logger('API', '#64C42E');

const METHOD_GET = 1;
const METHOD_POST = 2;
const NO_LOADING = 4;

// TODO:  不要默认header
const headersConfig = {
  // uid: 'hao.yao',
  // time: '20180918105221',
  // code: '484067a87cea095ad797af770ebc3907',
  // otype: 'WeaverOA',
};

export const setHeaderConfig = (config) => {
  Object.assign(headersConfig, config);
};

// 接口请求拦截器
const interceptorsRequest = (config) => {
  const {
    _config, headers, url, data
  } = config;

  Object.assign(headers, headersConfig);

  const hasLoading = !(_config & NO_LOADING);
  if (hasLoading) {
    loading.open();
  }
  config.data = qs.stringify(data); // eslint-disable-line no-param-reassign
  logger(`上行${url}`, data);
  return config;
};

// 接口响应拦截器
const interceptorsResponse = ({ data, config }) => {
  const { _config, url } = config;
  const { code, msg, data: resp } = data;

  logger(`下行${url}`, data);
  // const isGet = _config & METHOD_GET;
  const isPost = _config & METHOD_POST;
  const hasLoading = !(_config & NO_LOADING);

  if (hasLoading) {
    loading.close();
  }

  // 提示msg
  if (code !== 0) {
    errorMessage(msg);
    throw Error(`接口${url}: ${msg}`);
  } else if (isPost) {
    successMessage(msg);
  }
  return resp;
};

// 接口axios实例
const request = axios.create({
  baseURL: requireURL,
  timeout: 10000
});

request.interceptors.request.use(interceptorsRequest);
request.interceptors.response.use(interceptorsResponse, (err) => {
  loading.close();
  errorMessage(err.message);
  throw Error(err);
});

/**
 * 获取类请求, 返回code不为0时, 弹出error的提示
 * @param {string} url 请求地址
 * @param {*} params 请求参数
 */
export const get = (url, params) => request.post(url, params, { _config: METHOD_GET });

/**
 * 操作类请求, 返回code不为0时, 弹出error的提示, 返回code为0时, 弹出susscus的提示
 * @param {string} url 请求地址
 * @param {*} params 请求参数
 */
export const post = (url, params) => request.post(url, params, { _config: METHOD_POST });

export const getNoLoading = (url, params) =>
  request.post(url, params, { _config: METHOD_GET | NO_LOADING });
export const postNoLoading = (url, params) =>
  request.post(url, params, { _config: METHOD_POST | NO_LOADING });
