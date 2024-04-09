import React from "react";
import { DatePickerComp } from "./date-picker.component";
import dayjs from "dayjs";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/DatePickerComp",
  component: DatePickerComp,
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary = () =>
  React.createElement(
    "div",
    { className: "flex flex-row" },
    React.createElement(DatePickerComp, {
      className: "mt-6",
      value: dayjs().format("YYYY-MM-DD"),
      showFormat: "dd-MM-yyyy",
    })
  );
//# sourceMappingURL=date-picker.stories.js.map
