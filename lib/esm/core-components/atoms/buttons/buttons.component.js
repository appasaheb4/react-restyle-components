import React from "react";
export const Button = ({ className, disable, onClick, children }) => {
  return React.createElement(
    "button",
    {
      "data-testid": "buttonElement",
      disabled: disable,
      className: `${className} rounded-100px px-3 py-1 text-text-base text-md pt-2 pb-2 font-nunitoSansRegular`,
      onClick: () => onClick(),
    },
    children
  );
};
//# sourceMappingURL=buttons.component.js.map
