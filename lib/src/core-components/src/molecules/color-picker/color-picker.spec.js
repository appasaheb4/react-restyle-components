import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ColorPicker } from './color-picker.component';
test('Render Autocomplete', () => {
    render(_jsx(ColorPicker, { color: "#000000", onChange: () => { } }));
});
