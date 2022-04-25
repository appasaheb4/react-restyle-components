import React from 'react';
import { Input } from './input.component';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Atoms/Input',
    component: Input,
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary = () => (React.createElement(Input, { className: "mt-4", title: "Enter your Pan Number", hasError: true, value: "", onChange: (panNumber) => console.log({ panNumber }) }));
//# sourceMappingURL=input.stories.js.map