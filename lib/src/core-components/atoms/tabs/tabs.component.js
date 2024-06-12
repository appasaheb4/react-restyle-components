import React, { useState } from 'react';
import { Icon } from '../..';
export const Tabs = ({ options, onSelect }) => {
    const [selected, setSelected] = useState(options[0].title);
    return (React.createElement("div", { className: "flex justify-center" },
        React.createElement("ul", { className: "flex flex-wrap items-center justify-center -mb-px text-sm font-medium text-center text-black cursor-pointer gap-2" }, options?.map((item, index) => (React.createElement("li", { key: index, className: "bg-red rounded-md" },
            React.createElement("div", { className: `inline-flex items-center justify-center p-3 border-b-2 gap-1 ${item.title == selected
                    ? 'text-white font-bold md:text-md  border-primary active'
                    : ' text-gray-200  md:text-md border-transparent'}`, onClick: () => {
                    setSelected(item.title);
                    onSelect(item.title);
                } },
                React.createElement(Icon, { nameIcon: item.icon, propsIcon: {
                        color: item.title == selected ? '#ffffff' : '#000000',
                        size: 24,
                    } }),
                React.createElement("span", { className: "text-3md" }, item.title))))))));
};
