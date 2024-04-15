import React from "react";
export const Button = ({
  type = "solid",
  className,
  disable,
  onClick,
  children,
}) => {
  const buttonColorClass =
    type === "solid"
      ? "text-white bg-[#007BFF] hover:bg-[#007BFF] hover:shadow-lg"
      : "dark:text-white  text-black border border-gray-400 hover:shadow-lg";
  return React.createElement(
    "button",
    {
      "data-testid": "buttonElement",
      disabled: disable,
      className: `${className} rounded-100px px-3 py-1 text-text-base text-md ${buttonColorClass} pt-2 pb-2 font-nunitoSansRegular ${disable ? "opacity-50" : "opacity-100"}`,
      onClick: () => onClick(),
    },
    children,
  );
};
//# sourceMappingURL=buttons.component.js.map
