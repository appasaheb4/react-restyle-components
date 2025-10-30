import { useEffect, useState, useRef } from 'react';
export function useDebouncedValue(value, options = { wait: 300 }) {
    const [debouncedValue, setValue] = useState(value);
    const mountedRef = useRef(false);
    const timeoutRef = useRef(null);
    const cancel = () => window.clearTimeout(timeoutRef.current);
    useEffect(() => {
        if (mountedRef.current) {
            cancel();
            timeoutRef.current = window.setTimeout(() => {
                setValue(value);
            }, options.wait);
        }
    }, [value]);
    useEffect(() => {
        mountedRef.current = true;
        return cancel;
    }, []);
    return [debouncedValue, cancel];
}
