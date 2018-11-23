
import AgoraRTC from 'agora-rtc-sdk';

import { appId, customerServiceId, clientId } from '@/config/agora';
import { getVideoToken } from '@/api';
import Logger from './Logger';
import { errorMessage } from './message';

AgoraRTC.Logger.setLogLevel(AgoraRTC.Logger.NONE);

export default class RTC {
  constructor(channel, streamSubscribedHandler = () => {}) {
    if (!AgoraRTC.checkSystemRequirements()) {
      alert('Your browser does not support WebRTC!');
    }
    this.channel = channel;
    this.streamSubscribedHandler = streamSubscribedHandler;
    this.logger = new Logger('RTC', '#6495ed');
    this.init();
  }

  async init() {
    await (this.initRTCPromise = this.initRTC());
  }

  async initRTC() {
    await this.create();
    this.addClientEvent();
    const uid = await this.join();
    this.log('joind 成功: ', uid);
    this.createStream(uid);
  }

  create() {
    return new Promise((resolve, rejects) => {
      this.client = AgoraRTC.createClient({ mode: 'live', codec: 'h264' });
      this.client.init(appId, resolve, rejects);
    });
  }

  async join() {
    const channel = this.channel;
    const uid = 0;

    const { bean: channel_key } = await getVideoToken({ channel, uid });

    return new Promise((resolve, rejects) => {
      this.client.join(channel_key, channel, uid, resolve, rejects);
    });
  }

  createStream(uid) {
    const localStream = AgoraRTC.createStream({
      streamID: uid,
      audio: true,
      video: true,
      screen: false
    });
    this.localStream = localStream;
    localStream.setVideoProfile('240p_3');

    localStream.on('accessAllowed', () => {
      this.log('访问麦克风和摄像头成功');
    });

    localStream.on('accessDenied', () => {
      this.log('访问麦克风和摄像头失败');
    });

    localStream.init(() => {
      this.log('获取媒体成功');
      localStream.play(customerServiceId || 'customer-service');

      this.client.publish(localStream, (err) => {
        this.log(`发布本地视频错误: ${err}`);
      });

      this.client.on('stream-published', () => {
        this.log('发布本地视频成功');
      });
    });
  }

  addClientEvent() {
    const channelKey = '';
    const client = this.client;

    client.on('error', (err) => {
      this.log('Got error msg:', err.reason);
      if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
        this.client.renewChannelKey(channelKey, () => {
          this.log('Renew channel key successfully');
        }, (error) => {
          this.log('Renew channel key failed: ', error);
        });
      }
    });

    client.on('stream-added', ({ stream }) => {
      this.log(`New stream added: ${stream.getId()}`);
      this.log('Subscribe ', stream);
      client.subscribe(stream, (err) => {
        this.log('Subscribe stream failed', err);
      });
    });

    client.on('stream-subscribed', ({ stream }) => {
      this.log(`Subscribe remote stream successfully: ${stream.getId()}`);
      stream.play(clientId || 'client');
      this.streamSubscribedHandler(stream);
    });

    client.on('stream-removed', ({ stream }) => {
      stream.stop();
      errorMessage('客户已离线');
      this.log(`Remote stream is removed ${stream.getId()}`);
    });

    client.on('peer-leave', ({ stream, uid }) => {
      if (stream) {
        stream.stop();
        errorMessage('客户已离线');
        this.log(`${uid} leaved from this channel`);
      }
    });
  }

  async close() {
    await this.initRTCPromise;
    this.localStream.close();
    this.client.leave(() => {
      this.log('Leavel channel successfully');
    }, (err) => {
      this.log('Leave channel failed: ', err);
    });
    this.client.unpublish(this.localStream, (err) => {
      this.log(`Unpublish local stream failed ${err}`);
    });
  }

  log(...msgs) {
    this.logger(...msgs);
  }
}
