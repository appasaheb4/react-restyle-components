import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Tooltip} from './tooltip.component';

const meta: Meta<typeof Tooltip> = {
  title: 'Design System/Atoms/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: `import { Tooltip } from 'react-restyle-components'`,
  },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
  args: {},
};
