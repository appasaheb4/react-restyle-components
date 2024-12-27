import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable  */
import { useState, useEffect, useRef } from 'react';
import { Icon } from '../../atoms/icons/icons.component';
// import PerfectScrollbar from 'react-perfect-scrollbar';
import '../../../tc.module.css';
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
    return (_jsx(_Fragment, { children: _jsxs("div", { ref: wrapperRef, className: "w-full relative", children: [_jsxs("div", { className: `flex items-center leading-4 p-2 bg-white focus:outline-none focus:ring  w-full shadow-sm sm:text-base border-2  ${props.hasError ? 'border-red ' : 'border-gray-300'} rounded-md`, children: [_jsx("input", { placeholder: "Search...", value: !isListOpen ? value : value, className: "w-full focus:outline-none", 
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
                            } }), isListOpen ? (_jsx(Icon, { nameIcon: "FaChevronUp", propsIcon: {
                                color: '#000000',
                                size: 22,
                            } })) : (_jsx(Icon, { nameIcon: "FaChevronDown", propsIcon: {
                                color: '#000000',
                                size: 22,
                            } }))] }), options && isListOpen
                    ? options?.length > 0 && (_jsx("div", { className: "flex mt-1 absolute z-50  rounded-md bg-gray-200 w-100 w-full", children: _jsx("ul", { className: "flex p-2 rounded-sm w-full", children: _jsx("div", { className: "flex flex-col w-full overflow-scroll", style: { height: 'auto', maxHeight: '350px' }, children: options?.map((item, index) => (_jsxs(_Fragment, { children: [_jsx("li", { className: "flex text-gray-400", children: item.title }, index), _jsx("ul", { className: "flex flex-col ml-4 w-full", children: item?.children?.map((children, childrenIndex) => (_jsx("li", { className: "flex hover:bg-gray-200 focus:outline-none cursor-pointer w-full", onClick: async () => {
                                                    props.onChange &&
                                                        props.onChange(item, children);
                                                    setIsListOpen(false);
                                                    setValue(children.title);
                                                    setOptions([]);
                                                }, children: children.title }, childrenIndex))) })] }))) }) }) }))
                    : null] }) }));
};
