import React, { CSSProperties } from 'react';
export interface CollapsibleClassNames {
    /** Custom className for the root container */
    container?: string;
    /** Custom className for the toggle button */
    button?: string;
    /** Custom className for the content area */
    content?: string;
}
export interface CollapsibleStyles {
    /** Custom style for the root container */
    container?: CSSProperties;
    /** Custom style for the toggle button */
    button?: CSSProperties;
    /** Custom style for the content area */
    content?: CSSProperties;
}
interface CollapsibleProps {
    label: string;
    labelClassName?: string;
    className?: string;
    /** Custom classNames for component parts */
    classNames?: CollapsibleClassNames;
    /** Custom inline styles for component parts */
    styles?: CollapsibleStyles;
    onExpand?: (label: string) => void;
    onCollapse?: (label: string) => void;
    children: React.ReactNode;
}
export declare const Collapsible: ({ label, labelClassName, className, classNames, styles, onExpand, onCollapse, children, }: CollapsibleProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=collapsible.component.d.ts.map