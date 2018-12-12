<template>
  <el-dialog 
    class="el-ttd-dialog" 
    width="width"
    v-bind="$attrs" 
    @update:visible="$emit('update:visible', $event)"
    :show-close="false" 
    >
    <el-scrollbar class="el-scrollbar-box">
      <slot></slot>
    </el-scrollbar>
    <template slot="footer">
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'TtdDialog',

  props: {
    width: {
      type: String,
      default: '400px'
    }
  }
};

</script>