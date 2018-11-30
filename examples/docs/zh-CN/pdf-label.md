
<script>
export default {
  data() {
    return {
      labels: [{
        id: 1,
        left: 50,
        top: 100,
        width: 300,
        height: 80,
        zIndex: 1,
        page: 10,
        name: '标签一',
        type: 1
      },
      {
        id: 2,
        left: 100,
        top: 80,
        width: 100,
        height: 80,
        zIndex: 1,
        page: 10,
        name: '标签二',
        type: 1
      },
      {
        id: 3,
        left: 200,
        top: 500,
        width: 150,
        height: 80,
        zIndex: 1,
        page: 10,
        name: '标签三',
        type: 1
      }],
    }
  }
}
</script>

## PdfLabel pdf 标签

:::demo
```html
<ttd-pdf-label src="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf" :labels="labels" />

<script>
export default {
  data() {
    return {
      labels: [{
        id: 1,
        left: 50,
        top: 100,
        width: 300,
        height: 80,
        zIndex: 1,
        page: 10,
        name: '标签一',
        type: 1
      },
      {
        id: 2,
        left: 100,
        top: 80,
        width: 100,
        height: 80,
        zIndex: 1,
        page: 10,
        name: '标签二',
        type: 1
      },
      {
        id: 3,
        left: 200,
        top: 500,
        width: 150,
        height: 80,
        zIndex: 1,
        page: 10,
        name: '标签三',
        type: 1
      }],
    }
  }
}
</script>
```
:::