/* eslint-disable  */
import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '../..';
export const AutocompleteGroupBy = (props) => {
    //const [userRouter, setUserRouter] = useState<any>()
    const [value, setValue] = useState(props.displayValue);
    const [options, setOptions] = useState();
    const [isListOpen, setIsListOpen] = useState(false);
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target) && isListOpen) {
                    setIsListOpen(false);
                    setValue('');
                }
            }
            // Bind the event listener
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref, isListOpen]);
    };
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    useEffect(() => {
        setValue(props.displayValue);
    }, [props.displayValue]);
    useEffect(() => {
        setOptions(props.data || []);
    }, [props]);
    const uniqByKeepFirst = (a, key) => {
        const seen = new Set();
        return a.filter((item) => {
            const k = key(item);
            return seen.has(k) ? false : seen.add(k);
        });
    };
    const filter = (search, data) => {
        if (search !== '') {
            let filterArray = [];
            data.filter((item) => {
                item.children.filter((children) => {
                    const childrenItem = children.title &&
                        children.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
                    if (childrenItem) {
                        const isSameArray = filterArray.filter((filterItem, index) => {
                            if (filterItem.name === item.name) {
                                const newChildren = filterArray[index].children.concat(children);
                                filterArray[index] = {
                                    ...filterArray[index],
                                    children: newChildren,
                                };
                            }
                        });
                        if (isSameArray.length < 1) {
                            filterArray.push({ ...item, children: [children] });
                        }
                        const uniqueChars = uniqByKeepFirst(filterArray, (it) => it.name);
                        filterArray = uniqueChars;
                    }
                });
            });
            setOptions(filterArray);
        }
        else {
            setOptions(data);
        }
    };
    const onChange = (e) => {
        const search = e.target.value;
        setValue(search);
        filter(search, props.data);
    };
    // const onKeyUp = e => {
    //   const charCode = e.which ? e.which : e.keyCode;
    //   if (charCode === 8) {
    //     const search = e.target.value;
    //     filter(search, data);
    //   }
    // };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { ref: wrapperRef, className: "w-full relative" },
            React.createElement("div", { className: `flex items-center leading-4 p-2 bg-white focus:outline-none focus:ring  w-full shadow-sm sm:text-base border-2  ${props.hasError ? 'border-red ' : 'border-gray-300'} rounded-md` },
                React.createElement("input", { placeholder: "Search...", value: !isListOpen ? value : value, className: "w-full focus:outline-none", 
                    // onKeyUp={onKeyUp}
                    onChange: onChange, onClick: () => setIsListOpen(true), onKeyDown: (e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            // Find the selected item and children
                            let selectedItem = null;
                            let selectedChildren = null;
                            for (const item of options) {
                                for (const children of item.children) {
                                    if (children.title.toLowerCase() === value.toLowerCase() ||
                                        item.title.toLowerCase() === value.toLowerCase()) {
                                        selectedItem = item;
                                        selectedChildren = children;
                                        break;
                                    }
                                }
                                if (selectedItem) {
                                    break;
                                }
                            }
                            // Call props.onChange with the selected item and children
                            if (props.onChange && selectedItem && selectedChildren) {
                                props.onChange(selectedItem, selectedChildren);
                            }
                            setIsListOpen(false);
                            setValue(value); // Set the value to what the user entered
                            setOptions([]);
                        }
                    } }),
                isListOpen ? (React.createElement(Icon, { nameIcon: "FaChevronUp", propsIcon: {
                        color: '#000000',
                        size: 22,
                    } })) : (React.createElement(Icon, { nameIcon: "FaChevronDown", propsIcon: {
                        color: '#000000',
                        size: 22,
                    } }))),
            options && isListOpen
                ? options?.length > 0 && (React.createElement("div", { className: "mt-1 absolute z-50 border-gray-500 rounded-md bg-gray-200 w-100" },
                    React.createElement("ul", { className: "p-2 rounded-sm" },
                        React.createElement("div", { className: "", style: { height: 'auto', maxHeight: '350px' } }, options?.map((item, index) => (React.createElement(React.Fragment, null,
                            React.createElement("li", { key: index, className: "text-gray-400" }, item.title),
                            React.createElement("ul", { className: "ml-4" }, item?.children?.map((children, childrenIndex) => (React.createElement("li", { key: childrenIndex, className: "hover:bg-gray-200 focus:outline-none cursor-pointer", onClick: async () => {
                                    props.onChange &&
                                        props.onChange(item, children);
                                    setIsListOpen(false);
                                    setValue(children.title);
                                    setOptions([]);
                                } }, children.title)))))))))))
                : null)));
};
