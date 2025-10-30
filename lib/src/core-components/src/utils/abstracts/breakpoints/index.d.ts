export declare enum Size {
    SM = 375,
    MD = 768,
    MD2 = 1024,
    LG = 1280,
    XL = 1440,
    XXL = 1920
}
export declare const breakpoints: {
    readonly smMax: "max-width: 425px";
    readonly mdMin: "min-width: 426px";
    readonly lgMin: "min-width: 769px";
    readonly xs: `@media (max-width: ${number}px)`;
    readonly sm: "@media (min-width: 375px)";
    readonly smOnly: `@media (min-width: 375px) and (max-width: ${number}px)`;
    readonly md: "@media (min-width: 768px)";
    readonly mdOnly: `@media (min-width: 768px) and (max-width: ${number}px)`;
    readonly md2: "@media (min-width: 1024px)";
    readonly md2Only: `@media (min-width: 1024px) and (max-width: ${number}px)`;
    readonly lg: "@media (min-width: 1280px)";
    readonly lgOnly: `@media (min-width: 1280px) and (max-width: ${number}px)`;
    readonly xl: "@media (min-width: 1440px)";
    readonly xlOnly: `@media (min-width: 1440px) and (max-width: ${number}px)`;
    readonly xxl: "@media (min-width: 1920px)";
};
type BreakpointKey = keyof typeof breakpoints;
export type BreakpointValue = (typeof breakpoints)[BreakpointKey];
export {};
//# sourceMappingURL=index.d.ts.map