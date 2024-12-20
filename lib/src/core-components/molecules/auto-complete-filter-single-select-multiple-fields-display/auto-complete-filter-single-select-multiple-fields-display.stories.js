import { AutoCompleteFilterSingleSelectMultiFieldsDisplay } from './auto-complete-filter-single-select-multiple-fields-display.component';
const meta = {
    title: 'Design System/Molecules/AutoCompleteFilterSingleSelectMultiFieldsDisplay',
    component: AutoCompleteFilterSingleSelectMultiFieldsDisplay,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: `import { AutoCompleteFilterSingleSelectMultiFieldsDisplay } from 'react-restyle-components'`,
    },
};
export default meta;
export const Basic = {
    args: {
        data: {
            list: [
                { code: 'Code1', name: 'Value1' },
                { code: 'Code2', name: 'Value2' },
                { code: 'Code3', name: 'Value3' },
            ],
            displayKey: ['name'],
        },
        onSelect: (item) => {
            console.log({ item });
        },
    },
};
