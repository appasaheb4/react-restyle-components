import React from 'react';
import dayjs from 'dayjs';
import type {Meta, StoryObj} from '@storybook/react';
import {DatePickerComp} from './date-picker.component';

const meta: Meta<typeof DatePickerComp> = {
  title: 'Design System/Atoms/DatePicker',
  component: DatePickerComp,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: `import { DatePickerComp } from 'react-restyle-components'`,
  },
};
export default meta;
type Story = StoryObj<typeof DatePickerComp>;

export const Primary: Story = {
  args: {
    title: 'Date',
    value: dayjs().format('YYYY-MM-DD'),
    showFormat: 'dd-MM-yyyy',
  },
};
