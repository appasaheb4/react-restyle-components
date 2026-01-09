'use client';
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState, useRef, useCallback, useEffect, useMemo, } from 'react';
import { createPortal } from 'react-dom';
import { TooltipTrigger, TooltipContent, TooltipArrow, TooltipPortal } from './elements';
import { calculateTooltipPosition, getAlternatePosition, clampToViewport, sideAlignToPosition, } from './utils';
export const Tooltip = forwardRef(function TooltipComponent(props, ref) {
    const { children, content, position: positionProp, side, align = 'center', variant = 'dark', size = 'medium', delay = 200, hideDelay = 0, offset = 8, sideOffset, maxWidth = 280, showArrow = true, disabled = false, trigger = ['hover', 'focus'], open: controlledOpen, onOpenChange, avoidCollisions = true, portal = true, animated = true, classNames = {}, styles = {}, className, zIndex = 9999, ariaLabel, ...rest } = props;
    // Refs
    const triggerRef = useRef(null);
    const tooltipRef = useRef(null);
    const showTimeoutRef = useRef(null);
    const hideTimeoutRef = useRef(null);
    // State
    const [isOpen, setIsOpen] = useState(false);
    const [coords, setCoords] = useState({ top: -9999, left: -9999 });
    const [actualPosition, setActualPosition] = useState('top');
    const [isMounted, setIsMounted] = useState(false);
    // Check if mounted (for SSR)
    useEffect(() => {
        setIsMounted(true);
    }, []);
    // Controlled vs uncontrolled
    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : isOpen;
    // Determine position from props
    const desiredPosition = useMemo(() => {
        if (positionProp)
            return positionProp;
        if (side)
            return sideAlignToPosition(side, align);
        return 'top';
    }, [positionProp, side, align]);
    // Get final offset
    const finalOffset = sideOffset ?? offset;
    // Trigger modes
    const triggers = useMemo(() => {
        return Array.isArray(trigger) ? trigger : [trigger];
    }, [trigger]);
    // Calculate position
    const updatePosition = useCallback(() => {
        if (!triggerRef.current || !tooltipRef.current)
            return;
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const dimensions = {
            width: tooltipRect.width,
            height: tooltipRect.height,
        };
        let newPosition = desiredPosition;
        let newCoords = calculateTooltipPosition(desiredPosition, triggerRect, dimensions, finalOffset);
        // Collision detection
        if (avoidCollisions) {
            const alternatePosition = getAlternatePosition(desiredPosition, newCoords, dimensions, viewportWidth, viewportHeight);
            if (alternatePosition) {
                newPosition = alternatePosition;
                newCoords = calculateTooltipPosition(alternatePosition, triggerRect, dimensions, finalOffset);
            }
            // Clamp to viewport
            newCoords = clampToViewport(newCoords, dimensions, viewportWidth, viewportHeight);
        }
        setActualPosition(newPosition);
        setCoords(newCoords);
    }, [desiredPosition, finalOffset, avoidCollisions]);
    // Show tooltip
    const show = useCallback(() => {
        if (disabled || !content)
            return;
        if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current);
            hideTimeoutRef.current = null;
        }
        showTimeoutRef.current = setTimeout(() => {
            if (isControlled) {
                onOpenChange?.(true);
            }
            else {
                setIsOpen(true);
            }
        }, delay);
    }, [disabled, content, delay, isControlled, onOpenChange]);
    // Hide tooltip
    const hide = useCallback(() => {
        if (showTimeoutRef.current) {
            clearTimeout(showTimeoutRef.current);
            showTimeoutRef.current = null;
        }
        hideTimeoutRef.current = setTimeout(() => {
            if (isControlled) {
                onOpenChange?.(false);
            }
            else {
                setIsOpen(false);
            }
        }, hideDelay);
    }, [hideDelay, isControlled, onOpenChange]);
    // Toggle for click trigger
    const toggle = useCallback(() => {
        if (open) {
            hide();
        }
        else {
            show();
        }
    }, [open, show, hide]);
    // Update position when open changes
    useEffect(() => {
        if (open) {
            // Use multiple RAF to ensure DOM is ready
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    updatePosition();
                });
            });
            // Update on scroll/resize
            const handleUpdate = () => {
                requestAnimationFrame(updatePosition);
            };
            window.addEventListener('scroll', handleUpdate, true);
            window.addEventListener('resize', handleUpdate);
            return () => {
                window.removeEventListener('scroll', handleUpdate, true);
                window.removeEventListener('resize', handleUpdate);
            };
        }
    }, [open, updatePosition]);
    // Escape key handler
    useEffect(() => {
        if (!open)
            return;
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                hide();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [open, hide]);
    // Click outside handler for click trigger
    useEffect(() => {
        if (!open || !triggers.includes('click'))
            return;
        const handleClickOutside = (e) => {
            if (triggerRef.current &&
                !triggerRef.current.contains(e.target) &&
                tooltipRef.current &&
                !tooltipRef.current.contains(e.target)) {
                hide();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open, triggers, hide]);
    // Cleanup timeouts
    useEffect(() => {
        return () => {
            if (showTimeoutRef.current)
                clearTimeout(showTimeoutRef.current);
            if (hideTimeoutRef.current)
                clearTimeout(hideTimeoutRef.current);
        };
    }, []);
    // Event handlers
    const handleMouseEnter = triggers.includes('hover') ? show : undefined;
    const handleMouseLeave = triggers.includes('hover') ? hide : undefined;
    const handleFocus = triggers.includes('focus') ? show : undefined;
    const handleBlur = triggers.includes('focus') ? hide : undefined;
    const handleClick = triggers.includes('click') ? toggle : undefined;
    // Don't render if no content
    if (!content) {
        return _jsx(_Fragment, { children: children });
    }
    // Generate unique ID for accessibility
    const tooltipId = useMemo(() => `tooltip-${Math.random().toString(36).substr(2, 9)}`, []);
    // Tooltip element
    const tooltipElement = open && (_jsxs(TooltipContent, { ref: tooltipRef, role: "tooltip", id: tooltipId, "aria-label": ariaLabel, "$variant": variant, "$size": size, "$maxWidth": maxWidth, "$animated": animated, "$isVisible": open, "$position": actualPosition, className: classNames.content, style: {
            top: coords.top,
            left: coords.left,
            ...styles.content,
        }, children: [content, showArrow && (_jsx(TooltipArrow, { "$variant": variant, "$position": actualPosition, className: classNames.arrow, style: styles.arrow }))] }));
    return (_jsxs(_Fragment, { children: [_jsx(TooltipTrigger, { ref: (node) => {
                    // Handle both refs
                    triggerRef.current = node;
                    if (typeof ref === 'function') {
                        ref(node);
                    }
                    else if (ref) {
                        ref.current = node;
                    }
                }, className: className || classNames.trigger, style: styles.trigger, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onFocus: handleFocus, onBlur: handleBlur, onClick: handleClick, "aria-describedby": open ? tooltipId : undefined, "data-state": open ? 'open' : 'closed', ...rest, children: children }), portal && isMounted
                ? createPortal(_jsx(TooltipPortal, { "$zIndex": zIndex, children: tooltipElement }), document.body)
                : tooltipElement] }));
});
Tooltip.displayName = 'Tooltip';
// Simple provider for compatibility (no longer needed but kept for migration)
export const TooltipProvider = ({ children }) => {
    return _jsx(_Fragment, { children: children });
};
