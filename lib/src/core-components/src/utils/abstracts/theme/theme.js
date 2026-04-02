import { DEFAULT_THEME, PARTNER_THEME } from './default-themes';
const isObject = (value) => typeof value === 'object' && !Array.isArray(value);
const hasThemeProps = (value) => Object.keys(DEFAULT_THEME).every((key) => key in value);
const isValidTheme = (value) => isObject(value) && hasThemeProps(value);
let themeSubscriptions = [];
export let selectedTheme = DEFAULT_THEME;
export const subscribeTheme = (listener) => themeSubscriptions.push(listener);
export const unsubscribeTheme = (subToRemove) => {
    themeSubscriptions = themeSubscriptions.filter((sub) => sub !== subToRemove);
};
export const getTheme = (theme) => {
    if (isValidTheme(theme))
        return theme;
    else if (typeof theme === 'string') {
        if (theme === 'techabl')
            return DEFAULT_THEME;
        else if (theme === 'partner')
            return PARTNER_THEME;
    }
    console.warn('theme param is not valid, should be type of Theme or ThemeKey - provided: ', { theme });
    return PARTNER_THEME;
};
export const updateTheme = (theme, 
/**
@deprecated overrides is deprecated and will be deleted in v3, please remove overrides param.
*/
overrides) => {
    selectedTheme = { ...getTheme(theme), ...overrides };
    themeSubscriptions.forEach((f) => f(selectedTheme));
};
