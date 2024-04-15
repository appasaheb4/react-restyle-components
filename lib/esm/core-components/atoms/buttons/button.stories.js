import React from "react";
import { Button } from "./buttons.component";
const meta = {
  title: "Design System/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    className: "bg-orange w-40",
  },
  // parameters: {
  //   componentSubtitle: 'Button New',
  //   docs: {
  //     page: () => (
  //       <>
  //         <Title />
  //         <Description />
  //       </>
  //     ),
  //   },
  // },
};
export default meta;
export const Primary = {
  // parameters: {
  //   backgrounds: {
  //     default: 'dark',
  //   },
  // },
  args: {
    disable: false,
    type: "solid" || "outline" || "submit",
    children: React.createElement("span", null, "Primary"),
  },
};
// export const Disable: Story = {
//   args: {
//     ...Primary.args,
//     children: <span>Disable</span>,
//     disable: true,
//   },
// };
//# sourceMappingURL=button.stories.js.map
