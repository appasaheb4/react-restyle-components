import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {CheckBox} from './checkBox.component';

const meta: Meta<typeof CheckBox> = {
  title: 'Design System/Atoms/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: `import { CheckBox } from 'react-restyle-components'`,
  },
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Primary1: Story = {
  args: {
    title: 'Banks',
    data: [
      {title: 'SBI Bank', checked: false},
      {title: 'ICICI Bank', checked: false},
    ],
    disable: false,
  },
};
