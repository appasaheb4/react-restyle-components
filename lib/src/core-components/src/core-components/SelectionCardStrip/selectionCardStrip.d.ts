import React from 'react';
export type CardProps = {
    selected?: boolean;
    type?: 'selection' | 'default';
    element?: string;
};
export declare const SelectionCardStrip: {
    Wrapper: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & CardProps & {
        checked?: boolean | undefined;
        focused?: boolean | undefined;
    } & React.RefAttributes<HTMLDivElement>>;
    InternalWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
        isDisabled: boolean;
        disableSvgColorOverride?: boolean | undefined;
    }>> & string;
};
