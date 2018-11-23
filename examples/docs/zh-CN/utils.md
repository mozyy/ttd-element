## Utils 常用utils

使用 `import util from 'ttd-element/utils/util'` 引入

### date 日期格式化
```javascript
import { format } from 'ttd-element/utils/data';
/***
 * Format a date
 * @method format
 * @param {Date|number} dateObj
 * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
 */
format(dateObj:number|Date, mask?:'yyyy-MM-dd hh:mm:ss', i18nSettings?): string;
```


### AgoraRTC 双录视频
`import AgoraRTC from 'ttd-element/utils/AgoraRTC'`
1. 前置条件
``` javascript
import { 
    appId:string/*声网appId*/,
    customerServiceId?='customer-service'/*客服视频div的Id*/, 
    clientId?='client'/*客户视频div的Id*/, 
} from '@/config/agora';
import { getVideoToken:(promise:{ bean:token/*声网token*/}) } from '@/api';
```
2. 使用方法
```javascript
// 开始
const rtc = new AgoraRTC(channel:string/*视频频道*/, streamSubscribedHandler/*获取到客户视频流回调(stream)*/);
// 结束
rtc.close();
```

### AgoraSignal 信令
`import AgoraSignal from 'ttd-element/utils/AgoraSignal'`
1. 前置条件
```javascript
import { 
    appId:string/*声网appId*/,
    signalInterval?=5000/*信令掉线心跳：毫秒*/, 
} from '@/config/agora';
import { getSignalToken:(promise:{ bean:token/*声网信令token*/})  } from '@/api';
```
2. 使用方法
```javascript
// 开始
const signal = new AgoraSignal(account:string/*频道*/, onReceiveMessageFn/*接收消息回调*/, onSignalOut/*信令掉线回调*/);
// 获取信令在线状态
signal.getStatus();//0: 未登录, 1: 连接中, 2: 已登录
```

### Logger 
```javascript
import Logger,{ logger } from 'ttd-element/utils/Logger'
const logger = new Logger(type = 'log', color = 'red', visible = true);
logger('console log'); // console log
```

### Notice 通知
```javascript
import Notice from 'ttd-element/utils/Notice';
new Notice({ title = '新邀请提示', body = '您有新的邀请, 点击查看!', ...args } = {});
```
