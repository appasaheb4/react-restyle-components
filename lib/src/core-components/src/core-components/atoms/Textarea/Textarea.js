import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const Textarea = React.forwardRef(({ className, error, label, id, onChange, onBlur, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    // Handle onChange - support both event and value patterns
    const handleChange = (e) => {
        if (onChange) {
            const value = e.target.value;
            // Support both patterns:
            // 1. Standard React: onChange={(e) => { console.log({keywords: e.target.value}); }}
            // 2. Custom: onChange={(keywords) => { console.log({keywords}); }}
            // Detect which pattern to use by examining the function signature
            let shouldUseValue = false;
            try {
                const funcStr = onChange.toString();
                // Extract parameter name from function string
                // Try multiple regex patterns to catch different formats
                let paramName = '';
                // Pattern 1: Arrow function with parentheses: (param) =>
                let match = funcStr.match(/\(([^)]+)\)\s*=>/);
                if (match && match[1]) {
                    paramName = match[1].trim().split(':')[0].trim();
                }
                // Pattern 2: Arrow function without parentheses: param =>
                if (!paramName) {
                    match = funcStr.match(/^([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=>/);
                    if (match && match[1]) {
                        paramName = match[1].trim();
                    }
                }
                // Pattern 3: Function declaration: function(param)
                if (!paramName) {
                    match = funcStr.match(/function\s*\(([^)]*)\)/);
                    if (match && match[1]) {
                        paramName = match[1].trim().split(':')[0].trim();
                    }
                }
                // Pattern 4: Any parentheses: (param)
                if (!paramName) {
                    match = funcStr.match(/\(([^)]+)\)/);
                    if (match && match[1]) {
                        paramName = match[1].trim().split(':')[0].trim();
                    }
                }
                if (paramName) {
                    const lowerParam = paramName.toLowerCase();
                    // Event parameter names
                    const eventParams = ['e', 'event', 'evt', 'ev'];
                    // Check if it's an event parameter
                    const isEventParam = eventParams.includes(lowerParam) ||
                        lowerParam.includes('changeevent') ||
                        lowerParam.includes('focusevent') ||
                        lowerParam.includes('target');
                    // If NOT an event parameter, use value pattern
                    if (!isEventParam) {
                        shouldUseValue = true;
                    }
                }
            }
            catch (error) {
                // If detection fails, default to event pattern
                shouldUseValue = false;
            }
            // Call the handler with the appropriate parameter
            if (shouldUseValue) {
                onChange(value);
            }
            else {
                onChange(e);
            }
        }
    };
    // Handle onBlur - support both event and value patterns
    const handleBlur = (e) => {
        if (onBlur) {
            const value = e.target.value;
            // Similar logic for onBlur
            let shouldUseValue = false;
            try {
                const funcStr = onBlur.toString();
                // Extract parameter name from function string
                // Try multiple regex patterns to catch different formats
                let paramName = '';
                // Pattern 1: Arrow function with parentheses: (param) =>
                let match = funcStr.match(/\(([^)]+)\)\s*=>/);
                if (match && match[1]) {
                    paramName = match[1].trim().split(':')[0].trim();
                }
                // Pattern 2: Arrow function without parentheses: param =>
                if (!paramName) {
                    match = funcStr.match(/^([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=>/);
                    if (match && match[1]) {
                        paramName = match[1].trim();
                    }
                }
                // Pattern 3: Function declaration: function(param)
                if (!paramName) {
                    match = funcStr.match(/function\s*\(([^)]*)\)/);
                    if (match && match[1]) {
                        paramName = match[1].trim().split(':')[0].trim();
                    }
                }
                // Pattern 4: Any parentheses: (param)
                if (!paramName) {
                    match = funcStr.match(/\(([^)]+)\)/);
                    if (match && match[1]) {
                        paramName = match[1].trim().split(':')[0].trim();
                    }
                }
                if (paramName) {
                    const lowerParam = paramName.toLowerCase();
                    // Event parameter names
                    const eventParams = ['e', 'event', 'evt', 'ev'];
                    // Check if it's an event parameter
                    const isEventParam = eventParams.includes(lowerParam) ||
                        lowerParam.includes('changeevent') ||
                        lowerParam.includes('focusevent') ||
                        lowerParam.includes('target');
                    // If NOT an event parameter, use value pattern
                    if (!isEventParam) {
                        shouldUseValue = true;
                    }
                }
            }
            catch (error) {
                // If detection fails, default to event pattern
                shouldUseValue = false;
            }
            // Call the handler with the appropriate parameter
            // If detection is uncertain (no paramName found), try both patterns
            if (shouldUseValue) {
                try {
                    onBlur(value);
                }
                catch (err) {
                    // Fallback to event if value pattern fails
                    onBlur(e);
                }
            }
            else {
                try {
                    onBlur(e);
                }
                catch (err) {
                    // Fallback to value if event pattern fails
                    onBlur(value);
                }
            }
        }
    };
    return (_jsxs("div", { className: cn(s['w-full']), children: [label && (_jsx("label", { className: cn(s['block'], s['text-sm'], s['font-medium'], s['text-gray-700'], s['dark:text-gray-300'], s['mb-1']), children: label })), _jsx("textarea", { ref: ref, id: textareaId, className: cn(s['w-full'], s['px-4'], s['py-2'], s['border'], s['rounded-lg'], s['transition-colors'], s['resize-vertical'], s['bg-white'], s['dark:bg-gray-800'], s['border-gray-300'], s['dark:border-gray-600'], s['text-gray-900'], s['dark:text-gray-100'], s['placeholder-gray-500'], s['dark:placeholder-gray-400'], s['focus:outline-none'], s['focus:ring-2'], s['focus:ring-primary'], s['focus:ring-offset-1'], error && s['border-red-500'], error && s['focus:ring-red-500'], className), ...props, onChange: handleChange, onBlur: handleBlur }), error && (_jsx("p", { className: cn(s['mt-1'], s['text-sm'], s['text-red-600'], s['dark:text-red-400']), children: error }))] }));
});
Textarea.displayName = 'Textarea';
