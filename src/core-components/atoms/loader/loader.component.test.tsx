/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react';
import {render} from '@core-utils';
import {Loader} from './loader.component';

it('render Loader correctly', () => {
  const loader = render(<Loader />);
  expect(loader).toMatchSnapshot();
});
