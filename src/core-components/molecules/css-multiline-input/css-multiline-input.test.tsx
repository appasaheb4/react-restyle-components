/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react';
import {render} from '@core-utils';
import {CSSMultiline} from './css-multiline-input.component';

it('render CSSMultiline correctly', () => {
  const time = render(<CSSMultiline onChange={() => {}} />);
  expect(time).toMatchSnapshot();
});
