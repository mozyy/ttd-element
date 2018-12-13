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
                v-for="item in navigate" 
                class="el-admin-header--item"
                :class="{'is-active':item.sourcrsNo === active}"
                :key="item.sourcrsNo" 
                @click="clickHandler(item)"
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
    navigate: {
      type: Array,
      required: true
    },
    defaultActive: Number,
    changeHandler: {
      type: Function,
      required: true
    }
  },

  data() {
    return {
      active: this.navigate[0] ? this.navigate[0].sourcrsNo : ''
    };
  },

  watch: {
    defaultActive: 'setDefaultActive',
    active: 'changeHandler'
  },

  created() {
    this.setDefaultActive();
  },

  methods: {
    clickHandler(item) {
      this.active = item.sourcrsNo;
    },
    setDefaultActive() {
      const value = this.defaultActive;
      if (value) {
        const active = this.navigate.find(nav => nav.sourcrsNo === value);
        if (active) {
          this.active = active.sourcrsNo;
        }
      }
    }
  }
};

</script>