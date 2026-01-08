import React from 'react';
export type InternalProviderProps = {
    children?: React.ReactNode;
};
/**
 * Provides internal stuff we need for our components.
 * Injects Styled Components theme prop via context.
 */
export declare const InternalProvider: React.FC<InternalProviderProps>;
