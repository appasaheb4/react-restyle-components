import { ColorPickerModal } from './color-picker-modal.component';
const meta = {
    title: 'Design System/Molecules/ColorPickerModal',
    component: ColorPickerModal,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: `import { ColorPickerModal } from 'react-restyle-components'`,
    },
};
export default meta;
export const Basic = {
    args: {
        color: '#000000',
        onChange: (color) => {
            console.log({ color });
        },
    },
};
