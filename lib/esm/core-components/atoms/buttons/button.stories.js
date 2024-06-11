import React from 'react';
import { Button } from './buttons.component';
// import {Title, Component, Source, Canvas, ArgTypes} from '@storybook/blocks';
import { fn } from '@storybook/test';
const meta = {
    title: 'Design System/Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        className: 'w-40',
    },
    parameters: {
        componentSubtitle: `import { Button } from 'react-restyle-components'`,
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
        type: 'solid' || 'outline',
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