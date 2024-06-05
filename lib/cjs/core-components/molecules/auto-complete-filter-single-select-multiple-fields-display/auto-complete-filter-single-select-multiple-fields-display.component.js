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
exports.AutoCompleteFilterSingleSelectMultiFieldsDisplay = void 0;
/* eslint-disable  */
const react_1 = __importStar(require("react"));
const __1 = require("../..");
const AutoCompleteFilterSingleSelectMultiFieldsDisplay = ({
  disable = false,
  loader = false,
  displayValue = "",
  placeholder = "Search...",
  data,
  hasError = false,
  className,
  posstion = "absolute",
  onFilter,
  onSelect,
  onBlur,
}) => {
  const [value, setValue] = (0, react_1.useState)(displayValue);
  const [options, setOptions] = (0, react_1.useState)(data.list);
  const [isListOpen, setIsListOpen] = (0, react_1.useState)(false);
  const [filterValue, setFilterValue] = (0, react_1.useState)();
  const useOutsideAlerter = (ref) => {
    (0, react_1.useEffect)(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && isListOpen) {
          setIsListOpen(false);
          //setValue('');
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, isListOpen]);
  };
  const wrapperRef = (0, react_1.useRef)(null);
  useOutsideAlerter(wrapperRef);
  (0, react_1.useEffect)(() => {
    setOptions(data.list);
  }, [data]);
  (0, react_1.useEffect)(() => {
    setValue(displayValue);
  }, [displayValue]);
  const onChange = (e) => {
    var _a;
    const search =
      (_a = e.target.value) === null || _a === void 0
        ? void 0
        : _a.toUpperCase();
    setValue(search);
    setFilterValue(search);
    onFilter && onFilter(search);
  };
  const onKeyUp = (e) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode === 8) {
      const search = e.target.value;
      onFilter && onFilter(search);
    }
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      if (options.length > 0) {
        const selectedItem = options.find(
          (item) => item.labId === Number(value),
        );
        if (selectedItem) {
          setValue(
            data.displayKey.map((key) => `${selectedItem[key]}`).join(" - "),
          );
          setIsListOpen(false);
          onSelect && onSelect(selectedItem);
        }
      }
    }
  };
  return react_1.default.createElement(
    react_1.default.Fragment,
    null,
    react_1.default.createElement(
      "div",
      { ref: wrapperRef, className: "w-full relative" },
      react_1.default.createElement(
        "div",
        {
          className: `flex items-center leading-4 p-2 focus:outline-none focus:ring  w-full shadow-sm sm:text-base border-2 ${hasError ? "border-red" : "border-gray-300"} rounded-md dark:text-black`,
        },
        react_1.default.createElement("input", {
          placeholder: placeholder,
          value: value,
          className: `${className} w-full focus:outline-none bg-none dark:text-black`,
          onKeyUp: onKeyUp,
          onChange: onChange,
          onClick: () => setIsListOpen(true),
          disabled: disable,
          onMouseDown: () => setValue(""),
          onBlur: (e) => onBlur && onBlur(e),
          onKeyDown: onKeyDown,
        }),
        isListOpen
          ? react_1.default.createElement(__1.Icon, {
              nameIcon: "FaChevronUp",
              propsIcon: {
                color: "#000000",
                size: 22,
              },
            })
          : react_1.default.createElement(__1.Icon, {
              nameIcon: "FaChevronDown",
              propsIcon: {
                color: "#000000",
                size: 22,
              },
            }),
      ),
      options && isListOpen
        ? options.length > 0 &&
            react_1.default.createElement(
              "div",
              {
                className: `mt-1 absolute  w-full bg-gray-100 p-2 rounded-sm `,
                style: {
                  zIndex: 500,
                },
              },
              react_1.default.createElement(
                "ul",
                null,
                options === null || options === void 0
                  ? void 0
                  : options.map((item, index) =>
                      react_1.default.createElement(
                        "li",
                        {
                          key: index,
                          className: "text-gray-400 flex items-center",
                          onClick: () => {
                            setValue(
                              data.displayKey
                                .map((key) => `${item[key]}`)
                                .join(" - "),
                            );
                            setIsListOpen(false);
                            onSelect && onSelect(item);
                          },
                        },
                        " ",
                        react_1.default.createElement(
                          "label",
                          {
                            className: "ml-2 mt-1 text-black",
                            style: {
                              textOverflow: "ellipsis",
                              minWidth: 0,
                              overflow: "hidden",
                              maxWidth: "334px",
                              whiteSpace: "nowrap",
                            },
                            title: data.displayKey
                              .map((key) => item[key])
                              .join(" - "),
                          },
                          data.displayKey
                            .map(
                              (key) => `${item[key]}
                              `,
                            )
                            .join(" - "),
                        ),
                      ),
                    ),
              ),
            )
        : null,
    ),
  );
};
exports.AutoCompleteFilterSingleSelectMultiFieldsDisplay =
  AutoCompleteFilterSingleSelectMultiFieldsDisplay;
//# sourceMappingURL=auto-complete-filter-single-select-multiple-fields-display.component.js.map
