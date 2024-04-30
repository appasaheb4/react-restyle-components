"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stepper = void 0;
const react_1 = __importDefault(require("react"));
const Stepper = ({ className = "", steps, currentStep = 1, onStepClick }) => {
  const finalClass = `${className} w-full px-4 sm:px-8`;
  const progressClass =
    "absolute my-4 top-1/2 left-0 h-0.5  transform -translate-y-1/2 bg-orange transition-width ease-in-out duration-500";
  const Steps =
    steps === null || steps === void 0
      ? void 0
      : steps.map((step, index) => {
          let stepClass =
            "inline-block transform -translate-x-1/2 pt-1 w-8 h-8 rounded-full text-center";
          if (index < currentStep)
            stepClass +=
              " font-medium border border-orange  bg-background-secondary text-gray";
          else if (index > currentStep)
            stepClass +=
              " font-medium border border-gray-dark-secondary text-gray bg-background-secondary";
          else if (currentStep === index)
            stepClass += " font-medium bg-orange text-white";
          if (typeof onStepClick === "function") stepClass += " cursor-pointer";
          return react_1.default.createElement(
            "div",
            {
              key: step,
              style: { left: `${(index / (steps.length - 1)) * 100}%` },
              className: "absolute",
            },
            react_1.default.createElement(
              "span",
              {
                className: `${stepClass} font-nunitoSansRegular  text-4xs text-center`,
                onClick: () => {
                  if (typeof onStepClick === "function")
                    onStepClick(index + 1, step);
                },
              },
              step,
            ),
          );
        });
  return react_1.default.createElement(
    "div",
    { className: finalClass },
    react_1.default.createElement(
      "div",
      { className: "w-full relative" },
      react_1.default.createElement(
        "div",
        {
          className: progressClass,
          style: {
            width: `${(currentStep / (steps.length - 1)) * 100}%`,
          },
        },
        react_1.default.createElement("div", {
          className:
            "w-3 h-3 bg-orange rounded-full absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2",
        }),
      ),
      react_1.default.createElement("div", {
        className:
          "absolute h-0.5 my-4 top-1/2 left-0 transform -translate-y-1/2 bg-gray-dark-secondary transition-width ease-in-out duration-500",
        style: {
          marginLeft: `${(currentStep / (steps.length - 1)) * 100}%`,
          width: `${100 - (currentStep / (steps.length - 1)) * 100}%`,
        },
      }),
    ),
    react_1.default.createElement(
      "div",
      { className: "relative sm:block" },
      Steps,
    ),
  );
};
exports.Stepper = Stepper;
//# sourceMappingURL=stepper.component.js.map
