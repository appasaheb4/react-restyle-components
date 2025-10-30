'use client';
import { useContext, useEffect, useState } from 'react';
import { getTheme, selectedTheme, subscribeTheme, unsubscribeTheme, } from './theme';
import { ThemeBoundaryContext } from './ThemeBoundary';
const useTheme = () => {
    const [theme, setTheme] = useState(selectedTheme);
    useEffect(() => {
        subscribeTheme(setTheme);
        return () => unsubscribeTheme(setTheme);
    }, []);
    const { theme: themeFromBoundary } = useContext(ThemeBoundaryContext);
    if (themeFromBoundary !== null) {
        return getTheme(themeFromBoundary);
    }
    return theme;
};
export default useTheme;
