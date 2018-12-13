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
            defaultMenu: 20181128002,
            navigate: [
                {
                    icon: 'home',
                    sourcrsNo: 20181129001,
                    sourcesName: '首页',
                },
                {
                    icon: 'template',
                    sourcrsNo: 20181129002,
                    sourcesName: '模板管理',
                },
                {
                    icon: 'evidence',
                    sourcrsNo: 20181129003,
                    sourcesName: '存证数据',
                },
                {
                    icon: 'apply',
                    sourcrsNo: 20181129004,
                    sourcesName: '取证申请',
                },
                {
                    icon: 'statistics',
                    sourcrsNo: 20181129005,
                    sourcesName: '数据统计',
                },
                {
                    icon: 'manage',
                    sourcrsNo: 20181129006,
                    sourcesName: '系统管理',
                },
            ], 
            defaultNavigate: 20181129003,
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
    methods: {
        navigateChangeHandler(navigate) {
            this.$log('导航',navigate)
        },
        menuChangeHandler(menu) {
            this.$log('菜单',menu)            
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
            :menu="menu" :default-menu="defaultMenu"
            :navigate="navigate" :default-navigate="defaultNavigate"
            :user-info="userInfo"
            :navigate-change-handler="navigateChangeHandler"
            :menu-change-handler="menuChangeHandler"
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
            defaultMenu: 20181128002,
            navigate: [
                {
                    icon: 'home',
                    sourcrsNo: 20181129001,
                    sourcesName: '首页',
                },
                {
                    icon: 'template',
                    sourcrsNo: 20181129002,
                    sourcesName: '模板管理',
                },
                {
                    icon: 'evidence',
                    sourcrsNo: 20181129003,
                    sourcesName: '存证数据',
                },
                {
                    icon: 'apply',
                    sourcrsNo: 20181129004,
                    sourcesName: '取证申请',
                },
                {
                    icon: 'statistics',
                    sourcrsNo: 20181129005,
                    sourcesName: '数据统计',
                },
                {
                    icon: 'manage',
                    sourcrsNo: 20181129006,
                    sourcesName: '系统管理',
                },
            ], 
            defaultNavigate: 20181129003,
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
    methods: {
        navigateChangeHandler(navigate) {
            this.$log('导航',navigate)
        },
        menuChangeHandler(menu) {
            this.$log('菜单',menu)            
        }
    }
}
</script>
```
:::