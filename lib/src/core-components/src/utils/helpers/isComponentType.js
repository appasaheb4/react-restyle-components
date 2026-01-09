import React from 'react';
/**
 * Checks if a ReactNode is an Element of some component.
 * Supports components that are styled using styled-components.
 * Returns false if element is not a ReactElement.
 *
 * @param element a react node to check
 * @param componentType the component type to check
 * @returns true if element is an element with type == componentType
 */
export const isComponentType = (element, componentType) => {
    if (!React.isValidElement(element))
        return false;
    return (element.type === componentType ||
        element.type.target === componentType);
};
