<style>
.login-demo {
    margin: 0 auto;
    width: 400px;
}
</style>

<script>
export default {
    data() {
        return {
            form: {}
        }
    },
    methods: {
        onSubmit() {
            console.log('登录')
        }
    },
}
</script>

## LoginBox 登录框

登录, 注册, 找回密码 的盒子

:::demo 使用`<p solt="title">登录</p><div></div>`插槽
```html
<template>
    <div class="login-demo">
        <ttd-login-box title="欢迎登录妥妥递存证保全系统">
            <el-form ref="form" :model="form" label-width="0">
                <el-form-item label="后台账号">
                    <el-input v-model="form.name" placeholder="请输入后台账号"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item label="手机验证码">
                    <el-input v-model="form.code" placeholder="请输入验证码">
                        <el-button slot="append">获取验证码</el-button>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" round style="width:100%">登录</el-button>
                    <span>忘记密码</span>
                </el-form-item>
                </el-form>
        </ttd-login-box>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {}
        }
    },
    methods: {
        onSubmit() {
            console.log('登录')
        }
    },
}
</script>
```
:::
