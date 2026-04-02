import React from 'react';
type TextProps = React.HTMLAttributes<HTMLSpanElement> & {
    size?: number;
    weight?: 'regular' | 'medium' | 'heavy';
    color?: string;
};
export type HeaderProps = {
    children?: React.ReactNode;
};
export declare const Header: (({ children }: HeaderProps) => import("react/jsx-runtime").JSX.Element) & {
    Heading: ({ children, ...props }: TextProps) => import("react/jsx-runtime").JSX.Element;
    Leading: (props: any) => import("react/jsx-runtime").JSX.Element;
    Number: ({ children, ...props }: TextProps) => import("react/jsx-runtime").JSX.Element;
    SupportiveText: ({ children, ...props }: TextProps) => import("react/jsx-runtime").JSX.Element;
    Trailing: (props: any) => import("react/jsx-runtime").JSX.Element;
};
export {};
