import { isComponentType } from './isComponentType';
import { flattenChildren } from './flattenChildren';
export const separateChildrenByType = (children, ...componentTypes) => flattenChildren(children).reduce((acc, element) => {
    const typeIndex = componentTypes.findIndex((componentType) => isComponentType(element, componentType));
    if (typeIndex !== -1) {
        acc[typeIndex].push(element);
    }
    else {
        acc[componentTypes.length].push(element);
    }
    return acc;
}, [...componentTypes.map(() => []), []]);
