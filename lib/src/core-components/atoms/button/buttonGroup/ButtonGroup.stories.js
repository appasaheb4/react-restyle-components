import React from 'react';
import { TooltipProvider } from '../../tooltip/tooltip.component';
import { ButtonGroup } from './buttonGroup.component';
import { Button } from '../button.component';
import { BrowserRouter } from 'react-router-dom';
const meta = {
    title: 'Design System/Atoms/Button/ButtonGroup',
    parameters: {
        componentSubtitle: 'A container for grouping buttons together. Used when you want no space between buttons. Can also be used to create a split button using a Button and a DropdownMenu.',
    },
    component: ButtonGroup,
    tags: ['autodocs'],
    decorators: [
        (Story) => (React.createElement(React.Fragment, null,
            React.createElement(BrowserRouter, null,
                React.createElement(TooltipProvider, null,
                    React.createElement(Story, null))))),
    ],
};
export default meta;
/**
 * At its simplest you can just wrap any `Button` elements in a `ButtonGroup`.
 *
 * All props for button scale, variant, etc stay on the Button.
 * You should use the same scale for all buttons in a group but could mix and match variants and levels.
 */
export const Basic = {
    args: {
        children: (React.createElement(React.Fragment, null,
            React.createElement(Button, null, "Button 1"),
            React.createElement(Button, null, "Button 2"),
            React.createElement(Button, null, "Button 3"))),
    },
};
/**
 * If only a single `Button` is passed in, it will be visually the same as not wrapping in a `ButtonGroup`.
 */
export const BasicOneButton = {
    args: {
        children: (React.createElement(React.Fragment, null,
            React.createElement(Button, null, "Button 1"))),
    },
};
