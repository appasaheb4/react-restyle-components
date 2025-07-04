import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './button.component';
import { TooltipProvider } from '../tooltip/tooltip.component';
describe('Renders a button', async () => {
    it('Renders the supplied children', async () => {
        render(_jsx(Button, { children: "Hello" }));
        const b = await screen.queryByText('Hello');
        expect(b).toBeInTheDocument();
    });
    it('Renders as a button', async () => {
        render(_jsx(Button, { children: "Hello" }));
        const b = await screen.queryByText('Hello');
        expect(b?.tagName.toLowerCase()).toBe('button');
    });
    it('Includes the tooltip when specified', async () => {
        render(_jsx(TooltipProvider, { children: _jsx(Button, { "data-testid": "btn", tooltip: "bye", children: "Hello" }) }));
        const button = await screen.getByTestId('btn');
        fireEvent.mouseOver(button);
        setTimeout(async () => {
            //delay for tooltip to be available in DOM
            const t = await screen.queryByText('bye');
            expect(t).toBeInTheDocument();
        }, 1000);
    });
});
