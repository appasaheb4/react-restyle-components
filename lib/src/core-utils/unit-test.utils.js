import React from 'react';
import { render as renderComponent } from '@testing-library/react';
const Providers = ({ children }) => {
    return React.createElement("div", null, children);
};
const render = (Component) => {
    return renderComponent(Component, { wrapper: Providers });
};
export { render, Providers };
