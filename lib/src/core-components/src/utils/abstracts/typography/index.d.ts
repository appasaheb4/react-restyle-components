export declare const fontFamilies: {
    default: string;
    mono: string;
};
export type FontFamily = keyof typeof fontFamilies;
export declare const getFontFamily: (family: FontFamily) => string;
export declare const fontFamily: string;
export declare const fontWeights: {
    feather: number;
    base: number;
    heavy: number;
    black: number;
};
export declare const fontSizes: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
};
export type FontWeight = keyof typeof fontWeights;
export declare const getFontWeight: (weight: FontWeight) => number;
export type FontSize = keyof typeof fontSizes;
export declare const getFontSize: (size: FontSize) => string;
//# sourceMappingURL=index.d.ts.map