import React from "react";
import { Button } from "./buttons.component";
import { Title, Source, Canvas } from "@storybook/blocks";
import { fn } from "@storybook/test";
const meta = {
  title: "Design System/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    className: "w-40",
  },
  parameters: {
    componentSubtitle: "Button New",
    docs: {
      page: () =>
        React.createElement(
          React.Fragment,
          null,
          React.createElement(Title, null),
          React.createElement(Canvas, null),
          React.createElement(Source, {
            code: `
import {Button} from 'react-restyle-components';
    <Button
      disable={false}
      type='solid'
      onClick={()=>{}}>
       <span>Primary</span>
    </Button>
            `,
          }),
        ),
    },
  },
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
    type: "solid" || "outline",
    children: React.createElement("span", null, "Primary"),
    onClick: fn(),
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