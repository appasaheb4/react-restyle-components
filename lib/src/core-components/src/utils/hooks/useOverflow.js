import { useState } from 'react';
import { useSafeLayoutEffect } from './useSafeLayoutEffect';
export const useOverflow = (ref) => {
    const [isOverflow, setIsOverflow] = useState(false);
    useSafeLayoutEffect(() => {
        const { current } = ref;
        const trigger = () => {
            if (!current)
                return;
            const hasOverflow = current.scrollHeight > current.clientHeight;
            setIsOverflow(hasOverflow);
        };
        let observer;
        if (current) {
            observer = new ResizeObserver(trigger);
            observer.observe(current);
            trigger();
        }
        return () => observer?.disconnect();
    });
    return isOverflow;
};
