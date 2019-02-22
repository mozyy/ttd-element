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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 125);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/pdf-label/src/pdf-label.vue?vue&type=template&id=07acdfb8&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "el-pdf-label" },
    [
      _c("i", {
        staticClass: "el-pdf-label__turn el-icon-arrow-left",
        class: { "is-disable": _vm.leftDisable },
        on: { click: _vm.turnLeft }
      }),
      _c(
        "ttd-pdf",
        {
          ref: "pdf",
          staticClass: "el-pdf-label__pdf",
          attrs: {
            src: _vm.src,
            "page-number": _vm.page,
            "page-total": _vm.pageTotal,
            "page-change": _vm.pageChange
          }
        },
        [
          _vm._l(_vm.currentLabels, function(label, index) {
            return _c("ttd-pdf-label-item", {
              key: index,
              attrs: { label: label, active: _vm.active === index },
              on: { deleteLabel: _vm.deleteLabel },
              nativeOn: {
                click: function($event) {
                  _vm.active = index
                }
              }
            })
          }),
          _vm.newLabel
            ? _c("ttd-pdf-label-item", {
                attrs: { label: _vm.newLabel, pure: "" }
              })
            : _vm._e()
        ],
        2
      ),
      _c("i", {
        staticClass: "el-pdf-label__turn el-icon-arrow-right",
        class: { "is-disable": _vm.rightDisable },
        on: { click: _vm.turnRight }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/pdf-label/src/pdf-label.vue?vue&type=template&id=07acdfb8&

// EXTERNAL MODULE: external "babel-runtime/core-js/object/assign"
var assign_ = __webpack_require__(61);
var assign_default = /*#__PURE__*/__webpack_require__.n(assign_);

// EXTERNAL MODULE: external "babel-runtime/helpers/extends"
var extends_ = __webpack_require__(62);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "ttd-element/lib/utils/message"
var message_ = __webpack_require__(42);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/pdf-label/src/pdf-label.vue?vue&type=script&lang=js&


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



/* harmony default export */ var pdf_labelvue_type_script_lang_js_ = ({
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
      total: 1,
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

  watch: {
    page: function page(value, old) {
      var _this2 = this;

      if (value < 1 || value > this.total) {
        Object(message_["warnMessage"])('您输入的页码不正确, 请重新输入');
        this.$nextTick(function () {
          _this2.page = old;
        });
      }
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
    deleteLabel: function deleteLabel(label) {
      var index = this.labels.indexOf(label);
      if (index > -1) {
        this.$emit('delete-label', index);
      }
    },
    getAxis: function getAxis(event) {
      var rectCanvas = this.$refs.pdf.$refs.pdfCanvas.getBoundingClientRect();
      return {
        xAxis: event.clientX - rectCanvas.left, // X轴坐标
        yAxis: event.clientY - rectCanvas.top // Y轴坐标，相对于左上角原点。
      };
    },
    createNewLabel: function createNewLabel(label, event) {
      var labelWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
      var labelHigh = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;

      this.$el.addEventListener('mousemove', this.mousemoveHanler);
      this.$el.addEventListener('contextmenu', this.contextmenuHanler);
      this.$el.addEventListener('mousedown', this.mousedownHanler);
      var data = extends_default()({}, label, {
        pageIndex: this.page, // 标记页码
        labelWidth: labelWidth, // 标记域宽度
        labelHigh: labelHigh }, this.getAxis(event));
      this.newLabel = data;
    },
    mousemoveHanler: function mousemoveHanler(event) {
      assign_default()(this.newLabel, this.getAxis(event));
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
});
// CONCATENATED MODULE: ./packages/pdf-label/src/pdf-label.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_pdf_labelvue_type_script_lang_js_ = (pdf_labelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/pdf-label/src/pdf-label.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_pdf_labelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/pdf-label/src/pdf-label.vue"
/* harmony default export */ var pdf_label = (component.exports);
// CONCATENATED MODULE: ./packages/pdf-label/index.js


/* istanbul ignore next */
pdf_label.install = function (Vue) {
  Vue.component(pdf_label.name, pdf_label);
};

/* harmony default export */ var packages_pdf_label = __webpack_exports__["default"] = (pdf_label);

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

module.exports = require("ttd-element/lib/utils/message");

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ })

/******/ });