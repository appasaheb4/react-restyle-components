"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const tabs_component_1 = require("./tabs.component");
const meta = {
  title: "Design System/Atoms/Tabs",
  component: tabs_component_1.Tabs,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: `import { Tabs } from 'react-restyle-components'`,
  },
};
exports.default = meta;
exports.Primary = {
  args: {
    options: [
      { title: "Work History", icon: "FaHistory" },
      { title: "Book Order", icon: "FaBook" },
      { title: "Make Frame", icon: "MdFilterFrames" },
    ],
    onSelect: (item) => {
      console.log({ item });
    },
  },
};
//# sourceMappingURL=tabs.stories.js.map
