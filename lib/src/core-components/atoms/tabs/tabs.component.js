import React, { useState } from 'react';
import { Icon } from '../..';
import '../../../tc.css';
export const Tab = ({ label, children }) => {
    return (React.createElement("div", { className: "flex", title: label }, children));
};
export const Tabs = ({ tabsClass = 'bg-blue-700', options, onSelect, children, }) => {
    const [selected, setSelected] = useState(options[0].title);
    const tabs = React.Children.toArray(children).filter((child) => React.isValidElement(child) && child.type === Tab);
    return (React.createElement("div", { className: "flex flex-col" },
        React.createElement("ul", { className: "flex -mb-px text-sm font-medium text-center text-black cursor-pointer gap-1" }, options?.map((item, index) => (React.createElement("li", { key: index, className: `${tabsClass} rounded-md` },
            React.createElement("div", { className: `inline-flex items-center justify-center p-2 border-b-2 gap-1 ${item.title == selected
                    ? 'text-white font-bold   border-primary active'
                    : ' text-gray-200   border-transparent'}`, onClick: () => {
                    setSelected(item.title);
                    onSelect(item.title);
                } },
                React.createElement(Icon, { nameIcon: item?.icon, propsIcon: {
                        color: item?.title == selected ? '#ffffff' : '#000000',
                        size: 24,
                    } }),
                React.createElement("span", { className: "text-md" }, item.title)))))),
        React.createElement("div", { className: "flex" }, tabs[options?.findIndex((item) => item.title === selected)])));
};
