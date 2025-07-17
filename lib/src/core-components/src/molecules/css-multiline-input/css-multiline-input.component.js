import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useRef } from 'react';
import * as Form from '../../atoms/form/form.component';
import { properties as propertiesObj } from './css-properties';
import s from '../../tc.module.css';
import { cn } from '../../utils';
const mapToArray = (arr) => {
    const res = [];
    arr.forEach(function (obj, index) {
        const key = Object.keys(obj)[0];
        const value = key;
        res.push([value, obj[key]]);
    });
    return res;
};
const data = mapToArray(propertiesObj);
export const CSSMultiline = ({ label = 'Main Box CSS', defaultValue = '', className = '', style = {}, placeholder = "Like fontSize: 12,backgroundColor:'#000000',", onChange, }) => {
    const value = useRef('');
    const [properties, setProperties] = useState([]);
    const [isListOpen, setIsListOpen] = useState(false);
    useEffect(() => {
        value.current = defaultValue;
        setProperties(data);
    }, [defaultValue]);
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setIsListOpen(false);
                    onChange(value.current);
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]);
    };
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    const list = [];
    const filter = (css) => {
        let matchString = css?.split(',');
        matchString = matchString[matchString?.length - 1];
        matchString = matchString?.split(':')[0];
        matchString = matchString?.split("'")[0];
        if (css?.length == 0)
            return setProperties(data);
        else {
            data?.map((item) => {
                const innerItem = [];
                const isItems = item[0]?.startsWith(matchString);
                if (isItems)
                    innerItem.push(item[0]);
                if (innerItem?.length > 0)
                    list.push([item[0], item[1]]);
            });
            setProperties(list);
        }
    };
    const onKeyUp = (e) => {
        setIsListOpen(true);
    };
    return (_jsxs("div", { className: cn(s['flex'], s['flex-col'], s['w-full']), ref: wrapperRef, children: [_jsx(Form.MultilineInput, { label: label, style: { color: '#ffffff', backgroundColor: '#000000', ...style }, placeholder: placeholder, value: value.current, className: cn(className), onKeyUp: onKeyUp, onChange: (css) => {
                    value.current = css;
                    filter(css);
                } }), isListOpen && (_jsx("div", { style: { marginTop: -10 }, children: _jsx("ul", { className: cn(s['flex'], s['flex-col'], s['max-h-40'], s['bg-black'], s['m-2'], s['text-white'], s['overflow-y-scroll']), children: properties?.map((item, index) => (_jsxs("li", { className: cn(s['flex'], s['flex-col'], s['gap-4'], s['p-2']), children: [_jsx("span", { className: cn(s['underline']), children: item[0] }), item[1]?.map((prop) => (_jsxs("li", { className: cn(s['flex'], s['-mt-2'], s['px-2'], s['h-8'], s['bg-slate-800'], s['rounded-md'], s['items-center'], s['cursor-pointer']), onClick: () => {
                                    let existsString = value.current?.split(',');
                                    if (value.current.includes(',')) {
                                        existsString = existsString.map((item) => {
                                            if (item?.includes(':'))
                                                return item;
                                        });
                                        if (prop != 'number')
                                            existsString.push(`${item[0]}:'${prop}',`);
                                        else
                                            existsString.push(`${item[0]}:1,`);
                                        value.current = existsString
                                            .join(',')
                                            .replaceAll(',,', ',');
                                    }
                                    else {
                                        if (prop != 'number')
                                            value.current = `${item[0]}:'${prop}',`;
                                        else {
                                            value.current = `${item[0]}:1,`;
                                        }
                                    }
                                    filter(existsString.join(''));
                                }, children: [' ', prop, ' '] })))] }, index))) }) }))] }));
};
