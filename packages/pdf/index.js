import TtdPdf from '../pdf-label/src/pdf.vue';

/* istanbul ignore next */
TtdPdf.install = function(Vue) {
  Vue.component(TtdPdf.name, TtdPdf);
};

export default TtdPdf;
