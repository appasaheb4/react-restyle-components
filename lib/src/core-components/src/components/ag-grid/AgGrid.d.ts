/**
 * AG Grid Component
 * A comprehensive, AG Grid-like data table with all enterprise features
 * Reference: https://www.ag-grid.com/react-data-grid/getting-started/
 */
import React from 'react';
import type { AgGridProps, AgGridRef } from './types';
export declare const AgGrid: <T extends Record<string, any>>(props: AgGridProps<T> & {
    ref?: React.ForwardedRef<AgGridRef<T>> | undefined;
}) => React.ReactElement;
export default AgGrid;
