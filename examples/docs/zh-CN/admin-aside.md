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
                    sourcesCode: "TEMPLATE_MANAGER",
                    sourcesName: '模板数据'
                },
                {
                    icon: 'home',
                    sourcesCode: "TEMPLATE_MANAGER1",
                    sourcesName: '标签管理'
                },
                {
                    icon: 'home',
                    sourcesCode: "TEMPLATE_MANAGER2",
                    sourcesName: '存证数据'
                },
            ],
            active: "TEMPLATE_MANAGER1",
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
                    sourcesCode: "TEMPLATE_MANAGER",
                    sourcesName: '模板数据'
                },
                {
                    icon: 'home',
                    sourcesCode: "TEMPLATE_MANAGER1",
                    sourcesName: '标签管理'
                },
                {
                    icon: 'home',
                    sourcesCode: "TEMPLATE_MANAGER2",
                    sourcesName: '存证数据'
                },
            ],
            active: "TEMPLATE_MANAGER1",
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