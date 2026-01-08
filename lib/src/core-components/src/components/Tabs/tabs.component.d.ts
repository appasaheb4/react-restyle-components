import React, { CSSProperties } from 'react';
export interface TabsClassNames {
    /** Custom className for the root container */
    container?: string;
    /** Custom className for the tabs header container */
    tabsHeader?: string;
    /** Custom className for individual tab button */
    tabButton?: string;
    /** Custom className for active tab button */
    activeTabButton?: string;
    /** Custom className for the content container */
    contentContainer?: string;
}
export interface TabsStyles {
    /** Custom style for the root container */
    container?: CSSProperties;
    /** Custom style for the tabs header container */
    tabsHeader?: CSSProperties;
    /** Custom style for individual tab button */
    tabButton?: CSSProperties;
    /** Custom style for active tab button */
    activeTabButton?: CSSProperties;
    /** Custom style for the content container */
    contentContainer?: CSSProperties;
}
interface TabProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}
export declare const Tab: ({ title, children, className, style }: TabProps) => import("react/jsx-runtime").JSX.Element;
export interface TabsProps {
    options: Array<{
        title: string;
        content?: React.JSX.Element;
        inActive?: boolean;
    }>;
    onSelect?: (item: any, index: number) => void;
    children: React.ReactNode;
    /** Custom classNames for component parts */
    classNames?: TabsClassNames;
    /** Custom inline styles for component parts */
    styles?: TabsStyles;
}
export declare const Tabs: ({ options, onSelect, children, classNames, styles, }: TabsProps) => import("react/jsx-runtime").JSX.Element;
export {};
