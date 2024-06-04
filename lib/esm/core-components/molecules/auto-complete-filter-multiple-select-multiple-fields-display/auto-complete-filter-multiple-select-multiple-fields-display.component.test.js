import React from "react";
import { render } from "@core-utils";
import { AutoCompleteFilterMultipleSelectMultipleFieldsDisplay } from "./auto-complete-filter-multiple-select-multiple-fields-display.component";
it("render AutoCompleteFilterMultipleSelectMultipleFieldsDisplay correctly", () => {
  const autoCompleteFilterMultipleSelectMultipleFieldsDisplay = render(
    React.createElement(AutoCompleteFilterMultipleSelectMultipleFieldsDisplay, {
      data: [],
      onUpdate: (item) => {
        console.log({ item });
      },
      onSelect: (item) => {},
    }),
  );
  expect(
    autoCompleteFilterMultipleSelectMultipleFieldsDisplay,
  ).toMatchSnapshot();
});
//# sourceMappingURL=auto-complete-filter-multiple-select-multiple-fields-display.component.test.js.map
