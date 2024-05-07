"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Providers = exports.render = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const Providers = ({ children }) => {
  return react_1.default.createElement("div", null, children);
};
exports.Providers = Providers;
const render = (Component) => {
  return (0, react_2.render)(Component, { wrapper: Providers });
};
exports.render = render;
//# sourceMappingURL=unit-test.utils.js.map
