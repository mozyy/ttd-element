'use strict';

exports.__esModule = true;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.isVNode = isVNode;
exports.getFirstComponentChild = getFirstComponentChild;

var _util = require('ttd-element/lib/utils/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isVNode(node) {
  return node !== null && (typeof node === 'undefined' ? 'undefined' : (0, _typeof3.default)(node)) === 'object' && (0, _util.hasOwn)(node, 'componentOptions');
};

function getFirstComponentChild(children) {
  return children && children.filter(function (c) {
    return c && c.tag;
  })[0];
};