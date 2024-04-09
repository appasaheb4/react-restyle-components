import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {CheckBox} from './checkBox.component';

const meta: Meta<typeof CheckBox> = {
  title: 'Design System/Atoms/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Primary: Story = {
  args: {
    checked: true,
    className: 'flex flex-row',
  },
};

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// export const Primary: ComponentStory<typeof CheckBox> = () => (
//   <div className="flex flex-row">
//     <CheckBox checked={true} onChange={() => {}} />
//     <span>
//       I agree and authorize MiMo to fetch my personal details from UIDAI. I
//       confirm that I have not used the OTP-based Aadhar verification to open any
//       other bank account. I have read and accepted all Terms & Conditions
//     </span>
//   </div>
// );
