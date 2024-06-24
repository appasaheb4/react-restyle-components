import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Loader} from './loader.component';

const meta: Meta<typeof Loader> = {
  title: 'Design System/Atoms/Loader',
  component: Loader,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: `import { Loader } from 'react-restyle-components'`,
  },
};
export default meta;
type Story = StoryObj<typeof Loader>;

export const Primary: Story = {
  args: {},
};
