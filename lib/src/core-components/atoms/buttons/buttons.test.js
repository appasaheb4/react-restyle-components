/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react';
import { render } from '@core-utils';
import { Button } from './buttons.component';
it('render Button correctly', () => {
    const button = render(React.createElement(Button, { className: "bg-gray-light w-40", onClick: () => jest.fn() }, "Permanent Address"));
    expect(button).toMatchSnapshot();
});
