import React from 'react';
import { TooltipProvider } from '../../tooltip/tooltip.component';
import { ButtonGroup } from './buttonGroup.component';
import { Button } from '../button.component';
import { BrowserRouter } from 'react-router-dom';
const meta = {
    title: 'Design System/Atoms/Button/ButtonGroup',
    parameters: {
        componentSubtitle: 'A container for grouping buttons together. Used when you want no space between buttons. Can also be used to create a split button using a Button and a DropdownMenu.',
    },
    component: ButtonGroup,
    tags: ['autodocs'],
    decorators: [
        (Story) => (React.createElement(React.Fragment, null,
            React.createElement(BrowserRouter, null,
                React.createElement(TooltipProvider, null,
                    React.createElement(Story, null))))),
    ],
};
export default meta;
/**
 * At its simplest you can just wrap any `Button` elements in a `ButtonGroup`.
 *
 * All props for button scale, variant, etc stay on the Button.
 * You should use the same scale for all buttons in a group but could mix and match variants and levels.
 */
export const Basic = {
    args: {
        children: (React.createElement(React.Fragment, null,
            React.createElement(Button, { scale: "s" }, "Button 1"),
            React.createElement(Button, { scale: "s" }, "Button 2"),
            React.createElement(Button, { scale: "s" }, "Button 3"))),
    },
};
/**
 * If only a single `Button` is passed in, it will be visually the same as not wrapping in a `ButtonGroup`.
 */
export const BasicOneButton = {
    args: {
        children: (React.createElement(React.Fragment, null,
            React.createElement(Button, { scale: "s" }, "Button 1"))),
    },
};
/**
 * To creat a split button you would add a `DropdownMenu` as the last child. Its trigger should be a `Button`.
 */
// export const SplitButton: Story = {
//   args: {
//     children: (
//       <>
//         <Button level="primary" scale="xs" variant="neutral">
//           Button 1
//         </Button>
//         <DropdownMenu
//           align="end"
//           sideOffset={2}
//           trigger={
//             <Button
//               level="primary"
//               iconOnly={true}
//               scale="xs"
//               variant="neutral"
//             >
//               👇
//             </Button>
//           }
//         >
//           <DropdownMenuSection divider="none">
//             <DropdownMenuButton
//               onClick={() => {
//                 // noop
//               }}
//             >
//               Item 1
//             </DropdownMenuButton>
//             <DropdownMenuButton
//               onClick={() => {
//                 // noop
//               }}
//             >
//               Item 2
//             </DropdownMenuButton>
//             <DropdownMenuButton
//               onClick={() => {
//                 // noop
//               }}
//             >
//               Item 3
//             </DropdownMenuButton>
//           </DropdownMenuSection>
//         </DropdownMenu>
//       </>
//     ),
//   },
// };
/**
 * ButtonGroups can be passed `orientation="vertical"` to stack buttons vertically.
 */
export const Vertical = {
    args: {
        children: (React.createElement(React.Fragment, null,
            React.createElement(Button, { scale: "s" }, "Button 1"),
            React.createElement(Button, { scale: "s" }, "Button 2"),
            React.createElement(Button, { scale: "s" }, "Button 3"))),
        orientation: 'vertical',
    },
};
/**
 * Vertical ButtonGroups can also contain a `DropdownMenu`.
 */
// export const VerticalWithDropdown: Story = {
//   args: {
//     children: (
//       <>
//         <Button scale="s">Button 1</Button>
//         <DropdownMenu
//           side="right"
//           trigger={
//             <Button scale="s" variant="accent">
//               Open 👉
//             </Button>
//           }
//         >
//           <DropdownMenuSection divider="none">
//             <DropdownMenuButton
//               onClick={() => {
//                 // noop
//               }}
//             >
//               Item 1
//             </DropdownMenuButton>
//             <DropdownMenuButton
//               onClick={() => {
//                 // noop
//               }}
//             >
//               Item 2
//             </DropdownMenuButton>
//             <DropdownMenuButton
//               onClick={() => {
//                 // noop
//               }}
//             >
//               Item 3
//             </DropdownMenuButton>
//           </DropdownMenuSection>
//         </DropdownMenu>
//         <Button scale="s">Button 2</Button>
//       </>
//     ),
//     orientation: 'vertical',
//   },
// };
/**
 * ButtonGroups also work with LinkButtons and ToggleButtons.
 *
 * However ToggleButton styling is not currently ideal as the divider is hard to see.
 * Also note that ButtonGroup with ToggleButtons is not the same as a ToggleGroup. The former will allow multiple buttons to be active at once, whereas the latter will only allow one button to be active at a time.
 */
// export const PseudoButtons: Story = {
//   args: {
//     children: <></>,
//   },
//   render: () => (
//     <>
//       <ButtonGroup>
//         <LinkButton Component={Link} to="#" scale="s">
//           LinkButton 1
//         </LinkButton>
//         <LinkButton Component={Link} to="#" scale="s">
//           LinkButton 2
//         </LinkButton>
//         <LinkButton Component={Link} to="#" scale="s" variant="danger">
//           LinkButton 3
//         </LinkButton>
//       </ButtonGroup>
//       <br />
//       <ButtonGroup>
//         <ToggleButton scale="s">ToggleButton 1</ToggleButton>
//         <ToggleButton scale="s">ToggleButton 2</ToggleButton>
//         <ToggleButton scale="s">ToggleButton 3</ToggleButton>
//       </ButtonGroup>
//     </>
//   ),
// };
export const FillModes = {
    args: {
        children: React.createElement(React.Fragment, null),
    },
    render: () => (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Hug"),
        React.createElement("p", null, "By default the ToggleGroup will hug its contents vertically and horizontally. In most cases this is what you will want as the Design System mostly uses this approach."),
        React.createElement("div", { style: {
                width: '400px',
                height: '200px',
                display: 'grid',
                background: '#eee',
            } },
            React.createElement(ButtonGroup, null,
                React.createElement(Button, { scale: "s" }, "Button 1"),
                React.createElement(Button, { scale: "s" }, "Button 2"),
                React.createElement(Button, { scale: "s" }, "Button 3"))),
        React.createElement("h1", null, "Orientation: horizontal"),
        React.createElement("p", null, "But you can make it fill its parent and stretch out its children. Note that only the minimum amount of styles have been added. It is likely you will need to further customize your Buttons using className to suit your use case."),
        React.createElement("div", { style: {
                width: '400px',
                height: '200px',
                display: 'grid',
                background: '#eee',
            } },
            React.createElement(ButtonGroup, { horizontalSizing: "fill" },
                React.createElement(Button, { scale: "s" }, "Button 1"),
                React.createElement(Button, { scale: "s" }, "Button 2"),
                React.createElement(Button, { scale: "s" }, "Button 3"))),
        React.createElement("p", null, "Or vertically"),
        React.createElement("div", { style: {
                width: '400px',
                height: '200px',
                display: 'grid',
                background: '#eee',
            } },
            React.createElement(ButtonGroup, { verticalSizing: "fill" },
                React.createElement(Button, { scale: "s" }, "Button 1"),
                React.createElement(Button, { scale: "s" }, "Button 2"),
                React.createElement(Button, { scale: "s" }, "Button 3"))),
        React.createElement("p", null, "Or both"),
        React.createElement("div", { style: {
                width: '400px',
                height: '200px',
                display: 'grid',
                background: '#eee',
            } },
            React.createElement(ButtonGroup, { verticalSizing: "fill", horizontalSizing: "fill" },
                React.createElement(Button, { scale: "s" }, "Button 1"),
                React.createElement(Button, { scale: "s" }, "Button 2"),
                React.createElement(Button, { scale: "s" }, "Button 3"))),
        React.createElement("h1", null, "Orientation: vertical"),
        React.createElement("p", null, "These also work vertically. Here is horizontal fill"),
        React.createElement("div", { style: {
                width: '400px',
                height: '200px',
                display: 'grid',
                background: '#eee',
            } },
            React.createElement(ButtonGroup, { orientation: "vertical", horizontalSizing: "fill" },
                React.createElement(Button, { scale: "s" }, "Button 1"),
                React.createElement(Button, { scale: "s" }, "Button 2"),
                React.createElement(Button, { scale: "s" }, "Button 3"))),
        React.createElement("p", null, "vertical"),
        React.createElement("div", { style: {
                width: '400px',
                height: '200px',
                display: 'grid',
                background: '#eee',
            } },
            React.createElement(ButtonGroup, { orientation: "vertical", verticalSizing: "fill" },
                React.createElement(Button, { scale: "s" }, "Button 1"),
                React.createElement(Button, { scale: "s" }, "Button 2"),
                React.createElement(Button, { scale: "s" }, "Button 3"))),
        React.createElement("p", null, "and both"),
        React.createElement("div", { style: {
                width: '400px',
                height: '200px',
                display: 'grid',
                background: '#eee',
            } },
            React.createElement(ButtonGroup, { orientation: "vertical", verticalSizing: "fill", horizontalSizing: "fill" },
                React.createElement(Button, { scale: "s" }, "Button 1"),
                React.createElement(Button, { scale: "s" }, "Button 2"),
                React.createElement(Button, { scale: "s" }, "Button 3"))))),
};
