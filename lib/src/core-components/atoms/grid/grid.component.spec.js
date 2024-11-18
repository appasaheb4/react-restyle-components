import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Grid } from './grid.component';
test('Render Grid', () => {
    render(React.createElement(Grid, { cols: 3 },
        React.createElement("span", null, "Hi")));
    expect(screen.getByText('Hi')).toBeInTheDocument();
});
