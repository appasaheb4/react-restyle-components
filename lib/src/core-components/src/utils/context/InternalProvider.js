'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '../abstracts/theme';
import { ThemeProvider } from 'styled-components';
const isJSDOM = () => navigator?.userAgent?.includes?.('jsdom');
/**
 * Provides internal stuff we need for our components.
 * Injects Styled Components theme prop via context.
 */
export const InternalProvider = ({ children, }) => {
    const theme = useTheme();
    // useEffect(() => {
    //   const style = getComputedStyle(document.body);
    //   const globalStylesExists = !!style.getPropertyValue(
    //     '--aui-global-styles-exists'
    //   );
    //   if (!globalStylesExists && isReactDevelopment() && !isJSDOM()) {
    //     console.error(
    //       'ERROR: Your techabl UI components WILL BREAK in a future V4 minor version update. You must include GlobalStyles in your DOM.'
    //     );
    //   }
    // }, []);
    return _jsx(ThemeProvider, { theme: theme, children: children });
};
