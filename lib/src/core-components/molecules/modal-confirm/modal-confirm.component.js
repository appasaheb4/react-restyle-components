import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
export const ModalConfirm = ({ visible = false, title = 'Confirm', message = '', submitTitle = 'Send', closeTitle = 'Close', onClick, onClose, }) => {
    const [showModal, setShowModal] = useState(visible);
    useEffect(() => {
        setShowModal(visible);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Container, null, showModal && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "flex justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none " },
                React.createElement("div", { className: "relative  my-6  mx-auto " },
                    React.createElement("div", { className: "border-0 rounded-lg shadow-lg relative flex flex-col w-fit min-w-80 bg-white outline-none focus:outline-none" },
                        React.createElement("div", { className: "flex items-center justify-between p-2 border-b border-solid border-gray-300 rounded-t" },
                            React.createElement("h3", { className: "text-2xl font-semibold" }, title),
                            React.createElement("button", { className: "p-1  border-0 text-black opacity-1 ml-6 float-right text-3xl leading-none font-semibold outline-none focus:outline-none", onClick: () => {
                                    setShowModal(false);
                                    onClose && onClose();
                                } },
                                React.createElement("span", { className: " text-black h-6 w-6 text-2xl block outline-none focus:outline-none" }, "\u00D7"))),
                        React.createElement("div", { className: "flex p-2" },
                            React.createElement("div", { className: "flex" },
                                React.createElement("span", { className: "text-md" }, message))),
                        React.createElement("div", { className: "flex items-center justify-end p-2 border-t border-solid border-gray-300 rounded-b" },
                            React.createElement("button", { className: "text-red-500 background-transparent font-bold uppercase p-2 text-sm outline-none focus:outline-none mr-1 mb-1", type: "button", style: { transition: 'all .15s ease' }, onClick: () => {
                                    setShowModal(false);
                                    onClose && onClose();
                                } }, closeTitle),
                            React.createElement("button", { className: "bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1", type: "button", style: { transition: 'all .15s ease' }, onClick: () => {
                                    onClick();
                                } }, submitTitle))))),
            React.createElement("div", { className: "opacity-25 fixed inset-0 z-40 bg-black" }))))));
};
