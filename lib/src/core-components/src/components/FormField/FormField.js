import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Input } from '../../core-components/atoms/Input/Input';
import { Textarea, } from '../../core-components/atoms/Textarea/Textarea';
import { Label } from '../../core-components/atoms/Label/Label';
export const FormField = React.forwardRef(({ label, error, id, labelProps, required, type, ...props }, ref) => {
    const fieldId = id || `field-${Math.random().toString(36).substr(2, 9)}`;
    const isTextarea = type === 'textarea';
    return (_jsxs("div", { className: "w-full", children: [label && (_jsx(Label, { id: fieldId, required: required, ...labelProps, children: label })), isTextarea ? (_jsx(Textarea, { ref: ref, id: fieldId, error: error, required: required, ...props })) : (_jsx(Input, { ref: ref, id: fieldId, type: type, error: error, required: required, ...props }))] }));
});
FormField.displayName = 'FormField';
