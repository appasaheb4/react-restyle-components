import React from 'react';
interface TabsProps {
    options: Array<{
        title: string;
        icon: string;
    }>;
    onSelect: (item: string) => void;
}
export declare const Tabs: ({ options, onSelect }: TabsProps) => React.JSX.Element;
export {};
