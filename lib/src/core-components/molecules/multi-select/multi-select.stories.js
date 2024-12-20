import { MultiSelect } from './multi-select.component';
const meta = {
    title: 'Design System/Molecules/MultiSelect',
    component: MultiSelect,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: `import { MultiSelect } from 'react-restyle-components'`,
    },
};
export default meta;
export const Basic = {
    args: {
        options: ['UPI', 'CARD', 'CASH'],
        selectedItems: ['CASH', 'UPI'],
        onSelect: (item) => {
            console.log({ item });
        },
    },
};
