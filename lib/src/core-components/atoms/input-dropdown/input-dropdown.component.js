import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { UpArrow, DownArrow } from '../../../library/assets/svg';
import '../../../tc.module.css';
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
    return (_jsxs("div", { className: `${className} relative`, children: [_jsxs("div", { className: "flex flex-row items-center ", children: [_jsx("input", { type: "text", name: "name", placeholder: title, value: value, className: " pt-3 pb-2  w-full px-0 mt-0 bg-transparent border-gray-secondary border-0 border-b appearance-none focus:outline-none focus:ring-0 font-arimaRegular text-md", onClick: () => {
                            setIsOpen(!isOpen);
                        }, onChange: (event) => onChange && onChange(event.target.value) }), !isOpen && (_jsx("img", { src: UpArrow, className: "absolute h-4 w-4 right-0" })), isOpen && (_jsx("img", { src: DownArrow, className: "absolute h-4 w-4 right-0" }))] }), isOpen && (_jsx("div", { className: "z-10  w-full absolute text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700", ref: wrapperRef, children: _jsx("ul", { className: "py-1", children: items.map((item, index) => (_jsx("li", { className: "block py-2 px-4 text-md  hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200   font-arimaRegular", onClick: () => {
                            setValue(item);
                            setIsOpen(!isOpen);
                        }, children: item }, index))) }) })), hasError && (_jsx("span", { className: "text-primaryCharcoal text-4xs", id: "error", children: `${title} is required` }))] }));
};
