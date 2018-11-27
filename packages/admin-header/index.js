import TtdAdminHeader from './src/admin-header.vue';

/* istanbul ignore next */
TtdAdminHeader.install = function(Vue) {
  Vue.component(TtdAdminHeader.name, TtdAdminHeader);
};

export default TtdAdminHeader;
