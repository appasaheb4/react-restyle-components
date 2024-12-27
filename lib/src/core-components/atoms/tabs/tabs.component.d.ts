import React from 'react';
interface TabProps {
    title: string;
    children: React.JSX.Element;
}
export declare const Tab: ({ title, children }: TabProps) => import("react/jsx-runtime").JSX.Element;
export interface TabsProps {
    options: Array<{
        title: string;
        content?: React.JSX.Element;
        inActive?: boolean;
    }>;
    children: React.JSX.Element[];
}
export declare const Tabs: ({ options, children }: TabsProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=tabs.component.d.ts.map