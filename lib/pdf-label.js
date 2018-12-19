module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 263);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pdfLabel = __webpack_require__(264);

var _pdfLabel2 = _interopRequireDefault(_pdfLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_pdfLabel2.default.install = function (Vue) {
  Vue.component(_pdfLabel2.default.name, _pdfLabel2.default);
};

exports.default = _pdfLabel2.default;

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pdf_label_vue__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pdf_label_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pdf_label_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d7fa3a0_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pdf_label_vue__ = __webpack_require__(268);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pdf_label_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d7fa3a0_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pdf_label_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(266);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(267);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
  name: 'TtdPdfLabel',

  props: {
    src: {
      type: String,
      required: true
    },
    labels: {
      type: Array,
      required: true
    }
  },

  data: function data() {
    return {
      page: 1,
      total: 2,
      active: 0,
      newLabel: {}
    };
  },


  computed: {
    leftDisable: function leftDisable() {
      return this.page <= 1;
    },
    rightDisable: function rightDisable() {
      return this.page >= this.total;
    },
    currentLabels: function currentLabels() {
      var _this = this;

      return this.labels.filter(function (label) {
        return label.pageIndex === _this.page;
      });
    }
  },

  beforeDestroy: function beforeDestroy() {
    this.$el.removeEventListener('mousemove', this.mousemoveHanler);
    this.$el.removeEventListener('contextmenu', this.contextmenuHanler);
    this.$el.removeEventListener('mousedown', this.mousedownHanler);
  },


  methods: {
    backHandler: function backHandler() {
      this.$router.back();
    },
    pageChange: function pageChange(page) {
      this.page = page;
    },
    pageTotal: function pageTotal(total) {
      this.total = total;
    },
    turnLeft: function turnLeft() {
      if (!this.leftDisable) {
        this.page -= 1;
      }
    },
    turnRight: function turnRight() {
      if (!this.rightDisable) {
        this.page += 1;
      }
    },
    getPdfCanvas: function getPdfCanvas() {
      return this.$refs.pdf.$refs.pdfCanvas;
    },
    deleteLabel: function deleteLabel(index) {
      this.$emit('delete-label', index);
    },
    getAxis: function getAxis(event) {
      var rectCanvas = this.$refs.pdf.$refs.pdfCanvas.getBoundingClientRect();
      return {
        xAxis: event.clientX - rectCanvas.left, // X轴坐标
        yAxis: event.clientY - rectCanvas.top // Y轴坐标，相对于左上角原点。
      };
    },
    createNewLabel: function createNewLabel(label, event) {
      var labelWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
      var labelHigh = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 50;

      this.$el.addEventListener('mousemove', this.mousemoveHanler);
      this.$el.addEventListener('contextmenu', this.contextmenuHanler);
      this.$el.addEventListener('mousedown', this.mousedownHanler);
      var data = (0, _extends3.default)({}, label, {
        pageIndex: this.page, // 标记页码
        labelWidth: labelWidth, // 标记域宽度
        labelHigh: labelHigh }, this.getAxis(event));
      this.newLabel = data;
    },
    mousemoveHanler: function mousemoveHanler(event) {
      (0, _assign2.default)(this.newLabel, this.getAxis(event));
    },
    mousedownHanler: function mousedownHanler(event) {
      if (event.button === 0) {
        this.$emit('create-label', this.newLabel);
      }
    },
    contextmenuHanler: function contextmenuHanler(event) {
      if (event.button === 2) {
        event.preventDefault();
        this.cancelCreateLabel();
      }
    },
    cancelCreateLabel: function cancelCreateLabel() {
      this.newLabel = null;
      this.$el.removeEventListener('mousemove', this.mousemoveHanler);
      this.$el.removeEventListener('contextmenu', this.contextmenuHanler);
      this.$el.removeEventListener('mousedown', this.mousedownHanler);
    }
  }
};

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-pdf-label"},[_c('i',{staticClass:"el-pdf-label__turn el-icon-arrow-left",class:{'is-disable':_vm.leftDisable},on:{"click":_vm.turnLeft}}),_c('ttd-pdf',{ref:"pdf",staticClass:"el-pdf-label__pdf",attrs:{"src":_vm.src,"page-number":_vm.page,"page-total":_vm.pageTotal,"page-change":_vm.pageChange}},[_vm._l((_vm.currentLabels),function(label,index){return _c('ttd-pdf-label-item',{key:index,attrs:{"label":label,"active":_vm.active===index},on:{"deleteLabel":function($event){_vm.deleteLabel(index)}},nativeOn:{"click":function($event){_vm.active = index}}})}),(_vm.newLabel)?_c('ttd-pdf-label-item',{attrs:{"label":_vm.newLabel,"pure":""}}):_vm._e()],2),_c('i',{staticClass:"el-pdf-label__turn el-icon-arrow-right",class:{'is-disable':_vm.rightDisable},on:{"click":_vm.turnRight}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

/******/ });