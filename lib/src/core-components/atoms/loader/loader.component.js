import { jsx as _jsx } from "react/jsx-runtime";
import s from '../../../tc.module.css';
import { cn } from '../../../core-utils';
export const LoadingAnimateSpin = ({ classWarper = '', className = '', }) => {
    return (_jsx("div", { className: cn(s.absolute, s['justify-center'], s['items-center'], classWarper), children: _jsx("div", { className: cn(s['w-10'], s['h-10'], s['border-t-2'], s['border-b-2'], s['border-blue-500'], s['rounded-full'], s['animate-spin'], className) }) }));
};
