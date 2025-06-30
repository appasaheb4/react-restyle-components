import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { CheckBox } from './checkBox.component';
describe('CheckBox Component', () => {
    test('renders CheckBox with default props', () => {
        render(_jsx(CheckBox, { title: "Banks", data: [{ title: 'SBI Bank', checked: false }], onChange: () => { } }));
        expect(screen.getByText('Banks')).toBeInTheDocument();
        expect(screen.getByText('SBI Bank')).toBeInTheDocument();
    });
    test('renders CheckBox with custom props', () => {
        render(_jsx(CheckBox, { title: "Custom Title", data: [{ title: 'Custom Bank', checked: true }], onChange: () => { } }));
        expect(screen.getByText('Custom Title')).toBeInTheDocument();
        expect(screen.getByText('Custom Bank')).toBeInTheDocument();
    });
    test('calls onChange with correct arguments when checkbox is clicked', () => {
        const handleChange = vi.fn();
        render(_jsx(CheckBox, { title: "Banks", data: [{ title: 'SBI Bank', checked: false }], onChange: handleChange }));
        fireEvent.click(screen.getByText('SBI Bank'));
        expect(handleChange).toHaveBeenCalledWith([
            { title: 'SBI Bank', checked: true },
        ]);
    });
    test('toggles checkbox state on click', () => {
        const { container } = render(_jsx(CheckBox, { title: "Banks", data: [{ title: 'SBI Bank', checked: false }], onChange: () => { } }));
        const checkbox = container.querySelector('svg');
        expect(checkbox).toBeInTheDocument();
        fireEvent.click(screen.getByText('SBI Bank'));
        expect(container.querySelector('svg')).toHaveAttribute('fill', '#E7503D');
    });
});
