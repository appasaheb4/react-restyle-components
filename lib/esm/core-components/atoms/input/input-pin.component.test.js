/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react';
import { render } from '@core-utils';
import { InputPin } from './input-pin.component';
it('render InputOtp correctly without error', () => {
    const pinInput = render(React.createElement(InputPin, { title: "Enter your Aadhaar Number", hasError: false, errorMsg: "Uh oh! You\u2019ve entered an invalid aadhaar number", onPinChanged: () => jest.fn(), pin: new Array(12) }));
    expect(pinInput).toMatchSnapshot();
});
it('render InputOtp correctly with error', () => {
    const pinInput = render(React.createElement(InputPin, { title: "Enter your Aadhaar Number", hasError: true, errorMsg: "Uh oh! You\u2019ve entered an invalid aadhaar number", onPinChanged: () => jest.fn(), pin: new Array(12) }));
    expect(pinInput).toMatchSnapshot();
});
//# sourceMappingURL=input-pin.component.test.js.map