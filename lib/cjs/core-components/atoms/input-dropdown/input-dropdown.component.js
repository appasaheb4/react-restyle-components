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
exports.InputDropdown = void 0;
const react_1 = __importStar(require("react"));
const svg_1 = require("../../../library/assets/svg");
const InputDropdown = ({ items, className, hasError, title, onChange }) => {
  const [isOpen, setIsOpen] = (0, react_1.useState)(false);
  const [value, setValue] = (0, react_1.useState)("");
  const useOutsideAlerter = (ref) => {
    (0, react_1.useEffect)(() => {
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
  const wrapperRef = (0, react_1.useRef)(null);
  useOutsideAlerter(wrapperRef);
  return react_1.default.createElement(
    "div",
    { className: `${className} relative` },
    react_1.default.createElement(
      "div",
      { className: "flex flex-row items-center " },
      react_1.default.createElement("input", {
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
        react_1.default.createElement("img", {
          src: svg_1.UpArrow,
          className: "absolute h-4 w-4 right-0",
        }),
      isOpen &&
        react_1.default.createElement("img", {
          src: svg_1.DownArrow,
          className: "absolute h-4 w-4 right-0",
        }),
    ),
    isOpen &&
      react_1.default.createElement(
        "div",
        {
          className:
            "z-10  w-full absolute text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700",
          ref: wrapperRef,
        },
        react_1.default.createElement(
          "ul",
          { className: "py-1" },
          items.map((item, index) =>
            react_1.default.createElement(
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
              item,
            ),
          ),
        ),
      ),
    hasError &&
      react_1.default.createElement(
        "span",
        { className: "text-primaryCharcoal text-4xs", id: "error" },
        `${title} is required`,
      ),
  );
};
exports.InputDropdown = InputDropdown;
//# sourceMappingURL=input-dropdown.component.js.map
