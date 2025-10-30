'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import AccordionContext from './AccordionContext';
import { AccordionElement } from './elements';
import { usePropDeprecation } from '../../../utils';
export const Accordion = React.forwardRef(({ ariaLabel = '', variant = 'inline', numbered = false, children, ...props }, fRef) => {
    usePropDeprecation({
        name: 'numbered',
        version: '5.0.0',
        alternative: 'AccordionSection.Header.Leading and  AccordionSection.Header.Trailing',
        value: numbered,
    });
    return (_jsx(AccordionContext.Provider, { value: { variant, numbered }, children: _jsx(AccordionElement, { "data-aui": "accordion", "aria-label": ariaLabel, ref: fRef, "$variant": variant, ...props, children: children }) }));
});
