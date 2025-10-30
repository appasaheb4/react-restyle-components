import React from 'react';
interface CollapsibleProps {
    label: string;
    labelClassName?: string;
    className?: string;
    onExpand?: (label: string) => void;
    onCollapse?: (label: string) => void;
    children: React.ReactNode;
}
export declare const Collapsible: ({ label, labelClassName, className, onExpand, onCollapse, children, }: CollapsibleProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=collapsible.component.d.ts.map