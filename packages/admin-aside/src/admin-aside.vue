<template>
  <div class="el-admin-aside">
    <el-menu
      :default-active="defaultActive"
      class="el-admin-aside__menu"
      text-color="#999"
      @select="changeHandler"
    >
      <el-menu-item 
        v-for="item in menu" 
        class="el-admin-aside--item"
        :index="item.sourcrsNo" 
        :key="item.sourcrsNo">
        <icon class="el-admin-aside--icon" :name="item.icon || 'home'"></icon>
        <span slot="title">{{ item.sourcesName }}</span>
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
    defaultActive: Number,
    changeHandler: {
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