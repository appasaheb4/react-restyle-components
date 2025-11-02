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
    /** Color variant - uses CSS classes from tc.module.css */
    color?: 'blue' | 'green' | 'gray' | 'primary';
    /** Accessibility label */
    'aria-label'?: string;
}
export declare const LoadingAnimateSpin: ({ classWarper, className, variant, size, color, "aria-label": ariaLabel, }: LoadingAnimateSpinProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=loader.component.d.ts.map