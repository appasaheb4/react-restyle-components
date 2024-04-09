/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-indent-props */
import React from "react";
import { CSSMultiline } from "./css-multiline-input.component";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/CSSMultiline",
  component: CSSMultiline,
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary = () =>
  React.createElement(CSSMultiline, {
    onChange: (item) => {
      console.log({ item });
    },
  });
//# sourceMappingURL=css-multiline-input.stories.js.map
