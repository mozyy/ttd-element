<style>
.mb200 {
  margin-bottom: 200px;
}
</style>


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

  methods: {
    createNewLabel(event) {
      this.$refs.pdfLabel.createNewLabel(this.label,event);
    },
    createLabel(label) {
      console.log(label)
      this.labels.push({...label});
    },
    deleteLabel(index) {
      this.labels.splice(index, 1);
    },
    printLabels() {
      console.log(this.labels);
    }
  }
}
</script>

## PdfLabel pdf 标签

:::demo
```html
<el-button @click="createNewLabel">新增标签</el-button>
<el-button @click="printLabels">打印所有标签</el-button>
<ttd-pdf-label src="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf" 
  :labels="labels" :new-label="newLabel" ref="pdfLabel" @create-label="createLabel" @delete-label="deleteLabel"/>

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

  beforeDestroy() {
    document.removeEventListener('mousemove', this.mousemoveHanler);
    document.removeEventListener('contextmenu', this.contextmenuHanler);
    document.removeEventListener('mousedown', this.mousedownHanler);
  },
  methods: {
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