import React from 'react';
import '../../../../tc.css';
export const ButtonGroup = ({ children, orientation = 'horizontal', horizontalSizing = 'hug', verticalSizing = 'hug', className, }) => React.createElement("div", { className: `flex gap-2 ${className}` }, children);
