"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const core_components_1 = require("./core-components");
function App() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("p", null, "New testing"),
            react_1.default.createElement(core_components_1.Autocomplete, { value: "", onValueChange: () => { }, options: ['One', 'Two'] }))));
}
exports.default = App;