import { jsx as _jsx } from "react/jsx-runtime";
import '../../../../tc.module.css';
export const ButtonGroup = ({ children, orientation = 'horizontal', className, }) => (_jsx("div", { className: `flex ${orientation == 'horizontal' ? 'flex-row' : 'flex-col'} w-fit gap-2 ${className}`, children: children }));
