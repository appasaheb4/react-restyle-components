/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import { render } from "@core-utils";
import { InputDropdown } from "./input-dropdown.component";
it("render InputDropdown correctly", () => {
  const inputDropDown = render(
    React.createElement(InputDropdown, {
      title: "Source of funds",
      items: ["Bank account", "UPI", "Credit Card"],
      hasError: true,
      onChange: () => jest.fn(),
    })
  );
  expect(inputDropDown).toMatchSnapshot();
});
//# sourceMappingURL=input-dropdown.test.js.map
