import React from 'react';
import dayjs from 'dayjs';
import type {Meta, StoryObj} from '@storybook/react';
import {AutoCompleteFilterMultipleSelectMultipleFieldsDisplay} from './auto-complete-filter-multiple-select-multiple-fields-display.component';

const meta: Meta<typeof AutoCompleteFilterMultipleSelectMultipleFieldsDisplay> =
  {
    title:
      'Design System/Molecules/AutoCompleteFilterMultipleSelectMultipleFieldsDisplay',
    component: AutoCompleteFilterMultipleSelectMultipleFieldsDisplay,
    tags: ['autodocs'],
    parameters: {
      componentSubtitle: `import { AutoCompleteFilterMultipleSelectMultipleFieldsDisplay } from 'react-restyle-components'`,
    },
  };
export default meta;
type Story = StoryObj<
  typeof AutoCompleteFilterMultipleSelectMultipleFieldsDisplay
>;

export const Primary: Story = {
  args: {
    data: {
      list: [
        {
          _id: '66532a99bbfed4eea86eae23',
          code: 82,
          description: 'TEST1',
          libraryCode: 'ABCD',
        },
        {
          _id: '6652b6d8bcef7f713cb547d4',
          code: 81,
          description: 'TEST New',
          libraryCode: 'TEST',
        },
      ],
      selected: [
        {
          _id: '66532a99bbfed4eea86eae23',
          code: 82,
          description: 'TEST1',
          libraryCode: 'ABCD',
        },
      ],
      displayKey: ['libraryCode', 'description'],
    },
    onUpdate: (item) => {
      console.log({item});
    },
    onSelect: (item) => {
      console.log({item});
    },
  },
};
