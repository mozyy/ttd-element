<template>
  <div class="el-pdf" v-loading="loading">
    <ttd-pdf-header :page-number="pageNumber" :page-total="total" :page-change="pageChange"/>
    <canvas class="el-pdf__canvas" :id="id"></canvas>
    <slot></slot>
  </div>
</template>

<script>
import PDFJS from 'pdfjs-dist';
import { errorMessage } from 'ttd-element/src/utils/message';
import TtdPdfHeader from './components/pdf-header.vue';

let uid = 0;

export default {
  name: 'TtdPdf',

  components: {
    TtdPdfHeader
  },

  props: {
    src: {
      type: String,
      required: true
    },
    pageNumber: {
      type: Number,
      required: true
    },
    pageChange: {
      type: Function,
      required: true
    },
    pageTotal: {
      type: Function,
      required: true
    }
  },

  data() {
    return {
      id: `ttd-pdf-canvas__${uid++}`,
      total: 1,
      loading: true
    };
  },

  mounted() {
    this.getWidth();
    this.init();
  },

  watch: {
    pageNumber: 'renderPage'
  },

  methods: {
    async init() {
      if (!this.src || this.src.indexOf('pdf') === -1) {
        errorMessage('您要查看的文件非PDF格式，无法查看');
      } else {
        this.pdf = await PDFJS.getDocument(this.src);
        this.total = this.pdf.numPages;
        this.pageTotal(this.total);
        this.loading = false;
        this.renderPage();
      }
    },
    async renderPage() {
      this.page = await this.pdf.getPage(this.pageNumber);
      const scale = this.width / this.page.view[2];
      const viewport = this.page.getViewport(scale);

      const canvas = document.getElementById(this.id);
      const context = canvas.getContext('2d');
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      this.page.render(renderContext);
    },
    getWidth() {
      this.width = parseInt(getComputedStyle(this.$el).width, 10);
    }
  }
};
</script>
