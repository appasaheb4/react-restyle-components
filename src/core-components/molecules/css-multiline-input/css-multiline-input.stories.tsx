/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {CSSMultiline} from './css-multiline-input.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/CSSMultiline',
  component: CSSMultiline,
} as ComponentMeta<typeof CSSMultiline>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: ComponentStory<typeof CSSMultiline> = () => (
  <CSSMultiline
    onChange={(item) => {
      console.log({item});
    }}
  />
);
