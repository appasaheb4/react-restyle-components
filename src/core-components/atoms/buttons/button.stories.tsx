import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Button} from './buttons.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Disable: ComponentStory<typeof Button> = () => (
  <Button className="bg-gray-light w-40" onClick={() => {}}>
    Next
  </Button>
);

export const Primary: ComponentStory<typeof Button> = () => (
  <Button className="bg-orange mt-4" onClick={() => {}}>
    Permanent Address
  </Button>
);
