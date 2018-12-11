<template>
  <el-pagination
    v-bind="$attrs"
    class="el-ttd-pagination"
    :page-size.sync="pageSize"
    :current-page.sync="pageNum"
    :page-sizes="[5,10,15]"
    layout="slot, sizes, -> , prev, pager, next, total"
    @size-change="emitChange"
    @current-change="emitChange"
    >
  </el-pagination>
</template>

<script>
  export default {
    name: 'TtdPagination',

    data() {
      return {
        pageNum: 1,
        pageSize: 10
      };
    },
  
    methods: {
      emitChange() {
        this.$nextTick(()=> {
          const page = this.getPage();
          this.$emit('change', page);
        });
      },
      getPage() {
        const page = {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        };
        return page;
      },
      reset() {
        this.pageNum = 1;
        this.pageSize = 10;
      }
    }
  };
</script>
