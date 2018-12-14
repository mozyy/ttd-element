<template>
  <div class="el-pdf-label">
    <i class="el-pdf-label__turn el-icon-arrow-left" 
      :class="{'is-disable':leftDisable}" @click="turnLeft"></i>
    <ttd-pdf class="el-pdf-label__pdf" :src="src" 
      :page-number="page" :page-total="pageTotal" :page-change="pageChange">
      <ttd-pdf-label-item 
        v-for="label in currentLabels" 
        :label="label" 
        :key="label.labelNo" 
        :active="active===label.labelNo" 
        @click.native="active = label.labelNo"/>
    </ttd-pdf>
    <i class="el-pdf-label__turn el-icon-arrow-right" 
      :class="{'is-disable':rightDisable}" @click="turnRight"></i>
  </div>
</template>

<script>

export default {
  name: 'TtdPdfLabel',

  props: {
    src: {
      type: String,
      required: true
    },
    labels: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      page: 1,
      total: 2,
      active: 0
    };
  },

  computed: {
    leftDisable() {
      return this.page <= 1;
    },
    rightDisable() {
      return this.page >= this.total;
    },
    currentLabels() {
      return this.labels.filter(label=> label.pageIndex === this.page);
    }
  },

  methods: {
    backHandler() {
      this.$router.back();
    },
    pageChange(page) {
      this.page = page;
    },
    pageTotal(total) {
      this.total = total;
    },
    turnLeft() {
      if (!this.leftDisable) {
        this.page -= 1;
      }
    },
    turnRight() {
      if (!this.rightDisable) {
        this.page += 1;
      }
    }
  }
};

</script>