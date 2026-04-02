/// <reference types="react" />
import { DividerOrientation, DividerVariant, DividerSize, DividerColor } from './types';
export declare const DividerContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $orientation: DividerOrientation;
    $variant: DividerVariant;
    $size: DividerSize;
    $color: DividerColor;
    $inset: string;
    $centerInset: boolean;
    $hasLabel: boolean;
}>> & string;
export declare const DividerLine: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $orientation: DividerOrientation;
    $variant: DividerVariant;
    $size: DividerSize;
    $color: DividerColor;
    $flex?: number | undefined;
}>> & string;
export declare const DividerLabel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $color: DividerColor;
}>> & string;
