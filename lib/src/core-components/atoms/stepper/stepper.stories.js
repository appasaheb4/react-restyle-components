import { Stepper } from './stepper.component';
const meta = {
    title: 'Design System/Atoms/Stepper',
    component: Stepper,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: `import { Stepper } from 'react-restyle-components'`,
    },
};
export default meta;
export const Basic = {
    args: {
        steps: ['1', '2', '3', '4'],
        currentStep: 2,
        onStepClick: (currentStep, step) => { },
        className: 'mt-4',
    },
};
