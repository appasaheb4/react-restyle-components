import { useRef, useCallback } from 'react';
export function useDebouncedCallback(func, deps, wait) {
    const timeout = useRef();
    return useCallback((...args) => {
        const later = () => {
            clearTimeout(timeout.current);
            func(...args);
        };
        clearTimeout(timeout.current);
        timeout.current = setTimeout(later, wait);
    }, [func, wait, ...deps]);
}
