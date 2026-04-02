/// <reference types="react" />
import { ChipVariant, ChipSize, ChipColor } from './types';
export declare const ChipElement: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    $variant: ChipVariant;
    $size: ChipSize;
    $color: ChipColor;
    $selected: boolean;
    $disabled: boolean;
}>> & string;
export declare const IconWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $size: ChipSize;
    $side: 'left' | 'right';
}>> & string;
export declare const AvatarWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $size: ChipSize;
}>> & string;
export declare const DeleteButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $size: ChipSize;
}>> & string;
export declare const ChipLabel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>> & string;
export declare const ChipGroupElement: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $gap: string;
    $wrap: boolean;
    $scrollable: boolean;
    $direction: 'row' | 'column';
}>> & string;
