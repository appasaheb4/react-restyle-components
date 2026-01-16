import React from 'react';
import { isComponentType } from './isComponentType';
export const getChildByType = (children, componentType) => React.Children.toArray(children).find((element) => isComponentType(element, componentType));
