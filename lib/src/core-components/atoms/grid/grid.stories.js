import React from 'react';
import { Grid } from './grid.component';
const meta = {
    title: 'Design System/Atoms/Grid',
    component: Grid,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: `import { Grid } from 'react-restyle-components'`,
    },
};
export default meta;
export const Primary = {
    args: {
        cols: 1,
        children: (React.createElement("div", { className: "flex flex-col" },
            React.createElement("span", null, "Item 1"),
            React.createElement("span", null, "Item 2"),
            React.createElement("span", null, "Item 3"))),
    },
};
