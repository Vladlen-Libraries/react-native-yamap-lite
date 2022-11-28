"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polyline = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var utils_1 = require("../utils");
var NativePolylineComponent = react_native_1.requireNativeComponent('YamapPolyline');
var Polyline = /** @class */ (function (_super) {
    __extends(Polyline, _super);
    function Polyline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Polyline.prototype.render = function () {
        var props = __assign({}, this.props);
        utils_1.processColorProps(props, 'fillColor');
        utils_1.processColorProps(props, 'strokeColor');
        utils_1.processColorProps(props, 'outlineColor');
        return react_1.default.createElement(NativePolylineComponent, __assign({}, props));
    };
    return Polyline;
}(react_1.default.Component));
exports.Polyline = Polyline;
//# sourceMappingURL=Polyline.js.map