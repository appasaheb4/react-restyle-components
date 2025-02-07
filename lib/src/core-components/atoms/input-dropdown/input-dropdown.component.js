import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { UpArrow, DownArrow } from '../../../library/assets/svg';
import s from '../../../tc.module.css';
import { cn } from '../../../core-utils';
export const InputDropdown = ({ items, className, hasError, title, onChange, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current &&
                    !ref.current.contains(event.target) &&
                    isOpen &&
                    isOpen)
                    setIsOpen(!isOpen);
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]);
    };
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    return (_jsxs("div", { className: cn(className, s['relative']), children: [_jsxs("div", { className: cn(s['flex'], s['flex-row'], s['items-center']), children: [_jsx("input", { type: "text", name: "name", placeholder: title, value: value, className: cn(s['pt-3'], s['pb-2'], s['w-full'], s['px-0'], s['mt-0'], s['bg-transparent'], s['border-gray-secondary'], s['border-0'], s['border-b'], s['appearance-none'], s['focus:outline-none'], s['focus:ring-0'], s['font-arimaRegular'], s['text-md']), onClick: () => {
                            setIsOpen(!isOpen);
                        }, onChange: (event) => onChange && onChange(event.target.value) }), !isOpen && (_jsx("img", { src: UpArrow, className: cn(s['absolute'], s['h-4'], s['w-4'], s['right-0']) })), isOpen && (_jsx("img", { src: DownArrow, className: cn(s['absolute'], s['h-4'], s['w-4'], s['right-0']) }))] }), isOpen && (_jsx("div", { className: cn(s['z-10'], s['w-full'], s['absolute'], s['text-base'], s['list-none'], s['bg-white'], s['rounded'], s['divide-y'], s['divide-gray-100'], s['shadow'], s['dark:bg-gray-700']), ref: wrapperRef, children: _jsx("ul", { className: s['py-1'], children: items.map((item, index) => (_jsx("li", { className: cn(s['block'], s['py-2'], s['px-4'], s['text-md'], s['hover:bg-gray-100'], s['dark:hover:bg-gray-600'], s['dark:text-gray-200'], s['font-arimaRegular']), onClick: () => {
                            setValue(item);
                            setIsOpen(!isOpen);
                        }, children: item }, index))) }) })), hasError && (_jsx("span", { className: cn(s['text-primaryCharcoal'], s['text-4xs']), id: "error", children: `${title} is required` }))] }));
};
