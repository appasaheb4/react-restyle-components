import { jsx as _jsx } from "react/jsx-runtime";
import '../../../tc.module.css';
export const Grid = (props) => (_jsx("div", { className: `xl:grid sm:inline-block grid-cols-${props.cols || 1} gap-3`, children: props.children }));
