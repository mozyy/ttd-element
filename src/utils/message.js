import Message from 'ttd-element/packages/message';
import Loading from 'ttd-element/packages/loading';
import MessageBox from 'ttd-element/packages/message-box';

const duration = 1500;

const messageHandler = type => message => Message({ message, duration, type });

/**
 * 成功消息
 * @param {string} message
 */
export const successMessage = message => messageHandler('success')(message);

/**
 * 错误消息
 * @param {string} message
 */
export const errorMessage = message => messageHandler('error')(message);

/**
 * 错误消息
 * @param {string} message
 */
export const warnMessage = message => messageHandler('warning')(message);

let loadingInstance = { close() {} }; // 加个close函数, 保证调用时不报错

export const loading = {
  open() {
    loadingInstance = Loading.service({
      background: 'rgba(0,0,0,0.3)'
    });
  },
  close() {
    loadingInstance.close();
  }
};

// MessageBox, MessageBox.alert, MessageBox.confirm 和 MessageBox.prompt，
export const messageBoxAlert = message => MessageBox.alert(message);
export const messageBoxConfirm = message => MessageBox.confirm(message);
