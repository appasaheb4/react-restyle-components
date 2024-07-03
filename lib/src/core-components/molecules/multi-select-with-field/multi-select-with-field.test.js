/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react';
import { render } from '@core-utils';
import { MultiSelectWithField } from './multi-select-with-field.component';
it('render MultiSelectWithField correctly', () => {
    const result = render(React.createElement(MultiSelectWithField, { displayField: 'code', options: [{ code: 'UPI' }, { code: 'CARD' }, { code: 'CASH' }], selectedItems: [{ code: 'CASH' }], onSelect: (item) => {
            console.log({ item });
        } }));
    expect(result).toMatchSnapshot();
});
