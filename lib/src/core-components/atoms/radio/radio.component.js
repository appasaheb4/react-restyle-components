import React, { useState } from 'react';
import { CheckedRadio, UncheckRadio } from '../../../library/assets/svg';
import { InputWrapper } from '../form/form.component';
import '../../../tc.css';
export const Radio = ({ title = 'Source', data = [], className, onChange, }) => {
    const [list, setList] = useState(data);
    const width = 20;
    return (React.createElement(React.Fragment, null,
        React.createElement(InputWrapper, { label: title }, list?.map((item, index) => (React.createElement("div", { className: `${className} flex items-center mb-1`, onClick: () => {
                const result = list?.map((e, i) => {
                    if (i == index)
                        return { ...e, checked: true };
                    else
                        return { ...e, checked: false };
                });
                setList(result);
                onChange(result?.find((item) => item.checked));
            }, key: index },
            React.createElement("div", { className: "flex flex-row gap-1 items-center" },
                item.checked ? (React.createElement(CheckedRadio, { width: width, height: width })) : (React.createElement(UncheckRadio, { width: width, height: width })),
                React.createElement("span", { className: "text-4xs" }, item?.title))))))));
};
