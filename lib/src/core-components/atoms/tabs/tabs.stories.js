import React from 'react';
import { Tabs, Tab } from './tabs.component';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Design System/Atoms/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    decorators: [
        (Story) => (React.createElement(React.Fragment, null,
            React.createElement(Story, null))),
    ],
};
export default meta;
export const Basic = {
    args: {
        options: [
            { title: 'Work History' },
            { title: 'Book Order' },
            { title: 'Make Frame', content: React.createElement("div", null, "Make Frame") },
        ],
    },
    render: function Render(args) {
        return (React.createElement(Tabs, { ...args },
            React.createElement(Tab, { title: "Work History" },
                React.createElement("span", null, "Work History")),
            React.createElement(Tab, { title: "Book Order" },
                React.createElement("span", null, "Book Order"))));
    },
};
