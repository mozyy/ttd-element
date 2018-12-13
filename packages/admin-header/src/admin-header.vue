<template>
    <div class="el-admin-header">
        <div class="el-admin-header__left">
            <slot></slot>
        </div>
        <div class="el-admin-header__right">
            <slot name="right"></slot>
        </div>
        <ul class="el-admin-header__navigate">
            <li
                v-for="item in sources" 
                class="el-admin-header--item"
                :class="{'is-active':item.sourcrsNo === active}"
                :key="item.sourcrsNo" 
                @click="clickHandler(item.sourcrsNo)"
            >
                <icon class="el-admin-header--icon" :name="item.icon || 'home'"></icon>
                <div class="el-admin-header--name">{{item.sourcesName}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'TtdAdminHeader',

  props: {
    sources: {
      type: Array,
      required: true
    },
    active: Number
  },

  created() {
    this.setDefaultActive();
  },

  methods: {
    clickHandler(value) {
      this.$emit('update:active', value);
    },
    setDefaultActive() {
      if (!this.active && this.sources[0]) {
        this.$emit('update:active', this.sources[0].sourcrsNo);
      }
    }
  }
};

</script>