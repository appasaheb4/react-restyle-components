import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};
export const mapToArray = (arr) => {
    const res = [];
    arr.forEach(function (obj, index) {
        const key = Object.keys(obj)[0];
        const value = key;
        res.push([value, obj[key]]);
    });
    return res;
};
