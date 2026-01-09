'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { ButtonElement } from './elements';
import { InternalProvider, useDeviceDetect } from '../../utils';
import { DEFAULT_BUTTON_COLOR, DEFAULT_BUTTON_SIZE, DEFAULT_BUTTON_VARIANT, } from './types';
export const CoreButton = React.forwardRef(({ variant = DEFAULT_BUTTON_VARIANT, color = DEFAULT_BUTTON_COLOR, ariaLabel, size = DEFAULT_BUTTON_SIZE, children, hasChildren = true, iconSide = 'left', hasIcon = false, options = { useFigmaStyles: false }, ...rest }, fRef) => {
    const { isMobile } = useDeviceDetect();
    return (_jsx(InternalProvider, { children: _jsx(ButtonElement, { ref: fRef, "aria-label": ariaLabel, size: size, variant: variant, color: color, hasChildren: hasChildren, iconSide: iconSide, hasIcon: hasIcon, useFigmaStyles: options.useFigmaStyles ?? false, isMobile: isMobile, ...rest, children: children }) }));
});
