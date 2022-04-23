import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {InputPin} from './input-pin.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/InputPin',
  component: InputPin,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof InputPin>;

const pin = new Array(12);

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: ComponentStory<typeof InputPin> = () => (
  <InputPin
    title="Enter your Aadhaar Number"
    hasError={true}
    onPinChanged={(value) => {
      console.log({value});
    }}
    pin={pin}
  />
);
