import React from 'react';
import { InputPin } from './input-pin.component';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Atoms/InputPin',
    component: InputPin,
};
const pin = new Array(12);
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary = () => (React.createElement(InputPin, { title: "Enter your Aadhaar Number", hasError: true, onPinChanged: (value) => {
        console.log({ value });
    }, pin: pin }));
//# sourceMappingURL=input-pin.stories.js.map