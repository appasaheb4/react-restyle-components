import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { CheckedRadio, UncheckRadio } from '../../library/assets/svg';
import { InputWrapper } from '../Form/form.component';
import s from '../../tc.module.css';
import { cn } from '../../utils';
export const Radio = ({ title = 'Source', data = [], className, onChange, }) => {
    const [list, setList] = useState(data);
    const width = 20;
    return (_jsx(_Fragment, { children: _jsx(InputWrapper, { label: title, children: list?.map((item, index) => (_jsx("div", { className: cn(className, s['flex'], s['items-center'], s['mb-1']), onClick: () => {
                    const result = list?.map((e, i) => {
                        if (i == index)
                            return { ...e, checked: true };
                        else
                            return { ...e, checked: false };
                    });
                    setList(result);
                    onChange(result?.find((item) => item.checked));
                }, children: _jsxs("div", { className: cn(s['flex'], s['flex-row'], s['gap-1'], s['items-center']), children: [item.checked ? (_jsx(CheckedRadio, { width: width, height: width })) : (_jsx(UncheckRadio, { width: width, height: width })), _jsx("span", { className: cn(s['text-4xs']), children: item?.title })] }) }, index))) }) }));
};
