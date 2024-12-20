import React, { ReactNode, ReactElement } from 'react';
import '../../../tc.css';
interface TabProps {
    title: string;
    children: ReactNode;
}
export declare const Tab: ({ title, children }: TabProps) => React.JSX.Element;
export interface TabsProps {
    tabsClass?: string;
    options: Array<{
        title: string;
        content?: React.ReactNode;
        inActive?: boolean;
    }>;
    onSelect: (item: any, index: number) => void;
    children?: ReactElement<TabProps> | ReactElement<TabProps>[];
}
export declare const Tabs: ({ tabsClass, options, onSelect, children, }: TabsProps) => React.JSX.Element;
export {};
