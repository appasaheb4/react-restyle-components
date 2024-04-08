/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react';
import {render} from '@core-utils';
import {Radio} from './radio.component';

it('render Radio correctly', () => {
  const radio = render(<Radio checked={true} onChange={() => jest.fn()} />);
  expect(radio).toMatchSnapshot();
});
