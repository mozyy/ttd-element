<template>
    <el-table v-bind="$attrs" :on="_events" class="el-ttd-table">
        <slot></slot>
    </el-table>
</template>

<script>

export default {
  name: 'TtdTable'
};
</script>