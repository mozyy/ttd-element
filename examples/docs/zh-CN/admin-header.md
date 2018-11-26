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
                    name: '首页',
                },
                {
                    icon: 'template',
                    name: '模板管理',
                },
                {
                    icon: 'evidence',
                    name: '存证数据',
                },
                {
                    icon: 'apply',
                    name: '取证申请',
                },
                {
                    icon: 'statistics',
                    name: '数据统计',
                },
                {
                    icon: 'manage',
                    name: '系统管理',
                },
            ], 
            defaultActive: '首页',
            userInfo: {
                name: Random.cname(),
                tel: Random.integer(18381335182, 18381355183),
                avatar: Random.dataImage('34x34', '头像')
            }
        }
    }
}
</script>

## AdminHeader 后台头部

:::demo info是登录角色的信息
```html
<template>
    <div>
        <el-admin-header :navigate="navigate" :default-active="defaultActive">
            <el-admin-header-left :info="userInfo"></el-admin-header-left>
        </el-admin-header>
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
                    name: '首页',
                },
                {
                    icon: 'template',
                    name: '模板管理',
                },
                {
                    icon: 'evidence',
                    name: '存证数据',
                },
                {
                    icon: 'apply',
                    name: '取证申请',
                },
                {
                    icon: 'statistics',
                    name: '数据统计',
                },
                {
                    icon: 'manage',
                    name: '系统管理',
                },
            ], 
            defaultActive: '首页',
            userInfo: {
                name: Random.cname(),
                tel: Random.integer(18381335182, 18381355183),
                avatar: Random.dataImage('34x34', '头像')
            }
        }
    }
}
</script>
```