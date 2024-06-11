"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary1 = void 0;
const checkBox_component_1 = require("./checkBox.component");
const meta = {
    title: 'Design System/Atoms/CheckBox',
    component: checkBox_component_1.CheckBox,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: `import { CheckBox } from 'react-restyle-components'`,
    },
};
exports.default = meta;
exports.Primary1 = {
    args: {
        title: 'Banks',
        data: [
            { title: 'SBI Bank', checked: false },
            { title: 'ICICI Bank', checked: false },
        ],
        disable: false,
        onChange: (item) => {
            console.log({ item });
        },
    },
};
//# sourceMappingURL=checkBox.stories.js.map