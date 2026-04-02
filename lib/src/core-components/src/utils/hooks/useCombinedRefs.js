import { useCallback } from 'react';
export function useCombinedRefs(
// eslint-disable-next-line @typescript-eslint/no-unused-vars
...refs) {
    return useCallback((value) => {
        refs.forEach((ref) => {
            if (!ref)
                return;
            if (typeof ref === 'function') {
                ref(value);
            }
            else {
                ref.current = value;
            }
        });
    }, []);
}
