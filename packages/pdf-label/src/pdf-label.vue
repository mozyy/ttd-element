<template>
  <div class="el-pdf-label">
    <i class="el-pdf-label__turn el-icon-arrow-left" 
      :class="{'is-disable':leftDisable}" @click="turnLeft"></i>
    <ttd-pdf class="el-pdf-label__pdf" :src="src" 
      :page-number="page" :page-total="pageTotal" :page-change="pageChange" ref="pdf">
      <ttd-pdf-label-item 
        v-for="(label,index) in currentLabels" 
        :label="label" 
        :key="index" 
        :active="active===index" 
        @click.native="active = index"/>
        <ttd-pdf-label-item
          v-if="newLabel"
          :label="newLabel"
          pure
        />
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
    },
    newLabel: {
      type: Object
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
    },
    getPdfCanvas() {
      return this.$refs.pdf.$refs.pdfCanvas;
    }
  }
};

</script>