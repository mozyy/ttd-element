<template>
  <div class="el-pdf-label">
    <i class="el-pdf-label__turn el-icon-arrow-left" 
      :class="{'is-disable':leftDisable}" @click="turnLeft"></i>
    <ttd-pdf class="el-pdf-label__pdf" :src="src" 
      :page-number="page" :page-total="pageTotal" :page-change="pageChange">
      <ttd-pdf-label-item v-for="(label,index) in labels" :label="label" :key="label.id" :active="active===index" @click.native="active = index"/>
    </ttd-pdf>
    <i class="el-pdf-label__turn el-icon-arrow-right" 
      :class="{'is-disable':rightDisable}" @click="turnRight"></i>
  </div>
</template>

<script>
import TtdPdfLabelItem from './components/pdf-label-item.vue';

export default {
  name: 'TtdPdfLabel',

  components: {
    TtdPdfLabelItem
  },

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