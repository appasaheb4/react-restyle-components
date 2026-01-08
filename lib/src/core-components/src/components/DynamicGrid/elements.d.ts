/// <reference types="react" />
import { GridVariant, ScrollConfig, AnimationConfig } from './types';
export declare const GridWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $variant: GridVariant;
}>> & string;
export declare const GridContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $columns: number;
    $minWidth: number;
    $maxWidth?: number | undefined;
    $gap: string;
    $rowGap?: string | undefined;
    $columnGap?: string | undefined;
    $autoFit: boolean;
    $maxRows?: number | undefined;
    $alignItems?: "center" | "start" | "end" | "stretch" | undefined;
    $justifyItems?: "center" | "start" | "end" | "stretch" | undefined;
    $alignContent?: "center" | "start" | "end" | "stretch" | undefined;
    $justifyContent?: "center" | "start" | "end" | "space-around" | "space-between" | "space-evenly" | undefined;
    $scroll?: ScrollConfig | undefined;
    $animation?: AnimationConfig | undefined;
    $variant: GridVariant;
}>> & string;
export declare const GridItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $colSpan?: number | undefined;
    $rowSpan?: number | undefined;
    $order?: number | undefined;
    $alignSelf?: "center" | "start" | "end" | "stretch" | undefined;
    $justifySelf?: "center" | "start" | "end" | "stretch" | undefined;
    $animation?: AnimationConfig | undefined;
    $animationIndex?: number | undefined;
    $borderRadius?: string | undefined;
    $padding?: string | undefined;
    $aspectRatio?: string | undefined;
}>> & string;
export declare const SkeletonItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $aspectRatio?: string | undefined;
    $borderRadius?: string | undefined;
}>> & string;
export declare const EmptyState: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ScrollArrow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    $direction: 'left' | 'right';
    $visible: boolean;
}>> & string;
export declare const ScrollDots: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ScrollDot: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    $active: boolean;
}>> & string;
export declare const LoadingOverlay: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
