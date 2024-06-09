import React from "react";
import { render } from "@core-utils";
import { Tabs } from "./tabs.component";
it("render Tabs correctly", () => {
  const tabs = render(
    React.createElement(Tabs, {
      options: [
        { title: "Work History", icon: "FaHistory" },
        { title: "Book Order", icon: "FaBook" },
        { title: "Make Frame", icon: "MdFilterFrames" },
      ],
      onSelect: (item) => {
        console.log({ item });
      },
    }),
  );
  expect(tabs).toMatchSnapshot();
});
//# sourceMappingURL=tabs.test.js.map
