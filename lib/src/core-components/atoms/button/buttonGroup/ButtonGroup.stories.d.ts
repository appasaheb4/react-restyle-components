import React from 'react';
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    parameters: {
        componentSubtitle: string;
    };
    component: ({ children, orientation, className, }: {
        children: React.ReactNode;
        orientation?: "horizontal" | "vertical" | undefined;
        className?: string | undefined;
    }) => React.JSX.Element;
    tags: string[];
    decorators: ((Story: import("@storybook/csf").PartialStoryFn<import("@storybook/react/dist/types-a5624094").R, {
        children: React.ReactNode;
        orientation?: "horizontal" | "vertical" | undefined;
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
