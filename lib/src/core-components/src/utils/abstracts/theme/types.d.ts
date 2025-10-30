import { colors } from '../colors';
declare module 'styled-components' {
    interface DefaultTheme extends Theme {
    }
    interface ThemeProps<T> {
        theme: T;
    }
}
export type StyledProps<P> = P & {
    theme: Theme;
};
type ThemeProp = keyof typeof colors;
type ThemeColor = (typeof colors)[ThemeProp] | string;
export type ThemeKey = 'techabl' | 'att' | 'verizon' | 'partner';
export type Theme = {
    primary: ThemeColor;
    primaryHover: ThemeColor;
    primaryPressed: ThemeColor;
    textOnPrimary: ThemeColor;
    secondary: ThemeColor;
    secondaryHover: ThemeColor;
    secondaryPressed: ThemeColor;
    textOnSecondary: ThemeColor;
    inverted: ThemeColor;
    invertedHover: ThemeColor;
    invertedPressed: ThemeColor;
    textOnInverted: ThemeColor;
};
export {};
//# sourceMappingURL=types.d.ts.map