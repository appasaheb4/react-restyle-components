import { jsx as _jsx } from "react/jsx-runtime";
import s from '../../../tc.module.css';
import { cn } from '../../../core-utils';
export const Grid = (props) => (_jsx("div", { className: cn(s[`xl:grid`], s[`sm:inline-block`], s[`grid-cols-${props.cols || 1}`], s[`gap-3`]), children: props.children }));
