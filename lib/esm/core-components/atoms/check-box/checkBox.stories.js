import React from 'react';
import { CheckBox } from './checkBox.component';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Atoms/CheckBox',
    component: CheckBox,
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary = () => (React.createElement("div", { className: "flex flex-row" },
    React.createElement(CheckBox, { checked: true, onChange: () => { } }),
    React.createElement("span", null, "I agree and authorize MiMo to fetch my personal details from UIDAI. I confirm that I have not used the OTP-based Aadhar verification to open any other bank account. I have read and accepted all Terms & Conditions")));
//# sourceMappingURL=checkBox.stories.js.map