import React, { CSSProperties } from 'react';
export interface CollapsibleClassNames {
    /** Custom className for the root container */
    container?: string;
    /** Custom className for the toggle button */
    button?: string;
    /** Custom className for the content area */
    content?: string;
    /** Custom className for the icon wrapper */
    iconWrapper?: string;
}
export interface CollapsibleStyles {
    /** Custom style for the root container */
    container?: CSSProperties;
    /** Custom style for the toggle button */
    button?: CSSProperties;
    /** Custom style for the content area */
    content?: CSSProperties;
}
export type CollapsibleVariant = 'default' | 'bordered' | 'elevated' | 'minimal' | 'glass';
interface CollapsibleProps {
    label: string | React.ReactNode;
    labelClassName?: string;
    className?: string;
    /** Custom classNames for component parts */
    classNames?: CollapsibleClassNames;
    /** Custom inline styles for component parts */
    styles?: CollapsibleStyles;
    /** Visual variant style */
    variant?: CollapsibleVariant;
    /** Animation duration in milliseconds */
    animationDuration?: number;
    /** Initially expanded state */
    defaultOpen?: boolean;
    /** Controlled open state */
    isOpen?: boolean;
    /** Hide the chevron icon */
    hideIcon?: boolean;
    /** Custom icon element */
    icon?: React.ReactNode;
    onExpand?: (label: string) => void;
    onCollapse?: (label: string) => void;
    children?: React.ReactNode;
}
export declare const Collapsible: ({ label, labelClassName, className, classNames, styles, variant, animationDuration, defaultOpen, isOpen: controlledOpen, hideIcon, icon, onExpand, onCollapse, children, }: CollapsibleProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Collapsible2.component.d.ts.map