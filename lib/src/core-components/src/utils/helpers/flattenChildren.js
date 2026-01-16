import React from 'react';
import { isComponentType } from './isComponentType';
// Source: https://github.com/grrowl/react-keyed-flatten-children/blob/master/index.ts
export const flattenChildren = (children) => React.Children.toArray(children).reduce((acc, child) => {
    if (isComponentType(child, React.Fragment)) {
        return acc.concat(...flattenChildren(child.props.children));
    }
    else {
        return acc.concat(child);
    }
}, []);
