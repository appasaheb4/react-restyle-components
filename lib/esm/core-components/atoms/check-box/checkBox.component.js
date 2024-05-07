import React from "react";
import { UnCheckbox, CheckedBox } from "../../../library/assets/svg";
export const CheckBox = ({ className, checked, onChange }) => {
  const width = 20;
  const hanleClick = () => {
    onChange();
  };
  return React.createElement(
    "div",
    { className: `${className} flex flex-row  mr-2`, onClick: hanleClick },
    checked
      ? React.createElement(CheckedBox, {
          width: width,
          height: width,
          fill: "#E7503D",
          stroke: "E7503D",
        })
      : React.createElement(UnCheckbox, { width: width, height: width }),
  );
};
//# sourceMappingURL=checkBox.component.js.map
