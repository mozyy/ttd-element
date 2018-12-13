<style>

</style>

<script>
import { Random } from 'mockjs';


export default {
    data() {
        return {
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
            defaultActive: 20181129004,
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
        changeHandler(navigate) {
            this.$log(navigate)
        }
    }
}
</script>

## AdminHeader 后台头部

:::demo info是登录角色的信息
```html
<template>
    <div>
        <ttd-admin-header :navigate="navigate" :default-active="defaultActive" :change-handler="changeHandler">
            <ttd-admin-header-left :info="userInfo"/>
        </ttd-admin-header>
    </div>
</template>

<script>
import { Random } from 'mockjs';


export default {
    data() {
        return {
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
            defaultActive: 20181129004,
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
        changeHandler(navigate) {
            this.$log(navigate)
        }
    }
}
</script>
```