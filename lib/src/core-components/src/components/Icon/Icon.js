import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Suspense } from 'react';
import _ from 'lodash';
import { Tooltip } from '../Tooltip1/tooltip.component';
import loadable from '@loadable/component';
import s from '../../tc.module.css';
import { cn } from '../../utils';
const CompatIcon = ({ src, className, ...props }) => {
    if (typeof src === 'string') {
        return (_jsx("img", { src: src, className: cn(s.icon, className), ...props, alt: "" }));
    }
    return (_jsx("div", { className: cn(s.icon, className), ...props, children: src }));
};
const SSRIcon = ({ nameIcon, ...props }) => {
    return (_jsx("span", { className: cn(s.icon, props.className), "aria-hidden": "true", children: "\u26AB" }));
};
export const Icon = ({ nameIcon, propsIcon, className, tooltip = '', isDisable = false, onClick, }) => {
    try {
        const iconProps = {
            ...propsIcon,
            color: isDisable ? '#808080' : propsIcon?.color || 'rgb(36 48 63)',
        };
        const lib = nameIcon.startsWith('IoIo')
            ? 'io'
            : nameIcon.startsWith('Io')
                ? 'io5'
                : nameIcon
                    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
                    .split(' ')[0]
                    .toLowerCase();
        const iconLibraries = {
            fa: () => import('react-icons/fa'),
            md: () => import('react-icons/md'),
            io: () => import('react-icons/io'),
            fi: () => import('react-icons/fi'),
            bs: () => import('react-icons/bs'),
            hi: () => import('react-icons/hi'),
            go: () => import('react-icons/go'),
            si: () => import('react-icons/si'),
            ti: () => import('react-icons/ti'),
            wi: () => import('react-icons/wi'),
            di: () => import('react-icons/di'),
            ri: () => import('react-icons/ri'),
            fc: () => import('react-icons/fc'),
            gr: () => import('react-icons/gr'),
            lu: () => import('react-icons/lu'),
            gi: () => import('react-icons/gi'),
            tb: () => import('react-icons/tb'),
            rx: () => import('react-icons/rx'),
            im: () => import('react-icons/im'),
            cg: () => import('react-icons/cg'),
            io5: () => import('react-icons/io5'),
            ai: () => import('react-icons/ai'),
            vsc: () => import('react-icons/vsc'),
            bi: () => import('react-icons/bi'),
            fa2: () => import('react-icons/fa'),
            ci: () => import('react-icons/ci'),
            lib: () => import('react-icons/lib'),
            lia: () => import('react-icons/lia'),
            pi: () => import('react-icons/pi'),
            tfi: () => import('react-icons/tfi'),
            fa6: () => import('react-icons/fa6'),
        };
        const loadLibrary = iconLibraries[lib] || (() => import('react-icons/md'));
        const ElementIcon = loadable(loadLibrary, {
            resolveComponent: (el) => el[nameIcon] != null ? el[nameIcon] : el[Object.keys(el.default)[0]],
        });
        return (_jsx("div", { className: cn(s.iconContainer, className), onClick: () => {
                if (!isDisable)
                    onClick && onClick();
            }, children: !_.isEmpty(tooltip) ? (_jsx(Tooltip, { content: tooltip, children: _jsx(ElementIcon, { ...iconProps, className: cn(s.icon) }) })) : (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(ElementIcon, { ...iconProps, className: cn(s.icon) }) })) }));
    }
    catch (error) {
        return _jsx(_Fragment, {});
    }
};
// Attach sub-components
Icon.SSR = SSRIcon;
Icon.Compat = CompatIcon;
