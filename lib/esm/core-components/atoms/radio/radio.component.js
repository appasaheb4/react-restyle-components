import React from "react";
import { CheckedRadio, UncheckRadio } from "../../../library/assets/svg";
export const Radio = ({ className, checked, onChange }) => {
  const width = 20;
  return React.createElement(
    "div",
    { className: `${className} flex flex-row mr-2`, onClick: onChange },
    checked
      ? React.createElement(CheckedRadio, { width: width, height: width })
      : React.createElement(UncheckRadio, { width: width, height: width }),
  );
};
//# sourceMappingURL=radio.component.js.map