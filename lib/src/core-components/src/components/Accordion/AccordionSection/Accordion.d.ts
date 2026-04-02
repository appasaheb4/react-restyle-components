import React from 'react';
import { AccordionVariant } from './types';
export type AccordionProps = {
    /** @deprecated use `aria-label` instead */
    ariaLabel?: string;
    variant?: AccordionVariant | 'inline' | 'full-page';
    /** @deprecated use AccordionSection.Header.Leading and AccordionSection.Header.Trailing instead */
    numbered?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const Accordion: React.FunctionComponent<AccordionProps>;
