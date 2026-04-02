import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Icon } from '../../Icon/Icon';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
/** Delay (ms) to show "Loading..." before switching to "No Results Found" */
const LOADING_DELAY_MS = 400;
const injectKeyframes = () => {
    const styleId = 'autocomplete-empty-state-animations';
    if (typeof document !== 'undefined' && !document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
      @keyframes autocomplete-loading-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
      @keyframes autocomplete-loading-dots {
        0%, 20% { content: '.'; }
        40% { content: '..'; }
        60%, 100% { content: '...'; }
      }
      @keyframes autocomplete-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
        document.head.appendChild(style);
    }
};
export const AutoCompleteEmptyState = ({ loader = false, hasSearchText = false, loadingDelayMs = LOADING_DELAY_MS, emptyStateMessage = 'No Results Found', emptyStateDescription = 'Try adjusting your search', className, style, }) => {
    const [internalLoading, setInternalLoading] = useState(hasSearchText);
    useEffect(() => {
        injectKeyframes();
    }, []);
    // Internal: when user has typed and no results, show Loading for delay then No Results
    useEffect(() => {
        if (hasSearchText) {
            setInternalLoading(true);
            const t = setTimeout(() => setInternalLoading(false), loadingDelayMs);
            return () => clearTimeout(t);
        }
        else {
            setInternalLoading(false);
        }
    }, [hasSearchText, loadingDelayMs]);
    // loader (optional) from parent takes precedence; otherwise use internal logic
    const loading = loader || internalLoading;
    if (loading) {
        return (_jsxs("div", { className: cn(s['flex'], s['flex-col'], s['items-center'], s['justify-center'], s['px-4'], s['py-6'], s['text-center'], className), style: {
                margin: 0,
                padding: '16px 24px',
                minHeight: 80,
                ...style,
            }, children: [_jsx("div", { style: {
                        width: 24,
                        height: 24,
                        border: '2px solid #e5e7eb',
                        borderTopColor: '#3b82f6',
                        borderRadius: '50%',
                        animation: 'autocomplete-spin 0.8s linear infinite',
                    }, role: "status", "aria-label": "Loading" }), _jsx("p", { className: cn(s['mt-3'], s['text-sm'], s['font-medium'], s['text-gray-500']), style: {
                        animation: 'autocomplete-loading-pulse 1.2s ease-in-out infinite',
                    }, children: "Loading..." })] }));
    }
    return (_jsxs("div", { className: cn(s['flex'], s['flex-col'], s['items-center'], s['justify-center'], s['px-4'], s['py-6'], s['text-center'], className), style: {
            margin: 0,
            padding: '16px 24px',
            minHeight: 80,
            animation: 'fadeInUp 200ms ease-out',
            ...style,
        }, children: [_jsx(Icon, { nameIcon: "FaSearch", propsIcon: {
                    size: 32,
                    color: '#9ca3af',
                } }), _jsx("p", { className: cn(s['mt-3'], s['text-sm'], s['font-medium'], s['text-gray-500']), children: emptyStateMessage }), emptyStateDescription && (_jsx("p", { className: cn(s['mt-1'], s['text-xs'], s['text-gray-400']), children: emptyStateDescription }))] }));
};
