<template>
  <div class="el-admin-aside">
    <el-menu
      :default-active="active"
      class="el-admin-aside__menu"
      text-color="#999"
      @select="$emit('update:active', $event)"
    >
      <el-menu-item 
        v-for="item in sources" 
        class="el-admin-aside--item"
        :index="item.sourcesCode" 
        :key="item.sourcesCode">
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
    sources: {
      type: Array,
      required: true
    },
    active: String
  }
};

</script>