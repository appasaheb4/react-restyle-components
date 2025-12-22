/// <reference types="react" />
import { AccordionVariant } from './types';
export declare const AccordionElement: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $variant: AccordionVariant | 'inline' | 'full-page';
}>> & string;
export declare const AccordionSectionWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $variant: AccordionVariant | 'inline' | 'full-page';
    $isOpen: boolean;
}>> & string;
export declare const ButtonElement: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    $variant?: AccordionVariant | "inline" | "full-page" | undefined;
    $isOpen?: boolean | undefined;
}>> & string;
export declare const AccordionSectionText: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
type AccordionSectionContentProps = {
    $isOpen: boolean;
    $hasLeader: boolean;
    $transitionDuration: string;
};
export declare const AccordionFade: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $isOpen: boolean;
    $transitionDuration: string;
    $transitionTimingFunction: string;
}>> & string;
export declare const AccordionSectionContentWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $isOpen: boolean;
    $transitionDuration: string;
    $transitionTimingFunction: string;
}>> & string;
export declare const AccordionSectionContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, AccordionSectionContentProps>> & string;
export declare const StyledLeadingTrailing: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    alignment?: "center" | "top" | undefined;
}>> & string;
export declare const AccordionDivider: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHRElement>, HTMLHRElement>, never>, "ref"> & {
    ref?: ((instance: HTMLHRElement | null) => void) | import("react").RefObject<HTMLHRElement> | null | undefined;
}, never>> & string;
export declare const RotatingIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("../../Icon/Icon").IconProps, {
    $rotateIcon: boolean;
}>> & string & Omit<({ nameIcon, classNames, styles, ...props }: import("../../Icon/Icon").IconProps) => import("react").JSX.Element, keyof import("react").Component<any, {}, any>>;
export {};
//# sourceMappingURL=elements.d.ts.map