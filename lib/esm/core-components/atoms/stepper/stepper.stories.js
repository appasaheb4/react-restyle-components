import { Stepper } from "./stepper.component";
const meta = {
  title: "Design System/Atoms/Stepper",
  component: Stepper,
  tags: ["autodocs"],
};
export default meta;
export const Primary = {
  args: {
    steps: ["1", "2", "3", "4"],
    currentStep: 2,
    onStepClick: (currentStep, step) => {},
    className: "mt-4",
  },
};
//# sourceMappingURL=stepper.stories.js.map
