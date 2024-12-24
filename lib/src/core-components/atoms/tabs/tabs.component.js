import React, { useState } from 'react';
import s from '../../../tc.module.css';
import { cn } from '../../../core-utils';
export const Tab = ({ title, children }) => {
    return (React.createElement("div", { className: cn(`${s['flex']}`), key: title }, children));
};
export const Tabs = ({ options, children }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [selected, setSelected] = useState(options[0].title);
    const tabs = React.Children.toArray(children).filter((child) => React.isValidElement(child) && child.type === Tab);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: cn(`${s['flex flex-col w-full']}`) },
            React.createElement("div", { className: cn(`${s['flex border-b']}`) }, options?.map((tab, index) => (React.createElement("button", { type: "button", key: index, className: cn(`${s['py-2 px-4 mr-1 border-none rounded-t-md shadow-inner cursor-pointer']}`, activeTab === index && s['bg-blue-500 border-none text-white']), onClick: () => {
                    setSelected(tab?.title);
                    !tab.inActive && setActiveTab(index);
                }, disabled: tab.inActive }, tab.title)))),
            React.createElement("div", { className: cn(`${s['p-2 border border-solid border-slate-600 rounded-b-md']}`) }, options[activeTab]?.content
                ? options[activeTab]?.content
                : tabs[options?.findIndex((item) => item.title === selected)]))));
};
