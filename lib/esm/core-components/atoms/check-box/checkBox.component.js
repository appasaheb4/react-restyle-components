import React, { useState } from 'react';
import { UnCheckbox, CheckedBox } from '../../../library/assets/svg';
import { InputWrapper } from '../form/form.component';
export const CheckBox = ({ title = 'Banks', data = [{ title: 'SBI Bank', checked: false }], className, onChange, }) => {
    const [list, setList] = useState(data);
    const width = 20;
    return (React.createElement(InputWrapper, { label: title }, list === null || list === void 0 ? void 0 : list.map((item, index) => (React.createElement("div", { className: `${className} flex flex-row  items-center `, onClick: () => {
            const result = list === null || list === void 0 ? void 0 : list.map((e, i) => {
                if (i == index)
                    return Object.assign(Object.assign({}, e), { checked: !item.checked });
                else
                    return Object.assign({}, e);
            });
            setList(result);
            onChange(result === null || result === void 0 ? void 0 : result.filter((item) => item.checked));
        }, key: index },
        React.createElement("div", { className: "flex mt-1" }, item.checked ? (React.createElement(CheckedBox, { width: width, height: width, fill: "#E7503D", stroke: "E7503D" })) : (React.createElement(UnCheckbox, { width: width, height: width }))),
        React.createElement("span", null, item === null || item === void 0 ? void 0 : item.title))))));
};
//# sourceMappingURL=checkBox.component.js.map