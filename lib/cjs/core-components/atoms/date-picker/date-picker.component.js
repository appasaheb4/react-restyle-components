"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePickerComp = void 0;
const react_1 = __importStar(require("react"));
const react_datepicker_1 = __importDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
const datePicker_svg_1 = require("../../../library/assets/svg/datePicker.svg");
const dayjs_1 = __importDefault(require("dayjs"));
const DatePickerComp = ({
  className,
  disable,
  value,
  showFormat = "yyyy-MM-dd",
  placeholder = "Select Date",
}) => {
  const [pickedDate, setPickedDate] = (0, react_1.useState)(
    value && (0, dayjs_1.default)(value).toDate()
  );
  const CustomInput = (0, react_1.forwardRef)((props, ref) => {
    return react_1.default.createElement(
      "div",
      {
        onClick: !disable && props.onClick,
        ref: ref,
        className:
          " border-gray-light place-items-center  border rounded-md px-2 flex flex-wrap ",
      },
      react_1.default.createElement(
        "label",
        {
          className: "mr-3 font-nunitoSansRegular text-primaryCharcoal text-lg",
        },
        props.value || props.placeholder
      ),
      react_1.default.createElement(datePicker_svg_1.ReactComponent, {
        width: 15,
        height: 15,
      })
    );
  });
  CustomInput.displayName = "CustomInput";
  const handleChanges = (date) => {
    setPickedDate(date);
  };
  return react_1.default.createElement(
    "div",
    { className: `${className}   items-center flex justify-start ` },
    react_1.default.createElement(
      "div",
      { className: "flex-wrap" },
      react_1.default.createElement(react_datepicker_1.default, {
        selected: pickedDate || new Date(),
        dateFormat: showFormat,
        placeholder: placeholder,
        onChange: handleChanges,
        customInput: react_1.default.createElement(CustomInput, null),
      })
    )
  );
};
exports.DatePickerComp = DatePickerComp;
//# sourceMappingURL=date-picker.component.js.map
