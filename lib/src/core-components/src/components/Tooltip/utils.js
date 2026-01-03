const ARROW_SIZE = 6;
/**
 * Calculate tooltip position relative to viewport (for fixed positioning)
 */
export const calculateTooltipPosition = (position, targetRect, tooltipDimensions, offset = 8) => {
    const { top, left, width, height } = targetRect;
    const { width: tooltipWidth, height: tooltipHeight } = tooltipDimensions;
    let coords = { top: 0, left: 0 };
    const totalOffset = offset + ARROW_SIZE;
    switch (position) {
        // Top positions
        case 'top':
            coords = {
                top: top - tooltipHeight - totalOffset,
                left: left + width / 2 - tooltipWidth / 2,
            };
            break;
        case 'top-start':
            coords = {
                top: top - tooltipHeight - totalOffset,
                left: left,
            };
            break;
        case 'top-end':
            coords = {
                top: top - tooltipHeight - totalOffset,
                left: left + width - tooltipWidth,
            };
            break;
        // Bottom positions
        case 'bottom':
            coords = {
                top: top + height + totalOffset,
                left: left + width / 2 - tooltipWidth / 2,
            };
            break;
        case 'bottom-start':
            coords = {
                top: top + height + totalOffset,
                left: left,
            };
            break;
        case 'bottom-end':
            coords = {
                top: top + height + totalOffset,
                left: left + width - tooltipWidth,
            };
            break;
        // Left positions
        case 'left':
            coords = {
                top: top + height / 2 - tooltipHeight / 2,
                left: left - tooltipWidth - totalOffset,
            };
            break;
        case 'left-start':
            coords = {
                top: top,
                left: left - tooltipWidth - totalOffset,
            };
            break;
        case 'left-end':
            coords = {
                top: top + height - tooltipHeight,
                left: left - tooltipWidth - totalOffset,
            };
            break;
        // Right positions
        case 'right':
            coords = {
                top: top + height / 2 - tooltipHeight / 2,
                left: left + width + totalOffset,
            };
            break;
        case 'right-start':
            coords = {
                top: top,
                left: left + width + totalOffset,
            };
            break;
        case 'right-end':
            coords = {
                top: top + height - tooltipHeight,
                left: left + width + totalOffset,
            };
            break;
        default:
            coords = calculateTooltipPosition('top', targetRect, tooltipDimensions, offset);
    }
    return coords;
};
/**
 * Get alternate position when collision detected
 */
export const getAlternatePosition = (position, coords, tooltipDimensions, viewportWidth, viewportHeight) => {
    const { top, left } = coords;
    const { width, height } = tooltipDimensions;
    const padding = 8;
    // Check if current position has collision
    const leftOverflow = left < padding;
    const rightOverflow = left + width > viewportWidth - padding;
    const topOverflow = top < padding;
    const bottomOverflow = top + height > viewportHeight - padding;
    if (!leftOverflow && !rightOverflow && !topOverflow && !bottomOverflow) {
        return null;
    }
    // Determine alternate position
    if (position.startsWith('top') && topOverflow) {
        return position.replace('top', 'bottom');
    }
    if (position.startsWith('bottom') && bottomOverflow) {
        return position.replace('bottom', 'top');
    }
    if (position.startsWith('left') && leftOverflow) {
        return position.replace('left', 'right');
    }
    if (position.startsWith('right') && rightOverflow) {
        return position.replace('right', 'left');
    }
    return null;
};
/**
 * Clamp coords within viewport
 */
export const clampToViewport = (coords, tooltipDimensions, viewportWidth, viewportHeight) => {
    const { width, height } = tooltipDimensions;
    const padding = 8;
    return {
        top: Math.max(padding, Math.min(coords.top, viewportHeight - height - padding)),
        left: Math.max(padding, Math.min(coords.left, viewportWidth - width - padding)),
    };
};
/**
 * Convert side + align to position
 */
export const sideAlignToPosition = (side, align) => {
    if (align === 'center')
        return side;
    return `${side}-${align}`;
};
