'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useMemo } from 'react';
import { SkeletonElement, SkeletonWrapper, SkeletonGroupContainer, SkeletonCardContainer, SkeletonTextContainer, avatarSizes, } from './elements';
// Size presets for base Skeleton
const sizePresets = {
    xs: { width: 40, height: 12 },
    sm: { width: 80, height: 16 },
    md: { width: 120, height: 20 },
    lg: { width: 180, height: 24 },
    xl: { width: 240, height: 32 },
};
export const Skeleton = forwardRef(function SkeletonComponent(props, ref) {
    const { width, height, variant = 'rectangular', animation = 'shimmer', size = 'md', count = 1, gap = '10px', duration = 1500, borderRadius, theme = 'light', stagger = false, responsive = false, aspectRatio, className, style, ...rest } = props;
    // Determine dimensions
    const finalWidth = width ?? sizePresets[size].width;
    const finalHeight = height ?? sizePresets[size].height;
    const elements = useMemo(() => Array(count)
        .fill(null)
        .map((_, index) => index), [count]);
    if (count === 1) {
        return (_jsx(SkeletonElement, { ref: ref, "$width": finalWidth, "$height": finalHeight, "$variant": variant, "$animation": animation, "$duration": duration, "$borderRadius": borderRadius, "$theme": theme, "$responsive": responsive, "$aspectRatio": aspectRatio, "aria-busy": "true", "aria-live": "polite", "aria-label": "Loading...", role: "progressbar", "data-testid": "skeleton", className: className, style: style, ...rest }));
    }
    return (_jsx(SkeletonWrapper, { ref: ref, "$gap": gap, "$direction": "column", "data-testid": "skeleton-wrapper", className: className, ...rest, children: elements.map((key) => (_jsx(SkeletonElement, { "$width": finalWidth, "$height": finalHeight, "$variant": variant, "$animation": animation, "$duration": duration, "$borderRadius": borderRadius, "$theme": theme, "$responsive": responsive, "$aspectRatio": aspectRatio, "$staggerIndex": stagger ? key : undefined, "aria-busy": "true", role: "progressbar" }, key))) }));
});
Skeleton.displayName = 'Skeleton';
export const SkeletonGroup = forwardRef(function SkeletonGroupComponent(props, ref) {
    const { children, direction = 'column', gap = '12px', align = 'stretch', wrap = false, responsive = false, className, ...rest } = props;
    return (_jsx(SkeletonGroupContainer, { ref: ref, "$direction": direction, "$gap": gap, "$align": align, "$wrap": wrap, "$responsive": responsive, "data-testid": "skeleton-group", className: className, ...rest, children: children }));
});
SkeletonGroup.displayName = 'SkeletonGroup';
// Preset: Text lines skeleton
export const SkeletonText = forwardRef(function SkeletonTextComponent(props, ref) {
    const { lines = 3, lastLineWidth = '60%', gap = '10px', animation = 'shimmer', theme = 'light', className, ...rest } = props;
    const lineElements = useMemo(() => Array(lines).fill(null).map((_, i) => i), [lines]);
    return (_jsx(SkeletonTextContainer, { ref: ref, "$gap": gap, "data-testid": "skeleton-text", className: className, ...rest, children: lineElements.map((index) => (_jsx(SkeletonElement, { "$width": index === lines - 1 ? lastLineWidth : '100%', "$height": 16, "$variant": "text", "$animation": animation, "$duration": 1500, "$theme": theme, "$responsive": false, "$staggerIndex": index, "aria-busy": "true", role: "progressbar" }, index))) }));
});
SkeletonText.displayName = 'SkeletonText';
// Preset: Avatar skeleton
export const SkeletonAvatar = forwardRef(function SkeletonAvatarComponent(props, ref) {
    const { size = 'md', animation = 'shimmer', theme = 'light', className, ...rest } = props;
    const avatarSize = avatarSizes[size];
    return (_jsx(SkeletonElement, { ref: ref, "$width": avatarSize, "$height": avatarSize, "$variant": "avatar", "$animation": animation, "$duration": 1500, "$theme": theme, "$responsive": false, "aria-busy": "true", "aria-label": "Loading avatar...", role: "progressbar", "data-testid": "skeleton-avatar", className: className, ...rest }));
});
SkeletonAvatar.displayName = 'SkeletonAvatar';
// Preset: Card skeleton
export const SkeletonCard = forwardRef(function SkeletonCardComponent(props, ref) {
    const { hasImage = true, imageHeight = 180, textLines = 3, hasActions = true, animation = 'shimmer', theme = 'light', className, ...rest } = props;
    return (_jsxs(SkeletonCardContainer, { ref: ref, "$theme": theme, "data-testid": "skeleton-card", className: className, ...rest, children: [hasImage && (_jsx(SkeletonElement, { "$width": "100%", "$height": imageHeight, "$variant": "rounded", "$animation": animation, "$duration": 1500, "$theme": theme, "$responsive": false, style: { marginBottom: 16 } })), _jsxs(SkeletonGroup, { gap: "10px", style: { marginBottom: hasActions ? 16 : 0 }, children: [_jsx(SkeletonElement, { "$width": "70%", "$height": 20, "$variant": "text", "$animation": animation, "$duration": 1500, "$theme": theme, "$responsive": false }), Array(textLines - 1).fill(null).map((_, i) => (_jsx(SkeletonElement, { "$width": i === textLines - 2 ? '50%' : '90%', "$height": 14, "$variant": "text", "$animation": animation, "$duration": 1500, "$theme": theme, "$responsive": false, "$staggerIndex": i + 1 }, i)))] }), hasActions && (_jsxs(SkeletonGroup, { direction: "row", gap: "10px", children: [_jsx(SkeletonElement, { "$width": 80, "$height": 36, "$variant": "button", "$animation": animation, "$duration": 1500, "$theme": theme, "$responsive": false }), _jsx(SkeletonElement, { "$width": 80, "$height": 36, "$variant": "button", "$animation": animation, "$duration": 1500, "$theme": theme, "$responsive": false })] }))] }));
});
SkeletonCard.displayName = 'SkeletonCard';
