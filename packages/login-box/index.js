import LoginBox from './src/login-box.vue';

/* istanbul ignore next */
LoginBox.install = function(Vue) {
  Vue.component(LoginBox.name, LoginBox);
};

export default LoginBox;
