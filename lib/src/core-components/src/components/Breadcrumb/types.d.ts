import React from 'react';
export declare const BREADCRUMB_VARIANTS: readonly ["default", "contained", "pills"];
export type BreadcrumbVariant = (typeof BREADCRUMB_VARIANTS)[number];
export declare const BREADCRUMB_SIZES: readonly ["small", "medium", "large"];
export type BreadcrumbSize = (typeof BREADCRUMB_SIZES)[number];
export declare const BREADCRUMB_SEPARATOR_TYPES: readonly ["chevron", "slash", "arrow", "dot"];
export type BreadcrumbSeparatorType = (typeof BREADCRUMB_SEPARATOR_TYPES)[number];
export interface BreadcrumbItemType {
    label: string;
    href?: string;
    icon?: React.ReactNode;
    isActive?: boolean;
}
