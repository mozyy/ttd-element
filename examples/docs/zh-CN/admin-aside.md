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
                    sourcrsNo: 20181128001,
                    sourcesName: '模板数据'
                },
                {
                    icon: 'home',
                    sourcrsNo: 20181128002,
                    sourcesName: '标签管理'
                },
                {
                    icon: 'home',
                    sourcrsNo: 20181128003,
                    sourcesName: '存证数据'
                },
            ],
            active: 20181128002,
        }
    },
    watch: {
        active(value) {
            this.$log(value)
        }
    }
}
</script>

## AdminAside 后台侧边菜单

:::demo 

```html
<template>
    <div class="admin-aside-demo">
        <ttd-admin-aside :sources="menu" :active.sync="active"/>
    <div>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                {
                    icon: 'home',
                    sourcrsNo: 20181128001,
                    sourcesName: '模板数据'
                },
                {
                    icon: 'home',
                    sourcrsNo: 20181128002,
                    sourcesName: '标签管理'
                },
                {
                    icon: 'home',
                    sourcrsNo: 20181128003,
                    sourcesName: '存证数据'
                },
            ],
            active: 20181128002,
        }
    },
    watch: {
        active(value) {
            this.$log(value)
        }
    }
}
</script>
```
:::