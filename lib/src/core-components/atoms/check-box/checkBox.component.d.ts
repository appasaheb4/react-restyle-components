import React from 'react';
import '../../../../tc.css';
interface CheckBoxProps {
    title: string;
    data: Array<any>;
    className?: string;
    disable?: boolean;
    onChange: (items: any) => void;
}
export declare const CheckBox: ({ title, data, className, onChange, }: CheckBoxProps) => React.JSX.Element;
export {};
