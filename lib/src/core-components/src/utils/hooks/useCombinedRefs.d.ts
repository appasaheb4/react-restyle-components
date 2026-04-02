import React from 'react';
export declare function useCombinedRefs<T>(...refs: Array<React.MutableRefObject<T> | ((instance: T) => void) | null>): React.RefCallback<T>;
