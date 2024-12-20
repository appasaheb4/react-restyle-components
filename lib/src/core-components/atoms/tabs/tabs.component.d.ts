import React from 'react';
import '../../../tc.css';
interface TabProps {
    title: string;
    children: React.JSX.Element;
}
export declare const Tab: ({ title, children }: TabProps) => React.JSX.Element;
export interface TabsProps {
    options: Array<{
        title: string;
        content?: React.JSX.Element;
        inActive?: boolean;
    }>;
    children: React.JSX.Element[];
}
export declare const Tabs: ({ options, children }: TabsProps) => React.JSX.Element;
export {};
