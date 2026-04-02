/// <reference types="react" />
import type { ButtonSize, ButtonVariant, ButtonColor } from './types';
export declare const iconOnlyStyle: {
    small: string;
    medium: string;
    large: string;
};
export declare const iconOnlyFigmaStyle: {
    small: string;
    medium: string;
    large: string;
};
interface ButtonElementProps {
    size: ButtonSize;
    variant: ButtonVariant;
    color: ButtonColor;
    iconSide: 'left' | 'right';
    hasIcon: boolean;
    hasChildren: boolean;
    useFigmaStyles: boolean;
    isMobile: boolean;
}
export declare const ButtonElement: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ButtonElementProps>> & string;
export declare const iconMargins: {
    small: {
        left: string;
        right: string;
    };
    medium: {
        left: string;
        right: string;
    };
    large: {
        left: string;
        right: string;
    };
};
export declare const IconWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    iconSide: 'left' | 'right';
    size: ButtonSize;
    hasChildren: boolean;
}>> & string;
export {};
