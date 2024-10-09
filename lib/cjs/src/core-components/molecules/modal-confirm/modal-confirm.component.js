"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalConfirm = void 0;
const react_1 = __importStar(require("react"));
const reactstrap_1 = require("reactstrap");
const ModalConfirm = ({ visible = false, title = 'Confirm', message = '', submitTitle = 'Send', closeTitle = 'Close', onClick, onClose, }) => {
    const [showModal, setShowModal] = (0, react_1.useState)(visible);
    (0, react_1.useEffect)(() => {
        setShowModal(visible);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(reactstrap_1.Container, null, showModal && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "flex justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none " },
                react_1.default.createElement("div", { className: "relative  my-6  mx-auto " },
                    react_1.default.createElement("div", { className: "border-0 rounded-lg shadow-lg relative flex flex-col w-fit min-w-80 bg-white outline-none focus:outline-none" },
                        react_1.default.createElement("div", { className: "flex items-center justify-between p-2 border-b border-solid border-gray-300 rounded-t" },
                            react_1.default.createElement("h3", { className: "text-2xl font-semibold" }, title),
                            react_1.default.createElement("button", { className: "p-1  border-0 text-black opacity-1 ml-6 float-right text-3xl leading-none font-semibold outline-none focus:outline-none", onClick: () => {
                                    setShowModal(false);
                                    onClose && onClose();
                                } },
                                react_1.default.createElement("span", { className: " text-black h-6 w-6 text-2xl block outline-none focus:outline-none" }, "\u00D7"))),
                        react_1.default.createElement("div", { className: "flex p-2" },
                            react_1.default.createElement("div", { className: "flex" },
                                react_1.default.createElement("span", { className: "text-md" }, message))),
                        react_1.default.createElement("div", { className: "flex items-center justify-end p-2 border-t border-solid border-gray-300 rounded-b" },
                            react_1.default.createElement("button", { className: "text-red-500 background-transparent font-bold uppercase p-2 text-sm outline-none focus:outline-none mr-1 mb-1", type: "button", style: { transition: 'all .15s ease' }, onClick: () => {
                                    setShowModal(false);
                                    onClose && onClose();
                                } }, closeTitle),
                            react_1.default.createElement("button", { className: "bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1", type: "button", style: { transition: 'all .15s ease' }, onClick: () => {
                                    onClick();
                                } }, submitTitle))))),
            react_1.default.createElement("div", { className: "opacity-25 fixed inset-0 z-40 bg-black" }))))));
};
exports.ModalConfirm = ModalConfirm;
