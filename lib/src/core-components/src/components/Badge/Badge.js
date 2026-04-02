import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { memo, useMemo } from 'react';
import { attachSubComponents } from '../../utils';
import { InnerBadge } from './InnerBadge/InnerBadge';
import { styled } from 'styled-components';
import { InlineBadge } from './InnerBadge/Inline';
const BadgeContainer = styled.div `
  position: relative;
  width: min-content;
  display: inline-block;
`;
const BadgeComponent = React.forwardRef(({ size = 'hint', overlap = 'circular', children, position = 'bottom-right', variant = 'notification', iconSrc, count, 'aria-label': ariaLabel, classNames = {}, styles = {}, ...props }, ref) => {
    // Generate accessible label for the badge
    const badgeAriaLabel = useMemo(() => {
        if (ariaLabel)
            return ariaLabel;
        if (typeof count === 'number')
            return `${count} notifications`;
        if (typeof count === 'string' && count)
            return `${count} notifications`;
        return undefined;
    }, [ariaLabel, count]);
    return (_jsxs(BadgeContainer, { ref: ref, "data-aui": "badge", className: classNames.container, style: styles.container, ...props, children: [_jsx(InnerBadge, { position: position, size: size, overlap: overlap, variant: variant, iconSrc: iconSrc, count: count, "aria-label": badgeAriaLabel }), children] }));
});
BadgeComponent.displayName = 'Badge';
export const Badge = attachSubComponents('Badge', memo(BadgeComponent), {
    Inline: InlineBadge,
});
