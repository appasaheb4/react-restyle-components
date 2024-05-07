import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Radio} from './radio.component';

const meta: Meta<typeof Radio> = {
  title: 'Design System/Atoms/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: `import { Radio } from 'react-restyle-components'`,
  },
};
export default meta;
type Story = StoryObj<typeof Radio>;

export const Primary: Story = {
  args: {},
};
