import React, { ReactNode, ReactElement } from 'react';
import '../../../tc.css';
interface TabProps {
    label: string;
    children: ReactNode;
}
export declare const Tab: ({ label, children }: TabProps) => React.JSX.Element;
interface TabsProps {
    tabsClass?: string;
    options: Array<{
        title: string;
        icon: string;
    }>;
    onSelect: (item: string) => void;
    children?: ReactElement<TabProps> | ReactElement<TabProps>[];
}
export declare const Tabs: ({ tabsClass, options, onSelect, children, }: TabsProps) => React.JSX.Element;
export {};
