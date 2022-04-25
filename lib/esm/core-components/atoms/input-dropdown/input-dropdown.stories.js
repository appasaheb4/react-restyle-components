import React from 'react';
import { InputDropdown } from './input-dropdown.component';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Atoms/InputDropdown',
    component: InputDropdown,
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary = () => (React.createElement(InputDropdown, { title: "Source of funds", items: ['Bank account', 'UPI', 'Credit Card'], hasError: true }));
//# sourceMappingURL=input-dropdown.stories.js.map