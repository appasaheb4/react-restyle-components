/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react';
import { render } from '@core-utils';
import { Radio } from './radio.component';
it('render Radio correctly', () => {
    const radio = render(React.createElement(Radio, { title: "Title", data: [], onChange: () => jest.fn() }));
    expect(radio).toMatchSnapshot();
});
