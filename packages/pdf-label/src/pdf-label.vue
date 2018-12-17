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
        @click.native="active = index"
        @deleteLabel="deleteLabel(index)"/>
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
    }
  },

  data() {
    return {
      page: 1,
      total: 2,
      active: 0,
      newLabel: {}
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

  beforeDestroy() {
    this.$el.removeEventListener('mousemove', this.mousemoveHanler);
    this.$el.removeEventListener('contextmenu', this.contextmenuHanler);
    this.$el.removeEventListener('mousedown', this.mousedownHanler);
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
    },
    deleteLabel(index) {
      this.$emit('delete-label', index);
    },
    getAxis(event) {
      const rectCanvas = this.$refs.pdf.$refs.pdfCanvas.getBoundingClientRect();
      return {
        xAxis: event.clientX - rectCanvas.left, // X轴坐标
        yAxis: event.clientY - rectCanvas.top // Y轴坐标，相对于左上角原点。
      };
    },
    createNewLabel(label, event, labelWidth = 100, labelHigh = 50) {
      this.$el.addEventListener('mousemove', this.mousemoveHanler);
      this.$el.addEventListener('contextmenu', this.contextmenuHanler);
      this.$el.addEventListener('mousedown', this.mousedownHanler);
      const data = {
        // __CURRENT_LABEL_FLAG: true,
        ...label,
        pageIndex: this.page, // 标记页码
        labelWidth, // 标记域宽度
        labelHigh, // 标记域高度
        ...this.getAxis(event)
      };
      this.newLabel = data;
    },
    mousemoveHanler(event) {
      Object.assign(this.newLabel, this.getAxis(event));
    },
    mousedownHanler(event) {
      if (event.button === 0) {
        this.$emit('create-label', this.newLabel);
      }
    },
    contextmenuHanler(event) {
      if (event.button === 2) {
        event.preventDefault();
        this.newLabel = null;
        this.$el.removeEventListener('mousemove', this.mousemoveHanler);
        this.$el.removeEventListener('contextmenu', this.contextmenuHanler);
        this.$el.removeEventListener('mousedown', this.mousedownHanler);
      }
    }
  }
};

</script>