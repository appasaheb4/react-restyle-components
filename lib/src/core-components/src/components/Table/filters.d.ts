import React from 'react';
import { TableFilterProps } from './types';
/**
 * Text filter component
 */
export declare const TextFilter: React.FC<TableFilterProps>;
/**
 * Number filter component with comparator
 */
export declare const NumberFilter: React.FC<TableFilterProps>;
/**
 * Date filter component
 */
export declare const DateFilter: React.FC<TableFilterProps>;
/**
 * Select filter component
 */
export declare const SelectFilter: React.FC<TableFilterProps>;
/**
 * Get filter component based on type
 */
export declare const getFilterComponent: (type: string) => React.FC<TableFilterProps>;
//# sourceMappingURL=filters.d.ts.map