import React from 'react';
import { List } from './list.component';
const meta = {
    title: 'Design System/Atoms/List',
    component: List,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: `import { List } from 'react-restyle-components'`,
    },
};
export default meta;
export const Primary = {
    args: {
        direction: 'col',
        children: (React.createElement(React.Fragment, null,
            React.createElement("span", null, "Item 1"),
            React.createElement("span", null, "Item 2"),
            React.createElement("span", null, "Item 3"))),
    },
};
