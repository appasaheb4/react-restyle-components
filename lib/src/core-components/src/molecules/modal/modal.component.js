import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useEffect } from 'react';
import s from '../../tc.module.css';
import { cn } from '../../utils';
export const Modal = ({ visible, title = '', className = '', style = {}, onClose, isAutoClose = false, children, }) => {
    const [showModal, setShowModal] = React.useState(visible);
    useEffect(() => {
        setShowModal(visible);
        if (isAutoClose) {
            setTimeout(() => {
                onClose && onClose();
            }, 1000);
        }
    }, [visible]);
    return (_jsx(_Fragment, { children: showModal && (_jsxs(_Fragment, { children: [_jsx("div", { className: cn(s['flex'], s['justify-center'], s['items-center'], s['overflow-x-hidden'], s['overflow-y-auto'], s['fixed'], s['inset-0'], s['z-50'], s['outline-none'], s['focus:outline-none'], className), style: style, children: _jsx("div", { className: cn(s['relative'], s['w-auto'], s['my-5'], s['mx-auto'], s['max-w-7xl']), children: _jsxs("div", { className: cn(s['border-0'], s['rounded-lg'], s['shadow-lg'], s['relative'], s['flex'], s['flex-col'], s['bg-white'], s['outline-none'], s['focus:outline-none']), children: [_jsxs("div", { className: cn(s['flex'], s['items-start'], s['justify-between'], s['p-2'], s['border-b'], s['border-solid'], s['border-gray-300'], s['rounded-t']), children: [_jsx("h3", { className: cn(s['text-xl'], s['font-semibold']), children: title }), _jsx("button", { className: cn(s['p-1'], s['border-0'], s['text-black'], s['opacity-1'], s['ml-6'], s['float-right'], s['text-3xl'], s['leading-none'], s['font-semibold'], s['outline-none'], s['focus:outline-none']), onClick: () => {
                                                onClose && onClose();
                                                setShowModal(false);
                                            }, children: _jsx("span", { className: cn(s['text-black'], s['h-6'], s['w-6'], s['text-2xl'], s['block'], s['outline-none'], s['focus:outline-none']), children: "\u00D7" }) })] }), _jsx("div", { className: cn(s['flex'], s['p-2'], s['w-auto'], s['h-auto']), children: children })] }) }) }), _jsx("div", { className: cn(s['opacity-25'], s['fixed'], s['inset-0'], s['z-40'], s['bg-black']) })] })) }));
};
