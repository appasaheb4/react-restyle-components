import React from 'react';
interface RadioProps {
    title: string;
    data: Array<any>;
    className?: string;
    onChange: (item: any) => void;
}
export declare const Radio: ({ title, data, className, onChange, }: RadioProps) => React.JSX.Element;
export {};
