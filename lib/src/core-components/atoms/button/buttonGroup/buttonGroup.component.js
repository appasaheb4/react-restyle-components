import React from 'react';
import s from '../button.module.css';
import clsx from 'clsx';
export const ButtonGroup = ({ children, orientation = 'horizontal', horizontalSizing = 'hug', verticalSizing = 'hug', className, }) => (React.createElement("div", { className: clsx(s.group, s[`is${orientation}`], s[`ishorizontal${horizontalSizing}`], s[`isvertical${verticalSizing}`], className) }, children));
