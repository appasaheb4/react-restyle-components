import { MultiSelectWithField } from "./multi-select-with-field.component";
const meta = {
  title: "Design System/Molecules/MultiSelectWithField",
  component: MultiSelectWithField,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: `import { MultiSelectWithField } from 'react-restyle-components'`,
  },
};
export default meta;
export const Primary = {
  args: {
    displayField: "code",
    options: [{ code: "UPI" }, { code: "CARD" }, { code: "CASH" }],
    selectedItems: [{ code: "CASH" }],
    onSelect: (item) => {
      console.log({ item });
    },
  },
};
