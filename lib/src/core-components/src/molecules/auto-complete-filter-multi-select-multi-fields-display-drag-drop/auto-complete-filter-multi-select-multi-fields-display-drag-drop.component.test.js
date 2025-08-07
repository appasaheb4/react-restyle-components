import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import { AutoCompleteFilterMultiSelectMultiFieldsDisplayDragDrop } from './auto-complete-filter-multi-select-multi-fields-display-drag-drop.component';
describe('AutoCompleteFilterMultiSelectMultiFieldsDisplayDragDrop component', () => {
    it('render AutoCompleteFilterMultiSelectMultiFieldsDisplayDragDrop correctly', () => {
        const autoCompleteFilterMutiSelectMultiFieldsDisplay = render(_jsx(AutoCompleteFilterMultiSelectMultiFieldsDisplayDragDrop, { data: {
                list: [
                    { code: 'Lims', name: 'plus' },
                    { code: 'Lims', name: 'plus' },
                    { code: 'Lims', name: 'plus' },
                ],
                displayKey: ['code', 'name'],
            }, onFilter: () => jest.fn(), onSelect: () => jest.fn(), onUpdate: () => jest.fn() }));
        expect(autoCompleteFilterMutiSelectMultiFieldsDisplay).toMatchSnapshot();
    });
});
