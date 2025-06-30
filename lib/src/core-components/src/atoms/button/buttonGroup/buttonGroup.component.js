import { jsx as _jsx } from "react/jsx-runtime";
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const ButtonGroup = ({ children, orientation = 'horizontal', className, }) => (_jsx("div", { className: cn(s.flex, orientation == 'horizontal' ? s['flex-row'] : s['flex-col'], s['w-fit'], s['gap-2'], className), children: children }));
