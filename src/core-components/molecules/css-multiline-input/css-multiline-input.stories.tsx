import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {CSSMultiline} from './css-multiline-input.component';

const meta: Meta<typeof CSSMultiline> = {
  title: 'Design System/Molecules/CSSMultiline',
  component: CSSMultiline,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: `import { CSSMultiline } from 'react-restyle-components'`,
  },
};
export default meta;
type Story = StoryObj<typeof CSSMultiline>;

export const Primary: Story = {
  args: {},
};
