import { Autocomplete } from "./autocomplete";
const meta = {
  title: "Design System/Molecules/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: `import { Autocomplete } from 'react-restyle-components'`,
  },
};
export default meta;
export const Primary = {
  args: {
    value: "",
    onValueChange: () => {},
    options: ["One", "Two", "Three", "Four"],
  },
};
