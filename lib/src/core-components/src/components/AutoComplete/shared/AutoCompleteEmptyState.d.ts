import React from 'react';
export interface AutoCompleteEmptyStateProps {
    /** Optional: when true, parent controls loading (e.g. API fetch). Overrides internal logic. */
    loader?: boolean;
    /** When true, user has typed/filtered - internally show Loading first, then No Results after delay */
    hasSearchText?: boolean;
    /** How long (ms) to show "Loading..." before switching to "No Results Found". Default 400. */
    loadingDelayMs?: number;
    /** Message when no results found (shown only when not loading) */
    emptyStateMessage?: string;
    /** Optional description below the message */
    emptyStateDescription?: string;
    /** Custom className for the container */
    className?: string;
    /** Custom styles for the container */
    style?: React.CSSProperties;
}
export declare const AutoCompleteEmptyState: React.FC<AutoCompleteEmptyStateProps>;
