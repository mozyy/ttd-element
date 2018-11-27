<style>
.admin-aside-demo {
    padding: 10px;
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
                    index: '1',
                    name: '模板数据'
                },
                {
                    icon: 'home',
                    index: '2',
                    name: '标签管理'
                },
                {
                    icon: 'home',
                    index: '3',
                    name: '存证数据'
                },
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