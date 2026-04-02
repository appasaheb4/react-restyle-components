import { useEffect, useRef } from 'react';
const CLICK_EVENTS = ['mousedown', 'touchstart'];
export function useClickOutside(handler, targetRef) {
    const defaultRef = useRef(null);
    const ref = targetRef ?? defaultRef;
    useEffect(() => {
        const listener = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handler();
            }
        };
        CLICK_EVENTS.forEach((fn) => document.addEventListener(fn, listener));
        return () => {
            CLICK_EVENTS.forEach((fn) => document.removeEventListener(fn, listener));
        };
    }, [ref, handler]);
    return ref;
}
