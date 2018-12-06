import axios from 'axios';
import { successMessage, errorMessage, loading } from './message';
import Logger from './Logger';
import {encodeRequest, requestTimestamp, authorization, decodeResponse} from './crypto';
import qs from 'qs';

const logger = new Logger('API', '#64C42E');

const METHOD_GET = 1;
const METHOD_POST = 2;
const NO_LOADING = 4;

/**
 * Request
 * @param option {baseURL, crypto, request, response}
 */
export default class Request {

  /**
   * Request
   * @param option {baseURL, crypto, request, response}
   */
  constructor(option) {
    Object.assign(this, option);
  }

  init() {
    // 接口请求拦截器
    const interceptorsRequest = (config) => {
      const {
        _config, url, headers
      } = config;
      let data = config.data;

      const hasLoading = !(_config & NO_LOADING);
      if (hasLoading) {
        loading.open();
      }
      if (typeof this.request === 'function') {
        config = this.request(config);
      }
      logger(`上行${url}`, data);

      // 是否加密
      if (this.crypto) {
        const timestamp = requestTimestamp();
        const body = encodeRequest(data, timestamp);
        data = {body};
        Object.assgin(headers, authorization(timestamp, '', body));
      }
      config.data = qs.stringify(data);
      return config;
    };

    // 接口响应拦截器
    const interceptorsResponse = ({ data, config }) => {
      const { _config, url } = config;

      // 是否被加密
      if (this.crypto) {
        data = decodeResponse(data);
      }
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
      baseURL: this.baseURL,
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
    const get = (url, params) => request.post(url, params, { _config: METHOD_GET });

    /**
     * 操作类请求, 返回code不为0时, 弹出error的提示, 返回code为0时, 弹出susscus的提示
     * @param {string} url 请求地址
     * @param {*} params 请求参数
     */
    const post = (url, params) => request.post(url, params, { _config: METHOD_POST });

    const getNoLoading = (url, params) =>
      request.post(url, params, { _config: METHOD_GET | NO_LOADING });
    const postNoLoading = (url, params) =>
      request.post(url, params, { _config: METHOD_POST | NO_LOADING });

    return {
      request,
      get,
      post,
      getNoLoading,
      postNoLoading
    };
  }

}

