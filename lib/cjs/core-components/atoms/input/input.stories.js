"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const input_component_1 = require("./input.component");
const meta = {
    title: 'Design System/Atoms/Input',
    component: input_component_1.Input,
    tags: ['autodocs'],
};
exports.default = meta;
exports.Primary = {
    args: {
        className: 'mt-4',
        title: 'Enter your Pan Number',
        hasError: true,
        defaultValue: '',
        onChange: (item) => {
            console.log({ item });
        },
        onBlur: (item) => {
            console.log({ item });
        },
    },
};
//# sourceMappingURL=input.stories.js.map