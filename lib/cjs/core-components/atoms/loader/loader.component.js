"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalLoader = exports.Loader = void 0;
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const Loader = () => (react_1.default.createElement(reactstrap_1.Container, { fluid: true, className: "vh-50 d-flex" },
    react_1.default.createElement(reactstrap_1.Row, { className: "justify-content-center align-self-center w-100 text-center" },
        react_1.default.createElement(reactstrap_1.Spinner, { color: "primary" }))));
exports.Loader = Loader;
const ModalLoader = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" },
                react_1.default.createElement("div", { className: "relative  mx-auto " },
                    react_1.default.createElement("div", { className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none" },
                        react_1.default.createElement("div", { className: "relative p-2 flex-auto flex flex-col items-center" },
                            react_1.default.createElement("style", null, `
    .spinner .background {
      fill: #555;
    }
    .spinner .line {
      animation: PacMan 5s infinite;
      fill: none;
      stroke: #d26188;
      stroke-width: 25;
    }
    .spinner .spinner {
      animation: Spin 2s infinite linear;
    }
    @keyframes PacMan {
      0% {
        stroke-dasharray: 79px 79;
      }
      50% {
        stroke-dasharray: 1px 79;
      }
      100% {
        stroke-dasharray: 79px 79;
      }
    }
    @keyframes Spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    `),
                            react_1.default.createElement("svg", { className: "spinner", width: "100", height: "100", viewBox: "0 0 100 100" },
                                react_1.default.createElement("circle", { className: "background", cx: "0", cy: "0" }),
                                react_1.default.createElement("path", { className: "line", d: "M 37.5,50 C 37.5,43.096441 43.096441,37.5 50,37.5 C 56.903559,37.5 62.5,43.096441 62.5,50 C 62.5,56.903559 56.903559,62.5 50,62.5 C 43.096441,62.5 37.5,56.903559 37.5,50" })),
                            ' ',
                            react_1.default.createElement("span", { style: { marginTop: -15 } }, "loading ..."))))),
            react_1.default.createElement("div", { className: "opacity-25 fixed inset-0 z-40 bg-black" }))));
};
exports.ModalLoader = ModalLoader;
//# sourceMappingURL=loader.component.js.map