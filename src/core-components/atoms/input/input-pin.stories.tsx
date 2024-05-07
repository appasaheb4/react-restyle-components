import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {InputPin} from './input-pin.component';

const meta: Meta<typeof InputPin> = {
  title: 'Design System/Atoms/InputPin',
  component: InputPin,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: `import { InputPin } from 'react-restyle-components'`,
  },
};
export default meta;
type Story = StoryObj<typeof InputPin>;

export const Primary: Story = {
  args: {
    title: 'Enter your Aadhaar Number',
    hasError: true,
    pin: new Array(12),
  },
};
