import { Tabs } from "./tabs.component";
const meta = {
  title: "Design System/Atoms/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: `import { Tabs } from 'react-restyle-components'`,
  },
};
export default meta;
export const Primary = {
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
