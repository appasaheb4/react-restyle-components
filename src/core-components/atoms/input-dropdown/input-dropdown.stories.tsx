import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {InputDropdown} from './input-dropdown.component';

const meta: Meta<typeof InputDropdown> = {
  title: 'Design System/Atoms/InputDropdown',
  component: InputDropdown,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof InputDropdown>;

export const Primary: Story = {
  args: {
    title: 'Source of funds',
    items: ['Bank account', 'UPI', 'Credit Card'],
    hasError: true,
  },
};
