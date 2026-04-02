import { useEffect } from 'react';
export const keyDownHandler = (firstElement, lastElement, e) => {
    if (e.key !== 'Tab')
        return;
    if (!e.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
    }
    if (e.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
    }
};
const selectors = [
    'a[href]',
    'button:not([disabled])',
    'textarea',
    'input',
    'select',
];
export const useTrapFocus = (ref) => {
    useEffect(() => {
        const focusableElements = ref?.current?.querySelectorAll(selectors.join(', '));
        const firstElement = focusableElements?.[0];
        const lastElement = focusableElements?.[focusableElements.length - 1];
        const boundKeydownHandler = keyDownHandler.bind(null, firstElement, lastElement);
        ref?.current?.addEventListener('keydown', boundKeydownHandler);
        return () => ref?.current?.removeEventListener('keydown', boundKeydownHandler);
    }, [ref?.current]);
};
