<style>
.backstage-demo {
    height: 600px;
}
</style>

<script>
import { Random } from 'mockjs';

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
            activeMenu: 20181128002,
            navigate: [
                {
                    icon: 'home',
                    sourcesCode: "TEMPLATE_MANAGER3",
                    sourcesName: '首页',
                },
                {
                    icon: 'template',
                    sourcesCode: "TEMPLATE_MANAGER4",
                    sourcesName: '模板管理',
                },
                {
                    icon: 'evidence',
                    sourcesCode: "TEMPLATE_MANAGER5",
                    sourcesName: '存证数据',
                },
                {
                    icon: 'apply',
                    sourcesCode: "TEMPLATE_MANAGER6",
                    sourcesName: '取证申请',
                },
                {
                    icon: 'statistics',
                    sourcesCode: "TEMPLATE_MANAGER7",
                    sourcesName: '数据统计',
                },
                {
                    icon: 'manage',
                    sourcesCode: "TEMPLATE_MANAGER8",
                    sourcesName: '系统管理',
                },
            ], 
            activeNavigate: 20181129003,
            userInfo: {
                name: Random.cname(),
                tel: Random.integer(18381335182, 18381355183),
                avatar: Random.dataImage('34x34', '头像'),
                menu: [
                    {
                        icon: 'people',
                        name: '个人中心',
                        handler() {
                            console.log('个人中心')
                        }
                    },
                    {
                        icon: 'back',
                        name: '退出',
                        handler() {
                            console.log('退出')
                        }
                    }
                ]
            }
        }
    },
    watch: {
        activeMenu(value) {
            this.$log('导航',value)
        },
        activeNavigate(value) {
            this.$log('菜单',value)            
        }
    }
}
</script>

## AdminAside 后台侧边菜单

:::demo 

```html
<template>
    <div class="backstage-demo">
        <ttd-backstage 
            :menu="menu" :active-menu.sync="activeMenu"
            :navigate="navigate" :active-navigate.sync="activeNavigate"
            :user-info="userInfo"
        >
        </ttd-backstage>
    <div>
</template>

<script>
import { Random } from 'mockjs';

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
            activeMenu: 20181128002,
            navigate: [
                {
                    icon: 'home',
                    sourcesCode: "TEMPLATE_MANAGER3",
                    sourcesName: '首页',
                },
                {
                    icon: 'template',
                    sourcesCode: "TEMPLATE_MANAGER4",
                    sourcesName: '模板管理',
                },
                {
                    icon: 'evidence',
                    sourcesCode: "TEMPLATE_MANAGER5",
                    sourcesName: '存证数据',
                },
                {
                    icon: 'apply',
                    sourcesCode: "TEMPLATE_MANAGER6",
                    sourcesName: '取证申请',
                },
                {
                    icon: 'statistics',
                    sourcesCode: "TEMPLATE_MANAGER7",
                    sourcesName: '数据统计',
                },
                {
                    icon: 'manage',
                    sourcesCode: "TEMPLATE_MANAGER8",
                    sourcesName: '系统管理',
                },
            ], 
            activeNavigate: 20181129003,
            userInfo: {
                name: Random.cname(),
                tel: Random.integer(18381335182, 18381355183),
                avatar: Random.dataImage('34x34', '头像'),
                menu: [
                    {
                        icon: 'people',
                        name: '个人中心',
                        handler() {
                            console.log('个人中心')
                        }
                    },
                    {
                        icon: 'back',
                        name: '退出',
                        handler() {
                            console.log('退出')
                        }
                    }
                ]
            }
        }
    },
    watch: {
        activeMenu(value) {
            this.$log('导航',value)
        },
        activeNavigate(value) {
            this.$log('菜单',value)            
        }
    }
}
</script>
```
:::