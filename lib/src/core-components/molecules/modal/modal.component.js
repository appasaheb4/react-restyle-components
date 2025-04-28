import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useEffect } from 'react';
export const Modal = ({ visible, title = '', onClose, isAutoClose = false, children, }) => {
    const [showModal, setShowModal] = React.useState(visible);
    useEffect(() => {
        setShowModal(visible);
        if (isAutoClose) {
            setTimeout(() => {
                onClose && onClose();
            }, 1000);
        }
    }, [visible]);
    return (_jsx(_Fragment, { children: showModal && (_jsxs(_Fragment, { children: [_jsx("div", { className: "justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none", children: _jsx("div", { className: "relative w-auto my-5 mx-auto max-w-7xl", children: _jsxs("div", { className: "border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none", children: [_jsxs("div", { className: "flex items-start justify-between p-2 border-b border-solid border-gray-300 rounded-t", children: [_jsx("h3", { className: "text-xl font-semibold", children: title }), _jsx("button", { className: "p-1  border-0 text-black opacity-1 ml-6 float-right text-3xl leading-none font-semibold outline-none focus:outline-none", onClick: () => {
                                                onClose && onClose();
                                                setShowModal(false);
                                            }, children: _jsx("span", { className: " text-black h-6 w-6 text-2xl block outline-none focus:outline-none", children: "\u00D7" }) })] }), _jsx("div", { className: "flex p-2 w-auto h-auto ", children: children })] }) }) }), _jsx("div", { className: "opacity-25 fixed inset-0 z-40 bg-black" })] })) }));
};
