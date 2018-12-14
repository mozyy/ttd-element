
<script>
export default {
  data() {
    return {
      labels: [{
          labelNo: 132456, // 标签编码
          pageIndex: 1, // 标记页码
          xAxis: 454, // X轴坐标
          yAxis: 199, // Y轴坐标，相对于左上角原点。
          labelWidth: 100, // 标记域宽度
          labelHigh: 50, // 标记域高度
        },
        {
          labelNo: 1324562, // 标签编码
          pageIndex: 1, // 标记页码
          xAxis: 154, // X轴坐标
          yAxis: 599, // Y轴坐标，相对于左上角原点。
          labelWidth: 100, // 标记域宽度
          labelHigh: 50, // 标记域高度
        }],
      newLabel: null,
      label: {
        labelName: "用户名称",// 标签名称
        labelNo: "523079801126559744",// 标签编号
      }
    }
  },
  mounted() {
    this.getPdfCanvasStyle()
  },

  beforeDestroy() {
    document.removeEventListener('mousemove', this.mousemoveHanler);
    document.removeEventListener('contextmenu', this.contextmenuHanler);
    document.removeEventListener('mousedown', this.mousedownHanler);
  },
  methods: {
    getPdfCanvasStyle() {
      window.vm = this;
      const pdfLabel = this.$refs.pdfLabel.$el;
      const canvas = this.$refs.pdfLabel.getPdfCanvas();
      const pdfLabelCanvas = pdfLabel.getBoundingClientRect()
      const rectCanvas = canvas.getBoundingClientRect()
      const distance = {
        x: rectCanvas.left + pdfLabelCanvas.left,
        y: rectCanvas.top + pdfLabelCanvas.top,
      }
      this.distance = distance;
    },
    getAxis(event) {
      const rectCanvas = this.$refs.pdfLabel.getPdfCanvas().getBoundingClientRect()
      return {
        xAxis: event.clientX - rectCanvas.left, // X轴坐标
        yAxis: event.clientY - rectCanvas.top, // Y轴坐标，相对于左上角原点。
      }
    },
    getCursorLabel(label, event) {
      document.addEventListener('mousemove', this.mousemoveHanler);
      document.addEventListener('contextmenu', this.contextmenuHanler);
      document.addEventListener('mousedown', this.mousedownHanler);
      const data = {
        // __CURRENT_LABEL_FLAG: true,
        labelNo: label.labelNo, // 标签编码
        pageIndex: this.$refs.pdfLabel.page, // 标记页码
        labelWidth: 100, // 标记域宽度
        labelHigh: 50, // 标记域高度
        ...this.getAxis(event)
      };
      this.newLabel = data;
    },
    mousemoveHanler(event) {
      Object.assign(this.newLabel, this.getAxis(event));
    },
    mousedownHanler(event) {
      if (event.button === 0) {
        this.labels.push({...this.newLabel})
      }
    },
    contextmenuHanler(event) {
      if(event.button===2) {
        event.preventDefault();
        this.newLabel = null;
        document.removeEventListener('mousemove', this.mousemoveHanler);
        document.removeEventListener('contextmenu', this.contextmenuHanler);
        document.removeEventListener('mousedown', this.mousedownHanler);
      }
    }
  }
}
</script>

## PdfLabel pdf 标签

:::demo
```html
<el-button @click="getCursorLabel(label,$event)">新增标签</el-button>
<ttd-pdf-label src="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf" 
  :labels="labels" :new-label="newLabel" ref="pdfLabel"/>

<script>
export default {
  data() {
    return {
      labels: [{
          labelNo: 132456, // 标签编码
          pageIndex: 1, // 标记页码
          xAxis: 454, // X轴坐标
          yAxis: 199, // Y轴坐标，相对于左上角原点。
          labelWidth: 100, // 标记域宽度
          labelHigh: 50, // 标记域高度
        },
        {
          labelNo: 1324562, // 标签编码
          pageIndex: 1, // 标记页码
          xAxis: 154, // X轴坐标
          yAxis: 599, // Y轴坐标，相对于左上角原点。
          labelWidth: 100, // 标记域宽度
          labelHigh: 50, // 标记域高度
        }],
      newLabel: null,
      label: {
        labelName: "用户名称",// 标签名称
        labelNo: "523079801126559744",// 标签编号
      }
    }
  },
  mounted() {
    this.getPdfCanvasStyle()
  },

  beforeDestroy() {
    document.removeEventListener('mousemove', this.mousemoveHanler);
    document.removeEventListener('contextmenu', this.contextmenuHanler);
    document.removeEventListener('mousedown', this.mousedownHanler);
  },
  methods: {
    getPdfCanvasStyle() {
      window.vm = this;
      const pdfLabel = this.$refs.pdfLabel.$el;
      const canvas = this.$refs.pdfLabel.getPdfCanvas();
      const pdfLabelCanvas = pdfLabel.getBoundingClientRect()
      const rectCanvas = canvas.getBoundingClientRect()
      const distance = {
        x: rectCanvas.left + pdfLabelCanvas.left,
        y: rectCanvas.top + pdfLabelCanvas.top,
      }
      this.distance = distance;
    },
    getAxis(event) {
      const rectCanvas = this.$refs.pdfLabel.getPdfCanvas().getBoundingClientRect()
      return {
        xAxis: event.clientX - rectCanvas.left, // X轴坐标
        yAxis: event.clientY - rectCanvas.top, // Y轴坐标，相对于左上角原点。
      }
    },
    getCursorLabel(label, event) {
      document.addEventListener('mousemove', this.mousemoveHanler);
      document.addEventListener('contextmenu', this.contextmenuHanler);
      document.addEventListener('mousedown', this.mousedownHanler);
      const data = {
        // __CURRENT_LABEL_FLAG: true,
        labelNo: label.labelNo, // 标签编码
        pageIndex: this.$refs.pdfLabel.page, // 标记页码
        labelWidth: 100, // 标记域宽度
        labelHigh: 50, // 标记域高度
        ...this.getAxis(event)
      };
      this.newLabel = data;
    },
    mousemoveHanler(event) {
      Object.assign(this.newLabel, this.getAxis(event));
    },
    mousedownHanler(event) {
      if (event.button === 0) {
        this.labels.push({...this.newLabel})
      }
    },
    contextmenuHanler(event) {
      if(event.button===2) {
        event.preventDefault();
        this.newLabel = null;
        document.removeEventListener('mousemove', this.mousemoveHanler);
        document.removeEventListener('contextmenu', this.contextmenuHanler);
        document.removeEventListener('mousedown', this.mousedownHanler);
      }
    }
  }
}
</script>
```
:::