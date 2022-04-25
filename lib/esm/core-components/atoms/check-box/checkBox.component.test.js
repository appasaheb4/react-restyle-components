/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react';
import { render } from '@core-utils';
import { CheckBox } from './checkBox.component';
it('render XB_CheckBox correctly', () => {
    const checkbox = render(React.createElement(CheckBox, { checked: true, onChange: () => jest.fn() }));
    expect(checkbox).toMatchSnapshot();
});
//# sourceMappingURL=checkBox.component.test.js.map