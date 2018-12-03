<template>
  <el-container class="el-backstage">
    <el-header class="el-backstage__header" height="80">
      <ttd-admin-header :navigate="navigate" :default-active="defaultNavigate" :change-handler="navigateChangeHandler">
        <ttd-admin-header-left :info="userInfo"/>
      </ttd-admin-header>
    </el-header>
    <el-container class="el-backstage__container">
      <el-aside v-if="menu.length>0" class="el-backstage__aside" width="200px">
        <ttd-admin-aside :menu="menu" :default-active="defaultMenu" :change-handler="menuChangeHandler"/>
      </el-aside>
      <el-main class="el-backstage__main">
        <slot>main</slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: 'TtdBackstage',

  props: {
    navigate: {
      type: Array,
      required: true
    },
    defaultNavigate: String,
    menu: {
      type: Array,
      default() {
        return [];
      }
    },
    defaultMenu: String,
    userInfo: Object,
    navigateChangeHandler: {
      type: Function,
      required: true
    },
    menuChangeHandler: {
      type: Function,
      required: true
    }
  },

  data() {
    return {
    };
  },

  watch: {
  },

  created() {
  },

  methods: {
  }
};

</script>

