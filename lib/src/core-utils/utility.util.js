import _ from 'lodash';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};
export const debounce = _.debounce((fun) => {
    fun();
}, 1000);
