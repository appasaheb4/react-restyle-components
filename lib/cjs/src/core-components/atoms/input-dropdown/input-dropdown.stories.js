"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const input_dropdown_component_1 = require("./input-dropdown.component");
const meta = {
    title: 'Design System/Atoms/InputDropdown',
    component: input_dropdown_component_1.InputDropdown,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: `import { InputDropdown } from 'react-restyle-components'`,
    },
};
exports.default = meta;
exports.Primary = {
    args: {
        title: 'Source of funds',
        items: ['Bank account', 'UPI', 'Credit Card'],
        hasError: true,
    },
};
