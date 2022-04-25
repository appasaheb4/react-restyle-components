/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import { render } from "@core-utils";
import { Radio } from "./radio.component";
it("render XB_Radio correctly", () => {
  const radio = render(
    React.createElement(Radio, { checked: true, onChange: () => jest.fn() })
  );
  expect(radio).toMatchSnapshot();
});
//# sourceMappingURL=radio.component.test.js.map
