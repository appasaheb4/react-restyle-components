import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { IconWrapper } from './elements';
import { Icon } from '../../components'; // keep long to avoid circular imports
export const addIconToChildren = ({ children, size, icons, iconSide, }) => {
    const icon = icons && (_jsx(IconWrapper, { iconSide: iconSide, size: size, hasChildren: !!children, children: _jsx(Icon, { nameIcon: icons?.nameIcon, propsIcon: icons?.propsIcon, className: icons?.className }) }));
    return addToSide({
        children,
        element: icon,
        side: iconSide,
    });
};
export const addToSide = ({ children, element, side, }) => (_jsxs(_Fragment, { children: [side === 'left' && element, children, side === 'right' && element] }));
