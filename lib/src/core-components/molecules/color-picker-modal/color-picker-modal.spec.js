import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ColorPickerModal } from './color-picker-modal.component';
test('Render Autocomplete', () => {
    render(React.createElement(ColorPickerModal, { color: "#000000", onChange: () => { } }));
});
