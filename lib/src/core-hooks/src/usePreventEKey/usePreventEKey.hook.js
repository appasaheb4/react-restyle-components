import { useCallback } from 'react';
export const usePreventEKey = () => {
    return useCallback((e) => {
        if (e.key === 'e' || e.key === 'E') {
            e.preventDefault();
        }
    }, []);
};
