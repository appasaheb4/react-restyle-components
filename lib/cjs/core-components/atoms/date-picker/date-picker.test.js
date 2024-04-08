"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable testing-library/render-result-naming-convention */
const react_1 = __importDefault(require("react"));
const _core_utils_1 = require("@core-utils");
const date_picker_component_1 = require("./date-picker.component");
const dayjs_1 = __importDefault(require("dayjs"));
it("render DatePicker correctly", () => {
  const datepicker = (0, _core_utils_1.render)(
    react_1.default.createElement(date_picker_component_1.DatePickerComp, {
      className: "mt-6",
      value: (0, dayjs_1.default)().format("YYYY-MM-DD"),
      showFormat: "dd-MM-yyyy",
    })
  );
  expect(datepicker).toMatchSnapshot();
});
//# sourceMappingURL=date-picker.test.js.map
