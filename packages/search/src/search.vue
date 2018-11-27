<template>
    <el-form v-bind="$attrs" inline class="el-search" size="small">
        <slot></slot>
    </el-form>
</template>

<script>

export default {
  name: 'TtdSearch'
};
</script>