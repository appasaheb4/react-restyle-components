import { jsx as _jsx } from "react/jsx-runtime";
import React, { forwardRef, useMemo } from 'react';
import { StyledIcon, StyledText, StyledInline } from './elements';
import { Icon } from '../../Icon/Icon';
export const InlineBadge = React.memo(forwardRef(({ size = 'md', variant = 'positive', iconSrc, count, children, ...props }, ref) => {
    const childElement = useMemo(() => {
        if (size === 'hint') {
            return null;
        }
        if (iconSrc) {
            return (_jsx(StyledIcon, { "$size": size, children: _jsx(Icon, { nameIcon: iconSrc, propsIcon: {
                        size: size === 'sm' ? '0.625rem' : '0.75rem',
                        color: 'currentColor',
                    } }) }));
        }
        if (count !== undefined && count !== null && count !== '') {
            const displayCount = typeof count === 'number' && count > 99 ? '99+' : count;
            return _jsx(StyledText, { "$size": size, children: displayCount });
        }
        // Render children as text content when no iconSrc or count
        return children || null;
    }, [size, iconSrc, count, children]);
    return (_jsx(StyledInline, { "data-aui": "inline-badge", ref: ref, "$size": size, "$variant": variant, "$hasIcon": !!iconSrc, role: "status", ...props, children: childElement }));
}));
InlineBadge.displayName = 'InlineBadge';
