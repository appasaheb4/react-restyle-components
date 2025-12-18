import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const Collapsible = ({ label, labelClassName, className, classNames = {}, styles = {}, onExpand, onCollapse, children, }) => {
    const [open, setOPen] = useState(false);
    const toggle = () => {
        if (open) {
            onCollapse?.(label);
        }
        else {
            onExpand?.(label);
        }
        setOPen(!open);
    };
    return (_jsxs("div", { className: cn(s.flx, s['flx-col'], s['w-full'], classNames.container), style: styles.container, children: [_jsx("button", { className: cn(s.flx, s['items-center'], s['w-full'], s['p-1'], s['my-1'], s['text-base'], s['text-left'], s['bg-gray-200'], s['border-0'], s['transition'], s['focus:outline-none'], s['rounded-sm'], s['rounded-b-none'], labelClassName, classNames.button), style: styles.button, type: "button", onClick: toggle, children: label?.toUpperCase() }), open && (_jsx("div", { className: cn(s['p-2'], s['bg-gray-200'], s['-my-2'], s['mb-1'], className, classNames.content), style: styles.content, children: children }))] }));
};
