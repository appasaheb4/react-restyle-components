import React from "react";
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
    // const ElementIcon: any = loadable(
    //   () => import(`react-icons/${lib}/index.js`),
    //   {
    //     resolveComponent: (el) =>
    //       el[nameIcon] != null ? el[nameIcon] : el[Object.keys(el.default)[0]],
    //   }
    // );
    return React.createElement("div", {
      onClick: () => {
        if (!isDisable) onClick && onClick();
      },
    });
  } catch (error) {
    return React.createElement(React.Fragment, null);
  }
};
//# sourceMappingURL=icons.component.js.map
