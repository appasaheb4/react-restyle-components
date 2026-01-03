import React from 'react';
import { BreadcrumbVariant, BreadcrumbSize, BreadcrumbSeparatorType, BreadcrumbItemType } from './types';
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
    /** Children elements (breadcrumb items) */
    children?: React.ReactNode;
    /** Maximum number of breadcrumb items to display */
    maxItems?: number;
    /** Show overflow dots when items are truncated */
    showOverflowDots?: boolean;
    /** Visual variant of the breadcrumb */
    variant?: BreadcrumbVariant;
    /** Size of the breadcrumb */
    size?: BreadcrumbSize;
    /** Type of separator between items */
    separatorType?: BreadcrumbSeparatorType;
    /** Custom separator element */
    customSeparator?: React.ReactNode;
    /** Show home icon for the first item */
    showHomeIcon?: boolean;
    /** Collapsed items (shown in dropdown on desktop) */
    collapsedItems?: BreadcrumbItemType[];
    /** Callback when collapsed items dropdown is toggled */
    onCollapsedToggle?: (isOpen: boolean) => void;
    /** @deprecated use 'aria-label' instead */
    ariaLabel?: string;
}
export declare const Breadcrumb: React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLElement>>;
//# sourceMappingURL=Breadcrumb.d.ts.map