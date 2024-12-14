import React from 'react';
/**
 * Wraps a provided Link component in our button styles.
 * Assumes your chosen Router library uses a Link component that uses a `to` prop.
 */
export declare const LinkButton: React.ForwardRefExoticComponent<Omit<import("./Button.types").ButtonProps, "loading"> & {
    to: string;
    Component: React.ForwardRefExoticComponent<import("react-router/dist/development/fog-of-war-DU_DzpDb").s & React.RefAttributes<HTMLAnchorElement>>;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> & React.RefAttributes<HTMLAnchorElement>>;
