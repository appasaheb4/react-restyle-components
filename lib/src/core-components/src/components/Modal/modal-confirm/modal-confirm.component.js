import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const ModalConfirm = ({ visible = false, title = 'Confirm', message, submitTitle = 'Send', closeTitle = 'Close', isClick = true, isClose = true, classNames = {}, styles = {}, onClick, onClose, }) => {
    const [showModal, setShowModal] = useState(visible);
    useEffect(() => {
        setShowModal(visible);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible]);
    return (_jsx(_Fragment, { children: _jsx(Container, { children: showModal && (_jsxs(_Fragment, { children: [_jsx("div", { className: cn(s['flex'], s['justify-center'], s['items-center'], s['overflow-x-hidden'], s['overflow-y-auto'], s['fixed'], s['inset-0'], s['z-50'], s['outline-none'], s['focus:outline-none'], classNames.container), style: styles.container, children: _jsx("div", { className: cn(s['relative'], s['my-6'], s['mx-auto'], classNames.wrapper), style: styles.wrapper, children: _jsxs("div", { className: cn(s['border-0'], s['rounded-lg'], s['shadow-lg'], s['relative'], s['flex'], s['flex-col'], s['w-fit'], s['min-w-80'], s['bg-white'], s['outline-none'], s['focus:outline-none'], classNames.content), style: styles.content, children: [_jsxs("div", { className: cn(s['flex'], s['items-center'], s['justify-between'], s['p-2'], s['border-b'], s['border-solid'], s['border-gray-300'], s['rounded-t'], classNames.header), style: styles.header, children: [_jsx("h3", { className: cn(s['text-2xl'], s['font-semibold'], classNames.title), style: styles.title, children: title }), _jsx("button", { className: cn(s['p-1'], s['border-0'], s['text-black'], s['opacity-1'], s['ml-6'], s['float-right'], s['text-3xl'], s['leading-none'], s['font-semibold'], s['outline-none'], s['focus:outline-none'], classNames.closeButton), style: styles.closeButton, onClick: () => {
                                                    setShowModal(false);
                                                    onClose && onClose();
                                                }, children: _jsx("span", { className: cn(s['text-black'], s['h-6'], s['w-6'], s['text-2xl'], s['block'], s['outline-none'], s['focus:outline-none']), children: "\u00D7" }) })] }), _jsx("div", { className: cn(s['flex'], s['p-2'], classNames.body), style: styles.body, children: _jsx("div", { className: cn(s['flex']), children: typeof message === 'string' ? (_jsx("span", { className: cn(s['text-md']), children: message })) : (message) }) }), _jsxs("div", { className: cn(s['flex'], s['items-center'], s['justify-end'], s['p-2'], s['border-t'], s['border-solid'], s['border-gray-300'], s['rounded-b'], classNames.footer), style: styles.footer, children: [isClose && (_jsx("button", { className: cn(s['text-red-500'], s['background-transparent'], s['font-bold'], s['uppercase'], s['p-2'], s['text-sm'], s['outline-none'], s['focus:outline-none'], s['mr-1'], s['mb-1'], classNames.cancelButton), type: "button", style: { transition: 'all .15s ease', ...styles.cancelButton }, onClick: () => {
                                                    setShowModal(false);
                                                    onClose && onClose();
                                                }, children: closeTitle })), isClick && (_jsx("button", { className: cn(s['bg-green-500'], s['text-white'], s['active:bg-green-600'], s['font-bold'], s['uppercase'], s['text-sm'], s['p-2'], s['rounded'], s['shadow'], s['hover:shadow-lg'], s['outline-none'], s['focus:outline-none'], s['mr-1'], s['mb-1'], classNames.submitButton), type: "button", style: { transition: 'all .15s ease', ...styles.submitButton }, onClick: () => {
                                                    onClick();
                                                }, children: submitTitle }))] })] }) }) }), _jsx("div", { className: cn(s['opacity-25'], s['fixed'], s['inset-0'], s['z-40'], s['bg-black'], classNames.overlay), style: styles.overlay })] })) }) }));
};
