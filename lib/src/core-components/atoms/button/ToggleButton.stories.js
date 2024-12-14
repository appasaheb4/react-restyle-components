import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Attach from '../../../assets/icons/attach.svg';
import { TooltipProvider } from '../tooltip/tooltip.component';
import { ToggleButton } from './toggleButton.component';
import { useState } from 'react';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Design System/Atoms/ToggleButton',
    component: ToggleButton,
    tags: ['autodocs'],
    decorators: [
        (Story) => (React.createElement(BrowserRouter, null,
            React.createElement(TooltipProvider, null,
                React.createElement(Story, null)))),
    ],
    argTypes: {
        disabled: { control: 'boolean' },
        onChange: { action: 'clicked' },
    },
};
export default meta;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TextOnly = {
    args: {
        children: 'Button',
    },
};
export const TextWithIconAtStart = {
    render: (args) => (React.createElement(ToggleButton, { ...args },
        React.createElement(Attach, null),
        " Go to attachments")),
    args: {},
};
export const TextWithIconAtEnd = {
    render: (args) => (React.createElement(ToggleButton, { ...args },
        "Go to attachments ",
        React.createElement(Attach, null))),
    args: {},
};
export const IconOnly = {
    render: (args) => (React.createElement(ToggleButton, { ...args },
        React.createElement(Attach, null))),
    args: {
        iconOnly: true,
    },
};
export const Loading = {
    render: function Render(args) {
        const [loading, setLoading] = useState(false);
        const [active, setActive] = useState(false);
        const handleClick = () => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setActive(!active);
            }, 1000);
        };
        return (React.createElement(ToggleButton, { iconOnly: true, checked: active, onChange: handleClick, ...args, loading: loading, onClick: handleClick },
            React.createElement(Attach, null)));
    },
};
