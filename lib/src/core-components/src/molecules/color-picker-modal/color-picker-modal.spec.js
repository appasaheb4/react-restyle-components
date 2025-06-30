import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ColorPickerModal } from './color-picker-modal.component';
test('Render Autocomplete', () => {
    render(_jsx(ColorPickerModal, { color: "#000000", onChange: () => { } }));
});
