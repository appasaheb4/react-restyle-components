"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const autocomplete_1 = require("./autocomplete");
const meta = {
    title: 'Design System/Molecules/Autocomplete',
    component: autocomplete_1.Autocomplete,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: `import { Autocomplete } from 'react-restyle-components'`,
    },
};
exports.default = meta;
exports.Primary = {
    args: {
        value: '',
        onValueChange: () => { },
        options: ['One', 'Two', 'Three', 'Four'],
    },
};
