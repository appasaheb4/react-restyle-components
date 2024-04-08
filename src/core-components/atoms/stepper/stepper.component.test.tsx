import React from 'react';
import {render} from '@core-utils';
import {Stepper} from './stepper.component';
it('render XB_Stepper correctly', () => {
  const stepper = render(
    <Stepper
      steps={['1', '2', '3', '4']}
      currentStep={3}
      onStepClick={() => jest.fn()}
      className="mt-4"
    />
  );
  expect(stepper).toMatchSnapshot();
});
