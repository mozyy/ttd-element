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
/******/ 	return __webpack_require__(__webpack_require__.s = 126);
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

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/pdf-label/src/pdf-label-item.vue?vue&type=template&id=233ba94c&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "el-pdf-label-item",
      class: { "is-active": _vm.active },
      style: _vm.style
    },
    [
      _c("span", { staticClass: "el-pdf-label-item__text" }, [
        _vm._v(_vm._s(_vm.label.labelName))
      ]),
      !_vm.pure
        ? _c("div", { ref: "drag", staticClass: "el-pdf-label-item__drag" })
        : _vm._e(),
      !_vm.pure
        ? _c("i", {
            staticClass: "el-icon-circle-close el-pdf-label-item__close",
            on: { click: _vm.deleteLabel }
          })
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/pdf-label/src/pdf-label-item.vue?vue&type=template&id=233ba94c&

// EXTERNAL MODULE: ./packages/color-picker/src/draggable.js
var draggable = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/pdf-label/src/pdf-label-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//



/* harmony default export */ var pdf_label_itemvue_type_script_lang_js_ = ({
  name: 'TtdPdfLabelItem',

  props: {
    label: {
      type: Object,
      required: true
    },
    active: Boolean,
    pure: Boolean
  },

  computed: {
    style: function style() {
      var _label = this.label,
          xAxis = _label.xAxis,
          yAxis = _label.yAxis,
          labelWidth = _label.labelWidth,
          labelHigh = _label.labelHigh;

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

  mounted: function mounted() {
    if (!this.pure) {
      Object(draggable["a" /* default */])(this.$el, {
        start: this.generateDragStart('box'),
        drag: this.generateDrag('box'),
        end: this.generateDrag('box')
      });
      Object(draggable["a" /* default */])(this.$refs.drag, {
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

      this.label.labelWidth = parseInt(width, 10);
      this.label.labelHigh = parseInt(height, 10);
    },
    generateDragStart: function generateDragStart(type) {
      var _this = this;

      return function (_ref) {
        var clientX = _ref.clientX,
            clientY = _ref.clientY;

        // if (!this.active) {
        //   return;
        // }
        _this.startX = clientX;
        _this.startY = clientY;
        if (type === 'box') {
          _this.startLeft = _this.label.xAxis;
          _this.startTop = _this.label.yAxis;
        } else if (type === 'scale') {
          _this.startWidth = _this.label.labelWidth;
          _this.startHeight = _this.label.labelHigh;
        }
      };
    },
    generateDrag: function generateDrag(type) {
      var _this2 = this;

      return function (_ref2) {
        var clientX = _ref2.clientX,
            clientY = _ref2.clientY;

        // if (!this.active) {
        //   return;
        // }
        if (type === 'box') {
          _this2.label.xAxis = clientX - _this2.startX + _this2.startLeft;
          _this2.label.yAxis = clientY - _this2.startY + _this2.startTop;
        } else if (type === 'scale') {
          _this2.label.labelWidth = clientX - _this2.startX + _this2.startWidth;
          _this2.label.labelHigh = clientY - _this2.startY + _this2.startHeight;
        }
      };
    },
    getLabel: function getLabel() {
      return this.label;
    }
  }
});
// CONCATENATED MODULE: ./packages/pdf-label/src/pdf-label-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_pdf_label_itemvue_type_script_lang_js_ = (pdf_label_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/pdf-label/src/pdf-label-item.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_pdf_label_itemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/pdf-label/src/pdf-label-item.vue"
/* harmony default export */ var pdf_label_item = (component.exports);
// CONCATENATED MODULE: ./packages/pdf-label-item/index.js


/* istanbul ignore next */
pdf_label_item.install = function (Vue) {
  Vue.component(pdf_label_item.name, pdf_label_item);
};

/* harmony default export */ var packages_pdf_label_item = __webpack_exports__["default"] = (pdf_label_item);

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var isDragging = false;

/* harmony default export */ __webpack_exports__["a"] = (function (element, options) {
  if (vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$isServer) return;
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
});

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ })

/******/ });