/** @deprecated use tokens instead @soluto-private/aui-tokens */
export declare const colors: {
    readonly primaryBrighter: "#cb5aff";
    readonly primaryBright: "#a839f3";
    readonly primaryDeep: "#8223d2";
    readonly primaryDeeper: "#6700b8";
    readonly secondaryBrighter: "#6b8bff";
    readonly secondaryBright: "#4a68f9";
    readonly secondaryDeep: "#2743cc";
    readonly secondaryDeeper: "#253baa";
    readonly brandGreenBrighter: "#6efac3";
    readonly brandGreenBright: "#00e7a1";
    readonly brandGreenDeep: "#00b574";
    readonly brandGreenDeeper: "#0b8350";
    readonly brandTennis: "#d2fa46";
    readonly white: "#ffffff";
    readonly black: "#000000";
    readonly neutralBrightest: "#f0f0f5";
    readonly neutralBrighter: "#e6e6eb";
    readonly neutralBright: "#d5d6da";
    readonly neutralDeep: "#a5aaaf";
    readonly neutralDeeper: "#6e767d";
    readonly neutralDeepest: "#333f48";
    readonly disabledBackground: "#e6e6eb";
    readonly disabledText: "#a5aaaf";
    readonly errorBright: "#ff5070";
    readonly errorDeep: "#db1b1b";
    readonly warningBright: "#f9d51c";
    readonly warningDeep: "#edb800";
    readonly successBright: "#37e7a7";
    readonly successDeep: "#00bf63";
    readonly successDeeper: "#008662";
    readonly focus: "#0047e1";
};
export declare const gradients: {
    darkAngle1: string;
    darkAngle2: string;
    darkAngle3: string;
    darkAngle4: string;
    lightAngle1: string;
    lightAngle2: string;
    lightAngle3: string;
    lightAngle4: string;
};
type ColorKey = keyof typeof colors;
/** @deprecated */
export type ColorValue = (typeof colors)[ColorKey];
export {};
