'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logger = function () {
  function Logger() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'log';
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'red';
    var visible = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    (0, _classCallCheck3.default)(this, Logger);

    this.type = type;
    this.color = color;
    this.visibleLog = visible;
    return this.log.bind(this);
  }

  (0, _createClass3.default)(Logger, [{
    key: 'log',
    value: function log() {
      if (this.visibleLog) {
        var _console;

        for (var _len = arguments.length, msgs = Array(_len), _key = 0; _key < _len; _key++) {
          msgs[_key] = arguments[_key];
        }

        (_console = console).log.apply(_console, ['%c [[' + this.type + ']]:', 'background:' + this.color + ';color:#fff'].concat(msgs));
      }
    }
  }]);
  return Logger;
}();

exports.default = Logger;
var logger = exports.logger = new Logger();