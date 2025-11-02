/// <reference types="react" />
import { BadgeOverlap, BadgePosition, BadgeSize, BadgeVariant } from '../types';
type StyledBadgeProps = {
    $overlap: BadgeOverlap;
    $size: BadgeSize;
    $position: BadgePosition;
    $variant: BadgeVariant;
    $hasIcon: boolean;
};
type StyledInlineProps = Omit<StyledBadgeProps, '$overlap' | '$position'>;
export declare const StyledBadge: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StyledBadgeProps>> & string;
export declare const StyledInline: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StyledInlineProps>> & string;
export declare const StyledText: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $size: BadgeSize;
}>> & string;
export declare const StyledIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $size: BadgeSize;
}>> & string;
export {};
//# sourceMappingURL=elements.d.ts.map