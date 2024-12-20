import { InputPin } from './input-pin.component';
const meta = {
    title: 'Design System/Atoms/InputPin',
    component: InputPin,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: `import { InputPin } from 'react-restyle-components'`,
    },
};
export default meta;
export const Basic = {
    args: {
        title: 'Enter your Aadhaar Number',
        hasError: true,
        defaultPin: [],
        onPinChanged: (item) => {
            console.log({ item });
        },
    },
};
