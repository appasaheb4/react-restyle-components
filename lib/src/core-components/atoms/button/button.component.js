import React from 'react';
import { forwardRef } from 'react';
import { Tooltip } from '../tooltip/tooltip.component';
import s from '../../../tc.module.css';
import { cn } from '../../../core-utils';
/**
 * It's a `<button>button</button>`. Pass in regular button props such as onClick as well as any of the props defined here.
 */
export const Button = forwardRef(({ variant = 'solid', tooltip, disabled = false, type = 'button', className, children, ...args }, ref) => {
    const buttonColorClass = variant === 'solid'
        ? cn(s['text-white'], s['bg-[#007BFF]'], s['hover:bg-[#007BFF]'], s['hover:shadow-lg'], s['text-white'])
        : cn(s['dark:text-white'], s['text-black'], s['border'], s['border-gray-400'], s['hover:shadow-lg']);
    const button = (React.createElement("button", { ref: ref, ...args, className: cn(s['rounded-100px'], s['px-3'], s['py-1'], s['text-md'], buttonColorClass, s['pt-2'], s['pb-2'], s['font-nunitoSansRegular'], disabled ? s['opacity-50'] : s['opacity-100'], className), type: type, disabled: disabled }, children));
    if (tooltip) {
        return React.createElement(Tooltip, { content: tooltip }, button);
    }
    else {
        return button;
    }
});
Button.displayName = 'Button';
