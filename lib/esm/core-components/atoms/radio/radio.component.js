import React, { useState } from "react";
import { CheckedRadio, UncheckRadio } from "../../../library/assets/svg";
import { InputWrapper } from "../form/form.component";
export const Radio = ({ title = "Source", data = [], className, onChange }) => {
  const [list, setList] = useState(data);
  const width = 20;
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      InputWrapper,
      { label: title },
      list === null || list === void 0
        ? void 0
        : list.map((item, index) =>
            React.createElement(
              "div",
              {
                className: `${className} flex items-center mb-1`,
                onClick: () => {
                  const result =
                    list === null || list === void 0
                      ? void 0
                      : list.map((e, i) => {
                          if (i == index)
                            return Object.assign(Object.assign({}, e), {
                              checked: true,
                            });
                          else
                            return Object.assign(Object.assign({}, e), {
                              checked: false,
                            });
                        });
                  setList(result);
                  onChange(
                    result === null || result === void 0
                      ? void 0
                      : result.find((item) => item.checked),
                  );
                },
                key: index,
              },
              React.createElement(
                "div",
                { className: "flex flex-row gap-1 items-center" },
                item.checked
                  ? React.createElement(CheckedRadio, {
                      width: width,
                      height: width,
                    })
                  : React.createElement(UncheckRadio, {
                      width: width,
                      height: width,
                    }),
                React.createElement(
                  "span",
                  { className: "text-4xs" },
                  item === null || item === void 0 ? void 0 : item.title,
                ),
              ),
            ),
          ),
    ),
  );
};
//# sourceMappingURL=radio.component.js.map
