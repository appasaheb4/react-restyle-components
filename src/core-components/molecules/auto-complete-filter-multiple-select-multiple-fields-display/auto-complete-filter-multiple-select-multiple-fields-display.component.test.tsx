import React from 'react';
import {render} from '@core-utils';
import {AutoCompleteFilterMultipleSelectMultipleFieldsDisplay} from './auto-complete-filter-multiple-select-multiple-fields-display.component';

it('render AutoCompleteFilterMultipleSelectMultipleFieldsDisplay correctly', () => {
  const autoCompleteFilterMultipleSelectMultipleFieldsDisplay = render(
    <AutoCompleteFilterMultipleSelectMultipleFieldsDisplay
      data={[]}
      onUpdate={(item: any) => {
        console.log({item});
      }}
      onSelect={(item: any) => {}}
    />
  );
  expect(
    autoCompleteFilterMultipleSelectMultipleFieldsDisplay
  ).toMatchSnapshot();
});
