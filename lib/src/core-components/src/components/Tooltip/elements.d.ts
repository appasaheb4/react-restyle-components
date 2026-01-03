/// <reference types="react" />
import { TooltipVariant, TooltipSize, TooltipPosition } from './types';
export declare const TooltipTrigger: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>> & string;
export declare const TooltipPortal: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $zIndex: number;
}>> & string;
export declare const TooltipContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $variant: TooltipVariant;
    $size: TooltipSize;
    $maxWidth?: number | undefined;
    $animated: boolean;
    $isVisible: boolean;
    $position: TooltipPosition;
}>> & string;
export declare const TooltipArrow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $variant: TooltipVariant;
    $position: TooltipPosition;
}>> & string;
//# sourceMappingURL=elements.d.ts.map