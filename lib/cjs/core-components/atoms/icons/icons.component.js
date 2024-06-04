"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const react_1 = __importDefault(require("react"));
const Icon = ({
  nameIcon,
  propsIcon,
  tooltip = "",
  isDisable = false,
  onClick,
}) => {
  try {
    const iconProps = Object.assign(Object.assign({}, propsIcon), {
      color: isDisable
        ? "#808080"
        : (propsIcon === null || propsIcon === void 0
            ? void 0
            : propsIcon.color) || "#ffffff",
    });
    const lib = nameIcon
      .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
      .split(" ")[0]
      .toLocaleLowerCase();
    // const ElementIcon: any = loadable(
    //   () => import(`react-icons/${lib}/index.js`),
    //   {
    //     resolveComponent: (el) =>
    //       el[nameIcon] != null ? el[nameIcon] : el[Object.keys(el.default)[0]],
    //   }
    // );
    return react_1.default.createElement("div", {
      onClick: () => {
        if (!isDisable) onClick && onClick();
      },
    });
  } catch (error) {
    return react_1.default.createElement(react_1.default.Fragment, null);
  }
};
exports.Icon = Icon;
//# sourceMappingURL=icons.component.js.map
