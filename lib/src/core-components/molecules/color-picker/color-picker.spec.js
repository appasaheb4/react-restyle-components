import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ColorPicker } from './color-picker.component';
test('Render Autocomplete', () => {
    render(React.createElement(ColorPicker, { color: "#000000", onChange: () => { } }));
});
