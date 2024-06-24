/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react';
import {render} from '@core-utils';
import {MultipleSelect} from './multi-select.component';

it('render MultipleSelect correctly', () => {
  const result = render(
    <MultipleSelect options={['']} selectedItems={['']} onSelect={() => {}} />
  );
  expect(result).toMatchSnapshot();
});
