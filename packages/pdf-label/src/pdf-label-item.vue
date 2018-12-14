<template>
  <div class="el-pdf-label-item" :style="style" :class="{'is-active':active}">
    {{label.name}}
    <div class="el-pdf-label-item__drag" ref="drag"></div>
    <i v-if="!pure" @click="deleteLabel" class="el-icon-circle-close el-pdf-label-item__close"></i>
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
      labeled: this.pure ? this.label : {...this.label}
    };
  },

  computed: {
    style() {
      const {xAxis, yAxis, labelWidth, labelHigh} = this.labeled;
      return {
        left: xAxis + 'px',
        top: yAxis + 'px',
        width: labelWidth + 'px',
        height: labelHigh + 'px',
        lineHeight: labelHigh + 'px',
        opacity: this.pure ? 0.8 : 1
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
      this.labeled.labelWidth = parseInt(width, 10);
      this.labeled.labelHigh = parseInt(height, 10);
    },
    generateDragStart(type) {
      return ({clientX, clientY}) => {
        if (!this.active) {
          return;
        }
        this.startX = clientX;
        this.startY = clientY;
        if (type === 'box') {
          this.startLeft = this.labeled.xAxis;
          this.startTop = this.labeled.yAxis;
        } else if (type === 'scale') {
          this.startWidth = this.labeled.labelWidth;
          this.startHeight = this.labeled.labelHigh;
        }
      };
    },
    generateDrag(type) {
      return ({clientX, clientY})=> {
        if (!this.active) {
          return;
        }
        if (type === 'box') {
          this.labeled.xAxis = clientX - this.startX + this.startLeft;
          this.labeled.yAxis = clientY - this.startY + this.startTop;
        } else if (type === 'scale') {
          this.labeled.labelWidth = clientX - this.startX + this.startWidth;
          this.labeled.labelHigh = clientY - this.startY + this.startHeight;
        }
      };
    },
    getLabel() {
      return this.labeled;
    }
  }
};
</script>

