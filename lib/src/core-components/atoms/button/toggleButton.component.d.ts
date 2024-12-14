import React from 'react';
/**
 * A checkbox styled to look like our Button, for a toggleable state UI component.
 */
export declare const ToggleButton: React.ForwardRefExoticComponent<Omit<import("./Button.types").ButtonProps, "variant"> & {
    labelClassName?: string | undefined;
    contentClassName?: string | undefined;
    active?: boolean | undefined;
    variant?: "brand" | "accent" | undefined;
} & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
