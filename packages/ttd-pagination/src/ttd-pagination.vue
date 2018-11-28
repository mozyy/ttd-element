<template>
  <el-pagination
    v-bind="$attrs"
    class="el-ttd-pagination"
    :page-sizes="[5,10,15]"
    layout="slot, sizes, -> , prev, pager, next, total"
    >
  </el-pagination>
</template>

<script>
  export default {
    name: 'TtdPagination'
  };
</script>
