/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import { render } from "@core-utils";
import { Loader } from "./loader.component";
it("render XB_Loader correctly", () => {
  const loader = render(React.createElement(Loader, null));
  expect(loader).toMatchSnapshot();
});
//# sourceMappingURL=loader.component.test.js.map
