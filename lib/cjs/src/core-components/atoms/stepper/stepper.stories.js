"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const stepper_component_1 = require("./stepper.component");
const meta = {
    title: 'Design System/Atoms/Stepper',
    component: stepper_component_1.Stepper,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: `import { Stepper } from 'react-restyle-components'`,
    },
};
exports.default = meta;
exports.Primary = {
    args: {
        steps: ['1', '2', '3', '4'],
        currentStep: 2,
        onStepClick: (currentStep, step) => { },
        className: 'mt-4',
    },
};
