
<script>
export default {
  data() {
    return {
      labels: [{
          labelNo: 132456, // 标签编码
          labelName: "标签一",// 标签名称
          pageIndex: 1, // 标记页码
          xAxis: 454, // X轴坐标
          yAxis: 199, // Y轴坐标，相对于左上角原点。
          labelWidth: 100, // 标记域宽度
          labelHigh: 50, // 标记域高度
        },
        {
          labelNo: 1324562, // 标签编码
          labelName: "标签二",// 标签名称
          pageIndex: 1, // 标记页码
          xAxis: 154, // X轴坐标
          yAxis: 599, // Y轴坐标，相对于左上角原点。
          labelWidth: 100, // 标记域宽度
          labelHigh: 50, // 标记域高度
        }],
      newLabel: null,
      label: {
        labelName: "新标签",// 标签名称
        labelNo: "523079801126559744",// 标签编号
      }
    }
  },

  methods: {
    createNewLabel(event) {
      this.$refs.pdfLabel.createNewLabel(this.label,event);
    },
    createLabel(label) {
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
          labelName: "标签一",// 标签名称
          pageIndex: 1, // 标记页码
          xAxis: 454, // X轴坐标
          yAxis: 199, // Y轴坐标，相对于左上角原点。
          labelWidth: 100, // 标记域宽度
          labelHigh: 50, // 标记域高度
        },
        {
          labelNo: 1324562, // 标签编码
          labelName: "标签二",// 标签名称
          pageIndex: 1, // 标记页码
          xAxis: 154, // X轴坐标
          yAxis: 599, // Y轴坐标，相对于左上角原点。
          labelWidth: 100, // 标记域宽度
          labelHigh: 50, // 标记域高度
        }],
      newLabel: null,
      label: {
        labelName: "新标签",// 标签名称
        labelNo: "523079801126559744",// 标签编号
      }
    }
  },

  methods: {
    createNewLabel(event) {
      this.$refs.pdfLabel.createNewLabel(this.label,event);
    },
    createLabel(label) {
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

```
:::