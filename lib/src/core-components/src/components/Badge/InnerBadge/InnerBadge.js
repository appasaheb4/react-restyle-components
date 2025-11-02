import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { StyledIcon, StyledText, StyledBadge } from './elements';
import { Icon } from '../../Icon/Icon';
export const InnerBadge = ({ position = 'top-right', size = 'md', overlap = 'circular', variant = 'notification', iconSrc, count, ...props }) => {
    let childElement;
    if (size === 'hint') {
        childElement = _jsx(_Fragment, {});
    }
    else if (iconSrc) {
        childElement = (_jsx(StyledIcon, { "$size": size, children: _jsx(Icon, { nameIcon: iconSrc, propsIcon: {
                    size: size === 'sm' ? '0.625rem' : '0.75rem',
                    color: 'currentColor',
                } }) }));
    }
    else if (count !== undefined && count !== null) {
        childElement = _jsx(StyledText, { "$size": size, children: count });
    }
    return (_jsx(StyledBadge, { "$position": position, "$size": size, "$overlap": overlap, "$variant": variant, "$hasIcon": !!iconSrc, ...props, children: childElement }));
};
