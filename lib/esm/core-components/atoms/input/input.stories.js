import { Input } from "./input.component";
const meta = {
  title: "Design System/Atoms/Input",
  component: Input,
  tags: ["autodocs"],
};
export default meta;
export const Primary = {
  args: {
    className: "mt-4",
    title: "Enter your Pan Number",
    hasError: true,
    defaultValue: "",
    onChange: (item) => {
      console.log({ item });
    },
    onBlur: (item) => {
      console.log({ item });
    },
  },
};
//# sourceMappingURL=input.stories.js.map
