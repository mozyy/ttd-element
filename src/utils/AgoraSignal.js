import AgoraSignal from 'agora-signaling-sdk';
import EventEmitter from 'events';

import { appId, signalInterval } from '@/config/agora';
import { getSignalToken } from '@/api';
import Logger from './Logger';

export default class Signal {
  constructor(account, onReceiveMessageFn, onSignalOut = () => {}) {
    this.logger = new Logger('信令', 'blue');
    this.signal = new AgoraSignal(appId);

    this.sessionEmitter = new EventEmitter();
    this.channelEmitter = new EventEmitter();
    this.account = account;
    this.onReceiveMessageFn = onReceiveMessageFn;
    this.onSignalOut = onSignalOut;
  }

  async init() {
    await (this.receiveMessagePromise = this.initReceiveMessage());
    await (this.channelMessagePromise = this.initChannelMessage());
  }

  async initReceiveMessage() {
    await this.login();
    this.onReceiveMessage();
    // 增加心跳检测信令登录情况
    this.loginTimer = setInterval(() => {
      if (this.getStatus() === 0) {
        clearInterval(this.loginTimer);
        this.init();
      }
    }, signalInterval);
  }

  async initChannelMessage() {
    await this.join();
    this.onChannelMessage();
  }

  async login() {
    const account = this.account;
    const { bean: token } = await getSignalToken({ account });

    return new Promise((resolve, reject) => {
      // const token = '_no_need_token';
      this.log(`token: ${token}`);
      this.log(`帐号: ${account}`);
      this.session = this.signal.login(account, token);
      [
        'onLoginSuccess',
        'onError',
        'onLoginFailed',
        'onLogout',
        'onMessageInstantReceive',
        'onInviteReceived'
      ].forEach((event) => {
        this.session[event] = (...args) => {
          this.sessionEmitter.emit(event, ...args);
        };
      });
      // Promise.then
      this.sessionEmitter.once('onLoginSuccess', (uid) => {
        this.uid = uid;
        this.log(`登录成功, uid: ${uid}`);
        resolve(uid);
      });
      // Promise.catch
      this.sessionEmitter.once('onLoginFailed', (...args) => {
        this.log('登录失败: ', ...args);
        reject(Error(args));
      });
      this.sessionEmitter.on('onLogout', (...args) => {
        this.onSignalOut(args);
        clearInterval(this.loginTimer);
        this.log('退出登录', ...args);
      });
    });
  }

  logout() {
    return new Promise((resolve) => {
      this.session.logout();
      this.sessionEmitter.once('onLogout', (...args) => {
        this.log('登出成功');
        resolve(...args);
      });
    });
  }

  getStatus() {
    if (this.session) {
      return this.session.getStatus();
    }
    return 0;
  }

  onReceiveMessage() {
    this.sessionEmitter.on('onMessageInstantReceive', (account, uid, msg) => {
      // 接收点对点消息回调设置
      this.log(`接收点对点消息成功, 帐号: ${account}, 消息: ${msg}`);
      let msgObj = {};
      try {
        msgObj = JSON.parse(msg);
      } catch (err) {
        this.log(err);
      }
      // 过滤掉10分钟前的信令
      if (!msgObj.timestamp || Date.now() - msgObj.timestamp < 1000 * 60 * 10) {
        this.onReceiveMessageFn(msgObj);
      }
    });
  }

  onChannelMessage() {
    this.channelEmitter.on('onMessageChannelReceive', (account, uid, msg) => {
      // 接收频道消息回调设置
      this.log(`接收频道消息成功, 帐号: ${account}, 消息: ${msg}`);
    });
  }

  async join() {
    await this.receiveMessagePromise;
    return new Promise((resolve, reject) => {
      this.channel = this.session.channelJoin(this.account);
      // Proxy callback on channel to channelEmitter
      [
        'onChannelJoined',
        'onChannelJoinFailed',
        'onChannelLeaved',
        'onChannelUserJoined',
        'onChannelUserLeaved',
        'onChannelUserList',
        'onChannelAttrUpdated',
        'onMessageChannelReceive'
      ].forEach((event) => {
        this.channel[event] = (...args) => {
          this.channelEmitter.emit(event, ...args);
        };
      });
      // Promise.then
      this.channelEmitter.once('onChannelJoined', (...args) => {
        resolve(...args);
      });
      // Promise.catch
      this.channelEmitter.once('onChannelJoinFailed', (...args) => {
        this.channelEmitter.removeAllListeners();
        reject(Error(...args));
      });
    });
  }

  async leave() {
    await this.channelMessagePromise;
    return new Promise((resolve) => {
      this.channel.channelLeave();
      this.channelEmitter.once('onChannelLeaved', (...args) => {
        this.log('退出频道: ', ...args);
        this.channelEmitter.removeAllListeners();
        resolve(...args);
      });
    });
  }

  async sendMessage(peerAccount, text) {
    await this.receiveMessagePromise;
    this.session.messageInstantSend(String(peerAccount), text); // 苹果频道号为字符串
  }

  async broadcastMessage(text) {
    await this.channelMessagePromise;
    this.channel.messageChannelSend(text);
  }

  async channelInviteUser2(channel, account) {
    await this.receiveMessagePromise;
    return new Promise((resolve, reject) => {
      const call = this.session.channelInviteUser2(String(channel), String(account), '');
      call.onInviteAcceptedByPeer = resolve; // 成功
      call.onInviteRefusedByPeer = reject; // 拒绝
      call.onInviteFailed = reject; // 失败
    });
  }

  log(...msgs) {
    this.logger(...msgs);
  }
}

