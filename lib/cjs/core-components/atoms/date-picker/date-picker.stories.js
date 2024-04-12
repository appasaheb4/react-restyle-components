"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const date_picker_component_1 = require("./date-picker.component");
const meta = {
  title: "Design System/Atoms/DatePicker",
  component: date_picker_component_1.DatePickerComp,
  tags: ["autodocs"],
};
exports.default = meta;
exports.Primary = {
  args: {
    className: "mt-6",
    value: (0, dayjs_1.default)().format("YYYY-MM-DD"),
    showFormat: "dd-MM-yyyy",
  },
};
//# sourceMappingURL=date-picker.stories.js.map
