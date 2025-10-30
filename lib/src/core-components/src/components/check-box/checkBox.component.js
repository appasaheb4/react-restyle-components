import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import s from '../../tc.module.css';
import { cn } from '../../utils';
import { UnCheckbox, CheckedBox } from '../../library/assets/svg';
import { InputWrapper } from '../Form/form.component';
export const CheckBox = ({ title = 'Banks', data = [{ title: 'SBI Bank', checked: false }], className, fill = '#E7503D', stroke = '#E7503D', onChange, }) => {
    const [list, setList] = useState(data);
    const width = 20;
    return (_jsx(InputWrapper, { label: title, children: list?.map((item, index) => (_jsxs("div", { className: `${cn(s.flex, s['flex-row'], s['items-center'])} ${className}`, onClick: () => {
                const result = list?.map((e, i) => {
                    if (i === index)
                        return { ...e, checked: !item.checked };
                    else
                        return { ...e };
                });
                setList(result);
                onChange(result?.filter((item) => item.checked));
            }, children: [_jsx("div", { className: cn(s.flex, s['mt-1']), children: item.checked ? (_jsx(CheckedBox, { width: width, height: width, fill: fill, stroke: stroke })) : (_jsx(UnCheckbox, { width: width, height: width })) }), _jsx("span", { children: item?.title })] }, index))) }));
};
