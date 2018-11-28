<style>
.scroll-demo {
  width: 200px;
  height: 300px;
  background: #f0f0f0;
}
.content-demo {
  height: 1000px;
}
</style>

## Scroll 滚动条盒子

美化滚动条

### css 实现

:::demo
```html
<template>
  <ttd-scroll class="scroll-demo">
    <div class="content-demo"></div>
  </ttd-scroll>
</template>

<style>
.scroll-demo {
  width: 200px;
  height: 300px;
  background: #62bf62;
}
.content-demo {
  height: 1000px;
}
</style>
```
:::

### js 实现

:::demo
```html
  <el-scrollbar class="scroll-demo">
    <div class="content-demo"></div>
  </el-scrollbar>

<style>
.scroll-demo {
  width: 200px;
  height: 300px;
  background: #ddd;
}
.content-demo {
  height: 1000px;
}
</style>
```