import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Icon} from './icons.component';

const meta: Meta<typeof Icon> = {
  title: 'Design System/Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: `import { Icon } from 'react-restyle-components'`,
  },
};
export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    nameIcon: 'FaHistory',
    propsIcon: {
      color: '#000000',
      size: 24,
    },
  },
};
