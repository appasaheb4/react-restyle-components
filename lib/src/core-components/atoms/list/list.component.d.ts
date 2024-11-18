import React from 'react';
import '../../../tc.css';
interface ListProps {
    direction?: 'row' | 'col';
    space?: number;
    padding?: boolean;
    background?: boolean;
    align?: 'start' | 'between' | 'center' | 'end';
    justify?: 'start' | 'end' | 'center' | 'stretch';
    fill?: boolean;
    children?: React.ReactNode;
}
export declare const List: React.FunctionComponent<ListProps>;
export {};
