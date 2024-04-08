import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {DatePickerComp} from './date-picker.component';
import dayjs from 'dayjs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/DatePickerComp',
  component: DatePickerComp,
} as ComponentMeta<typeof DatePickerComp>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: ComponentStory<typeof DatePickerComp> = () => (
  <div className="flex flex-row">
    <DatePickerComp
      className="mt-6"
      value={dayjs().format('YYYY-MM-DD')}
      showFormat={'dd-MM-yyyy'}
    />
  </div>
);
