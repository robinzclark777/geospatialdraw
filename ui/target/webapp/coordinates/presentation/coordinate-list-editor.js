"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var point_editor_1 = __importDefault(require("../container/point-editor"));
var length_editor_1 = __importDefault(require("./length-editor"));
var toggle_button_1 = __importDefault(require("./toggle-button"));
var coordinate_value_1 = __importDefault(require("./coordinate-value"));
var Common = __importStar(require("./common-styles"));
var Root = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  min-width: 25rem;\n  min-height: 20rem;\n"], ["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  min-width: 25rem;\n  min-height: 20rem;\n"])));
var InputGroup = styled_components_1.default.label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: ", " 0;\n  padding: 0;\n  display: flex;\n"], ["\n  margin: ", " 0;\n  padding: 0;\n  display: flex;\n"])), function (props) { return props.theme.minimumSpacing; });
var Label = Common.Label;
var List = styled_components_1.default.ul(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  max-height: 15rem;\n  display: flex;\n  flex-grow: 1;\n  flex-basis: 8rem;\n  flex-direction: column;\n  overflow-y: auto;\n  background-color: ", ";\n"], ["\n  margin: 0;\n  padding: 0;\n  max-height: 15rem;\n  display: flex;\n  flex-grow: 1;\n  flex-basis: 8rem;\n  flex-direction: column;\n  overflow-y: auto;\n  background-color: ", ";\n"])), function (props) { return props.theme.backgroundSlideout; });
var ListItem = styled_components_1.default.li(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n"], ["\n  margin: 0;\n  padding: 0;\n  display: flex;\n"])));
var ControlsGroup = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n"])));
var Button = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: ", ";\n  text-decoration: underline;\n  padding: ", ";\n  margin: 0;\n  opacity: ", ";\n  cursor: pointer;\n  :hover {\n    opacity: 1;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: ", ";\n  text-decoration: underline;\n  padding: ", ";\n  margin: 0;\n  opacity: ", ";\n  cursor: pointer;\n  :hover {\n    opacity: 1;\n  }\n"])), function (props) { return props.theme.mediumFontSize; }, function (props) { return props.theme.minimumSpacing; }, function (props) { return props.theme.minimumOpacity; });
var CoordinateButton = styled_components_1.default(toggle_button_1.default)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 100%;\n  font-size: ", ";\n"], ["\n  width: 100%;\n  font-size: ", ";\n"])), function (props) { return props.theme.minimumFontSize; });
var FlatCoordinateListEditor = function (_a) {
    var buffer = _a.buffer, bufferUnit = _a.bufferUnit, coordinateList = _a.coordinateList, coordinateUnit = _a.coordinateUnit, lat = _a.lat, lon = _a.lon, setBuffer = _a.setBuffer, setUnit = _a.setUnit, setCoordinate = _a.setCoordinate, addCoordinate = _a.addCoordinate, deleteCoordinate = _a.deleteCoordinate, selectCoordinate = _a.selectCoordinate, selectedIndex = _a.selectedIndex;
    return (React.createElement(Root, null,
        React.createElement(point_editor_1.default, { lat: lat, lon: lon, unit: coordinateUnit, setCoordinate: setCoordinate }),
        React.createElement(InputGroup, null,
            React.createElement(Label, null, "Buffer"),
            React.createElement(length_editor_1.default, { length: buffer, unit: bufferUnit, setUnit: setUnit, setLength: setBuffer })),
        React.createElement(ControlsGroup, null,
            React.createElement(Button, { onClick: addCoordinate, title: "Add Coordinate" }, "+ Add Coordinate"),
            React.createElement(Button, { onClick: deleteCoordinate, title: "Remove Coordinate" }, "- Remove Coordinate")),
        React.createElement(List, null, coordinateList.map(function (_a, index) {
            var coordinateLon = _a[0], coordinateLat = _a[1];
            return (React.createElement(ListItem, { key: index },
                React.createElement(CoordinateButton, { isSelected: index === selectedIndex, onClick: function () { return selectCoordinate(index); }, title: "Select Coordinate #" + (index + 1) },
                    React.createElement(coordinate_value_1.default, { lat: coordinateLat, lon: coordinateLon, unit: coordinateUnit }))));
        }))));
};
exports.default = FlatCoordinateListEditor;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=coordinate-list-editor.js.map