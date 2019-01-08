<template>
  <div class="el-pdf-header">
    <h6 class="el-pdf-header__title">{{title}}</h6>
    <span class="el-pdf-header__page">
      {{`${pageNumber}/${pageTotal}`}}
      第 <el-input type="number" class="el-pdf-header--input" :value="pageNumber" @change="changePage"></el-input> 页
    </span>
  </div>
</template>

<script>

export default {
  name: 'TtdPdfHeader',

  props: {
    title: {
      type: String,
      default: 'pdf'
    },
    pageNumber: {
      type: Number,
      required: true
    },
    pageTotal: {
      type: Number,
      default: 1
    },
    pageChange: {
      type: Function,
      required: true
    }
  },

  data() {
    return {

    };
  },

  methods: {
    changePage(value) {
      const page = Number(value);
      this.pageChange(page);

    }
  }
};
</script>
