import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {MultipleSelect} from './multi-select.component';

const meta: Meta<typeof MultipleSelect> = {
  title: 'Design System/Molecules/MultipleSelect',
  component: MultipleSelect,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: `import { MultipleSelect } from 'react-restyle-components'`,
  },
};
export default meta;
type Story = StoryObj<typeof MultipleSelect>;

export const Primary: Story = {
  args: {
    options: ['UPI', 'CARD', 'CASH'],
    selectedItems: ['CASH', 'UPI'],
    onSelect: (item) => {
      console.log({item});
    },
  },
};
