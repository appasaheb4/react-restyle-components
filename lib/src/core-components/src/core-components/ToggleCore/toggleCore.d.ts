import React from 'react';
export type ToggleCoreProps = React.InputHTMLAttributes<HTMLInputElement> & {
    children?: React.ReactNode;
    isToggleShowing?: boolean;
    /** When inside ActionCard, set this to false to let the parent show interaction styles */
    showInteraction?: boolean;
    /** @deprecated */
    onFocusChange?: (boolean: any) => void;
    toggleType: 'checkbox' | 'radio';
    indeterminate?: boolean;
};
/** To apply hover states, apply `toggleParentStyles` to the label containing this component */
export declare const ToggleCore: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & {
    children?: React.ReactNode;
    isToggleShowing?: boolean | undefined;
    /** When inside ActionCard, set this to false to let the parent show interaction styles */
    showInteraction?: boolean | undefined;
    /** @deprecated */
    onFocusChange?: ((boolean: any) => void) | undefined;
    toggleType: 'checkbox' | 'radio';
    indeterminate?: boolean | undefined;
} & React.RefAttributes<HTMLInputElement>>;
