import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Button} from './buttons.component';
// import {Title, Component, Source, Canvas, ArgTypes} from '@storybook/blocks';
import {fn} from '@storybook/test';

const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    className: 'w-40',
  },
  parameters: {
    componentSubtitle: `import { Button } from 'react-restyle-components'`,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  // parameters: {
  //   backgrounds: {
  //     default: 'dark',
  //   },
  // },
  args: {
    disable: false,
    type: 'solid' || 'outline',
    children: <span>Primary</span>,
    onClick: fn(),
  },
};

// export const Disable: Story = {
//   args: {
//     ...Primary.args,
//     children: <span>Disable</span>,
//     disable: true,
//   },
// };
