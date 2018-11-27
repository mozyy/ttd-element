<template>
    <el-table v-bind="$attrs" class="el-ttd-table">
        <slot></slot>
    </el-table>
</template>

<script>

export default {
  name: 'TtdTable'
};
</script>