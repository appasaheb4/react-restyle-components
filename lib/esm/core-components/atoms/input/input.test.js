/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import { render } from "@core-utils";
import { Input } from "./input.component";
it("render Input correctly without error", () => {
  const input = render(
    React.createElement(Input, {
      className: "h-1 relative top-1 border-red-600 border-b-0 dummy",
      title: "input",
      hasError: false,
      value: "",
      inputStyle: " border-b-0 invisible ",
      onChange: () => jest.fn(),
    })
  );
  expect(input).toMatchSnapshot();
});
it("render Input correctly with error", () => {
  const input = render(
    React.createElement(Input, {
      className: "h-1 relative top-1 border-red-600 border-b-0 dummy",
      title: "input",
      hasError: true,
      value: "",
      inputStyle: " border-b-0 invisible ",
      onChange: () => jest.fn(),
    })
  );
  expect(input).toMatchSnapshot();
});
//# sourceMappingURL=input.test.js.map
