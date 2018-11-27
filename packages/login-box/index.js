import TtdLoginBox from './src/login-box.vue';

/* istanbul ignore next */
TtdLoginBox.install = function(Vue) {
  Vue.component(TtdLoginBox.name, TtdLoginBox);
};

export default TtdLoginBox;
