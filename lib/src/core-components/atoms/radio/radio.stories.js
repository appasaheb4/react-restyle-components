import { Radio } from "./radio.component";
const meta = {
  title: "Design System/Atoms/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: `import { Radio } from 'react-restyle-components'`,
  },
};
export default meta;
export const Primary = {
  args: {
    title: "Source",
    data: [
      { title: "Salary", checked: false },
      { title: "Business", checked: false },
    ],
    onChange: (item) => {
      console.log({ item });
    },
  },
};
