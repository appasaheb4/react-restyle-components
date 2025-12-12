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
    /** Custom width for the spinner (e.g., '2rem', '50px'). If not provided, uses className or defaults to '4rem' */
    width?: string;
    /** Custom height for the spinner (e.g., '2rem', '50px'). If not provided, uses className or defaults to '4rem' */
    height?: string;
    /** Font size for the loading text (e.g., '1rem', '1.125rem', '1.5rem') */
    textFontSize?: string;
    /** Loading text to display below the spinner. If not provided, no text is shown. */
    loadingText?: string;
    /** Accessibility label */
    'aria-label'?: string;
}
export declare const LoadingAnimateSpin: ({ classWarper, className, variant, size, color, borderWidth, width, height, textFontSize, loadingText, "aria-label": ariaLabel, }: LoadingAnimateSpinProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=loader.component.d.ts.map