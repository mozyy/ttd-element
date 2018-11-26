import ElAdminHeader from './src/admin-header.vue';

/* istanbul ignore next */
ElAdminHeader.install = function(Vue) {
  Vue.component(ElAdminHeader.name, ElAdminHeader);
};

export default ElAdminHeader;
