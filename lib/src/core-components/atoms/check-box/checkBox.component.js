import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import '../../../tc.module.css';
import { UnCheckbox, CheckedBox } from '../../../library/assets/svg';
// import UnCheckbox from '../../../library/assets/svg/UnCheckbox.svg?react';
// import CheckedBox from '../../../library/assets/svg/CheckedBox.svg?react';
import { InputWrapper } from '../form/form.component';
export const CheckBox = ({ title = 'Banks', data = [{ title: 'SBI Bank', checked: false }], className, onChange, }) => {
    const [list, setList] = useState(data);
    const width = 20;
    return (_jsx(InputWrapper, { label: title, children: list?.map((item, index) => (_jsxs("div", { className: `${className} flex flex-row  items-center `, onClick: () => {
                const result = list?.map((e, i) => {
                    if (i === index)
                        return { ...e, checked: !item.checked };
                    else
                        return { ...e };
                });
                setList(result);
                onChange(result?.filter((item) => item.checked));
            }, children: [_jsx("div", { className: "flex mt-1", children: item.checked ? (_jsx(CheckedBox, { width: width, height: width, fill: "#E7503D", stroke: "E7503D" })) : (_jsx(UnCheckbox, { width: width, height: width })) }), _jsx("span", { children: item?.title })] }, index))) }));
};
