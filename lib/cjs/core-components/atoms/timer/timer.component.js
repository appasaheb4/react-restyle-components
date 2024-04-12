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
exports.Timer = void 0;
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-expressions */
const react_1 = __importStar(require("react"));
const svg_1 = require("../../../library/assets/svg");
// eslint-disable-next-line react/display-name
exports.Timer = react_1.default.forwardRef(({ onClear }, ref) => {
  const width = 15;
  const [minute, setMinute] = (0, react_1.useState)("00");
  const [second, setSecond] = (0, react_1.useState)("10");
  (0, react_1.useEffect)(() => {
    const sec = parseInt(second);
    const min = parseInt(minute);
    const countDown = setInterval(() => {
      if (min === 0 && sec === 0) {
        setMinute("00");
        setSecond("00");
        clearInterval(countDown);
        onClear && onClear();
      } else {
        let secondstTmp = (sec - 1).toString();
        if (secondstTmp.length === 1) {
          secondstTmp = "0".concat(secondstTmp);
        }
        setSecond(secondstTmp);
        if (sec === 0) {
          setSecond("59");
          const m = (min - 1).toString();
          setMinute("0" + m);
        }
      }
    }, 1000);
    return () => {
      clearInterval(countDown);
    };
  });
  (0, react_1.useImperativeHandle)(ref, () => ({
    updateState() {
      setMinute("02");
      setSecond("00");
    },
    resetTimer() {
      // eslint-disable-next-line no-console
      const sec = parseInt(second);
      const min = parseInt(minute === "00" ? "02" : minute);
      const countDown = setInterval(() => {
        // eslint-disable-next-line no-console
        if (min === 0 && sec === 0) {
          setMinute("00");
          setSecond("00");
          clearInterval(countDown);
          onClear && onClear();
        } else {
          let secondstTmp = (sec - 1).toString();
          if (secondstTmp.length === 1) {
            secondstTmp = "0".concat(secondstTmp);
          }
          setSecond(secondstTmp);
          if (sec === 0) {
            setSecond("59");
            const m = (min - 1).toString();
            setMinute("0" + m);
          }
        }
      }, 1000);
      return () => {
        clearInterval(countDown);
      };
    },
  }));
  return react_1.default.createElement(
    "div",
    { className: "flex flex-row items-center" },
    react_1.default.createElement(svg_1.TimerSVG, {
      width: width,
      height: width,
      fill: "#E7503D",
    }),
    react_1.default.createElement(
      "div",
      { className: "ml-2 flex flex-row" },
      react_1.default.createElement("span", null, minute, ":"),
      react_1.default.createElement("span", null, second),
    ),
  );
});
//# sourceMappingURL=timer.component.js.map
