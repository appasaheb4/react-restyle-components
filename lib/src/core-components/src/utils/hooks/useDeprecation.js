/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
// Since we have no module bundler it's the only way to detect dev env
export const isReactDevelopment = () => '_self' in React.createElement('div');
export const useDeprecation = ({ name, message, version }) => {
    if (!isReactDevelopment())
        return;
    useEffect(() => {
        console.warn(`DEPRECATED: ${name} is deprecated and will be removed in version ${version}. ${message}`);
    }, []);
};
export const useComponentDeprecation = ({ name, version, alternative, }) => {
    useDeprecation({
        name,
        version,
        message: alternative
            ? `Please use ${alternative} component instead.`
            : `Please remove it carefully.`,
    });
};
export const usePropDeprecation = ({ name, value, version, alternative, }) => {
    if (value) {
        useDeprecation({
            name,
            version,
            message: alternative
                ? `Please use ${alternative} prop instead.`
                : `Please remove it carefully.`,
        });
    }
};
export const usePropValueDeprecation = ({ component, prop, currentValue, deprecatedValues, version, }) => {
    useEffect(() => {
        if (!isReactDevelopment())
            return;
        if (deprecatedValues.includes(currentValue)) {
            console.warn(`DEPRECATED: The ${currentValue} value for the ${prop} prop on the ${component} component is deprecated and will be removed in version ${version}.`);
        }
    }, [currentValue]);
};
