import React from 'react';
import { IconProps } from '../../Icon';
export type AccordionSectionProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    buttonClassName?: string;
    iconWrapperClassName?: string;
    /** @deprecated use `aria-label` instead */
    ariaLabel?: string;
    /** @deprecated use AccordionSection.Header.Leading and AccordionSection.Header.Trailing instead */
    icons?: IconProps;
    header?: string;
    subheader?: string;
    startOpen?: boolean;
    transitionMaxHeight?: string;
    /** @deprecated */
    transitionDuration?: string;
    /** @deprecated */
    transitionTimingFunction?: string;
    onOpenStateChange?: (isOpening: boolean) => void;
    isOpen?: boolean;
};
export declare const AccordionSection: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & {
    buttonClassName?: string | undefined;
    iconWrapperClassName?: string | undefined;
    /** @deprecated use `aria-label` instead */
    ariaLabel?: string | undefined;
    /** @deprecated use AccordionSection.Header.Leading and AccordionSection.Header.Trailing instead */
    icons?: IconProps | undefined;
    header?: string | undefined;
    subheader?: string | undefined;
    startOpen?: boolean | undefined;
    transitionMaxHeight?: string | undefined;
    /** @deprecated */
    transitionDuration?: string | undefined;
    /** @deprecated */
    transitionTimingFunction?: string | undefined;
    onOpenStateChange?: ((isOpening: boolean) => void) | undefined;
    isOpen?: boolean | undefined;
} & React.RefAttributes<HTMLButtonElement>> & {
    Header: (({ children }: import("./Header").HeaderProps) => import("react/jsx-runtime").JSX.Element) & {
        Heading: ({ children, ...props }: React.HTMLAttributes<HTMLSpanElement> & {
            size?: number | undefined;
            weight?: "medium" | "regular" | "heavy" | undefined;
            color?: string | undefined;
        }) => import("react/jsx-runtime").JSX.Element;
        Leading: (props: any) => import("react/jsx-runtime").JSX.Element;
        Number: ({ children, ...props }: React.HTMLAttributes<HTMLSpanElement> & {
            size?: number | undefined;
            weight?: "medium" | "regular" | "heavy" | undefined;
            color?: string | undefined;
        }) => import("react/jsx-runtime").JSX.Element;
        SupportiveText: ({ children, ...props }: React.HTMLAttributes<HTMLSpanElement> & {
            size?: number | undefined;
            weight?: "medium" | "regular" | "heavy" | undefined;
            color?: string | undefined;
        }) => import("react/jsx-runtime").JSX.Element;
        Trailing: (props: any) => import("react/jsx-runtime").JSX.Element;
    };
};
//# sourceMappingURL=AccordionSection.d.ts.map