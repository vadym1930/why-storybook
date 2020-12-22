"use strict";

var _react = _interopRequireDefault(require("react"));

var _addons = require("@storybook/addons");

var _api = require("@storybook/api");

var _components = require("@storybook/components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ADDON_ID = 'seealso';
var PANEL_ID = "".concat(ADDON_ID, "/panel");

var SeeAlsoPanel = function SeeAlsoPanel() {
  var results = (0, _api.useParameter)('seeAlso', []);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, results.length ? /*#__PURE__*/_react["default"].createElement("ol", null, results.map(function (component) {
    return /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        location.href = location.origin + "?path=" + component.name;
      }
    }, component.label));
  })) : null);
};

_addons.addons.register(ADDON_ID, function (api) {
  _addons.addons.add(PANEL_ID, {
    type: _addons.types.PANEL,
    title: 'See also',
    render: function render(_ref) {
      var active = _ref.active,
          key = _ref.key;
      return /*#__PURE__*/_react["default"].createElement(_components.AddonPanel, {
        active: active,
        key: key
      }, /*#__PURE__*/_react["default"].createElement(SeeAlsoPanel, null));
    }
  });
});