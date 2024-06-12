import React, { Suspense } from 'react';
import _ from 'lodash';
import { Tooltip } from '../..';
import loadable from '@loadable/component';
import '../../../../tc.css';
let lib = 'md';
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
        return (React.createElement("div", { onClick: () => {
                if (!isDisable)
                    onClick && onClick();
            } }, !_.isEmpty(tooltip) ? (React.createElement(Tooltip, { tooltipText: tooltip },
            React.createElement(ElementIcon, { ...iconProps }))) : (React.createElement(Suspense, { fallback: React.createElement("div", null, "Loading...") },
            React.createElement(ElementIcon, { ...iconProps })))));
    }
    catch (error) {
        return React.createElement(React.Fragment, null);
    }
};
