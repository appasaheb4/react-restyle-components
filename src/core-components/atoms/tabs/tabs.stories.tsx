import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Tabs} from './tabs.component';

const meta: Meta<typeof Tabs> = {
  title: 'Design System/Atoms/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: `import { Tabs } from 'react-restyle-components'`,
  },
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
  args: {
    options: [
      {title: 'Work History', icon: 'FaHistory'},
      {title: 'Book Order', icon: 'FaBook'},
      {title: 'Make Frame', icon: 'MdFilterFrames'},
    ],
    onSelect: (item) => {
      console.log({item});
    },
  },
};
