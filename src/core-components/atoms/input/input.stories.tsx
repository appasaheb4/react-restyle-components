import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Input} from './input.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: ComponentStory<typeof Input> = () => (
  <Input
    className="mt-4"
    title="Enter your Pan Number"
    hasError={true}
    value=""
    onChange={(panNumber) => console.log({panNumber})}
  />
);
