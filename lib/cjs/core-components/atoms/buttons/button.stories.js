"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const buttons_component_1 = require("./buttons.component");
const blocks_1 = require("@storybook/blocks");
const test_1 = require("@storybook/test");
const meta = {
  title: "Design System/Atoms/Button",
  component: buttons_component_1.Button,
  tags: ["autodocs"],
  args: {
    className: "w-40",
  },
  parameters: {
    componentSubtitle: "Button New",
    docs: {
      page: () =>
        react_1.default.createElement(
          react_1.default.Fragment,
          null,
          react_1.default.createElement(blocks_1.Title, null),
          react_1.default.createElement(blocks_1.Canvas, null),
          react_1.default.createElement(blocks_1.Source, {
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
exports.default = meta;
exports.Primary = {
  // parameters: {
  //   backgrounds: {
  //     default: 'dark',
  //   },
  // },
  args: {
    disable: false,
    type: "solid" || "outline",
    children: react_1.default.createElement("span", null, "Primary"),
    onClick: (0, test_1.fn)(),
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
