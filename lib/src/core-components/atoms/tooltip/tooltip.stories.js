import React from 'react';
import { Button } from '../button/button.component';
import { Tooltip, TooltipProvider } from './tooltip.component';
import { Title, Subtitle, Primary, Controls, Stories } from '@storybook/blocks';
// import {AxeIcon} from '../AxeIcon/AxeIcon';
const meta = {
    title: 'Design System/Atoms/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (React.createElement(React.Fragment, null,
                React.createElement(Title, null),
                React.createElement(Subtitle, null),
                React.createElement(Primary, null),
                React.createElement(Controls, null),
                React.createElement(Stories, null))),
        },
    },
    decorators: [
        (Story) => (React.createElement(TooltipProvider, null,
            React.createElement(Story, null))),
    ],
};
export default meta;
export const Basic = {
    args: {
        children: React.createElement("span", { className: "m-10" }, '🪔'),
        content: 'Happy Diwali ✨',
    },
};
export const Positions = {
    parameters: {
        controls: { hideNoControlsWarning: true, exclude: ['content', 'position'] },
        docs: {
            description: {
                story: 'Example shows the same `Tooltip` used for all 4 position.',
            },
        },
    },
    render: (args) => (React.createElement("div", { style: { padding: '100px', display: 'flex', gap: '12px' } },
        React.createElement(Tooltip, { ...args, content: "top", side: "top" },
            React.createElement("span", null, "\uD83D\uDC46")),
        React.createElement(Tooltip, { ...args, content: "bottom", side: "bottom" },
            React.createElement("span", null, "\uD83D\uDC47")),
        React.createElement(Tooltip, { ...args, content: "left", side: "left" },
            React.createElement("span", null, "\uD83D\uDC48")),
        React.createElement(Tooltip, { ...args, content: "right", side: "right" },
            React.createElement("span", null, "\uD83D\uDC49")))),
};
export const JSXContent = {
    parameters: {
        controls: { hideNoControlsWarning: true, include: [] },
        docs: {
            description: {
                story: 'JSX tooltip for a button.',
            },
        },
    },
    render: () => (React.createElement("div", { style: { padding: '100px', display: 'flex', gap: '12px' } },
        React.createElement(Tooltip, { side: "top", content: React.createElement(React.Fragment, null,
                React.createElement(Button, { variant: "solid" }, "\u2728\u2728\u2728"),
                ' ',
                React.createElement(Button, { variant: "solid" }, "\u2728\u2728\u2728")) },
            React.createElement("span", null, "Fancy Tooltip")))),
};
export const JSXContentDifferentAlignments = {
    parameters: {
        controls: { hideNoControlsWarning: true, include: [] },
        docs: {
            description: {
                story: 'JSX tooltip for a button with all 3 alignments options and side set to top.',
            },
        },
    },
    render: () => (React.createElement("div", { style: { padding: '100px', display: 'flex', gap: '12px' } },
        React.createElement(Tooltip, { side: "top", align: "start", content: React.createElement("span", null, "Tooltip") },
            React.createElement(Button, { variant: "solid" }, "Align Start")),
        React.createElement(Tooltip, { side: "top", align: "center", content: React.createElement("span", null, "Tooltip") },
            React.createElement(Button, { variant: "solid" }, "Align Center")),
        React.createElement(Tooltip, { side: "top", align: "end", content: React.createElement("span", null, "Tooltip") },
            React.createElement(Button, { variant: "solid" }, "Align End")))),
};
