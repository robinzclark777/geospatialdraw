"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (c) Codice Foundation
 *
 * This is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser
 * General Public License as published by the Free Software Foundation, either version 3 of the
 * License, or any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details. A copy of the GNU Lesser General Public License
 * is distributed along with this program and can be found at
 * <http://www.gnu.org/licenses/lgpl.html>.
 *
 **/
var React = require("react");
var Common = require("./common-styles");
var usng_js_1 = require("usng.js");
var coordinate_converter_1 = require("../coordinate-converter");
var usng_input_1 = require("./usng-input");
var Root = Common.BBoxRoot;
var TextGroup = Common.Row;
var Label = Common.Label;
var USNGBBoxEditor = /** @class */ (function (_super) {
    __extends(USNGBBoxEditor, _super);
    function USNGBBoxEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.unitConverter = new usng_js_1.Converter();
        return _this;
    }
    USNGBBoxEditor.prototype.render = function () {
        var _this = this;
        var _a = this.props, north = _a.north, south = _a.south, east = _a.east, west = _a.west, setBBox = _a.setBBox;
        var usng = coordinate_converter_1.latLonTo.USNGBox(north, south, east, west);
        return (React.createElement(Root, { flexDirection: "column" },
            React.createElement(TextGroup, null,
                React.createElement(Label, null, "USNG/MGRS"),
                React.createElement(usng_input_1.default, { value: usng, onChange: function (usng) {
                        var matrix = _this.unitConverter.isUSNG(usng);
                        if (matrix) {
                            var bbox = _this.unitConverter.USNGtoLL(matrix, false);
                            setBBox(bbox);
                        }
                    } }))));
    };
    return USNGBBoxEditor;
}(React.Component));
exports.default = USNGBBoxEditor;
//# sourceMappingURL=usng-bbox-editor.js.map