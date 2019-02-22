'use strict';

exports.__esModule = true;

/**
 * 时间戳格式化
 * @param date
 * @param fmt
 * @returns {string}
 */
var formatDate = exports.formatDate = function formatDate(date) {
  var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-MM-dd';

  var object = {
    y: date.getFullYear(), // 年
    M: date.getMonth() + 1, // 月份
    d: date.getDate(), // 日
    h: date.getHours(), // 小时
    m: date.getMinutes(), // 分
    s: date.getSeconds(), // 秒
    q: Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  };

  var value = fmt.replace(/(y+|M+|d+|h+|m+|s+|q+|S)/g, function (arg) {
    var result = String(object[arg[0]]);
    var len = arg.length;
    var diff = len - result.length;
    return len === 1 ? result : '0'.repeat(diff > 0 ? diff : 0) + result.slice(-len);
  });
  return value;
};

/**
   * 格式化角色信息
   * @param roleInfo
   * @returns {string}
   */
var formatRole = exports.formatRole = function formatRole(roleInfo) {
  if (Array.isArray(roleInfo)) {
    return roleInfo.map(function (item) {
      return item.roleName;
    }).join(',');
  }
  return '';
};

/**
 * 获取时间区间
 * @param day 0 当天 -1 减一天 1 加一天
 * @returns {string}
 */
var getDay = exports.getDay = function getDay() {
  var day = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-MM-dd';

  var date = new Date(Date.now() + 1000 * 60 * 60 * 24 * day);
  var result = formatDate(date, fmt);
  return result;
};

/**
 * 把数字格式化补0的字符串
 * @param {number} num
 */
var fromatTime = exports.fromatTime = function fromatTime(num) {
  return num < 10 ? '0' + num : num;
};

/**
 * 秒数格式化为 分:秒  03:59
 * @param {number} seconds
 */
var seconds2Time = exports.seconds2Time = function seconds2Time(seconds) {
  var second = seconds % 60;
  var minute = parseInt(seconds / 60, 10);
  return fromatTime(minute) + ':' + fromatTime(second);
};