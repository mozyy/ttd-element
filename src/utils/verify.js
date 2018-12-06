
/**
 * 验证身份证的正确性
 *
 * */
export const verifyIdCard = (card) => {
  // 7－9－10－5－8－4－2－1－6－3－7－9－10－5－8－4－2
  if (!!card && /^[1-9]\d{16}[0-9Xx]$/.test(card)) {
    const totalArr = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const total = totalArr.reduce((a, b, i)=>a + b * card[i], 0);
    // 余数只可能有0－1－2－3－4－5－6－7－8－9－10这11个数字。
    // 其分别对应的最后一位身份证的号码为1－0－X －9－8－7－6－5－4－3－2
    const endNum = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2][total % 11];
    return card[17].toUpperCase() === endNum.toString();
  } else {
    return false;
  }
};

export const verifyPhone = (phone) => {
  if (!phone) {
    return false;
  }
  return /^1\d{10}$/.test(phone);
};
