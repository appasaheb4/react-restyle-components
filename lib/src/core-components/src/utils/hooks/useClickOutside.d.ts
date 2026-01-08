import { RefObject } from 'react';
export declare function useClickOutside<T extends HTMLElement = any>(handler: () => void, targetRef?: RefObject<T>): RefObject<T>;
