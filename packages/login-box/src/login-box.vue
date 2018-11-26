<template>
    <div class="el-login-box">
        <h4 class="el-login-box__title">
            {{ title }}
        </h4>
        <slot class="el-login-box__content"></slot>
    </div>
</template>

<script>
export default {
  name: 'ElLoginBox',

  props: {
    title: String
  }
};
</script>