<template>
  <el-container class="el-backstage">
    <el-header class="el-backstage__header" height="80">
      <ttd-admin-header :sources="navigate" :active="activeNavigate" @update:active="$emit('update:activeNavigate',$event)">
        <ttd-admin-header-left :info="userInfo"/>
      </ttd-admin-header>
    </el-header>
    <el-container class="el-backstage__container">
      <el-aside v-if="menu.length>0" class="el-backstage__aside" width="200px">
        <ttd-admin-aside :sources="menu" :active="activeMenu" @update:active="$emit('update:activeMenu',$event)"/>
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
    activeNavigate: String,
    menu: {
      type: Array,
      default() {
        return [];
      }
    },
    activeMenu: String,
    userInfo: Object
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

