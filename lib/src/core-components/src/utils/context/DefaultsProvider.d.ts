import React from 'react';
import { IconSize } from '../../components/Icon/types';
import { TagSize } from '../../components/Tags1/types';
import { ActionSize } from '../../components/Action/types';
export type DefaultsContextType = {
    actionSize?: ActionSize;
    /** @deprecated does not apply to new icons */
    iconFill?: string;
    iconSize?: IconSize;
    tagSize?: TagSize;
};
export declare const DefaultsContext: React.Context<DefaultsContextType>;
export declare const DefaultsProvider: ({ value, children, }: React.ProviderProps<DefaultsContextType>) => import("react/jsx-runtime").JSX.Element;
