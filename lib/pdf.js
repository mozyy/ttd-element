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
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
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

/***/ 42:
/***/ (function(module, exports) {

module.exports = require("ttd-element/lib/utils/message");

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

module.exports = require("pdfjs-dist");

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/pdf-label/src/pdf.vue?vue&type=template&id=babaef06&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "loading",
          rawName: "v-loading",
          value: _vm.loading,
          expression: "loading"
        }
      ],
      staticClass: "el-pdf"
    },
    [
      _c("ttd-pdf-header", {
        attrs: {
          "page-number": _vm.pageNumber,
          "page-total": _vm.total,
          "page-change": _vm.pageChange
        }
      }),
      _c(
        "div",
        { staticClass: "el-pdf__box" },
        [
          _c("canvas", {
            ref: "pdfCanvas",
            staticClass: "el-pdf__canvas",
            attrs: { id: _vm.id }
          }),
          _vm._t("default")
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/pdf-label/src/pdf.vue?vue&type=template&id=babaef06&

// EXTERNAL MODULE: external "babel-runtime/regenerator"
var regenerator_ = __webpack_require__(43);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "babel-runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(49);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "pdfjs-dist"
var external_pdfjs_dist_ = __webpack_require__(60);
var external_pdfjs_dist_default = /*#__PURE__*/__webpack_require__.n(external_pdfjs_dist_);

// EXTERNAL MODULE: external "ttd-element/lib/utils/message"
var message_ = __webpack_require__(42);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/pdf-label/src/components/pdf-header.vue?vue&type=template&id=cae084a8&
var pdf_headervue_type_template_id_cae084a8_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "el-pdf-header" }, [
    _c("h6", { staticClass: "el-pdf-header__title" }, [
      _vm._v(_vm._s(_vm.title))
    ]),
    _c(
      "span",
      { staticClass: "el-pdf-header__page" },
      [
        _vm._v(
          "\n    " + _vm._s(_vm.pageNumber + "/" + _vm.pageTotal) + "\n    第 "
        ),
        _c("el-input", {
          staticClass: "el-pdf-header--input",
          attrs: { type: "number", value: _vm.pageNumber },
          on: { change: _vm.changePage }
        }),
        _vm._v(" 页\n  ")
      ],
      1
    )
  ])
}
var pdf_headervue_type_template_id_cae084a8_staticRenderFns = []
pdf_headervue_type_template_id_cae084a8_render._withStripped = true


// CONCATENATED MODULE: ./packages/pdf-label/src/components/pdf-header.vue?vue&type=template&id=cae084a8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/pdf-label/src/components/pdf-header.vue?vue&type=script&lang=js&
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


/* harmony default export */ var pdf_headervue_type_script_lang_js_ = ({
  name: 'TtdPdfHeader',

  props: {
    title: {
      type: String,
      default: 'pdf'
    },
    pageNumber: {
      type: Number,
      required: true
    },
    pageTotal: {
      type: Number,
      default: 1
    },
    pageChange: {
      type: Function,
      required: true
    }
  },

  data: function data() {
    return {};
  },


  methods: {
    changePage: function changePage(value) {
      var page = Number(value);
      this.pageChange(page);
    }
  }
});
// CONCATENATED MODULE: ./packages/pdf-label/src/components/pdf-header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_pdf_headervue_type_script_lang_js_ = (pdf_headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/pdf-label/src/components/pdf-header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_pdf_headervue_type_script_lang_js_,
  pdf_headervue_type_template_id_cae084a8_render,
  pdf_headervue_type_template_id_cae084a8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/pdf-label/src/components/pdf-header.vue"
/* harmony default export */ var pdf_header = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/pdf-label/src/pdf.vue?vue&type=script&lang=js&


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





var uid = 0;

/* harmony default export */ var pdfvue_type_script_lang_js_ = ({
  name: 'TtdPdf',

  components: {
    TtdPdfHeader: pdf_header
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

  data: function data() {
    return {
      id: 'ttd-pdf-canvas__' + uid++,
      total: 1,
      loading: true
    };
  },
  mounted: function mounted() {
    this.init();
  },


  watch: {
    pageNumber: 'renderPage'
  },

  methods: {
    init: function init() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!_this.src || _this.src.indexOf('pdf') === -1)) {
                  _context.next = 4;
                  break;
                }

                Object(message_["errorMessage"])('您要查看的文件非PDF格式，无法查看');
                _context.next = 11;
                break;

              case 4:
                _context.next = 6;
                return external_pdfjs_dist_default.a.getDocument(_this.src);

              case 6:
                _this.pdf = _context.sent;

                _this.total = _this.pdf.numPages;
                _this.pageTotal(_this.total);
                _this.loading = false;
                _this.renderPage();

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    renderPage: function renderPage() {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var viewport, canvas, context, renderContext;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.pdf.getPage(_this2.pageNumber);

              case 2:
                _this2.page = _context2.sent;
                viewport = _this2.page.getViewport(1.5);
                canvas = document.getElementById(_this2.id);
                context = canvas.getContext('2d');

                canvas.width = viewport.width;
                canvas.height = viewport.height;

                renderContext = {
                  canvasContext: context,
                  viewport: viewport
                };

                _this2.page.render(renderContext);

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./packages/pdf-label/src/pdf.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_pdfvue_type_script_lang_js_ = (pdfvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/pdf-label/src/pdf.vue





/* normalize component */

var pdf_component = Object(componentNormalizer["a" /* default */])(
  src_pdfvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var pdf_api; }
pdf_component.options.__file = "packages/pdf-label/src/pdf.vue"
/* harmony default export */ var pdf = (pdf_component.exports);
// CONCATENATED MODULE: ./packages/pdf/index.js


/* istanbul ignore next */
pdf.install = function (Vue) {
  Vue.component(pdf.name, pdf);
};

/* harmony default export */ var packages_pdf = __webpack_exports__["default"] = (pdf);

/***/ })

/******/ });