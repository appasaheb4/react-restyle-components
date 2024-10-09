"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const multi_select_component_1 = require("./multi-select.component");
const meta = {
    title: 'Design System/Molecules/MultiSelect',
    component: multi_select_component_1.MultiSelect,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: `import { MultiSelect } from 'react-restyle-components'`,
    },
};
exports.default = meta;
exports.Primary = {
    args: {
        options: ['UPI', 'CARD', 'CASH'],
        selectedItems: ['CASH', 'UPI'],
        onSelect: (item) => {
            console.log({ item });
        },
    },
};
