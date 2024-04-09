import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Button} from './buttons.component';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

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
