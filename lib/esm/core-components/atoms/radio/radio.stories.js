import React from "react";
import { Radio } from "./radio.component";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Radio",
  component: Radio,
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary = () =>
  React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: "flex flex-row" },
      React.createElement(Radio, { checked: true, onChange: () => {} }),
      React.createElement("span", null, "Married")
    )
  );
//# sourceMappingURL=radio.stories.js.map
