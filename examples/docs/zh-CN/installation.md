## 安装

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

在package.json的dependencies字段里里手动加上`"ttd-element": "mozyy/ttd-element",`

```json
"dependencies": {
    "axios": "^0.18.0",
    "qs": "^6.5.2",
    "ttd-element": "mozyy/ttd-element",
    "vue": "^2.5.17",
    "vue-router": "^3.0.1",
    "vuex": "^3.0.1"
  },
```

**正常使用，还需在vue.config.js中加个alias:`'element-ui': 'ttd-element'`**
```javascript
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'element-ui': 'ttd-element',
      },
    },
  },
};
```

### CDN

目前可以通过 [ele.moz0.com/](https://ele.moz0.com/) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://ele.moz0.com/index.css">
<!-- 引入组件库 -->
<script src="https://ele.moz0.com/index.js"></script>
```

:::tip
我们建议使用 CDN 引入 Element 的用户在链接地址上锁定版本，以免将来 Element 升级时受到非兼容性更新的影响。锁定版本的方法请查看 [unpkg.com](https://unpkg.com)。
:::

### Hello world

通过 CDN 的方式我们可以很容易地使用 Element 写出一个 Hello world 页面。[在线演示](https://jsfiddle.net/hzfpyvg6/14/)

<iframe width="100%" height="600" src="//jsfiddle.net/hzfpyvg6/1213/embedded/html,result/" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0"></iframe>

如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：[快速上手](/#/zh-CN/component/quickstart)。
