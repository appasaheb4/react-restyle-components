import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { List } from './list.component';
test('Render List', () => {
    render(React.createElement(List, null,
        React.createElement("span", null, "Hi")));
    expect(screen.getByText('Hi')).toBeInTheDocument();
});
