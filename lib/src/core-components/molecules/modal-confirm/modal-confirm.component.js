import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
export const ModalConfirm = ({ visible = false, title = 'Confirm', message = '', submitTitle = 'Send', closeTitle = 'Close', onClick, onClose, }) => {
    const [showModal, setShowModal] = useState(visible);
    useEffect(() => {
        setShowModal(visible);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible]);
    return (_jsx(_Fragment, { children: _jsx(Container, { children: showModal && (_jsxs(_Fragment, { children: [_jsx("div", { className: "flex justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none ", children: _jsx("div", { className: "relative  my-6  mx-auto ", children: _jsxs("div", { className: "border-0 rounded-lg shadow-lg relative flex flex-col w-fit min-w-80 bg-white outline-none focus:outline-none", children: [_jsxs("div", { className: "flex items-center justify-between p-2 border-b border-solid border-gray-300 rounded-t", children: [_jsx("h3", { className: "text-2xl font-semibold", children: title }), _jsx("button", { className: "p-1  border-0 text-black opacity-1 ml-6 float-right text-3xl leading-none font-semibold outline-none focus:outline-none", onClick: () => {
                                                    setShowModal(false);
                                                    onClose && onClose();
                                                }, children: _jsx("span", { className: " text-black h-6 w-6 text-2xl block outline-none focus:outline-none", children: "\u00D7" }) })] }), _jsx("div", { className: "flex p-2", children: _jsx("div", { className: "flex", children: _jsx("span", { className: "text-md", children: message }) }) }), _jsxs("div", { className: "flex items-center justify-end p-2 border-t border-solid border-gray-300 rounded-b", children: [_jsx("button", { className: "text-red-500 background-transparent font-bold uppercase p-2 text-sm outline-none focus:outline-none mr-1 mb-1", type: "button", style: { transition: 'all .15s ease' }, onClick: () => {
                                                    setShowModal(false);
                                                    onClose && onClose();
                                                }, children: closeTitle }), _jsx("button", { className: "bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1", type: "button", style: { transition: 'all .15s ease' }, onClick: () => {
                                                    onClick();
                                                }, children: submitTitle })] })] }) }) }), _jsx("div", { className: "opacity-25 fixed inset-0 z-40 bg-black" })] })) }) }));
};
