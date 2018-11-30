import TtdPdfLabel from './src/pdf-label.vue';

/* istanbul ignore next */
TtdPdfLabel.install = function(Vue) {
  Vue.component(TtdPdfLabel.name, TtdPdfLabel);
};

export default TtdPdfLabel;
