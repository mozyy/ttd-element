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
            defaultActive: 20181128002,
        }
    },
    methods: {
        changeHandler(menu) {
            this.$log(menu)
        }
    }
}
</script>

## AdminAside 后台侧边菜单

:::demo 

```html
<template>
    <div class="admin-aside-demo">
        <ttd-admin-aside :menu="menu" :default-active="defaultActive" :change-handler="changeHandler"/>
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
            defaultActive: 20181128002,
        }
    },
    methods: {
        changeHandler(menu) {
            this.$log(menu)
        }
    }
}
</script>
```
:::