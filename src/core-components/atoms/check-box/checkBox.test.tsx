/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react';
import {render} from '@core-utils';
import {CheckBox} from './checkBox.component';

it('render CheckBox correctly', () => {
  const checkbox = render(
    <CheckBox title="Title" data={[]} onChange={() => jest.fn()} />
  );
  expect(checkbox).toMatchSnapshot();
});
