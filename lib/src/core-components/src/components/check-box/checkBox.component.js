import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import s from '../../tc.module.css';
import { cn } from '../../utils';
import { InputWrapper } from '../Form/form.component';
import { Icon } from '..';
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
            }, children: [_jsx("div", { className: cn(s.flex, s['gap-2']), children: item.checked ? (_jsx(Icon, { nameIcon: "ImCheckboxChecked" })) : (_jsx(Icon, { nameIcon: "ImCheckboxUnchecked" })) }), _jsx("span", { className: cn(s['text-sm'], s['font-medium'], s['ml-2']), children: item?.title })] }, index))) }));
};
