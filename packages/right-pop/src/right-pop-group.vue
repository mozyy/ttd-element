<template>
  <div class="el-right-pop-group">
    <h6 class="el-right-pop-group__title">{{title}}</h6>
  </div>
</template>

<script>
export default {
  name: 'TtdRightPopGroup',

  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
