import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Container, Row, Spinner } from 'reactstrap';
import s from '../../../tc.module.css';
import { cn } from '../../../core-utils';
export const Loader = () => (_jsx(Container, { fluid: true, className: cn(s['vh-50'], s['d-flex']), children: _jsx(Row, { className: cn(s['justify-content-center'], s['align-self-center'], s['w-100'], s['text-center']), children: _jsx(Spinner, { color: "primary" }) }) }));
export const ModalLoader = () => {
    return (_jsx(_Fragment, { children: _jsxs(_Fragment, { children: [_jsx("div", { className: cn(s['justify-center'], s['items-center'], s['flex'], s['overflow-x-hidden'], s['overflow-y-auto'], s['fixed'], s['inset-0'], s['z-50'], s['outline-none'], s['focus:outline-none']), children: _jsx("div", { className: cn(s['relative'], s['mx-auto']), children: _jsx("div", { className: cn(s['border-0'], s['rounded-lg'], s['shadow-lg'], s['relative'], s['flex'], s['flex-col'], s['w-full'], s['bg-white'], s['outline-none'], s['focus:outline-none']), children: _jsxs("div", { className: cn(s['relative'], s['p-2'], s['flex-auto'], s['flex'], s['flex-col'], s['items-center']), children: [_jsx("style", { children: `
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
    ` }), _jsxs("svg", { className: cn(s['spinner']), width: "100", height: "100", viewBox: "0 0 100 100", children: [_jsx("circle", { className: cn(s['background']), cx: "0", cy: "0" }), _jsx("path", { className: cn(s['line']), d: "M 37.5,50 C 37.5,43.096441 43.096441,37.5 50,37.5 C 56.903559,37.5 62.5,43.096441 62.5,50 C 62.5,56.903559 56.903559,62.5 50,62.5 C 43.096441,62.5 37.5,56.903559 37.5,50" })] }), ' ', _jsx("span", { style: { marginTop: -15 }, children: "loading ..." })] }) }) }) }), _jsx("div", { className: cn(s['opacity-25'], s['fixed'], s['inset-0'], s['z-40'], s['bg-black']) })] }) }));
};
