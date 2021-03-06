'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _locale = require('ttd-element/lib/locale');

exports.default = {
  methods: {
    t: function t() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _locale.t.apply(this, args);
    }
  }
};