<template>
  <div class="el-title">
    <i v-if="back" class="el-title__back el-icon-back" @click="backHandler"></i>
    <div class="el-title__title">{{ title }}</div>
    <div class="el-title__sub">
      <slot name="sub"></slot>
    </div>
    <div class="el-title__right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TtdTitle',

  props: {
    back: Boolean,
    title: {
      type: String,
      required: true
    }
  },

  data() {
    return {
    };
  },

  watch: {
  },

  created() {
  },

  methods: {
    backHandler() {
      this.$router.back();
    }
  }
};

</script>