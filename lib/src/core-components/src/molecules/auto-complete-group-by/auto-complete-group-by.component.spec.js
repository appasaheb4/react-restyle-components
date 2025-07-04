import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AutocompleteGroupBy } from './auto-complete-group-by.component';
describe('AutocompleteGroupBy component', () => {
    it('render autocompleteGroupBy correctly', () => {
        const autocompleteGroupBy = render(_jsx(AutocompleteGroupBy, { data: [] }));
        expect(autocompleteGroupBy).toMatchSnapshot();
    });
});
