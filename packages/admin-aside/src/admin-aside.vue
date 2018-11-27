<template>
  <div class="el-admin-aside">
    <el-menu
      :default-active="defaultActive"
      class="el-admin-aside__menu"
      text-color="#999"
    >
      <el-menu-item 
        v-for="item in menu" 
        class="el-admin-aside--item"
        :index="item.index" 
        :key="item.index">
        <icon class="el-admin-aside--icon" :name="item.icon"></icon>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'TtdAdminAside',

  props: {
    menu: {
      type: Array,
      required: true
    },
    defaultActive: String
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