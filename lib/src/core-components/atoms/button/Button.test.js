// Questionable whether these tests are even useful.
// Included as wanted to have test file for a component to show preferred architecture of UI library.
// Maybe we will remove this in a future update and only include tests that are genuinely useful.
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './button.component';
import { TooltipProvider } from '../tooltip/tooltip.component';
describe('Renders a button', async () => {
    it('Renders the supplied children', async () => {
        render(React.createElement(Button, null, "Hello"));
        const b = await screen.queryByText('Hello');
        expect(b).toBeInTheDocument();
    });
    it('Renders as a button', async () => {
        render(React.createElement(Button, null, "Hello"));
        const b = await screen.queryByText('Hello');
        expect(b?.tagName.toLowerCase()).toBe('button');
    });
    it('Includes the tooltip when specified', async () => {
        render(React.createElement(TooltipProvider, null,
            React.createElement(Button, { "data-testid": "btn", tooltip: "bye" }, "Hello")));
        const button = await screen.getByTestId('btn');
        fireEvent.mouseOver(button);
        setTimeout(async () => {
            //delay for tooltip to be available in DOM
            const t = await screen.queryByText('bye');
            expect(t).toBeInTheDocument();
        }, 1000);
    });
});
