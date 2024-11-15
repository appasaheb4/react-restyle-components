import { ColorPicker } from './color-picker.component';
const meta = {
    title: 'Design System/Molecules/ColorPicker',
    component: ColorPicker,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: `import { ColorPicker } from 'react-restyle-components'`,
    },
};
export default meta;
export const Primary = {
    args: {
        color: '#000000',
        onChange: (color) => {
            console.log({ color });
        },
    },
};
