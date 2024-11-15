import { AutocompleteGroupBy } from './auto-complete-group-by.component';
const meta = {
    title: 'Design System/Molecules/AutocompleteGroupBy',
    component: AutocompleteGroupBy,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: `import { AutocompleteGroupBy } from 'react-restyle-components'`,
        // backgrounds: {
        //   default: 'light-gray',
        // },
    },
};
export default meta;
export const Primary = {
    args: {
        data: [
            {
                title: 'Country',
                code: 'C',
                children: [
                    { title: 'India', code: 'I' },
                    { title: 'United States', code: 'US' },
                ],
            },
            {
                title: 'Social Media',
                code: 'C',
                children: [
                    { title: 'Facebook', code: 'F' },
                    { title: 'Instagram', code: 'I' },
                ],
            },
        ],
        hasError: true,
        onChange: () => { },
        onClose: () => { },
    },
};
