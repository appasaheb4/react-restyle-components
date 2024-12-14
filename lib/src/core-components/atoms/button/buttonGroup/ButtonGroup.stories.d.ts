import React from 'react';
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    parameters: {
        componentSubtitle: string;
    };
    component: ({ children, orientation, horizontalSizing, verticalSizing, className, }: {
        children: React.ReactNode;
        orientation?: "horizontal" | "vertical" | undefined;
        horizontalSizing?: "fill" | "hug" | undefined;
        verticalSizing?: "fill" | "hug" | undefined;
        className?: string | undefined;
    }) => React.JSX.Element;
    tags: string[];
    decorators: ((Story: import("@storybook/csf").PartialStoryFn<import("@storybook/react/dist/types-a5624094").R, {
        children: React.ReactNode;
        orientation?: "horizontal" | "vertical" | undefined;
        horizontalSizing?: "fill" | "hug" | undefined;
        verticalSizing?: "fill" | "hug" | undefined;
        className?: string | undefined;
    }>) => React.JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
/**
 * At its simplest you can just wrap any `Button` elements in a `ButtonGroup`.
 *
 * All props for button scale, variant, etc stay on the Button.
 * You should use the same scale for all buttons in a group but could mix and match variants and levels.
 */
export declare const Basic: Story;
/**
 * If only a single `Button` is passed in, it will be visually the same as not wrapping in a `ButtonGroup`.
 */
export declare const BasicOneButton: Story;
/**
 * To creat a split button you would add a `DropdownMenu` as the last child. Its trigger should be a `Button`.
 */
/**
 * ButtonGroups can be passed `orientation="vertical"` to stack buttons vertically.
 */
export declare const Vertical: Story;
/**
 * Vertical ButtonGroups can also contain a `DropdownMenu`.
 */
/**
 * ButtonGroups also work with LinkButtons and ToggleButtons.
 *
 * However ToggleButton styling is not currently ideal as the divider is hard to see.
 * Also note that ButtonGroup with ToggleButtons is not the same as a ToggleGroup. The former will allow multiple buttons to be active at once, whereas the latter will only allow one button to be active at a time.
 */
export declare const FillModes: Story;
