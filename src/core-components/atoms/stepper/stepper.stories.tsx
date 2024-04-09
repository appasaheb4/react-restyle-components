import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Stepper} from './stepper.component';

const meta: Meta<typeof Stepper> = {
  title: 'Design System/Atoms/Stepper',
  component: Stepper,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Stepper>;

export const Primary: Story = {
  args: {
    steps: ['1', '2', '3', '4'],
    currentStep: 2,
    onStepClick: (currentStep, step) => {},
    className: 'mt-4',
  },
};
