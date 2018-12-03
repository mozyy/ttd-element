<template>
  <div class="el-admin-header-left">
    <span class="el-admin-header-left__content">
      <img class="el-admin-header-left--avatar" :src="info.avatar"/>
      <el-tooltip :visible-arrow="false" :content="info.name" placement="right-end">
        <span class="el-admin-header-left--name">
            {{showName}}
        </span>
      </el-tooltip>
    </span>
    <el-dropdown class="el-admin-header-left__drop" @command="dropdown" trigger="click" placement="bottom">
        <i class="el-icon-arrow-down" style="cursor: pointer;color: #ffffff"></i>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item disabled>
                <p class="el-admin-header-left--drop">{{ info.name }}</p>
                <p class="el-admin-header-left--tel">{{ info.tel }}</p>
            </el-dropdown-item>
            <el-dropdown-item v-for="(item,index) in info.menu" :key="item.name" :command="index">
                <icon :name="item.icon"></icon> <span>{{item.name}}</span>
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>

export default {
  name: 'TtdAdminHeaderLeft',

  props: {
    info: {
      type: Object,
      required: true
    }
  },

  data() {
    return {

    };
  },

  computed: {
    showName() {
      const name = this.info.name;
      return name && name.length > 9 ? name.slice(0, 7) + ' ▪▪▪' : name;
    }
  },

  methods: {
    dropdown(command) {
      const handler = this.info.menu[command].handler;
      if (typeof handler === 'function') {
        handler();
      }
    }
  }
};
</script>
