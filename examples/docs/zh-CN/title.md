<style>
.sub-title {
    padding: 0 8px;
    line-height: 34px;
    font-size: 12px;
    background: #FFEBC9;
    border-radius: 16px;
}
.sub-title-content {
    margin: 0 8px;
    color: #222;
}
.sub-title-btn {
    display: inline-block;
    padding: 0 10px;
    color: #fff;
    line-height: 20px;
    border-radius: 10px;
    background: #FFAF2C;
}
.title-right {
    font-size: 30px;
    color: #979797;
    cursor: pointer;
}
</style>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

## Title 后台标题栏

:::demo

```html
<template>
    <div class="title-demo">
        <ttd-title back title="打标签">
            <div class="sub-title" slot="sub">
                <span class="sub-title-content">存单编号：1231234324234CV</span>
                <span class="sub-title-btn"> 未取证</span>
            </div>
            <div class="title-right" slot="right">
                <i class="el-icon-close"></i>
            </div>
        </ttd-title>
    <div>
</template>

<style>
.sub-title {
    padding: 0 8px;
    line-height: 34px;
    font-size: 12px;
    background: #FFEBC9;
    border-radius: 16px;
}
.sub-title-content {
    margin: 0 8px;
    color: #222;
}
.sub-title-btn {
    display: inline-block;
    padding: 0 10px;
    color: #fff;
    line-height: 20px;
    border-radius: 10px;
    background: #FFAF2C;
}
.title-right {
    font-size: 30px;
    color: #979797;
    cursor: pointer;
}
</style>


```
:::