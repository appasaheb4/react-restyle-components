import React from 'react';
import { forwardRef } from 'react';
import { Tooltip } from '../tooltip/tooltip.component';
import '../../../tc.module.css';
/**
 * It's a `<button>button</button>`. Pass in regular button props such as onClick as well as any of the props defined here.
 */
export const Button = forwardRef(({ variant = 'solid', tooltip, disabled = false, type = 'button', className, children, ...args }, ref) => {
    const buttonColorClass = variant === 'solid'
        ? 'text-white bg-[#007BFF] hover:bg-[#007BFF] hover:shadow-lg text-white'
        : 'dark:text-white  text-black border border-gray-400 hover:shadow-lg';
    const button = (React.createElement("button", { ref: ref, ...args, className: `${className} rounded-100px px-3 py-1  text-md ${buttonColorClass} pt-2 pb-2 font-nunitoSansRegular ${disabled ? 'opacity-50' : 'opacity-100'}`, type: type, disabled: disabled }, children));
    if (tooltip) {
        return React.createElement(Tooltip, { content: tooltip }, button);
    }
    else {
        return button;
    }
});
Button.displayName = 'Button';
