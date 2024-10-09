/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react';
import { render } from '@core-utils';
import { MultiSelect } from './multi-select.component';
it('render MultiSelect correctly', () => {
    const result = render(React.createElement(MultiSelect, { options: ['UPI', 'CASH'], selectedItems: ['CASH'], onSelect: () => { } }));
    expect(result).toMatchSnapshot();
});
