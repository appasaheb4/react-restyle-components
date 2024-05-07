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
exports.CSSMultiline = void 0;
const react_1 = __importStar(require("react"));
const __1 = require("../..");
const css_properties_1 = require("./css-properties");
const mapToArray = (arr) => {
  const res = [];
  arr.forEach(function (obj, index) {
    const key = Object.keys(obj)[0];
    const value = key;
    res.push([value, obj[key]]);
  });
  return res;
};
const data = mapToArray(css_properties_1.properties);
const CSSMultiline = ({
  label = "Main Box CSS",
  defaultValue = "",
  className = "",
  style = {},
  placeholder = "Like fontSize: 12,backgroundColor:'#000000',",
  onChange,
}) => {
  const value = (0, react_1.useRef)("");
  const [properties, setProperties] = (0, react_1.useState)([]);
  const [isListOpen, setIsListOpen] = (0, react_1.useState)(false);
  (0, react_1.useEffect)(() => {
    value.current = defaultValue;
    setProperties(data);
  }, [defaultValue]);
  const useOutsideAlerter = (ref) => {
    (0, react_1.useEffect)(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsListOpen(false);
          onChange(value.current);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  const wrapperRef = (0, react_1.useRef)(null);
  useOutsideAlerter(wrapperRef);
  const list = [];
  const filter = (css) => {
    let matchString = css === null || css === void 0 ? void 0 : css.split(",");
    matchString =
      matchString[
        (matchString === null || matchString === void 0
          ? void 0
          : matchString.length) - 1
      ];
    matchString =
      matchString === null || matchString === void 0
        ? void 0
        : matchString.split(":")[0];
    matchString =
      matchString === null || matchString === void 0
        ? void 0
        : matchString.split("'")[0];
    if ((css === null || css === void 0 ? void 0 : css.length) == 0)
      return setProperties(data);
    else {
      data === null || data === void 0
        ? void 0
        : data.map((item) => {
            var _a;
            const innerItem = [];
            const isItems =
              (_a = item[0]) === null || _a === void 0
                ? void 0
                : _a.startsWith(matchString);
            if (isItems) innerItem.push(item[0]);
            if (
              (innerItem === null || innerItem === void 0
                ? void 0
                : innerItem.length) > 0
            )
              list.push([item[0], item[1]]);
          });
      setProperties(list);
    }
  };
  const onKeyUp = (e) => {
    setIsListOpen(true);
  };
  return react_1.default.createElement(
    "div",
    { className: "flex flex-col w-full", ref: wrapperRef },
    react_1.default.createElement(__1.Form.MultilineInput, {
      label: label,
      style: Object.assign(
        { color: "#ffffff", backgroundColor: "#000000" },
        style,
      ),
      placeholder: placeholder,
      value: value.current,
      className: className,
      onKeyUp: onKeyUp,
      onChange: (css) => {
        value.current = css;
        filter(css);
      },
    }),
    isListOpen &&
      react_1.default.createElement(
        "div",
        { style: { marginTop: -10 } },
        react_1.default.createElement(
          "ul",
          {
            className:
              "flex flex-col max-h-40 bg-black  m-2 text-white  overflow-y-scroll  ",
          },
          properties === null || properties === void 0
            ? void 0
            : properties.map((item, index) => {
                var _a;
                return react_1.default.createElement(
                  "li",
                  { key: index, className: "flex flex-col gap-4 p-2" },
                  react_1.default.createElement(
                    "span",
                    { className: "underline" },
                    item[0],
                  ),
                  (_a = item[1]) === null || _a === void 0
                    ? void 0
                    : _a.map((prop) =>
                        react_1.default.createElement(
                          "li",
                          {
                            className:
                              "flex -mt-2 px-2 h-8 bg-slate-800  rounded-md items-center cursor-pointer",
                            onClick: () => {
                              var _a;
                              let existsString =
                                (_a = value.current) === null || _a === void 0
                                  ? void 0
                                  : _a.split(",");
                              if (value.current.includes(",")) {
                                existsString = existsString.map((item) => {
                                  if (
                                    item === null || item === void 0
                                      ? void 0
                                      : item.includes(":")
                                  )
                                    return item;
                                });
                                if (prop != "number")
                                  existsString.push(`${item[0]}:'${prop}',`);
                                else existsString.push(`${item[0]}:1,`);
                                value.current = existsString
                                  .join(",")
                                  .replaceAll(",,", ",");
                              } else {
                                if (prop != "number")
                                  value.current = `${item[0]}:'${prop}',`;
                                else {
                                  value.current = `${item[0]}:1,`;
                                }
                              }
                              filter(existsString.join(""));
                            },
                          },
                          " ",
                          prop,
                          " ",
                        ),
                      ),
                );
              }),
        ),
      ),
  );
};
exports.CSSMultiline = CSSMultiline;
//# sourceMappingURL=css-multiline-input.component.js.map
