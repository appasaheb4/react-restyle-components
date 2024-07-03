import { MultipleSelect } from './multi-select.component';
const meta = {
    title: 'Design System/Molecules/MultipleSelect',
    component: MultipleSelect,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: `import { MultipleSelect } from 'react-restyle-components'`,
    },
};
export default meta;
export const Primary = {
    args: {
        options: ['UPI', 'CARD', 'CASH'],
        selectedItems: ['CASH', 'UPI'],
        onSelect: (item) => {
            console.log({ item });
        },
    },
};
