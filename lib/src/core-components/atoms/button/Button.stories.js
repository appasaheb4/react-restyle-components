import React from 'react';
import Attach from '../../../assets/icons/attach.svg';
import { TooltipProvider } from '../tooltip/tooltip.component';
import { Button } from './button.component';
import { useState } from 'react';
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
export const IconOnly = {
    render: (args) => (React.createElement(Button, { ...args },
        React.createElement(Attach, null))),
    args: {
        iconOnly: true,
    },
};
export const TextOnly = {
    args: {
        children: 'Button',
    },
};
/**
 * The Button doesn't technically have any controls to position the icon. The Button can accept any content as its children, so if you want to add an icon at the end of text, you simply add both as children in that order:
 */
export const TextWithIconAtEnd = {
    render: (args) => (React.createElement(Button, { ...args },
        "Attach ",
        React.createElement(Attach, null))),
};
/**
 * Or to put it at the start you just... put it at the start:
 */
export const TextWithIconAtStart = {
    render: (args) => (React.createElement(Button, { ...args },
        React.createElement(Attach, null),
        " Attach")),
};
export const Loading = {
    render: function Render(args) {
        const [loading, setLoading] = useState(false);
        const handleClick = () => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        };
        return (React.createElement(Button, { ...args, loading: loading, onClick: handleClick }, args.children || 'Slow loading button'));
    },
};
