<template>
    <div class="el-login-box-field">
        <p class="el-login-box-field__title">
            {{title}}
        </p>
        <p class="el-login-box-field__input">
            <slot></slot>
        </p>
    </div>
</template>

<script>
export default {
  name: 'ElLoginBoxField',

  props: {
    title: String
  }
};
</script>