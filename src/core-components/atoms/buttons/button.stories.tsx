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

export const Disable: Story = {
  args: {
    ...Primary.args,
    children: <span>Disable</span>,
    disable: true,
  },
};

// export const Disable: ComponentStory<typeof Button> = () => (
//   <Button className="bg-gray-light w-40" onClick={() => {}}>
//     Next
//   </Button>
// );
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
