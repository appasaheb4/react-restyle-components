import { TooltipPosition, TargetRect } from './types';
export interface TooltipCoords {
    top: number;
    left: number;
}
export interface TooltipDimensions {
    width: number;
    height: number;
}
/**
 * Calculate tooltip position relative to viewport (for fixed positioning)
 */
export declare const calculateTooltipPosition: (position: TooltipPosition, targetRect: TargetRect, tooltipDimensions: TooltipDimensions, offset?: number) => TooltipCoords;
/**
 * Get alternate position when collision detected
 */
export declare const getAlternatePosition: (position: TooltipPosition, coords: TooltipCoords, tooltipDimensions: TooltipDimensions, viewportWidth: number, viewportHeight: number) => TooltipPosition | null;
/**
 * Clamp coords within viewport
 */
export declare const clampToViewport: (coords: TooltipCoords, tooltipDimensions: TooltipDimensions, viewportWidth: number, viewportHeight: number) => TooltipCoords;
/**
 * Convert side + align to position
 */
export declare const sideAlignToPosition: (side: 'top' | 'right' | 'bottom' | 'left', align: 'start' | 'center' | 'end') => TooltipPosition;
//# sourceMappingURL=utils.d.ts.map