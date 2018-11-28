import TtdPagination from './src/ttd-pagination.vue';

/* istanbul ignore next */
TtdPagination.install = function(Vue) {
  Vue.component(TtdPagination.name, TtdPagination);
};

export default TtdPagination;
