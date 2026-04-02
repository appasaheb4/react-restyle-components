'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { DividerContainer, DividerLine, DividerLabel } from './elements';
export const Divider = forwardRef(function DividerComponent(props, ref) {
    const { orientation = 'horizontal', variant = 'solid', size = 'thin', color = 'default', inset = '0', centerInset = false, label, labelPosition = 'center', className, ...rest } = props;
    const hasLabel = Boolean(label);
    // Calculate flex values for label positioning
    const getFlexValues = () => {
        if (!hasLabel)
            return { start: 1, end: 0 };
        switch (labelPosition) {
            case 'start':
                return { start: 0, end: 1 };
            case 'end':
                return { start: 1, end: 0 };
            case 'center':
            default:
                return { start: 1, end: 1 };
        }
    };
    const flexValues = getFlexValues();
    return (_jsxs(DividerContainer, { ref: ref, "$orientation": orientation, "$variant": variant, "$size": size, "$color": color, "$inset": inset, "$centerInset": centerInset, "$hasLabel": hasLabel, role: "separator", "aria-orientation": orientation, "data-aui": "divider", className: className, ...rest, children: [flexValues.start > 0 && (_jsx(DividerLine, { "$orientation": orientation, "$variant": variant, "$size": size, "$color": color, "$flex": flexValues.start })), hasLabel && (_jsx(DividerLabel, { "$color": color, children: label })), flexValues.end > 0 && (_jsx(DividerLine, { "$orientation": orientation, "$variant": variant, "$size": size, "$color": color, "$flex": flexValues.end }))] }));
});
Divider.displayName = 'Divider';
