import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
import s from '../../tc.module.css';
import { cn } from '../../utils';
export const Tab = ({ title, children, className, style }) => {
    return (_jsx("div", { className: cn(s.flex, className), style: style, children: children }, title));
};
export const Tabs = ({ options, onSelect, children, classNames = {}, styles = {} }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [selected, setSelected] = useState(options[0].title);
    const tabs = React.Children.toArray(children).filter((child) => React.isValidElement(child) && child.type === Tab);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: cn(s.flex, s['flex-col'], s['w-full'], classNames.container), style: styles.container, children: [_jsx("div", { className: cn(s.flex, s['border-b'], classNames.tabsHeader), style: styles.tabsHeader, children: options?.map((tab, index) => (_jsx("button", { type: "button", className: cn(s['py-2'], s['px-4'], s['mr-1'], s['border-none'], s['rounded-t-md'], s['shadow-inner'], s['cursor-pointer'], activeTab === index && s['bg-blue-500'], activeTab === index && s['border-none'], activeTab === index && s['text-white'], classNames.tabButton, activeTab === index && classNames.activeTabButton), style: {
                            ...styles.tabButton,
                            ...(activeTab === index ? styles.activeTabButton : {}),
                        }, onClick: () => {
                            setSelected(tab?.title);
                            onSelect && onSelect(tab, index);
                            !tab.inActive && setActiveTab(index);
                        }, disabled: tab.inActive, children: tab.title }, index))) }), _jsx("div", { className: cn(s['p-2'], s.border, s['border-solid'], s['border-slate-600'], s['rounded-b-md'], classNames.contentContainer), style: styles.contentContainer, children: options[activeTab]?.content
                        ? options[activeTab]?.content
                        : tabs[options?.findIndex((item) => item.title === selected)] })] }) }));
};
