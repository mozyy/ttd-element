
/**
 * 时间戳格式化
 * @param date
 * @param fmt
 * @returns {string}
 */
export const formatDate = (date, fmt = 'yyyy-MM-dd') => {
  const object = {
    y: date.getFullYear(), // 年
    M: date.getMonth() + 1, // 月份
    d: date.getDate(), // 日
    h: date.getHours(), // 小时
    m: date.getMinutes(), // 分
    s: date.getSeconds(), // 秒
    q: Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  };

  const value = fmt.replace(/(y+|M+|d+|h+|m+|s+|q+|S)/g, (arg) => {
    const result = String(object[arg[0]]);
    const len = arg.length;
    const diff = len - result.length;
    return len === 1 ? result : '0'.repeat(diff > 0 ? diff : 0) + result.slice(-len);
  });
  return value;
};

/**
   * 格式化角色信息
   * @param roleInfo
   * @returns {string}
   */
export const formatRole = (roleInfo) => {
  if (Array.isArray(roleInfo)) {
    return roleInfo.map(item => item.roleName).join(',');
  }
  return '';
};

/**
 * 获取时间区间
 * @param day 0 当天 -1 减一天 1 加一天
 * @returns {string}
 */
export const getDay = (day = 0, fmt = 'yyyy-MM-dd') => {
  const date = new Date(Date.now() + (1000 * 60 * 60 * 24 * day));
  const result = formatDate(date, fmt);
  return result;
};

/**
 * 把数字格式化补0的字符串
 * @param {number} num
 */
export const fromatTime = num => (num < 10 ? `0${num}` : num);

/**
 * 秒数格式化为 分:秒  03:59
 * @param {number} seconds
 */
export const seconds2Time = (seconds) => {
  const second = seconds % 60;
  const minute = parseInt(seconds / 60, 10);
  return `${fromatTime(minute)}:${fromatTime(second)}`;
};
