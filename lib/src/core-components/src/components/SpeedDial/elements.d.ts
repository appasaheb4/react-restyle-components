/// <reference types="react" />
import { SpeedDialDirection, SpeedDialSize, SpeedDialVariant } from './types';
export declare const sizeConfig: Record<SpeedDialSize, {
    fabSize: number;
    actionSize: number;
    iconSize: number;
    actionIconSize: number;
    labelFontSize: string;
}>;
export declare const SpeedDialRoot: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $zIndex: number;
    $hidden: boolean;
}>> & string;
export declare const SpeedDialBackdrop: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $isOpen: boolean;
    $opacity: number;
    $zIndex: number;
}>> & string;
export declare const SpeedDialFab: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    $size: SpeedDialSize;
    $variant: SpeedDialVariant;
    $isOpen: boolean;
    $rotateOnToggle: boolean;
    $rotationDegrees: number;
    $customBg?: string | undefined;
    $customColor?: string | undefined;
}>> & string;
export declare const SpeedDialActions: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $direction: SpeedDialDirection;
    $gap: number;
    $isOpen: boolean;
}>> & string;
export declare const SpeedDialActionWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $direction: SpeedDialDirection;
    $showLabels: boolean;
}>> & string;
export declare const SpeedDialActionButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    $size: SpeedDialSize;
    $isOpen: boolean;
    $index: number;
    $staggerDelay: number;
    $animationDuration: number;
    $customBg?: string | undefined;
    $customColor?: string | undefined;
}>> & string;
export declare const SpeedDialActionLabel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $size: SpeedDialSize;
    $direction: SpeedDialDirection;
    $isOpen: boolean;
    $index: number;
    $staggerDelay: number;
}>> & string;
export declare const IconWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $size: SpeedDialSize;
    $isAction?: boolean | undefined;
}>> & string;
