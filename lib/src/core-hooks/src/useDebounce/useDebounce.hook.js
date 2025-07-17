import { useEffect, useMemo, useRef } from 'react';
export const useDebounce = (callback, delay) => {
    const timeoutRef = useRef(null);
    const debouncedCallback = useMemo(() => {
        const debounce = (func, wait) => {
            return (value) => {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
                timeoutRef.current = setTimeout(() => {
                    if (typeof func === 'function') {
                        func(value);
                    }
                    else {
                        console.error('func is not a function');
                    }
                }, wait);
            };
        };
        return debounce(callback, delay);
    }, [callback, delay]);
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);
    return debouncedCallback;
};
