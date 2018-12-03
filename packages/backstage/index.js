import TtdBackstage from './src/backstage.vue';

/* istanbul ignore next */
TtdBackstage.install = function(Vue) {
  Vue.component(TtdBackstage.name, TtdBackstage);
};

export default TtdBackstage;
