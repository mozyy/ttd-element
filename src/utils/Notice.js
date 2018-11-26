import Vue from 'vue';
import { Notification as ElNotificationComponent } from 'ttd-element';

import icon from '@/assets/img/logo.png';
import noticeWav from '@/assets/media/notice.wav';
import noticeMp3 from '@/assets/media/notice.mp3';

const NoticeAudioComponent = Vue.extend({
  render() {
    return (
      <audio ref="audio">
        <source src={noticeWav} type="audio/wav" />
        <source src={noticeMp3} type="audio/mpeg" />
      </audio>
    );
  }
});

export default class Notice {
  constructor({ title = '新邀请提示', body = '您有新的邀请, 点击查看!', ...args } = {}) {
    Notice.checkPermission().then(Notice.checkWindowFouce).then(() => {
      this.instance = new Notification(title, {
        body,
        icon,
        // image: icon,
        requireInteraction: true,
        ...args
      });
      this.instance.onclick = () => {
        window.focus();
        this.instance.close();
      };
    }, () => {
      ElNotificationComponent.info({
        title,
        message: body,
        duration: 3000
      });
    }).finally(() => {
      Notice.noticeAudio();
    });
  }

  static checkPermission() {
    return new Promise((resolve, rejects) => {
      // 先检查浏览器是否支持
      if (!('Notification' in window)) {
        rejects(Error('This browser does not support desktop notification'));
      } else if (Notification.permission === 'granted') {
        // 检查用户是否同意接受通知
        resolve();
      } else if (Notification.permission !== 'denied') {
        // 否则我们需要向用户获取权限
        Notification.requestPermission().then((permission) => {
          // 如果用户同意，就可以向他们发送通知
          if (permission === 'granted') {
            resolve();
          } else {
            rejects();
          }
        });
      } else {
        rejects();
      }
    });
  }
  static checkWindowFouce() {
    return new Promise((resolve, rejects) => {
      // 页面不可见 或 页面没有焦点
      if (document.visibilityState !== 'visible' || !document.hasFocus()) {
        resolve();
      } else {
        rejects();
      }
    });
  }
  static noticeAudio() {
    if (!Notice.audioInstance) {
      Notice.audioInstance = new NoticeAudioComponent({
        el: document.createElement('div')
      });
      document.body.appendChild(Notice.audioInstance.$el);
    }
    Vue.nextTick(() => {
      Notice.audioInstance.$refs.audio.currentTime = 0;
      Notice.audioInstance.$refs.audio.play();
    });
  }
}
