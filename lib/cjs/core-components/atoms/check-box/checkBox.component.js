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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckBox = void 0;
const react_1 = __importStar(require("react"));
const svg_1 = require("../../../library/assets/svg");
const form_component_1 = require("../form/form.component");
const CheckBox = ({
  title = "Banks",
  data = [{ title: "SBI Bank", checked: false }],
  className,
  onChange,
}) => {
  const [list, setList] = (0, react_1.useState)(data);
  const width = 20;
  return react_1.default.createElement(
    form_component_1.InputWrapper,
    { label: title },
    list === null || list === void 0
      ? void 0
      : list.map((item, index) =>
          react_1.default.createElement(
            "div",
            {
              className: `${className} flex flex-row  items-center `,
              onClick: () => {
                const result =
                  list === null || list === void 0
                    ? void 0
                    : list.map((e, i) => {
                        if (i == index)
                          return Object.assign(Object.assign({}, e), {
                            checked: !item.checked,
                          });
                        else return Object.assign({}, e);
                      });
                setList(result);
                onChange(
                  result === null || result === void 0
                    ? void 0
                    : result.filter((item) => item.checked),
                );
              },
              key: index,
            },
            react_1.default.createElement(
              "div",
              { className: "flex mt-1" },
              item.checked
                ? react_1.default.createElement(svg_1.CheckedBox, {
                    width: width,
                    height: width,
                    fill: "#E7503D",
                    stroke: "E7503D",
                  })
                : react_1.default.createElement(svg_1.UnCheckbox, {
                    width: width,
                    height: width,
                  }),
            ),
            react_1.default.createElement(
              "span",
              null,
              item === null || item === void 0 ? void 0 : item.title,
            ),
          ),
        ),
  );
};
exports.CheckBox = CheckBox;
//# sourceMappingURL=checkBox.component.js.map
