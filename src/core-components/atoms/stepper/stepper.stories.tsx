/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Stepper} from './stepper.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Stepper',
  component: Stepper,
} as ComponentMeta<typeof Stepper>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: ComponentStory<typeof Stepper> = () => (
  <Stepper
    steps={['1', '2', '3', '4']}
    currentStep={2}
    onStepClick={(currentStep, step) => {}}
    className="mt-4"
  />
);
