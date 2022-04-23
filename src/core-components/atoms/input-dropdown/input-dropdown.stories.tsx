import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {InputDropdown} from './input-dropdown.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/InputDropdown',
  component: InputDropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof InputDropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: ComponentStory<typeof InputDropdown> = () => (
  <InputDropdown
    title="Source of funds"
    items={['Bank account', 'UPI', 'Credit Card']}
    hasError={true}
  />
);
