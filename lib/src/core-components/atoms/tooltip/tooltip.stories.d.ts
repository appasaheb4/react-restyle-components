import React from 'react';
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ align, side, children, content, avoidCollisions, alignOffset, sideOffset, disabled, delay, className, }: React.PropsWithChildren<import("./Tooltip.types").TooltipProps>) => React.JSX.Element;
    tags: string[];
    parameters: {
        docs: {
            page: () => React.JSX.Element;
        };
    };
    decorators: ((Story: import("@storybook/csf").PartialStoryFn<import("@storybook/react/dist/types-a5624094").R, {
        className?: string | undefined;
        delay?: number | undefined;
        side?: "top" | "right" | "bottom" | "left" | undefined;
        sideOffset?: number | undefined;
        content?: React.ReactNode;
        align?: "center" | "start" | "end" | undefined;
        alignOffset?: number | undefined;
        avoidCollisions?: boolean | undefined;
        disabled?: boolean | undefined;
        children?: React.ReactNode;
    }>) => React.JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const Positions: Story;
export declare const JSXContent: Story;
export declare const JSXContentDifferentAlignments: Story;
