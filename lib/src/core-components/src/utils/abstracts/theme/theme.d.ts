import { ThemeKey, Theme } from './types';
export declare let selectedTheme: Theme;
type ThemeSubscriber = (t: Theme) => void;
export declare const subscribeTheme: (listener: ThemeSubscriber) => number;
export declare const unsubscribeTheme: (subToRemove: ThemeSubscriber) => void;
export declare const getTheme: (theme: Theme | ThemeKey) => Theme;
export declare const updateTheme: (theme: Theme | ThemeKey, overrides?: Partial<Theme>) => void;
export {};
//# sourceMappingURL=theme.d.ts.map