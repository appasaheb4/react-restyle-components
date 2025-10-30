import React from 'react';
import { ButtonSize } from './types';
import { IconProps } from '../../components';
export type addIconToChildrenProps = {
    children: React.ReactNode;
    size: ButtonSize;
    icons?: IconProps;
    iconSide: 'left' | 'right';
};
export declare const addIconToChildren: ({ children, size, icons, iconSide, }: addIconToChildrenProps) => JSX.Element;
export type addToSideProps = {
    children: React.ReactNode;
    element: React.ReactNode;
    side: 'left' | 'right';
};
export declare const addToSide: ({ children, element, side, }: addToSideProps) => JSX.Element;
//# sourceMappingURL=utils.d.ts.map