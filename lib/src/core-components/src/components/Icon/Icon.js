import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Suspense } from 'react';
import _ from 'lodash';
import { Tooltip } from '../Tooltip';
import loadable from '@loadable/component';
import { IconContext as Context } from 'react-icons';
import s from '../../tc.module.css';
import { cn } from '../../utils';
// Static imports for better reliability
import * as IconRi from 'react-icons/ri';
import * as IconIm from 'react-icons/im';
import * as IconFa from 'react-icons/fa';
import * as IconFc from 'react-icons/fc';
import * as IconGi from 'react-icons/gi';
import * as IconCg from 'react-icons/cg';
import * as IconGr from 'react-icons/gr';
import * as IconBs from 'react-icons/bs';
import * as IconFi from 'react-icons/fi';
import * as Iconmd from 'react-icons/md';
import * as Iconio from 'react-icons/io';
import * as Iconio5 from 'react-icons/io5';
import * as Iconsi from 'react-icons/si';
import * as Iconai from 'react-icons/ai';
import * as Iconvsc from 'react-icons/vsc';
import * as Iconhi from 'react-icons/hi';
import * as IconBi from 'react-icons/bi';
import * as IconTb from 'react-icons/tb';
import * as IconsCi from 'react-icons/ci';
import * as IconAi from 'react-icons/ai';
const CompatIcon = ({ src, className, style, ...props }) => {
    if (typeof src === 'string') {
        return (_jsx("img", { src: src, className: cn(s.icon, className), style: style, ...props, alt: "" }));
    }
    return (_jsx("div", { className: cn(s.icon, className), style: style, ...props, children: src }));
};
const SSRIcon = ({ nameIcon, classNames = {}, styles = {}, ...props }) => {
    return (_jsx("span", { className: cn(s.icon, props.className, classNames.icon), style: styles.icon, "aria-hidden": "true", children: "\u26AB" }));
};
export const Icon = ({ nameIcon, propsIcon, className, tooltip = '', isDisable = false, classNames = {}, styles = {}, onClick, }) => {
    try {
        const iconProps = {
            ...propsIcon,
            color: isDisable ? '#808080' : propsIcon?.color || 'rgb(36 48 63)',
        };
        // Try to use static imports first for better reliability
        const getStaticIcon = () => {
            const lib = nameIcon.startsWith('IoIo')
                ? 'io'
                : nameIcon.startsWith('Io')
                    ? 'io5'
                    : nameIcon
                        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
                        .split(' ')[0]
                        .toLowerCase();
            // Map to static imports
            const iconMap = {
                ai: IconAi || Iconai,
                ri: IconRi,
                im: IconIm,
                fa: IconFa,
                fc: IconFc,
                gi: IconGi,
                cg: IconCg,
                gr: IconGr,
                bs: IconBs,
                fi: IconFi,
                md: Iconmd,
                io: Iconio,
                io5: Iconio5,
                si: Iconsi,
                vsc: Iconvsc,
                hi: Iconhi,
                bi: IconBi,
                tb: IconTb,
                ci: IconsCi,
            };
            const iconLib = iconMap[lib];
            if (iconLib && iconLib[nameIcon]) {
                return iconLib[nameIcon];
            }
            return null;
        };
        const StaticIcon = getStaticIcon();
        if (StaticIcon) {
            // Use static import
            const IconComponent = StaticIcon;
            return (_jsx("div", { className: cn(s.iconContainer, className, classNames.container), style: styles.container, onClick: () => {
                    if (!isDisable)
                        onClick && onClick();
                }, children: !_.isEmpty(tooltip) ? (_jsx(Tooltip, { content: tooltip, children: _jsx(IconComponent, { ...iconProps, className: cn(s.icon, classNames.icon), style: styles.icon }) })) : (_jsx(IconComponent, { ...iconProps, className: cn(s.icon, classNames.icon), style: styles.icon })) }));
        }
        // Fallback to dynamic import
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
        return (_jsx("div", { className: cn(s.iconContainer, className, classNames.container), style: styles.container, onClick: () => {
                if (!isDisable)
                    onClick && onClick();
            }, children: !_.isEmpty(tooltip) ? (_jsx(Tooltip, { content: tooltip, children: _jsx(ElementIcon, { ...iconProps, className: cn(s.icon, classNames.icon), style: styles.icon }) })) : (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(ElementIcon, { ...iconProps, className: cn(s.icon, classNames.icon), style: styles.icon }) })) }));
    }
    catch (error) {
        return _jsx(_Fragment, {});
    }
};
export const IconContext = (props) => {
    return (_jsx(Context.Provider, { value: {
            color: props?.isDisable ? '#808080' : props?.color || '#ffffff',
            size: props?.size || '20',
        }, children: _jsx("div", { onClick: () => {
                if (props?.isDisable)
                    return;
                props.onClick && props.onClick();
            }, style: props?.style, children: props?.children }) }));
};
// Attach sub-components
Icon.SSR = SSRIcon;
Icon.Compat = CompatIcon;
