import TtdTable from './src/table.vue';

/* istanbul ignore next */
TtdTable.install = function(Vue) {
  Vue.component(TtdTable.name, TtdTable);
};

export default TtdTable;
