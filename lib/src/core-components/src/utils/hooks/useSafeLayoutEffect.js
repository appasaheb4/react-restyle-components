import React from 'react';
/**
 * Version of useLayoutEffect that doesn't throw errors in SSR.
 */
export const useSafeLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
