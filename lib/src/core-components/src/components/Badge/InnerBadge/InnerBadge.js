import { jsx as _jsx } from "react/jsx-runtime";
import React, { useMemo } from 'react';
import { StyledIcon, StyledText, StyledBadge } from './elements';
import { Icon } from '../../Icon/Icon';
export const InnerBadge = React.memo(({ position = 'top-right', size = 'md', overlap = 'circular', variant = 'notification', iconSrc, count, ...props }) => {
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
            // Format count display: show 99+ for numbers > 99
            const displayCount = typeof count === 'number' && count > 99 ? '99+' : count;
            return _jsx(StyledText, { "$size": size, children: displayCount });
        }
        return null;
    }, [size, iconSrc, count]);
    return (_jsx(StyledBadge, { "$position": position, "$size": size, "$overlap": overlap, "$variant": variant, "$hasIcon": !!iconSrc, role: "status", "aria-live": "polite", ...props, children: childElement }));
});
InnerBadge.displayName = 'InnerBadge';
