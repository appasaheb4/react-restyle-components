import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Input} from './input.component';

const meta: Meta<typeof Input> = {
  title: 'Design System/Atoms/Input',
  component: Input,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    className: 'mt-4',
    title: 'Enter your Pan Number',
    hasError: true,
    defaultValue: '',
    onChange: (item) => {
      console.log({item});
    },
    onBlur: (item) => {
      console.log({item});
    },
  },
};
