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
                :class="{'is-active':item.sourcesCode === active}"
                :key="item.sourcesCode" 
                @click="$emit('update:active', item.sourcesCode)"
            >
                <icon class="el-admin-header--icon" :name="item.sourcesCode"></icon>
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
    active: String
  }
};

</script>