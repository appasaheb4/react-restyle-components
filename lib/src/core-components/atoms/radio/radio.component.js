import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { CheckedRadio, UncheckRadio } from '../../../library/assets/svg';
import { InputWrapper } from '../form/form.component';
import '../../../tc.module.css';
export const Radio = ({ title = 'Source', data = [], className, onChange, }) => {
    const [list, setList] = useState(data);
    const width = 20;
    return (_jsx(_Fragment, { children: _jsx(InputWrapper, { label: title, children: list?.map((item, index) => (_jsx("div", { className: `${className} flex items-center mb-1`, onClick: () => {
                    const result = list?.map((e, i) => {
                        if (i == index)
                            return { ...e, checked: true };
                        else
                            return { ...e, checked: false };
                    });
                    setList(result);
                    onChange(result?.find((item) => item.checked));
                }, children: _jsxs("div", { className: "flex flex-row gap-1 items-center", children: [item.checked ? (_jsx(CheckedRadio, { width: width, height: width })) : (_jsx(UncheckRadio, { width: width, height: width })), _jsx("span", { className: "text-4xs", children: item?.title })] }) }, index))) }) }));
};
