'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
export const ThemeBoundaryContext = React.createContext({
    theme: null,
});
/** @experimental */
export const ThemeBoundary = ({ theme, children }) => (_jsx(ThemeBoundaryContext.Provider, { value: { theme }, children: children }));
