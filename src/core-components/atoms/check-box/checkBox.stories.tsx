import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {CheckBox} from './checkBox.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/CheckBox',
  component: CheckBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof CheckBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: ComponentStory<typeof CheckBox> = () => (
  <div className="flex flex-row">
    <CheckBox checked={true} onChange={() => {}} />
    <span>
      I agree and authorize MiMo to fetch my personal details from UIDAI. I
      confirm that I have not used the OTP-based Aadhar verification to open any
      other bank account. I have read and accepted all Terms & Conditions
    </span>
  </div>
);
