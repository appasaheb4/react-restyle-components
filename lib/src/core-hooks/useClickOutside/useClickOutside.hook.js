import { useEffect } from 'react';
export const useClickOutside = (ref, handler) => {
    useEffect(() => {
        let startedInside = false;
        let startedWhenMounted = false;
        const listener = (event) => {
            // Do nothing if `mousedown` or `touchstart` started inside ref element
            if (startedInside || !startedWhenMounted)
                return;
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target))
                return;
            handler(event);
        };
        const validateEventStart = (event) => {
            startedWhenMounted = ref.current;
            startedInside = ref.current && ref.current.contains(event.target);
        };
        document.addEventListener('mousedown', validateEventStart);
        document.addEventListener('touchstart', validateEventStart);
        document.addEventListener('click', listener);
        return () => {
            document.removeEventListener('mousedown', validateEventStart);
            document.removeEventListener('touchstart', validateEventStart);
            document.removeEventListener('click', listener);
        };
    }, [ref, handler]);
};
export const useClickOutsideWithoutInput = (ref, callback) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the target is an input element
            if (event.target.tagName === 'INPUT') {
                return; // Skip calling the callback if the target is an input
            }
            // Check if the click is outside the ref element
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
};
