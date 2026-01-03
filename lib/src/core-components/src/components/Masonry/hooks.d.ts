import { MasonryBreakpoints } from './types';
/**
 * Hook to get responsive value based on current viewport width
 */
export declare function useResponsiveValue<T extends number>(value: T | MasonryBreakpoints, defaultValue: T): T;
/**
 * Hook to distribute items into columns
 */
export declare function useColumnDistribution<T extends {
    id: string | number;
    column?: number;
}>(items: T[], columnCount: number, sequential?: boolean): T[][];
/**
 * Hook to track image loading states
 */
export declare function useImageLoading(): {
    setLoading: (id: string | number, isLoading: boolean) => void;
    isLoading: (id: string | number) => boolean;
    isLoaded: (id: string | number) => boolean;
};
//# sourceMappingURL=hooks.d.ts.map