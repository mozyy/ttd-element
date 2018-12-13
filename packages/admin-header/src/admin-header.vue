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
                :class="{'is-active':item.name === active}"
                :key="item.name" 
                @click="clickHandler(item)"
            >
                <icon class="el-admin-header--icon" :name="item.icon"></icon>
                <div class="el-admin-header--name">{{item.name}}</div>
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
    defaultActive: String,
    changeHandler: {
      type: Function,
      required: true
    }
  },

  data() {
    return {
      active: this.navigate[0] ? this.navigate[0].name : ''
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
      this.active = item.name;
    },
    setDefaultActive() {
      const value = this.defaultActive;
      if (value) {
        const active = this.navigate.find(nav => nav.name === value);
        if (active) {
          this.active = active.name;
        }
      }
    }
  }
};

</script>