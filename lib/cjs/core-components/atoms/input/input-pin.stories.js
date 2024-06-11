"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const input_pin_component_1 = require("./input-pin.component");
const meta = {
    title: 'Design System/Atoms/InputPin',
    component: input_pin_component_1.InputPin,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: `import { InputPin } from 'react-restyle-components'`,
    },
};
exports.default = meta;
exports.Primary = {
    args: {
        title: 'Enter your Aadhaar Number',
        hasError: true,
        defaultPin: [],
        onPinChanged: (item) => {
            console.log({ item });
        },
    },
};
//# sourceMappingURL=input-pin.stories.js.map