import React from "react";
import { Loader } from "./loader.component";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Loader",
  component: Loader,
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary = () =>
  React.createElement(
    "div",
    { className: "flex flex-row" },
    React.createElement(Loader, null)
  );
//# sourceMappingURL=loader.stories.js.map
