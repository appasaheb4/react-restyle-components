import React from 'react';
import { TooltipProvider } from '../tooltip/tooltip.component';
import { Button } from './button.component';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Design System/Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean' },
        onClick: { action: 'clicked' },
    },
    decorators: [
        (Story) => (React.createElement(React.Fragment, null,
            React.createElement(TooltipProvider, null,
                React.createElement(Story, null)))),
    ],
};
export default meta;
export const Basic = {
    render: function Render(args) {
        return React.createElement(Button, { ...args }, "Submit");
    },
};
