import TtdScroll from './src/scroll.vue';

/* istanbul ignore next */
TtdScroll.install = function(Vue) {
  Vue.component(TtdScroll.name, TtdScroll);
};

export default TtdScroll;
