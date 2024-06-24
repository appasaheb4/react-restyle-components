import React from 'react';
import {render} from '@core-utils';
import {Icon} from './icons.component';
it('render Icon correctly', () => {
  const icon = render(
    <Icon
      nameIcon="FaHistory"
      propsIcon={{
        color: '#000000',
        size: 24,
      }}
    />
  );
  expect(icon).toMatchSnapshot();
});
