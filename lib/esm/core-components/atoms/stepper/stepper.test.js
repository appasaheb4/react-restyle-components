import React from 'react';
import { render } from '@core-utils';
import { Stepper } from './stepper.component';
it('render Stepper correctly', () => {
    const stepper = render(React.createElement(Stepper, { steps: ['1', '2', '3', '4'], currentStep: 3, onStepClick: () => jest.fn(), className: "mt-4" }));
    expect(stepper).toMatchSnapshot();
});
//# sourceMappingURL=stepper.test.js.map