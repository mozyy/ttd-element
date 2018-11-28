import TtdDialog from './src/ttd-dialog.vue';

/* istanbul ignore next */
TtdDialog.install = function(Vue) {
  Vue.component(TtdDialog.name, TtdDialog);
};

export default TtdDialog;
