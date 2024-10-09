import React from 'react';
import { Container, Row, Spinner } from 'reactstrap';
import '../../../tc.css';
export const Loader = () => (React.createElement(Container, { fluid: true, className: "vh-50 d-flex" },
    React.createElement(Row, { className: "justify-content-center align-self-center w-100 text-center" },
        React.createElement(Spinner, { color: "primary" }))));
export const ModalLoader = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(React.Fragment, null,
            React.createElement("div", { className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" },
                React.createElement("div", { className: "relative  mx-auto " },
                    React.createElement("div", { className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none" },
                        React.createElement("div", { className: "relative p-2 flex-auto flex flex-col items-center" },
                            React.createElement("style", null, `
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
                            React.createElement("svg", { className: "spinner", width: "100", height: "100", viewBox: "0 0 100 100" },
                                React.createElement("circle", { className: "background", cx: "0", cy: "0" }),
                                React.createElement("path", { className: "line", d: "M 37.5,50 C 37.5,43.096441 43.096441,37.5 50,37.5 C 56.903559,37.5 62.5,43.096441 62.5,50 C 62.5,56.903559 56.903559,62.5 50,62.5 C 43.096441,62.5 37.5,56.903559 37.5,50" })),
                            ' ',
                            React.createElement("span", { style: { marginTop: -15 } }, "loading ..."))))),
            React.createElement("div", { className: "opacity-25 fixed inset-0 z-40 bg-black" }))));
};
