import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
import s from '../../../tc.module.css';
import { cn } from '../../../core-utils';
export const Tab = ({ title, children }) => {
    return (_jsx("div", { className: cn(s.flex), children: children }, title));
};
export const Tabs = ({ options, children }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [selected, setSelected] = useState(options[0].title);
    const tabs = React.Children.toArray(children).filter((child) => React.isValidElement(child) && child.type === Tab);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: cn(s.flex, s['flex-col'], s['w-full']), children: [_jsx("div", { className: cn(s.flex, s['border-b']), children: options?.map((tab, index) => (_jsx("button", { type: "button", className: cn(s['py-2'], s['px-4'], s['mr-1'], s['border-none'], s['rounded-t-md'], s['shadow-inner'], s['cursor-pointer'], activeTab === index && s['bg-blue-500'], activeTab === index && s['border-none'], activeTab === index && s['text-white']), onClick: () => {
                            setSelected(tab?.title);
                            !tab.inActive && setActiveTab(index);
                        }, disabled: tab.inActive, children: tab.title }, index))) }), _jsx("div", { className: cn(s['p-2'], s.border, s['border-solid'], s['border-slate-600'], s['rounded-b-md']), children: options[activeTab]?.content
                        ? options[activeTab]?.content
                        : tabs[options?.findIndex((item) => item.title === selected)] })] }) }));
};
