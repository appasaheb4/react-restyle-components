import React from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {Button} from './buttons.component';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    className: 'bg-gray-light w-40',
    disable: false,
    type: 'solid' || 'outline',
    children: <span>Primary</span>,
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
