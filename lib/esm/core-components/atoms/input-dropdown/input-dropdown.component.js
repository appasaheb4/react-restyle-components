import React, { useState, useEffect, useRef } from "react";
import UpArrow from "../../../library/assets/svg/UpArrow.svg";
import DownArrow from "../../../library/assets/svg/DownArrow.svg";
export const InputDropdown = ({
  items,
  className,
  hasError,
  title,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          isOpen &&
          isOpen
        )
          setIsOpen(!isOpen);
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return React.createElement(
    "div",
    { className: `${className} relative` },
    React.createElement(
      "div",
      { className: "flex flex-row items-center " },
      React.createElement("input", {
        type: "text",
        name: "name",
        placeholder: title,
        value: value,
        className:
          " text-gray-dark-secondary pt-3 pb-2  w-full px-0 mt-0 bg-transparent border-gray-secondary border-0 border-b appearance-none focus:outline-none focus:ring-0 font-nunitoSansRegular text-md",
        onClick: () => {
          setIsOpen(!isOpen);
        },
        onChange: (event) => onChange && onChange(event.target.value),
      }),
      !isOpen &&
        React.createElement("img", {
          src: UpArrow,
          className: "absolute h-4 w-4 right-0",
        }),
      isOpen &&
        React.createElement("img", {
          src: DownArrow,
          className: "absolute h-4 w-4 right-0",
        })
    ),
    isOpen &&
      React.createElement(
        "div",
        {
          className:
            "z-10  w-full absolute text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700",
          ref: wrapperRef,
        },
        React.createElement(
          "ul",
          { className: "py-1" },
          items.map((item, index) =>
            React.createElement(
              "li",
              {
                key: index,
                className:
                  "block py-2 px-4 text-md  hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200   font-nunitoSansRegular",
                onClick: () => {
                  setValue(item);
                  setIsOpen(!isOpen);
                },
              },
              item
            )
          )
        )
      ),
    hasError &&
      React.createElement(
        "span",
        { className: "text-primaryCharcoal text-4xs", id: "error" },
        `${title} is required`
      )
  );
};
//# sourceMappingURL=input-dropdown.component.js.map
