<template>
  <div class="el-admin-aside">
    <el-menu
      :default-active="String(active)"
      class="el-admin-aside__menu"
      text-color="#999"
      @select="$emit('update:active', Number($event))"
    >
      <el-menu-item 
        v-for="item in sources" 
        class="el-admin-aside--item"
        :index="String(item.sourcrsNo)" 
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
    sources: {
      type: Array,
      required: true
    },
    active: Number
  }
};

</script>