import React, { Suspense } from "react";
import _ from "lodash";
import { Tooltip } from "../..";
import loadable from "@loadable/component";
let lib = "md";
export const Icon = ({
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
    // const fullLib = `react-icons/${lib}/index.js`;
    const fullLib = `react-icons/md/index.js`;
    let ElementIcon = loadable(() => import(fullLib), {
      resolveComponent: (el) =>
        el[nameIcon] != null ? el[nameIcon] : el[Object.keys(el.default)[0]],
    });
    // ElementIcon = loadable(() => import(`react-icons/${lib}`), {
    //   resolveComponent: (el) =>
    //     el[nameIcon] != null ? el[nameIcon] : el[Object.keys(el.default)[0]],
    // });
    return React.createElement(
      "div",
      {
        onClick: () => {
          if (!isDisable) onClick && onClick();
        },
      },
      !_.isEmpty(tooltip)
        ? React.createElement(
            Tooltip,
            { tooltipText: tooltip },
            React.createElement(ElementIcon, Object.assign({}, iconProps)),
          )
        : React.createElement(
            Suspense,
            { fallback: React.createElement("div", null, "Loading...") },
            React.createElement(ElementIcon, Object.assign({}, iconProps)),
          ),
    );
  } catch (error) {
    return React.createElement(React.Fragment, null);
  }
};
//# sourceMappingURL=icons.component.js.map
