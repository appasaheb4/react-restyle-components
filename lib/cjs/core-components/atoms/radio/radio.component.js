"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
const react_1 = __importDefault(require("react"));
const svg_1 = require("../../../library/assets/svg");
const Radio = ({ className, checked, onChange }) => {
  const width = 20;
  return react_1.default.createElement(
    "div",
    { className: `${className} flex flex-row mr-2`, onClick: onChange },
    checked
      ? react_1.default.createElement(svg_1.CheckedRadio, {
          width: width,
          height: width,
        })
      : react_1.default.createElement(svg_1.UncheckRadio, {
          width: width,
          height: width,
        }),
  );
};
exports.Radio = Radio;
//# sourceMappingURL=radio.component.js.map
