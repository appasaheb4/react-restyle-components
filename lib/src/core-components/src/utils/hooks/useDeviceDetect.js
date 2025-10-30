import { useMemo } from 'react';
export const useDeviceDetect = () => useMemo(() => {
    if (typeof window !== 'undefined') {
        return {
            isMobile: !!navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i),
            isFirefox: !!navigator.userAgent.toLowerCase().includes('firefox'),
        };
    }
    return { isMobile: false, isFirefox: false };
}, []);
