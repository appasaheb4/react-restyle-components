import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Attach from '../../../assets/icons/attach.svg';
import { TooltipProvider } from '../tooltip/tooltip.component';
import { LinkButton } from './linkButton.component';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Design System/Atoms/LinkButton',
    component: LinkButton,
    tags: ['autodocs'],
    decorators: [
        (Story) => (React.createElement(BrowserRouter, null,
            React.createElement(TooltipProvider, null,
                React.createElement(Story, null)))),
    ],
};
export default meta;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TextOnly = {
    args: {
        children: 'Button',
        to: '#hello',
        Component: Link,
    },
};
export const TextWithIconAtStart = {
    render: (args) => (React.createElement(LinkButton, { ...args },
        React.createElement(Attach, null),
        " Go to attachments")),
    args: {
        to: '#hello',
        Component: Link,
    },
};
export const TextWithIconAtEnd = {
    render: (args) => (React.createElement(LinkButton, { ...args },
        "Go to attachments ",
        React.createElement(Attach, null))),
    args: {
        to: '#hello',
        Component: Link,
    },
};
export const IconOnly = {
    render: (args) => (React.createElement(LinkButton, { ...args },
        React.createElement(Attach, null))),
    args: {
        iconOnly: true,
        to: '#hello',
        Component: Link,
    },
};
