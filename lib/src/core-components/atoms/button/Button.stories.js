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
/**
 * The component contains styles that will automatically adjust the size of any svg you add as a child.
 * However the Design System uses a different size for icons if they are the _only_ thing in the button.
 * To handle this we add the prop `iconOnly`.
 */
export const Basic = {
    render: function Render(args) {
        return React.createElement(Button, { ...args }, "Submit");
    },
};
