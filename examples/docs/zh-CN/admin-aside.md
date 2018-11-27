<style>
.admin-aside-demo {
    width: 200px;
}
</style>

<script>
export default {
    data() {
        return {
            menu: [
                {
                    icon: 'home',
                    index: '123',
                    name: '首页'
                }
            ]
        }
    }
}
</script>

## AdminAside 后台侧边菜单

:::demo

```html
<template>
    <div class="admin-aside-demo">
        <ttd-admin-aside :menu="menu"/>
    <div>
</template>
```
:::