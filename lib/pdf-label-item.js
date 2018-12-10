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
/******/ 	return __webpack_require__(__webpack_require__.s = 267);
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

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pdfLabelItem = __webpack_require__(268);

var _pdfLabelItem2 = _interopRequireDefault(_pdfLabelItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_pdfLabelItem2.default.install = function (Vue) {
  Vue.component(_pdfLabelItem2.default.name, _pdfLabelItem2.default);
};

exports.default = _pdfLabelItem2.default;

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pdf_label_item_vue__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pdf_label_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pdf_label_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_67526350_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pdf_label_item_vue__ = __webpack_require__(270);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pdf_label_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_67526350_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pdf_label_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draggable = __webpack_require__(36);

var _draggable2 = _interopRequireDefault(_draggable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'TtdPdfLabelItem',

  props: {
    label: {
      type: Object,
      required: true
    },
    active: Boolean,
    pure: Boolean
  },

  data: function data() {
    return {
      labeled: this.label
    };
  },


  computed: {
    style: function style() {
      var _labeled = this.labeled,
          left = _labeled.left,
          top = _labeled.top,
          width = _labeled.width,
          height = _labeled.height;

      return {
        left: left + 'px',
        top: top + 'px',
        width: width + 'px',
        height: height + 'px',
        lineHeight: height + 'px'
      };
    }
  },

  mounted: function mounted() {
    if (!this.pure) {
      (0, _draggable2.default)(this.$el, {
        start: this.generateDragStart('box'),
        drag: this.generateDrag('box'),
        end: this.generateDrag('box')
      });
      (0, _draggable2.default)(this.$refs.drag, {
        start: this.generateDragStart('scale'),
        drag: this.generateDrag('scale'),
        end: this.generateDrag('scale')
      });
    }
  },


  methods: {
    deleteLabel: function deleteLabel() {
      this.$emit('deleteLabel', this.label);
    },
    resizeHandler: function resizeHandler() {
      var _getComputedStyle = getComputedStyle(this.$refs.label),
          width = _getComputedStyle.width,
          height = _getComputedStyle.height;

      this.labeled.width = parseInt(width, 10);
      this.labeled.height = parseInt(height, 10);
    },
    generateDragStart: function generateDragStart(type) {
      var _this = this;

      return function (_ref) {
        var clientX = _ref.clientX,
            clientY = _ref.clientY;

        if (!_this.active) {
          return;
        }
        _this.startX = clientX;
        _this.startY = clientY;
        if (type === 'box') {
          _this.startLeft = _this.labeled.left;
          _this.startTop = _this.labeled.top;
        } else if (type === 'scale') {
          _this.startWidth = _this.labeled.width;
          _this.startHeight = _this.labeled.height;
        }
      };
    },
    generateDrag: function generateDrag(type) {
      var _this2 = this;

      return function (_ref2) {
        var clientX = _ref2.clientX,
            clientY = _ref2.clientY;

        if (!_this2.active) {
          return;
        }
        if (type === 'box') {
          _this2.labeled.left = clientX - _this2.startX + _this2.startLeft;
          _this2.labeled.top = clientY - _this2.startY + _this2.startTop;
        } else if (type === 'scale') {
          _this2.labeled.width = clientX - _this2.startX + _this2.startWidth;
          _this2.labeled.height = clientY - _this2.startY + _this2.startHeight;
        }
      };
    },
    getLabel: function getLabel() {
      return this.labeled;
    }
  }
}; //
//
//
//
//
//
//
//

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-pdf-label-item",class:{'is-active':_vm.active},style:(_vm.style)},[_vm._v("\n  "+_vm._s(_vm.label.name)+"\n  "),_c('div',{ref:"drag",staticClass:"el-pdf-label__drag"}),(!_vm.pure)?_c('i',{staticClass:"el-icon-circle-close el-pdf-label__item--close",on:{"click":_vm.deleteLabel}}):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, options) {
  if (_vue2.default.prototype.$isServer) return;
  var moveFn = function moveFn(event) {
    if (options.drag) {
      options.drag(event);
    }
  };
  var upFn = function upFn(event) {
    document.removeEventListener('mousemove', moveFn);
    document.removeEventListener('mouseup', upFn);
    document.onselectstart = null;
    document.ondragstart = null;

    isDragging = false;

    if (options.end) {
      options.end(event);
    }
  };
  element.addEventListener('mousedown', function (event) {
    if (isDragging) return;
    document.onselectstart = function () {
      return false;
    };
    document.ondragstart = function () {
      return false;
    };

    document.addEventListener('mousemove', moveFn);
    document.addEventListener('mouseup', upFn);
    isDragging = true;

    if (options.start) {
      options.start(event);
    }
  });
};

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDragging = false;

/***/ })

/******/ });