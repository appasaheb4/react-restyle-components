"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const date_picker_component_1 = require("./date-picker.component");
const dayjs_1 = __importDefault(require("dayjs"));
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
  title: "Atoms/DatePickerComp",
  component: date_picker_component_1.DatePickerComp,
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Primary = () =>
  react_1.default.createElement(
    "div",
    { className: "flex flex-row" },
    react_1.default.createElement(date_picker_component_1.DatePickerComp, {
      className: "mt-6",
      value: (0, dayjs_1.default)().format("YYYY-MM-DD"),
      showFormat: "dd-MM-yyyy",
    })
  );
exports.Primary = Primary;
//# sourceMappingURL=date-picker.stories.js.map
