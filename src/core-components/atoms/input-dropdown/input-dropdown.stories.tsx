import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {InputDropdown} from './input-dropdown.component';

const meta: Meta<typeof InputDropdown> = {
  title: 'Design System/Atoms/InputDropdown',
  component: InputDropdown,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: `import { InputDropdown } from 'react-restyle-components'`,
  },
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
