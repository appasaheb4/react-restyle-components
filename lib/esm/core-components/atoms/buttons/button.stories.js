import React from 'react';
import { Button } from './buttons.component';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Atoms/Button',
    component: Button,
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Disable = () => (React.createElement(Button, { className: "bg-gray-light w-40", onClick: () => { } }, "Next"));
export const Primary = () => (React.createElement(Button, { className: "bg-orange mt-4", onClick: () => { } }, "Permanent Address"));
//# sourceMappingURL=button.stories.js.map