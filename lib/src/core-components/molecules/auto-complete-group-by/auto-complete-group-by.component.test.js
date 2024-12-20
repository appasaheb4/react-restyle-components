import React from 'react';
import { render } from '@testing-library/react';
import { AutocompleteGroupBy } from './auto-complete-group-by.component';
describe('AutocompleteGroupBy component', () => {
    it('render autocompleteGroupBy correctly', () => {
        const autocompleteGroupBy = render(React.createElement(AutocompleteGroupBy, { data: [] }));
        expect(autocompleteGroupBy).toMatchSnapshot();
    });
});
