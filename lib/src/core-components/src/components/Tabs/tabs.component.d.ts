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
/** Content that can be rendered in a tab (components, elements, strings, getList() results, etc.) */
export type TabContent = React.ReactNode | unknown;
interface TabProps {
    title: string;
    /** Tab content: React components, elements, strings, or any renderable (React.ReactNode) */
    children?: TabContent;
    className?: string;
    style?: CSSProperties;
}
export declare const Tab: ({ title, children, className, style }: TabProps) => import("react/jsx-runtime").JSX.Element;
export interface TabOption {
    title: string;
    content?: TabContent;
    inActive?: boolean;
}
export interface TabsProps {
    options: Array<TabOption>;
    onSelect?: (item: TabOption, index: number) => void;
    /** Tab components as children, or use content prop for shared content */
    children?: TabContent;
    /** Single content area for all tabs (e.g. when content depends on selected tab via onSelect) */
    content?: TabContent;
    /** Custom classNames for component parts */
    classNames?: TabsClassNames;
    /** Custom inline styles for component parts */
    styles?: TabsStyles;
}
export declare const Tabs: ({ options, onSelect, children, content, classNames, styles, }: TabsProps) => import("react/jsx-runtime").JSX.Element;
export {};
