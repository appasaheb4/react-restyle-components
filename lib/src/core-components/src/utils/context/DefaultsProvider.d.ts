import React from 'react';
import { IconSize } from '../../components/Icon/iconTypes';
import { TagSize } from '../../components/Tags/types';
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
//# sourceMappingURL=DefaultsProvider.d.ts.map