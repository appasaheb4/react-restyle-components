import { CheckBox } from "./checkBox.component";
const meta = {
  title: "Design System/Atoms/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: `import { CheckBox } from 'react-restyle-components'`,
  },
};
export default meta;
export const Primary = {
  args: {
    title: "Banks",
    data: [
      { title: "SBI Bank", checked: false },
      { title: "ICICI Bank", checked: false },
    ],
    disable: false,
    onChange: (item) => {
      console.log({ item });
    },
  },
};
