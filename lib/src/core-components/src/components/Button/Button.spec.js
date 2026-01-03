import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './button.component';
import { TooltipProvider } from '../Tooltip';
describe('Renders a button', () => {
    it('Renders the supplied children', () => {
        render(_jsx(Button, { children: "Hello" }));
        const b = screen.queryByText('Hello');
        expect(b).toBeInTheDocument();
    });
    it('Renders as a button', () => {
        render(_jsx(Button, { children: "Hello" }));
        const b = screen.queryByText('Hello');
        expect(b?.tagName.toLowerCase()).toBe('button');
    });
    it('Includes the tooltip when specified', () => {
        render(_jsx(TooltipProvider, { children: _jsx(Button, { "data-testid": "btn", tooltip: "bye", children: "Hello" }) }));
        const button = screen.getByTestId('btn');
        fireEvent.mouseOver(button);
        setTimeout(() => {
            //delay for tooltip to be available in DOM
            const t = screen.queryByText('bye');
            expect(t).toBeInTheDocument();
        }, 1000);
    });
});
