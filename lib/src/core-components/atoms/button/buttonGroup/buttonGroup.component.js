import React from 'react';
import '../../../../tc.module.css';
export const ButtonGroup = ({ children, orientation = 'horizontal', className, }) => (React.createElement("div", { className: `flex ${orientation == 'horizontal' ? 'flex-row' : 'flex-col'} w-fit gap-2 ${className}` }, children));
