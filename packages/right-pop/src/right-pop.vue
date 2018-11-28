<template>
  <el-dialog 
    class="el-right-pop" 
    v-bind="$attrs" 
    @update:visible="$emit('update:visible', $event)" 
    :close-on-press-escape="false"
    :show-close="false" 
    width="30%" 
    top="0">
    <ttd-title :title="$attrs.title || '提示'" slot="title">
      <div class="title-right" slot="right">
          <i class="el-icon-close" @click="$emit('update:visible', false)"></i>
      </div>
    </ttd-title>
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
  name: 'TtdRightPop'
};

</script>