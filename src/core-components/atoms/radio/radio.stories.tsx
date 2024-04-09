import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Radio} from './radio.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Atoms/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: ComponentStory<typeof Radio> = () => (
  <>
    <div className="flex flex-row">
      <Radio checked={true} onChange={() => {}} />
      <span>Married</span>
    </div>
  </>
);
