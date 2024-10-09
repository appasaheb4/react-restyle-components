import React from 'react';
import '../../../tc.css';
interface ButtonProps {
    type?: 'solid' | 'outline';
    className?: any;
    disable?: boolean;
    onClick: () => void;
    children: React.ReactNode;
}
export declare const Button: ({ type, className, disable, onClick, children, }: ButtonProps) => React.JSX.Element;
export {};
