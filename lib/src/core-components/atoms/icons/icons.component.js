import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Suspense } from 'react';
import _ from 'lodash';
import { Tooltip } from '../tooltip/tooltip.component';
import loadable from '@loadable/component';
import s from '../../../tc.module.css';
import { cn } from '../../../core-utils';
export const Icon = ({ nameIcon, propsIcon, tooltip = '', isDisable = false, onClick, }) => {
    try {
        const iconProps = {
            ...propsIcon,
            color: isDisable ? '#808080' : propsIcon?.color || '#ffffff',
        };
        const lib = nameIcon
            .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
            .split(' ')[0]
            .toLocaleLowerCase();
        let ElementIcon;
        if (lib == 'md')
            ElementIcon = loadable(() => import('react-icons/md'), {
                resolveComponent: (el) => el[nameIcon] != null ? el[nameIcon] : el[Object.keys(el.default)[0]],
            });
        else
            ElementIcon = loadable(() => import('react-icons/fa'), {
                resolveComponent: (el) => el[nameIcon] != null ? el[nameIcon] : el[Object.keys(el.default)[0]],
            });
        return (_jsx("div", { className: cn(s.iconContainer), onClick: () => {
                if (!isDisable)
                    onClick && onClick();
            }, children: !_.isEmpty(tooltip) ? (_jsx(Tooltip, { content: tooltip, children: _jsx(ElementIcon, { ...iconProps, className: cn(s.icon) }) })) : (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(ElementIcon, { ...iconProps, className: cn(s.icon) }) })) }));
    }
    catch (error) {
        return _jsx(_Fragment, {});
    }
};
