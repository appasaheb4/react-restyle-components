export type LoaderVariant = 'spinner' | 'dots' | 'bars' | 'pulse';
export type LoaderSize = 'sm' | 'md' | 'lg';
export interface LoadingAnimateSpinProps {
    /** Wrapper className for positioning */
    classWarper?: string;
    /** Additional className for the loader element */
    className?: string;
    /** Variant of loader: spinner, dots, bars, or pulse */
    variant?: LoaderVariant;
    /** Size of the loader: sm, md, or lg */
    size?: LoaderSize;
    /** Color variant - can be a predefined color name or any valid CSS color value (hex, rgb, rgba, etc.) */
    color?: 'blue' | 'green' | 'gray' | 'primary' | 'white' | 'black' | string;
    /** Border width for the spinner (e.g., '4px', '10px', '1rem') */
    borderWidth?: string;
    /** Font size for the loading text (e.g., '1rem', '1.125rem', '1.5rem') */
    textFontSize?: string;
    /** Accessibility label */
    'aria-label'?: string;
}
export declare const LoadingAnimateSpin: ({ classWarper, className, variant, size, color, borderWidth, textFontSize, "aria-label": ariaLabel, }: LoadingAnimateSpinProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=loader.component.d.ts.map