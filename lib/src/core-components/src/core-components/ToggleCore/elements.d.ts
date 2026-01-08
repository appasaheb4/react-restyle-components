import React from 'react';
type ToggleProps = {
    $checked: boolean;
    $showInteraction: boolean;
    $indeterminate?: boolean;
};
export declare const CheckboxToggle: ({ ...props }: ToggleProps) => import("react/jsx-runtime").JSX.Element;
export declare const RadioToggle: (props: ToggleProps) => import("react/jsx-runtime").JSX.Element;
export declare const StyledDescription: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<any, never>, never>> & string & Omit<(props: any) => import("react/jsx-runtime").JSX.Element, keyof React.Component<any, {}, any>>;
export declare const HiddenInput: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, never>> & string;
/** Add this style snippet to the label containing this ToggleCore component */
export declare const toggleParentStyles: import("styled-components").RuleSet<object>;
export {};
