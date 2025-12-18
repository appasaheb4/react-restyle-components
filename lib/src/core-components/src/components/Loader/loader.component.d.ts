import { CSSProperties } from 'react';
export type LoaderVariant = 'spinner' | 'dots' | 'bars' | 'pulse';
export type LoaderSize = 'sm' | 'md' | 'lg';
export interface LoaderClassNames {
    /** Custom className for the outer wrapper */
    wrapper?: string;
    /** Custom className for the loader container */
    container?: string;
    /** Custom className for the spinner element */
    spinner?: string;
    /** Custom className for the dot elements */
    dot?: string;
    /** Custom className for the bar elements */
    bar?: string;
    /** Custom className for the pulse element */
    pulse?: string;
    /** Custom className for the loading text */
    text?: string;
}
export interface LoaderStyles {
    /** Custom style for the outer wrapper */
    wrapper?: CSSProperties;
    /** Custom style for the loader container */
    container?: CSSProperties;
    /** Custom style for the spinner element */
    spinner?: CSSProperties;
    /** Custom style for the dot elements */
    dot?: CSSProperties;
    /** Custom style for the bar elements */
    bar?: CSSProperties;
    /** Custom style for the pulse element */
    pulse?: CSSProperties;
    /** Custom style for the loading text */
    text?: CSSProperties;
}
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
    /** Custom classNames for component parts */
    classNames?: LoaderClassNames;
    /** Custom inline styles for component parts */
    styles?: LoaderStyles;
    /** Accessibility label */
    'aria-label'?: string;
}
export declare const LoadingAnimateSpin: ({ classWarper, className, variant, size, color, borderWidth, width, height, textFontSize, loadingText, classNames, styles, "aria-label": ariaLabel, }: LoadingAnimateSpinProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=loader.component.d.ts.map