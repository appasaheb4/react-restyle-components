"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const multi_select_with_field_component_1 = require("./multi-select-with-field.component");
const meta = {
    title: 'Design System/Molecules/MultiSelectWithField',
    component: multi_select_with_field_component_1.MultiSelectWithField,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: `import { MultiSelectWithField } from 'react-restyle-components'`,
    },
};
exports.default = meta;
exports.Primary = {
    args: {
        displayField: 'code',
        options: [{ code: 'UPI' }, { code: 'CARD' }, { code: 'CASH' }],
        selectedItems: [{ code: 'CASH' }],
        onSelect: (item) => {
            console.log({ item });
        },
    },
};
