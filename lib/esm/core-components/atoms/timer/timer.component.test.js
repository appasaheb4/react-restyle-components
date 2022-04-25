/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import { render } from "@core-utils";
import { Timer as TimerComp } from "./timer.component";
it("render Timer correctly", () => {
  const time = render(React.createElement(TimerComp, { onClear: () => {} }));
  expect(time).toMatchSnapshot();
});
it("render Timer with minute correctly", () => {
  const time = render(React.createElement(TimerComp, { onClear: () => {} }));
  expect(time.findByText("minute")).toBeTruthy();
});
//# sourceMappingURL=timer.component.test.js.map
