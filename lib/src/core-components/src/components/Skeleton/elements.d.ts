/// <reference types="react" />
import { SkeletonVariant, SkeletonAnimation, SkeletonSize, SkeletonTheme } from './types';
export declare const avatarSizes: Record<SkeletonSize, string>;
export declare const SkeletonElement: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $width: string | number;
    $height: string | number;
    $variant: SkeletonVariant;
    $animation: SkeletonAnimation;
    $duration: number;
    $borderRadius?: string | undefined;
    $theme: SkeletonTheme;
    $responsive: boolean;
    $aspectRatio?: string | undefined;
    $staggerIndex?: number | undefined;
}>> & string;
export declare const SkeletonWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $gap: string;
    $direction: 'row' | 'column';
}>> & string;
export declare const SkeletonGroupContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $direction: 'row' | 'column';
    $gap: string;
    $align: 'start' | 'center' | 'end' | 'stretch';
    $wrap: boolean;
    $responsive: boolean;
}>> & string;
export declare const SkeletonCardContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: SkeletonTheme;
}>> & string;
export declare const SkeletonTextContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $gap: string;
}>> & string;
