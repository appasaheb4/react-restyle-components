import React from 'react';
export declare const ThemeBoundaryContext: React.Context<{
    theme: 'tech-abl' | 'partner' | null;
}>;
export type ThemeBoundaryProps = {
    theme: 'tech-abl' | 'partner';
    children: React.ReactNode;
};
/** @experimental */
export declare const ThemeBoundary: ({ theme, children }: ThemeBoundaryProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ThemeBoundary.d.ts.map