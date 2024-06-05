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
// import {Title, Component, Source, Canvas, ArgTypes} from '@storybook/blocks';
const test_1 = require("@storybook/test");
const meta = {
  title: "Design System/Atoms/Button",
  component: buttons_component_1.Button,
  tags: ["autodocs"],
  args: {
    className: "w-40",
  },
  parameters: {
    componentSubtitle: `import { Button } from 'react-restyle-components'`,
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
