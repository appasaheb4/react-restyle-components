import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Button} from './buttons.component';

const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    className: 'bg-orange w-40',
  },
  // parameters: {
  //   componentSubtitle: 'Button New',
  //   docs: {
  //     page: () => (
  //       <>
  //         <Title />
  //         <Description />
  //       </>
  //     ),
  //   },
  // },
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
    type: 'solid' || 'outline' || 'submit',
    children: <span>Primary</span>,
  },
};

// export const Disable: Story = {
//   args: {
//     ...Primary.args,
//     children: <span>Disable</span>,
//     disable: true,
//   },
// };
