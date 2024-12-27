import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Container, Row, Spinner } from 'reactstrap';
import '../../../tc.module.css';
export const Loader = () => (_jsx(Container, { fluid: true, className: "vh-50 d-flex", children: _jsx(Row, { className: "justify-content-center align-self-center w-100 text-center", children: _jsx(Spinner, { color: "primary" }) }) }));
export const ModalLoader = () => {
    return (_jsx(_Fragment, { children: _jsxs(_Fragment, { children: [_jsx("div", { className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none", children: _jsx("div", { className: "relative  mx-auto ", children: _jsx("div", { className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none", children: _jsxs("div", { className: "relative p-2 flex-auto flex flex-col items-center", children: [_jsx("style", { children: `
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
    ` }), _jsxs("svg", { className: "spinner", width: "100", height: "100", viewBox: "0 0 100 100", children: [_jsx("circle", { className: "background", cx: "0", cy: "0" }), _jsx("path", { className: "line", d: "M 37.5,50 C 37.5,43.096441 43.096441,37.5 50,37.5 C 56.903559,37.5 62.5,43.096441 62.5,50 C 62.5,56.903559 56.903559,62.5 50,62.5 C 43.096441,62.5 37.5,56.903559 37.5,50" })] }), ' ', _jsx("span", { style: { marginTop: -15 }, children: "loading ..." })] }) }) }) }), _jsx("div", { className: "opacity-25 fixed inset-0 z-40 bg-black" })] }) }));
};
