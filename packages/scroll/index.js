import TtdSearch from './src/search.vue';

/* istanbul ignore next */
TtdSearch.install = function(Vue) {
  Vue.component(TtdSearch.name, TtdSearch);
};

export default TtdSearch;
