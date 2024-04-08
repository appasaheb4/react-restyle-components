import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Loader} from './loader.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: ComponentStory<typeof Loader> = () => (
  <div className="flex flex-row">
    <Loader />
  </div>
);
