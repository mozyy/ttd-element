<template>
  <div class="el-pdf-label-item" :style="style" :class="{'is-active':active}">
    {{label.name}}
    <div class="el-pdf-label__drag" ref="drag"></div>
    <i v-if="!pure" @click="deleteLabel" class="el-icon-circle-close el-pdf-label__item--close"></i>
  </div>
</template>

<script>
import draggable from 'ttd-element/packages/color-picker/src/draggable';

export default {
  name: 'TtdPdfLabelItem',

  props: {
    label: {
      type: Object,
      required: true
    },
    active: Boolean,
    pure: Boolean
  },

  data() {
    return {
      labeled: this.label
    };
  },

  computed: {
    style() {
      const {left, top, width, height} = this.labeled;
      return {
        left: left + 'px',
        top: top + 'px',
        width: width + 'px',
        height: height + 'px',
        lineHeight: height + 'px'
      };
    }
  },

  mounted() {
    if (!this.pure) {
      draggable(this.$el, {
        start: this.generateDragStart('box'),
        drag: this.generateDrag('box'),
        end: this.generateDrag('box')
      });
      draggable(this.$refs.drag, {
        start: this.generateDragStart('scale'),
        drag: this.generateDrag('scale'),
        end: this.generateDrag('scale')
      });
    }
  },

  methods: {
    deleteLabel() {
      this.$emit('deleteLabel', this.label);
    },
    resizeHandler() {
      const {width, height} = getComputedStyle(this.$refs.label);
      this.labeled.width = parseInt(width, 10);
      this.labeled.height = parseInt(height, 10);
    },
    generateDragStart(type) {
      return ({clientX, clientY}) => {
        if (!this.active) {
          return;
        }
        this.startX = clientX;
        this.startY = clientY;
        if (type === 'box') {
          this.startLeft = this.labeled.left;
          this.startTop = this.labeled.top;
        } else if (type === 'scale') {
          this.startWidth = this.labeled.width;
          this.startHeight = this.labeled.height;
        }
      };
    },
    generateDrag(type) {
      return ({clientX, clientY})=> {
        if (!this.active) {
          return;
        }
        if (type === 'box') {
          this.labeled.left = clientX - this.startX + this.startLeft;
          this.labeled.top = clientY - this.startY + this.startTop;
        } else if (type === 'scale') {
          this.labeled.width = clientX - this.startX + this.startWidth;
          this.labeled.height = clientY - this.startY + this.startHeight;
        }
      };
    },
    getLabel() {
      return this.labeled;
    }
  }
};
</script>

