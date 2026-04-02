'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
export const DefaultsContext = createContext({});
export const DefaultsProvider = ({ value, children, }) => {
    const currentDefaults = useContext(DefaultsContext);
    return (_jsx(DefaultsContext.Provider, { value: { ...currentDefaults, ...value }, children: children }));
};
