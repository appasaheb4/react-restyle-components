import { InputDropdown } from './input-dropdown.component';
const meta = {
    title: 'Design System/Atoms/InputDropdown',
    component: InputDropdown,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: `import { InputDropdown } from 'react-restyle-components'`,
    },
};
export default meta;
export const Basic = {
    args: {
        title: 'Source of funds',
        items: ['Bank account', 'UPI', 'Credit Card'],
        hasError: true,
    },
};
