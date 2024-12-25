import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};
export const classNames = (styles, classes) => {
    return classes.map((className) => styles[className]).join(' ');
};
