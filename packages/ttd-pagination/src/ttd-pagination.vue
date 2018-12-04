<template>
  <el-pagination
    v-bind="$attrs"
    class="el-ttd-pagination"
    :page-sizes="[5,10,15]"
    layout="slot, sizes, -> , prev, pager, next, total"
    @size-change="emitChange"
    @current-change="emitChange"
    ref="pagination"
    >
  </el-pagination>
</template>

<script>
  export default {
    name: 'TtdPagination',

    methods: {
      emitChange() {
        this.$nextTick(()=> {
          this.getParams();
        });
  
      },
      getParams() {
        const {internalCurrentPage, internalPageSize} = this.$refs.pagination;
        const params = {
          page: internalCurrentPage,
          size: internalPageSize
        };
        this.$emit('change', params);
      }
    }
  };
</script>
